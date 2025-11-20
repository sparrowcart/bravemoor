// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import tonyKnowledge from "@/app/lib/tonyKnowledge";

// type Message = {
//   id: string;
//   who: "user" | "tony";
//   text: string;
//   html?: string;
//   suggestions?: string[];
// };

// function uid(prefix = "") {
//   return prefix + Math.random().toString(36).slice(2, 9);
// }

// export default function ChatPanel() {
//   const [open, setOpen] = useState(false);
//   const [messages, setMessages] = useState<Message[]>([
//     { id: uid("m_"), who: "tony", text: tonyKnowledge.greeting }
//   ]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [typing, setTyping] = useState(false);
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   // memory
//   const memoryKey = "tony_bravemoor_v1";
//   const [memory, setMemory] = useState<any>(() => {
//     try {
//       return JSON.parse(localStorage.getItem(memoryKey) || "{}");
//     } catch {
//       return {};
//     }
//   });

//   useEffect(() => {
//     localStorage.setItem(memoryKey, JSON.stringify(memory || {}));
//   }, [memory]);

//   useEffect(() => {
//     if (!open) return;
//     containerRef.current?.scrollTo({ top: containerRef.current.scrollHeight, behavior: "smooth" });
//   }, [messages, typing, open]);

//   const pushMessage = (m: Message) => {
//     setMessages((p) => {
//       const last = p[p.length - 1];
//       if (last && last.who === m.who && last.text === m.text) return p;
//       return [...p, m];
//     });
//   };

//   // lead flow states
//   type LeadState = "idle" | "confirmName" | "askName" | "askEmail" | "askPhone" | "confirm" | "submitting" | "done";
//   const [leadFlow, setLeadFlow] = useState<LeadState>("idle");
//   const [leadData, setLeadData] = useState<{ name?: string; email?: string; phone?: string; message?: string }>({});

//   // small helpers
//   function isValidEmail(e: string) {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim());
//   }
//   function cleanPhone(p = "") {
//     return p.replace(/\D/g, "");
//   }

//   function detectAndStoreNameFromText(text: string) {
//     const rx = /\b(?:hi|hello|hey)[, ]*\s*(?:my name is|i am|i'm|name is)\s+([A-Za-z][A-Za-z0-9 _-]{1,40})/i;
//     const m = text.match(rx);
//     if (m && m[1]) {
//       const name = m[1].trim();
//       setMemory((mem: any) => ({ ...(mem || {}), name }));
//       setLeadData((d) => ({ ...d, name }));
//       return name;
//     }
//     const rx2 = /\bmy name is\s+([A-Za-z][A-Za-z0-9 _-]{1,40})/i;
//     const m2 = text.match(rx2);
//     if (m2 && m2[1]) {
//       const name = m2[1].trim();
//       setMemory((mem: any) => ({ ...(mem || {}), name }));
//       setLeadData((d) => ({ ...d, name }));
//       return name;
//     }
//     return null;
//   }

//   const pushTony = (text: string, html?: string, suggestions?: string[]) => {
//     pushMessage({ id: uid("t_"), who: "tony", text, html, suggestions });
//   };

//   // send message to server
//   async function sendToServer(text: string) {
//     setLoading(true);
//     setTyping(true);
//     pushMessage({ id: uid("u_"), who: "user", text });

//     const payload = {
//       message: text,
//       history: messages.slice(-6).map((m) => ({ role: m.who === "user" ? "user" : "assistant", content: m.text })),
//       memory
//     };

//     try {
//       const res = await fetch("/api/tony", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload)
//       });
//       const json = await res.json().catch(() => null);

//       const replyText = json?.reply || (() => {
//         const low = text.toLowerCase();
//         if (low.includes("website")) return "We build clean, fast websites. What features do you need?";
//         if (low.includes("seo")) return "We can help with SEO. What would you like to improve?";
//         if (low.includes("start a project")) return "Great — what's your name?";
//         return "Thanks — can you tell me a bit more?";
//       })();

//       const replyHtml = json?.replyHtml;
//       const suggestions: string[] = Array.isArray(json?.suggestedButtons) ? json?.suggestedButtons : [];

