
"use client";

import React, { useEffect, useRef, useState } from "react";
import tonyKnowledge from "@/app/lib/tonyKnowledge";

type Message = {
  id: string;
  who: "user" | "tony";
  text: string;
  html?: string;
  suggestions?: string[];
};

function uid(prefix = "") {
  return prefix + Math.random().toString(36).slice(2, 9);
}

export default function TonyAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    { id: uid("m_"), who: "tony", text: tonyKnowledge.greeting }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [typing, setTyping] = useState(false);
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // local memory
  const memoryKey = "tony_memory_v4";
  const [memory, setMemory] = useState<any>(() => {
    try {
      return JSON.parse(localStorage.getItem(memoryKey) || "{}");
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem(memoryKey, JSON.stringify(memory || {}));
  }, [memory]);

  useEffect(() => {
    if (!open) return;
    containerRef.current?.scrollTo({ top: containerRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing, open]);

  const pushMessage = (m: Message) => {
    setMessages((p) => {
      const last = p[p.length - 1];
      if (last && last.who === m.who && last.text === m.text) return p;
      return [...p, m];
    });
  };

  // lead flow
  type LeadState = "idle" | "confirmName" | "askName" | "askEmail" | "askPhone" | "confirm" | "submitting" | "done";
  const [leadFlow, setLeadFlow] = useState<LeadState>("idle");
  const [leadData, setLeadData] = useState<{ name?: string; email?: string; phone?: string; message?: string }>({});

  function isValidEmail(e: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim());
  }
  function cleanPhone(p = "") {
    return p.replace(/\D/g, "");
  }

  // detect name phrases and store
  function detectAndStoreNameFromText(text: string) {
    const rx = /\b(?:hi|hello|hey)[, ]*\s*(?:my name is|i am|i'm|name is)\s+([A-Za-z][A-Za-z0-9 _-]{1,40})/i;
    const m = text.match(rx);
    if (m && m[1]) {
      const name = m[1].trim();
      setMemory((mem: any) => ({ ...(mem || {}), name }));
      setLeadData((d) => ({ ...d, name }));
      return name;
    }
    const rx2 = /\bmy name is\s+([A-Za-z][A-Za-z0-9 _-]{1,40})/i;
    const m2 = text.match(rx2);
    if (m2 && m2[1]) {
      const name = m2[1].trim();
      setMemory((mem: any) => ({ ...(mem || {}), name }));
      setLeadData((d) => ({ ...d, name }));
      return name;
    }
    return null;
  }

  // helper to push Tony message with optional html & suggestions
  function pushTony(content: string, replyHtml?: string, suggestions?: string[]) {
    pushMessage({ id: uid("t_"), who: "tony", text: content, html: replyHtml, suggestions });
  }

  // send to server
  async function sendToServer(text: string) {
    setLoading(true);
    setTyping(true);

    // push user message (plain)
    pushMessage({ id: uid("u_"), who: "user", text });

    const payload = {
      message: text,
      history: messages.slice(-6).map((m) => ({ role: m.who === "user" ? "user" : "assistant", content: m.text })),
      memory
    };

    try {
      const res = await fetch("/api/tony", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const json = await res.json().catch(() => null);

      // prefer server reply; else safe fallback
      const replyText = json?.reply || (() => {
        const low = text.toLowerCase();
        if (low.includes("website")) return "We build clean, fast websites. What features do you need?";
        if (low.includes("seo")) return "We can help with SEO. What would you like to improve?";
        if (low.includes("start a project")) return "Great — what's your name?";
        return "Thanks — can you tell me a bit more?";
      })();

      const replyHtml = json?.replyHtml;
      const suggestions: string[] = Array.isArray(json?.suggestedButtons) ? json.suggestedButtons : [];

      const delay = 350 + Math.random() * 450;
      setTimeout(() => {
        pushTony(String(replyText), replyHtml, suggestions);
        setTyping(false);
      }, delay);

      if (json?.memory) setMemory((m: any) => ({ ...(m || {}), ...json.memory }));
    } catch (err) {
      pushTony("⚠️ Sorry — connection issue. Please try again.");
      setTyping(false);
    } finally {
      setLoading(false);
      setInput("");
    }
  }

  // handle suggestion clicks (pills style)
// handle suggestion clicks (pills style)
const handleSuggestion = async (s: string) => {
  const low = s.toLowerCase().trim();

  // confirm-name stage (Yes/No)
  if (leadFlow === "confirmName") {
    pushMessage({ id: uid("u_"), who: "user", text: s });

    if (low === "yes") {
      const known = memory?.name || leadData.name;
      setLeadData((d) => ({ ...d, name: known }));
      pushTony(`Great — using the name ${known}. What's your email address?`);
      setLeadFlow("askEmail");
      return;
    }

    if (low === "no") {
      pushTony("Okay — what's your name?");
      setLeadFlow("askName");
      return;
    }
  }

  // confirm stage (Submit/Cancel)
  if (leadFlow === "confirm") {
    pushMessage({ id: uid("u_"), who: "user", text: s });

    if (low === "submit" || low === "yes" || low === "send") {
      await submitLead();
      return;
    }

    if (low === "cancel" || low === "no") {
      pushTony("Okay, cancelled. Let me know if you'd like to start again.");
      setLeadFlow("idle");
      setLeadData({});
      return;
    }
  }

  // Start a Project clicked
  if (low.includes("start")) {
    pushMessage({ id: uid("u_"), who: "user", text: s });
    const knownName = memory?.name || leadData.name;
    if (knownName) {
      pushTony(`I already have your name as ${knownName}. Should I use this name? (Yes/No)`, undefined, ["Yes", "No"]);
      setLeadFlow("confirmName");
      return;
    }
    pushTony("Sure — to start, what's your name?");
    setLeadFlow("askName");
    return;
  }

  // All other suggestions -> send to server
  await sendToServer(s);
};


  // process special exit words
  const isExitWord = (t: string) => {
    const low = t.toLowerCase().trim();
    return ["stop", "exit", "cancel", "close"].includes(low);
  };

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    const text = input.trim();
    if (!text) return;

    // if in leadFlow and user types an exit word -> cancel
    if (leadFlow !== "idle" && isExitWord(text)) {
      pushMessage({ id: uid("u_"), who: "user", text });
      pushTony("No problem, I stopped the process. Let me know if you want to start again.");
      setLeadFlow("idle");
      setLeadData({});
      setInput("");
      return;
    }

    // detect name phrase
    const detectedName = detectAndStoreNameFromText(text);
    if (detectedName && leadFlow === "idle") {
      pushMessage({ id: uid("u_"), who: "user", text });
      pushTony(`Nice to meet you, ${detectedName}! How can I help you today?`, undefined, ["Website Development", "SEO Help"]);
      setInput("");
      return;
    }

    // lead flow handler
    if (leadFlow !== "idle") {
      // confirmName step (Yes/No)
      if (leadFlow === "confirmName") {
        const low = text.toLowerCase();
        if (low === "yes" || low === "y") {
          const known = memory?.name || leadData.name;
          setLeadData((d) => ({ ...d, name: known }));
          pushMessage({ id: uid("u_"), who: "user", text });
          pushTony(`Great — using the name ${known}. What's your email address?`);
          setLeadFlow("askEmail");
          setInput("");
          return;
        } else if (low === "no" || low === "n") {
          pushMessage({ id: uid("u_"), who: "user", text });
          pushTony("Okay — what's your name?");
          setLeadFlow("askName");
          setInput("");
          return;
        } else {
          // treat as fallback: send to server
          await sendToServer(text);
          return;
        }
      }

      if (leadFlow === "askName") {
        const name = text;
        setLeadData((d) => ({ ...d, name }));
        setMemory((m: any) => ({ ...(m || {}), name }));
        pushMessage({ id: uid("u_"), who: "user", text });
        pushTony(`Thanks, ${name}. What's your email address?`);
        setLeadFlow("askEmail");
        setInput("");
        return;
      }

      if (leadFlow === "askEmail") {
        const emailCandidate = text;
        if (!isValidEmail(emailCandidate)) {
          // If user typed something that is clearly not an email but not an exit word -> treat as message or ask to 'skip' or re-enter
          if (isExitWord(emailCandidate)) {
            pushMessage({ id: uid("u_"), who: "user", text });
            pushTony("No problem, I stopped the process. Let me know if you want to start again.");
            setLeadFlow("idle");
            setLeadData({});
            setInput("");
            return;
          }
          // Ask to re-enter or suggest 'skip'
          pushMessage({ id: uid("u_"), who: "user", text });
          pushTony("That doesn't look like a valid email. Please type a valid email (e.g. you@mail.com) or type 'skip' to continue without email.");
          setInput("");
          return;
        }
        // valid email
        setLeadData((d) => ({ ...d, email: emailCandidate }));
        pushMessage({ id: uid("u_"), who: "user", text });
        pushTony("Got it. Phone number? (optional) — or type 'skip'.");
        setLeadFlow("askPhone");
        setInput("");
        return;
      }

      if (leadFlow === "askPhone") {
        let phone = text;
        if (phone.toLowerCase() === "skip") {
          phone = "";
        } else {
          phone = cleanPhone(phone);
        }
        setLeadData((d) => ({ ...d, phone }));
        pushMessage({ id: uid("u_"), who: "user", text });
        const name = leadData.name || memory.name || "—";
        const email = leadData.email || "—";
        pushTony(`Please confirm: Name: ${name}, Email: ${email}, Phone: ${phone || "—"}. Reply 'Submit' to send or 'Cancel'.`);
        setLeadFlow("confirm");
        setInput("");
        return;
      }

      if (leadFlow === "confirm") {
        const low = text.toLowerCase();
        if (low === "submit" || low === "yes" || low === "send") {
          await submitLead();
          return;
        } else if (low === "cancel" || low === "no") {
          pushMessage({ id: uid("u_"), who: "user", text });
          pushTony("Okay, cancelled. Let me know if you'd like to start again.");
          setLeadFlow("idle");
          setLeadData({});
          setInput("");
          return;
        } else {
          // treat as additional message to attach and ask to confirm
          setLeadData((d) => ({ ...d, message: text }));
          pushMessage({ id: uid("u_"), who: "user", text });
          pushTony("Noted. Reply 'Submit' to send or 'Cancel' to abort.");
          setInput("");
          return;
        }
      }
    }

    // start project typed directly
    const lower = text.toLowerCase();
    if (lower.includes("start a project") || lower === "start project" || lower.includes("i want to hire") || lower.includes("i want to work with")) {
      const knownName = memory?.name || leadData.name;
      if (knownName) {
        pushMessage({ id: uid("u_"), who: "user", text });
        pushTony(`I already have your name as ${knownName}. Should I use this name? (Yes/No)`, undefined, ["Yes", "No"]);
        setLeadFlow("confirmName");
        setInput("");
        return;
      }
      pushMessage({ id: uid("u_"), who: "user", text });
      pushTony("Sure — to start, what's your name?");
      setLeadFlow("askName");
      setInput("");
      return;
    }

    // quick "contact" or "whatsapp" typed by user: forward to server or reply with contact links (we should provide Tony reply)
    if (lower === "contact" || lower.includes("whatsapp") || lower.includes("email") || lower.includes("site")) {
      // call server to get Tony's formatted reply
      await sendToServer(text);
      return;
    }

    // default: send normal chat to server
    await sendToServer(text);
  };

  // submit lead to API
  async function submitLead() {
    const name = leadData.name || memory.name;
    const email = leadData.email;
    const phone = leadData.phone || "";
    const message = leadData.message || "Lead via Tony chat";

    if (!name || !email) {
      pushTony("I need name and a valid email to submit. What's your email?");
      setLeadFlow("askEmail");
      return;
    }

    setLeadFlow("submitting");
    pushTony("Submitting your details — one moment please...");

    try {
      const res = await fetch("/api/tonyLead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message })
      });
      const json = await res.json().catch(() => null);
      if (json?.success) {
        pushTony("Done — your message was sent. Our team will contact you soon. ✅");
        setLeadFlow("done");
        setLeadData({});
        setMemory((m: any) => ({ ...(m || {}), name }));
      } else {
        pushTony("Sorry, I couldn't submit. Please try again or contact us via the website.");
        setLeadFlow("idle");
      }
    } catch (err) {
      pushTony("Submission failed due to a connection issue. Please try again.");
      setLeadFlow("idle");
    } finally {
      setInput("");
    }
  }

  // render message - user messages are plain text (no links); Tony messages may contain replyHtml
  const renderMessage = (m: Message) => {
    if (m.who === "user") {
      return (
        <div key={m.id} style={{ marginBottom: 8 }}>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
            <div style={{ maxWidth: "78%", padding: "8px 12px", background: "#ff5c35", color: "#fff", borderRadius: 12, boxShadow: "0 6px 18px rgba(0,0,0,0.05)" }}>
              <div style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>{m.text}</div>
            </div>
          </div>
        </div>
      );
    }

    // Tony message: allow html links (replyHtml) and show suggestions as pills
    const content = m.html ? <div dangerouslySetInnerHTML={{ __html: m.html }} /> : <div style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>{m.text}</div>;

    return (
      <div key={m.id} style={{ marginBottom: 8 }}>
        <div style={{ display: "flex", justifyContent: "flex-start", gap: 8 }}>
          <div style={{ width: 36, height: 36, borderRadius: 18, background: "#ff5c35", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>T</div>
          <div style={{ maxWidth: "78%", padding: "8px 12px", background: "#fff", color: "#111", borderRadius: 12, boxShadow: "0 6px 18px rgba(0,0,0,0.05)" }}>
            {content}
          </div>
        </div>

        {m.suggestions && m.suggestions.length > 0 && (
          <div style={{ marginTop: 8, display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
            {m.suggestions.map((s) => (
              <button key={s} onClick={() => handleSuggestion(s)} style={{
                padding: "6px 10px",
                borderRadius: 999,
                border: "none",
                cursor: "pointer",
                whiteSpace: "nowrap",
                fontSize: 13,
                display: "inline-flex",
                gap: 8,
                alignItems: "center",
                background: "#fff",
                boxShadow: "0 1px 0 rgba(0,0,0,0.04)",
                borderLeft: "4px solid #4caf50"
              }}>
                <span style={{ width: 8, height: 8, borderRadius: 8, background: "#4caf50", display: "inline-block" }} />
                <span>{s}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {!open && (
        <div style={{ position: "fixed", right: 18, bottom: 18, zIndex: 9999 }}>
          <button onClick={() => setOpen(true)} title="Open Tony — Brave Moor support" style={{ width: 56, height: 56, borderRadius: 28, background: "#ff5c35", color: "#fff", border: "none", boxShadow: "0 8px 24px rgba(0,0,0,0.18)", cursor: "pointer", fontWeight: 700, fontSize: 18 }}>
            T
          </button>
        </div>
      )}

      {open && (
        <div style={{ position: "fixed", right: 18, bottom: 18, zIndex: 9999, width: 360, maxWidth: "95%", borderRadius: 12, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.25)", background: "#fff", display: "flex", flexDirection: "column", maxHeight: 640 }}>
          <div style={{ padding: 12, background: "linear-gradient(90deg,#ff5c35,#ff8a5a)", color: "#fff", display: "flex", gap: 10, alignItems: "center" }}>
            <div style={{ width: 44, height: 44, borderRadius: 22, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", color: "#ff5c35", fontWeight: 700 }}>T</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700 }}>Tony • Brave Moor Support</div>
              <div style={{ fontSize: 12, opacity: 0.95 }}>Available 24/7</div>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button onClick={() => { setOpen(false); }} style={{ background: "transparent", border: "none", color: "#fff", cursor: "pointer", fontSize: 14 }}>Close</button>
            </div>
          </div>

          <div ref={containerRef} style={{ padding: 12, background: "#fafafa", overflowY: "auto", flex: 1 }}>
            {messages.map((m) => renderMessage(m))}

            {typing && (
              <div style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 6 }}>
                <div style={{ width: 36, height: 36, borderRadius: 18, background: "#ff5c35", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>T</div>
                <div style={{ background: "#fff", padding: "8px 12px", borderRadius: 12 }}><small>Typing…</small></div>
              </div>
            )}
          </div>

          <form onSubmit={handleSend} style={{ display: "flex", gap: 8, padding: 8, borderTop: "1px solid rgba(0,0,0,0.04)", background: "#fff" }}>
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder={
              leadFlow === "askEmail" ? "Type your email..." :
              leadFlow === "askPhone" ? "Type phone or 'skip'..." : "Type your question..."
            } style={{ flex: 1, padding: "10px 12px", borderRadius: 8, border: "1px solid #ddd" }} />
            <button type="submit" disabled={loading} style={{ padding: "10px 14px", background: "#ff5c35", color: "#fff", border: "none", borderRadius: 8 }}>{loading ? "..." : "Send"}</button>
          </form>
        </div>
      )}
    </>
  );
}