//       const delay = 350 + Math.random() * 450;
//       setTimeout(() => {
//         pushTony(String(replyText), replyHtml, suggestions);
//         setTyping(false);
//       }, delay);

//       if (json?.memory) setMemory((m: any) => ({ ...(m || {}), ...json.memory }));
//     } catch (err) {
//       pushTony("⚠️ Sorry — connection issue. Please try again.");
//       setTyping(false);
//     } finally {
//       setLoading(false);
//       setInput("");
//     }
//   }

//   // submit lead
//   async function submitLead() {
//     const name = leadData.name || memory?.name;
//     const email = leadData.email;
//     const phone = leadData.phone || "";
//     const message = leadData.message || "Lead via Tony chat";

//     if (!name || !email) {
//       pushTony("I need a name and a valid email to submit. What's your email?");
//       setLeadFlow("askEmail");
//       return;
//     }

//     setLeadFlow("submitting");
//     pushTony("Submitting your details — one moment please...");

//     try {
//       const res = await fetch("/api/tonyLead", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, email, phone, message })
//       });
//       const json = await res.json().catch(() => null);
//       if (json?.success) {
//         pushTony("Done — your message was sent. Our team will contact you soon. ✅");
//         setLeadFlow("done");
//         setLeadData({});
//         setMemory((m: any) => ({ ...(m || {}), name }));
//       } else {
//         pushTony("Sorry, I couldn't submit. Please try again or contact us via the website.");
//         setLeadFlow("idle");
//       }
//     } catch (err) {
//       pushTony("Submission failed due to a connection issue. Please try again.");
//       setLeadFlow("idle");
//     } finally {
//       setInput("");
//     }
//   }

//   // handle suggestions (aware of leadFlow)
//   const handleSuggestion = async (s: string) => {
//     const low = s.toLowerCase().trim();

//     // confirmName step
//     if (leadFlow === "confirmName") {
//       pushMessage({ id: uid("u_"), who: "user", text: s });
//       if (low === "yes" || low === "y") {
//         const known = memory?.name || leadData.name;
//         setLeadData((d) => ({ ...d, name: known }));
//         pushTony(`Great — using the name ${known}. What's your email address?`);
//         setLeadFlow("askEmail");
//         return;
//       }
//       if (low === "no" || low === "n") {
//         pushTony("Okay — what's your name?");
//         setLeadFlow("askName");
//         return;
//       }
//     }

//     // confirm final stage
//     if (leadFlow === "confirm") {
//       pushMessage({ id: uid("u_"), who: "user", text: s });
//       if (low === "submit" || low === "yes" || low === "send") {
//         await submitLead();
//         return;
//       }
//       if (low === "cancel" || low === "no") {
//         pushTony("Okay, cancelled. Let me know if you'd like to start again.");
//         setLeadFlow("idle");
//         setLeadData({});
//         return;
//       }
//     }

//     // start a project clicked
//     if (low.includes("start")) {
//       pushMessage({ id: uid("u_"), who: "user", text: s });
//       const knownName = memory?.name || leadData.name;
//       if (knownName) {
//         pushTony(`I already have your name as ${knownName}. Should I use this name? (Yes/No)`, undefined, ["Yes", "No"]);
//         setLeadFlow("confirmName");
//         return;
//       }
//       pushTony("Sure — to start, what's your name?");
//       setLeadFlow("askName");
//       return;
//     }

//     // default -> send to server
//     await sendToServer(s);
//   };

//   // handle manual send / typed input
//   const handleSend = async (e?: React.FormEvent) => {
//     e?.preventDefault();
//     const text = input.trim();
//     if (!text) return;

//     // exit words
//     const exitWords = ["stop", "exit", "cancel", "close"];
//     if (leadFlow !== "idle" && exitWords.includes(text.toLowerCase())) {
//       pushMessage({ id: uid("u_"), who: "user", text });
//       pushTony("No problem, I stopped the process. Let me know if you want to start again.");
//       setLeadFlow("idle");
//       setLeadData({});
//       setInput("");
//       return;
//     }

//     // detect name patterns
//     const detected = detectAndStoreNameFromText(text);
//     if (detected && leadFlow === "idle") {
//       pushMessage({ id: uid("u_"), who: "user", text });
//       pushTony(`Nice to meet you, ${detected}! How can I help you today?`, undefined, ["Website Development", "SEO Help"]);
//       setInput("");
//       return;
//     }

//     // leadFlow handling
//     if (leadFlow !== "idle") {
//       if (leadFlow === "confirmName") {
//         const low = text.toLowerCase();
//         if (low === "yes" || low === "y") {
//           const known = memory?.name || leadData.name;
//           setLeadData((d) => ({ ...d, name: known }));
//           pushMessage({ id: uid("u_"), who: "user", text });
//           pushTony(`Great — using the name ${known}. What's your email address?`);
//           setLeadFlow("askEmail");
//           setInput("");
//           return;
//         } else if (low === "no" || low === "n") {
//           pushMessage({ id: uid("u_"), who: "user", text });
//           pushTony("Okay — what's your name?");
//           setLeadFlow("askName");
//           setInput("");
//           return;
//         }
//       }

//       if (leadFlow === "askName") {
//         const name = text;
//         setLeadData((d) => ({ ...d, name }));
//         setMemory((m: any) => ({ ...(m || {}), name }));
//         pushMessage({ id: uid("u_"), who: "user", text });
//         pushTony(`Thanks, ${name}. What's your email address?`);
//         setLeadFlow("askEmail");
//         setInput("");
//         return;
//       }

//       if (leadFlow === "askEmail") {
//         const emailCandidate = text;
//         if (!isValidEmail(emailCandidate)) {
//           if (exitWords.includes(emailCandidate.toLowerCase())) {
//             pushMessage({ id: uid("u_"), who: "user", text });
//             pushTony("No problem, I stopped the process. Let me know if you want to start again.");
//             setLeadFlow("idle");
//             setLeadData({});
//             setInput("");
//             return;
//           }
//           pushMessage({ id: uid("u_"), who: "user", text });
//           pushTony("That doesn't look like a valid email. Please type a valid email (e.g. you@mail.com) or type 'skip' to continue without email.");
//           setInput("");
//           return;
//         }
//         setLeadData((d) => ({ ...d, email: emailCandidate }));
//         pushMessage({ id: uid("u_"), who: "user", text });
//         pushTony("Got it. Phone number? (optional) — or type 'skip'.");
//         setLeadFlow("askPhone");
//         setInput("");
//         return;
//       }

//       if (leadFlow === "askPhone") {
//         let phone = text;
//         if (phone.toLowerCase() === "skip") {
//           phone = "";
//         } else {
//           phone = cleanPhone(phone);
//         }
//         setLeadData((d) => ({ ...d, phone }));
//         pushMessage({ id: uid("u_"), who: "user", text });
//         const name = leadData.name || memory.name || "—";
//         const email = leadData.email || "—";
//         pushTony(`Please confirm:\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "—"}.`, undefined, ["Submit", "Cancel"]);
//         setLeadFlow("confirm");
//         setInput("");
//         return;
//       }

//       if (leadFlow === "confirm") {
//         const low = text.toLowerCase();
//         if (low === "submit" || low === "yes" || low === "send") {
//           await submitLead();
//           return;
//         } else if (low === "cancel" || low === "no") {
//           pushMessage({ id: uid("u_"), who: "user", text });
//           pushTony("Okay, cancelled. Let me know if you'd like to start again.");
//           setLeadFlow("idle");
//           setLeadData({});
//           setInput("");
//           return;
//         } else {
//           setLeadData((d) => ({ ...d, message: text }));
//           pushMessage({ id: uid("u_"), who: "user", text });
//           pushTony("Noted. Reply 'Submit' to send or 'Cancel' to abort.");
//           setInput("");
//           return;
//         }
//       }
//     }

//     // start project typed
//     const lower = text.toLowerCase();
//     if (lower.includes("start a project") || lower === "start project" || lower.includes("i want to hire") || lower.includes("i want to work with")) {
//       const knownName = memory?.name || leadData.name;
//       if (knownName) {
//         pushMessage({ id: uid("u_"), who: "user", text });
//         pushTony(`I already have your name as ${knownName}. Should I use this name? (Yes/No)`, undefined, ["Yes", "No"]);
//         setLeadFlow("confirmName");
//         setInput("");
//         return;
//       }
//       pushMessage({ id: uid("u_"), who: "user", text });
//       pushTony("Sure — to start, what's your name?");
//       setLeadFlow("askName");
//       setInput("");
//       return;
//     }

//     // quick contact words: forward to server for Tony formatted reply
//     if (lower === "contact" || lower.includes("whatsapp") || lower.includes("email") || lower.includes("site")) {
//       await sendToServer(text);
//       return;
//     }

//     // default -> server
//     await sendToServer(text);
//   };

//   // render messages (user plain, Tony allows html)
//   const renderMessage = (m: Message) => {
//     if (m.who === "user") {
//       return (
//         <div key={m.id} style={{ marginBottom: 10 }}>
//           <div style={{ display: "flex", justifyContent: "flex-end" }}>
//             <div style={{ maxWidth: "78%", padding: "10px 14px", background: "#ff5c35", color: "#fff", borderRadius: 12, boxShadow: "0 6px 18px rgba(0,0,0,0.06)" }}>
//               <div style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>{m.text}</div>
//             </div>
//           </div>
//         </div>
//       );
//     }

//     const content = m.html ? <div dangerouslySetInnerHTML={{ __html: m.html }} /> : <div style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>{m.text}</div>;

//     return (
//       <div key={m.id} style={{ marginBottom: 10 }}>
//         <div style={{ display: "flex", gap: 10 }}>
//           <div style={{ width: 44, height: 44, borderRadius: 10, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", color: "#ff5c35", fontWeight: 800 }}>T</div>
//           <div style={{ maxWidth: "85%", padding: "10px 14px", background: "#fff", color: "#111", borderRadius: 12, boxShadow: "0 6px 18px rgba(0,0,0,0.06)" }}>
//             {content}
//           </div>
//         </div>

//         {m.suggestions && m.suggestions.length > 0 && (
//           <div style={{ marginTop: 8, display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
//             {m.suggestions.map((s) => (
//               <button key={s} onClick={() => handleSuggestion(s)} style={{
//                 display: "inline-flex",
//                 alignItems: "center",
//                 gap: 8,
//                 padding: "6px 12px",
//                 borderRadius: 999,
//                 border: "1px solid rgba(0,0,0,0.06)",
//                 background: "#fff",
//                 cursor: "pointer",
//                 boxShadow: "0 1px 0 rgba(0,0,0,0.03)",
//                 fontSize: 13
//               }}>
//                 <span style={{ width: 8, height: 8, borderRadius: 8, background: "#4caf50", display: "inline-block" }} />
//                 <span>{s}</span>
//               </button>
//             ))}
//           </div>
//         )}
//       </div>
//     );
//   };

//   // panel UI
//   return (
//     <>
//       {/* Floating toggle button */}
//       <div style={{ position: "fixed", right: 18, bottom: 18, zIndex: 9999 }}>
//         <button
//           onClick={() => setOpen((v) => !v)}
//           title="Open Tony — Brave Moor support"
//           style={{
//             width: 64,
//             height: 64,
//             borderRadius: 12,
//             background: "#ff5c35",
//             color: "#fff",
//             border: "none",
//             boxShadow: "0 12px 36px rgba(0,0,0,0.2)",
//             cursor: "pointer",
//             fontWeight: 800,
//             fontSize: 20
//           }}
//         >
//           T
//         </button>
//       </div>

//       {/* Slide-in panel */}
//       <div style={{
//         position: "fixed",
//         top: 0,
//         right: open ? 0 : -460,
//         zIndex: 9998,
//         width: 420,
//         height: "100vh",
//         transition: "right 240ms cubic-bezier(.2,.9,.25,1)",
//         boxShadow: open ? "-32px 0 80px rgba(14,14,14,0.12)" : "none",
//         display: "flex",
//         flexDirection: "column",
//         background: "#f7f7f8"
//       }}>
//         {/* Header */}
//         <div style={{ padding: 16, background: "linear-gradient(90deg,#ff5c35,#ff8a5a)", color: "#fff", display: "flex", alignItems: "center", gap: 12 }}>
//           <div style={{ width: 52, height: 52, borderRadius: 10, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", color: "#ff5c35", fontWeight: 800, fontSize: 18 }}>T</div>
//           <div style={{ flex: 1 }}>
//             <div style={{ fontWeight: 800 }}>Tony • Brave Moor</div>
//             <div style={{ fontSize: 12, opacity: 0.95 }}>Support & project enquiries</div>
//           </div>
//           <div>
//             <button onClick={() => { setOpen(false); }} style={{ border: "none", background: "rgba(255,255,255,0.08)", color: "#fff", padding: "6px 10px", borderRadius: 8, cursor: "pointer" }}>Close</button>
//           </div>
//         </div>

//         {/* Messages */}
//         <div ref={containerRef} style={{ flex: 1, overflowY: "auto", padding: 18 }}>
//           {messages.map((m) => renderMessage(m))}
//           {typing && (
//             <div style={{ display: "flex", gap: 12, alignItems: "center", marginTop: 8 }}>
//               <div style={{ width: 44, height: 44, borderRadius: 10, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", color: "#ff5c35", fontWeight: 800 }}>T</div>
//               <div style={{ background: "#fff", padding: "8px 12px", borderRadius: 10 }}><small>Typing…</small></div>
//             </div>
//           )}
//         </div>

//         {/* Input */}
//         <form onSubmit={handleSend} style={{ padding: 12, borderTop: "1px solid rgba(0,0,0,0.04)", background: "#fff", display: "flex", gap: 8 }}>
//           <input
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Type your message..."
//             style={{ flex: 1, padding: "12px 14px", borderRadius: 10, border: "1px solid #e6e6e8", outline: "none" }}
//           />
//           <button type="submit" disabled={loading} style={{ padding: "10px 14px", borderRadius: 10, background: "#ff5c35", color: "#fff", border: "none", cursor: "pointer" }}>
//             {loading ? "..." : "Send"}
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }


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

export default function ChatPanel() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: uid("m_"), who: "tony", text: tonyKnowledge.greeting }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [typing, setTyping] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // memory
  const memoryKey = "tony_bravemoor_v2";
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

  const pushTony = (text: string, html?: string, suggestions?: string[]) => {
    pushMessage({ id: uid("t_"), who: "tony", text, html, suggestions });
  };

  // client-side guard for send-whatsapp attempts
  function userAskedToSendWhatsApp(text: string) {
    const s = text.toLowerCase();
    return s.includes("whatsapp") && (s.includes("send") || s.includes("message") || s.includes("text") || s.includes("dm"));
  }

  // send to server
  async function sendToServer(text: string) {
    setLoading(true);
    setTyping(true);
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

      // server reply plain and html
      const replyText = json?.reply || "Sorry, I couldn't reply.";
      const replyHtml = json?.replyHtml;
      const suggestions: string[] = Array.isArray(json?.suggestedButtons) ? json.suggestedButtons : [];

      const delay = 300 + Math.random() * 400;
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

  // submit lead
  async function submitLead() {
    const name = leadData.name || memory?.name;
    const email = leadData.email;
    const phone = leadData.phone || "";
    const message = leadData.message || "Lead via Tony chat";

    if (!name || !email) {
      pushTony("I need a name and a valid email to submit. What's your email?");
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

  // handle suggestion clicks (aware of leadFlow)
  const handleSuggestion = async (s: string) => {
    const low = s.toLowerCase().trim();

    // handle confirmName
    if (leadFlow === "confirmName") {
      pushMessage({ id: uid("u_"), who: "user", text: s });
      if (low === "yes" || low === "y") {
        const known = memory?.name || leadData.name;
        setLeadData((d) => ({ ...d, name: known }));
        pushTony(`Great — using the name ${known}. What's your email address?`);
        setLeadFlow("askEmail");
        return;
      }
      if (low === "no" || low === "n") {
        pushTony("Okay — what's your name?");
        setLeadFlow("askName");
        return;
      }
    }

    // handle confirm stage Submit/Cancel
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

    // Start a project clicked
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

    // Contact suggestion (client-only quick response) — convert to server call for full reply
    if (low === "contact") {
      await sendToServer("contact");
      return;
    }

    // Default send to server
    await sendToServer(s);
  };

  // handle typed messages / leadFlow flow
  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    const text = input.trim();
    if (!text) return;

    // guard: if user asks to send whatsapp, respond locally (do not forward asking-for-number)
    if (userAskedToSendWhatsApp(text)) {
      pushMessage({ id: uid("u_"), who: "user", text });
      // Show Contact + WhatsApp + Email pills
      const html = `<a href="${tonyKnowledge.contact.contactPage}" target="_blank" rel="noreferrer" style="color:#ff5c35;font-weight:600;text-decoration:none;">Contact Page</a> &nbsp;&nbsp; <a href="https://wa.me/${tonyKnowledge.contact.whatsapp.replace(/\D/g, "")}" target="_blank" rel="noreferrer" style="color:#ff5c35;font-weight:600;text-decoration:none;">WhatsApp</a> &nbsp;&nbsp; <a href="mailto:${tonyKnowledge.contact.email}" style="color:#ff5c35;font-weight:600;text-decoration:none;">Email</a>`;
      pushTony(`I can't send messages directly. You can reach us:`, html, ["Contact"]);
      setInput("");
      return;
    }

    const exitWords = ["stop", "exit", "cancel", "close"];

    if (leadFlow !== "idle" && exitWords.includes(text.toLowerCase())) {
      pushMessage({ id: uid("u_"), who: "user", text });
      pushTony("No problem, I stopped the process. Let me know if you want to start again.");
      setLeadFlow("idle");
      setLeadData({});
      setInput("");
      return;
    }

    // detect name
    const detected = detectAndStoreNameFromText(text);
    if (detected && leadFlow === "idle") {
      pushMessage({ id: uid("u_"), who: "user", text });
      pushTony(`Nice to meet you, ${detected}! How can I help you today?`, undefined, ["Website Development", "SEO Help"]);
      setInput("");
      return;
    }

    // leadFlow handling
    if (leadFlow !== "idle") {
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
          if (exitWords.includes(emailCandidate.toLowerCase())) {
            pushMessage({ id: uid("u_"), who: "user", text });
            pushTony("No problem, I stopped the process. Let me know if you want to start again.");
            setLeadFlow("idle");
            setLeadData({});
            setInput("");
            return;
          }
          pushMessage({ id: uid("u_"), who: "user", text });
          pushTony("That doesn't look like a valid email. Please type a valid email (e.g. you@mail.com) or type 'skip' to continue without email.");
          setInput("");
          return;
        }
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
        pushTony(`Please confirm:\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "—"}.`, undefined, ["Submit", "Cancel"]);
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
          setLeadData((d) => ({ ...d, message: text }));
          pushMessage({ id: uid("u_"), who: "user", text });
          pushTony("Noted. Reply 'Submit' to send or 'Cancel' to abort.");
          setInput("");
          return;
        }
      }
    }

    // start project typed
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

    // contact
    if (lower === "contact" || lower.includes("whatsapp") || lower.includes("email") || lower.includes("site")) {
      await sendToServer(text);
      return;
    }

    // default
    await sendToServer(text);
  };

  // render messages: user plain text (no links), Tony messages allow html
  const renderMessage = (m: Message) => {
    if (m.who === "user") {
      return (
        <div key={m.id} style={{ marginBottom: 12 }}>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <div style={{ maxWidth: "78%", padding: "10px 14px", background: "#ff5c35", color: "#fff", borderRadius: 12, boxShadow: "0 6px 18px rgba(0,0,0,0.06)", wordBreak: "break-word", whiteSpace: "pre-wrap" }}>
              <div style={{ wordBreak: "break-word" }}>{m.text}</div>
            </div>
          </div>
        </div>
      );
    }

    // Tony message
    const content = m.html ? <div dangerouslySetInnerHTML={{ __html: m.html }} /> : <div style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>{m.text}</div>;

    return (
      <div key={m.id} style={{ marginBottom: 12 }}>
        <div style={{ display: "flex", gap: 12 }}>
          <div style={{ width: 44, height: 44, borderRadius: 10, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", color: "#ff5c35", fontWeight: 800 }}>T</div>
          <div style={{ maxWidth: "85%", padding: "10px 14px", background: "#fff", color: "#111", borderRadius: 12, boxShadow: "0 6px 18px rgba(0,0,0,0.06)", wordBreak: "break-word" }}>
            {content}
          </div>
        </div>

        {m.suggestions && m.suggestions.length > 0 && (
          <div style={{ marginTop: 8, display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
            {m.suggestions.map((s) => (
              <button key={s} onClick={() => handleSuggestion(s)} style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "7px 14px",
                borderRadius: 999,
                border: "1px solid rgba(0,0,0,0.06)",
                background: "#fff",
                cursor: "pointer",
                boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
                fontSize: 14,
                color: "#ff5c35",
                fontWeight: 700
              }}>
                <span style={{ width: 8, height: 8, borderRadius: 8, background: "#ff5c35", display: "inline-block" }} />
                <span>{s}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    // <>
    //   {/* Toggle */}
    //   <div style={{ position: "fixed", right: 18, bottom: 18, zIndex: 9999 }}>
    //     <button
    //       onClick={() => setOpen((v) => !v)}
    //       title="Open Tony — Brave Moor support"
    //       style={{
    //         width: 64,
    //         height: 64,
    //         borderRadius: 12,
    //         background: "#ff5c35",
    //         color: "#fff",
    //         border: "none",
    //         boxShadow: "0 12px 36px rgba(0,0,0,0.2)",
    //         cursor: "pointer",
    //         fontWeight: 800,
    //         fontSize: 20
    //       }}
    //     >
    //       T
    //     </button>
    //   </div>

    //   {/* Panel */}
    //   <div style={{
    //     position: "fixed",
    //     top: 0,
    //     right: open ? 0 : -460,
    //     zIndex: 9998,
    //     width: 420,
    //     height: "100vh",
    //     transition: "right 240ms cubic-bezier(.2,.9,.25,1)",
    //     boxShadow: open ? "-32px 0 80px rgba(14,14,14,0.12)" : "none",
    //     display: "flex",
    //     flexDirection: "column",
    //     background: "#f7f7f8"
    //   }}>
    //     <div style={{ padding: 16, background: "linear-gradient(90deg,#ff5c35,#ff8a5a)", color: "#fff", display: "flex", alignItems: "center", gap: 12 }}>
    //       <div style={{ width: 52, height: 52, borderRadius: 10, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", color: "#ff5c35", fontWeight: 800, fontSize: 18 }}>T</div>
    //       <div style={{ flex: 1 }}>
    //         <div style={{ fontWeight: 800 }}>Tony • Brave Moor</div>
    //         <div style={{ fontSize: 12, opacity: 0.95 }}>Support & project enquiries</div>
    //       </div>
    //       <div>
    //         <button onClick={() => { setOpen(false); }} style={{ border: "none", background: "rgba(255,255,255,0.08)", color: "#fff", padding: "6px 10px", borderRadius: 8, cursor: "pointer" }}>Close</button>
    //       </div>
    //     </div>

    //     <div ref={containerRef} style={{ flex: 1, overflowY: "auto", padding: 18 }}>
    //       {messages.map((m) => renderMessage(m))}
    //       {typing && (
    //         <div style={{ display: "flex", gap: 12, alignItems: "center", marginTop: 8 }}>
    //           <div style={{ width: 44, height: 44, borderRadius: 10, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", color: "#ff5c35", fontWeight: 800 }}>T</div>
    //           <div style={{ background: "#fff", padding: "8px 12px", borderRadius: 10 }}><small>Typing…</small></div>
    //         </div>
    //       )}
    //     </div>

    //     <form onSubmit={handleSend} style={{ padding: 12, borderTop: "1px solid rgba(0,0,0,0.04)", background: "#fff", display: "flex", gap: 8 }}>
    //       <input
    //         value={input}
    //         onChange={(e) => setInput(e.target.value)}
    //         placeholder="Type your message..."
    //         style={{ flex: 1, padding: "12px 14px", borderRadius: 10, border: "1px solid #e6e6e8", outline: "none", fontSize: 14 }}
    //       />
    //       <button type="submit" disabled={loading} style={{ padding: "10px 14px", borderRadius: 10, background: "#ff5c35", color: "#fff", border: "none", cursor: "pointer" }}>
    //         {loading ? "..." : "Send"}
    //       </button>
    //     </form>
    //   </div>
    // </>

    
      <>
    {/* Toggle Button — Bottom Right */}
    <div style={{
      position: "fixed",
      right: 20,
      bottom: 20,
      zIndex: 9999
    }}>
      <button
        onClick={() => setOpen((v) => !v)}
        title="Chat with Tony"
        style={{
          width: 64,
          height: 64,
          borderRadius: "50%",
          background: "#ff5c35",
          color: "#fff",
          border: "none",
          boxShadow: "0 12px 36px rgba(0,0,0,0.2)",
          cursor: "pointer",
          fontWeight: 800,
          fontSize: 22,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "transform 0.2s ease"
        }}
      >
        T
      </button>
    </div>

    {/* Chat Window — Bottom Right */}
    <div
      style={{
        position: "fixed",
        right: 12,
        bottom: open ? 100 : 20,
        width: "min(420px, 95vw)",
        height: open ? "520px" : "0px",
        maxHeight: "80vh",
        background: "#f7f7f8",
        borderRadius: 14,
        overflow: "hidden",
        transition: "all 240ms cubic-bezier(.2,.9,.25,1)",
        boxShadow: open ? "0 24px 80px rgba(14,14,14,0.25)" : "none",
        opacity: open ? 1 : 0,
        pointerEvents: open ? "auto" : "none",
        display: "flex",
        flexDirection: "column",
        zIndex: 9998
      }}
    >
      {/* Header */}
      <div style={{
        padding: 16,
        background: "linear-gradient(90deg,#ff5c35,#ff8a5a)",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        gap: 12
      }}>
        <div style={{
          width: 44,
          height: 44,
          borderRadius: 10,
          background: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ff5c35",
          fontWeight: 800
        }}>T</div>

        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 800 }}>Tony • Brave Moor</div>
          <div style={{ fontSize: 12, opacity: 0.95 }}>Support & project enquiries</div>
        </div>

        <button
          onClick={() => setOpen(false)}
          style={{
            border: "none",
            background: "rgba(255,255,255,0.12)",
            color: "#fff",
            padding: "6px 10px",
            borderRadius: 8,
            cursor: "pointer"
          }}
        >
          Close
        </button>
      </div>

      {/* Messages */}
      <div
        ref={containerRef}
        style={{
          flex: 1,
          overflowY: "auto",
          padding: 16
        }}
      >
        {messages.map((m) => renderMessage(m))}
        {typing && (
          <div style={{ display: "flex", gap: 12, alignItems: "center", marginTop: 8 }}>
            <div style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ff5c35",
              fontWeight: 800
            }}>T</div>
            <div style={{
              background: "#fff",
              padding: "8px 12px",
              borderRadius: 10
            }}>
              <small>Typing…</small>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <form
        onSubmit={handleSend}
        style={{
          padding: 12,
          borderTop: "1px solid rgba(0,0,0,0.04)",
          background: "#fff",
          display: "flex",
          gap: 8
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          style={{
            flex: 1,
            padding: "12px 14px",
            borderRadius: 10,
            border: "1px solid #e6e6e8",
            outline: "none",
            fontSize: 14
          }}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "10px 14px",
            borderRadius: 10,
            background: "#ff5c35",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            width: 80
          }}
        >
          {loading ? "..." : "Send"}
        </button>
      </form>
    </div>
  </>
  
  );
}
