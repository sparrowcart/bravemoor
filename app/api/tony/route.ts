
// import { NextResponse } from "next/server";
// import tonyKnowledge from "@/app/lib/tonyKnowledge";

// type ReqBody = {
//   message?: string;
//   history?: { role: string; content: string }[];
//   memory?: any;
// };

// const normalize = (s: string = "") => s.toLowerCase().trim();

// const isPricingQuestion = (s: string) => {
//   const q = normalize(s);
//   return (
//     q.includes("price") ||
//     q.includes("pricing") ||
//     q.includes("cost") ||
//     q.includes("how much") ||
//     q.includes("quote") ||
//     q.includes("estimate")
//   );
// };

// function politelyFormatWhatsapp() {
//   return `https://wa.me/${tonyKnowledge.contact.whatsapp.replace(/\D/g, "")}`;
// }

// function explicitlyAsksFounder(text: string) {
//   const s = normalize(text);
//   return (
//     (s.includes("founder") || s.includes("owner") || s.includes("who started")) &&
//     (s.includes("who") || s.includes("name"))
//   );
// }

// function indirectlyAsksFounder(text: string) {
//   const s = normalize(text);
//   return (
//     s.includes("person who started") ||
//     s.includes("tell me about the person") ||
//     s.includes("about the person who")
//   );
// }

// function buildSystemPrompt(memory: any = {}) {
//   return `
// You are Tony — Brave Moor support assistant.
// Reply short (1-2 lines), friendly, professional.
// RULES:
// - No long paragraphs or over-explaining.
// - No fixed prices; if asked about pricing ask "Which type of website? (blog/ecommerce/portfolio/brochure)".
// - Do not collect contact details unless user says "Start a Project" or explicitly requests contact.
// - If name known, confirm it instead of re-asking.
// - Accept only valid email formats as email.
// - Exit lead flow on "stop|exit|cancel|close".
// - Reveal founder name ONLY when explicitly asked "who is the founder/owner".
// Tone: friendly, helpful, confident.
// About: ${tonyKnowledge.shortDescription}
// Services: ${tonyKnowledge.services.join(", ")}
// Contact: ${tonyKnowledge.contact.contactPage}
// WhatsApp: ${politelyFormatWhatsapp()}
// Memory: ${JSON.stringify(memory || {})}
// `.trim();
// }

// function suggestButtons(message: string, reply: string) {
//   const m = normalize(message);
//   const r = normalize(reply);
//   let out: string[] = [];

//   if (m.includes("website") || r.includes("website")) {
//     out.push("Website Development", "Start a Project");
//   }

//   if (m.includes("seo") || r.includes("seo")) {
//     out.push("SEO Help", "Start a Project");
//   }

//   if (isPricingQuestion(m) || isPricingQuestion(r)) {
//     return ["Blog", "E-commerce", "Portfolio", "Brochure"];
//   }

//   if (m.includes("marketing") || r.includes("marketing")) {
//     out.push("Social Media Marketing", "Start a Project");
//   }

//   if (out.length === 0) {
//     out.push("Website Development", "Contact");
//   }

//   return out.slice(0, 4);
// }

// export async function POST(req: Request) {
//   try {
//     const body = (await req.json()) as ReqBody;
//     const message = (body.message || "").trim();
//     const history = body.history ?? [];
//     const memory = body.memory ?? {};

//     if (!message) {
//       return NextResponse.json({
//         success: true,
//         reply: tonyKnowledge.shortDescription,
//         suggestedButtons: ["Website Development", "Contact"]
//       });
//     }

//     if (explicitlyAsksFounder(message)) {
//       return NextResponse.json({
//         success: true,
//         reply: "Brave Moor was founded by Krishna Saini.",
//         suggestedButtons: ["Contact"]
//       });
//     }

//     if (indirectlyAsksFounder(message)) {
//       return NextResponse.json({
//         success: true,
//         reply:
//           "I can't share personal names in that context, but the founder focuses on clean design and meaningful marketing.",
//         suggestedButtons: ["Contact"]
//       });
//     }

//     if (normalize(message).includes("send whatsapp") || normalize(message).includes("send message")) {
//       return NextResponse.json({
//         success: true,
//         reply: `I can't send messages directly. Reach us: ${politelyFormatWhatsapp()}`,
//         suggestedButtons: ["Contact"]
//       });
//     }

//     if (isPricingQuestion(message)) {
//       return NextResponse.json({
//         success: true,
//         reply: "Which type of website? (blog / ecommerce / portfolio / brochure)",
//         suggestedButtons: ["Blog", "E-commerce", "Portfolio", "Brochure"]
//       });
//     }

//     const HF_API_KEY = process.env.HF_API_KEY;
//     let assistantText = "";

//     if (!HF_API_KEY) {
//       const low = normalize(message);
//       if (low.includes("website")) assistantText = "We build clean, fast websites. What features do you need?";
//       else if (low.includes("seo")) assistantText = "We can help with SEO. What would you like to improve?";
//       else if (low.includes("marketing")) assistantText = "We can support your marketing goals. What's your main goal?";
//       else if (low.includes("start a project") || low.includes("start project")) assistantText = "Great — what's your project type?";
//       else assistantText = `Sure — ${message}. Can you tell me a bit more?`;
//     } else {
//       const system = buildSystemPrompt(memory);
//       const msgs = [
//         { role: "system", content: system },
//         ...history.slice(-6),
//         { role: "user", content: message }
//       ];

//       const resp = await fetch("https://router.huggingface.co/v1/chat/completions", {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${HF_API_KEY}`,
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           model: "meta-llama/Llama-3.1-8B-Instruct",
//           messages: msgs,
//           max_tokens: 180,
//           temperature: 0.15
//         })
//       });

//       if (!resp.ok) {
//         assistantText = `I'm here — can you tell me a bit more?`;
//       } else {
//         const data = await resp.json().catch(() => null);
//         assistantText =
//           data?.choices?.[0]?.message?.content ||
//           data?.choices?.[0]?.text ||
//           "Can you tell me more?";
//       }
//     }

//     assistantText = String(assistantText || "")
//       .replace(/<\/?[^>]+>/g, "")
//       .split(/(?<=\.)\s+/)
//       .slice(0, 2)
//       .join(" ")
//       .trim();

//     if (!assistantText) assistantText = "Sure — could you tell me a bit more?";

//     const suggested = suggestButtons(message, assistantText);

//     let replyHtml = assistantText
//       .replace(/\bcontact\b/gi, `<a href="${tonyKnowledge.contact.contactPage}" target="_blank" rel="noreferrer">contact</a>`)
//       .replace(/\bpricing\b/gi, `<a href="${tonyKnowledge.contact.shortPricingAnchor ?? "/pricing"}" target="_blank" rel="noreferrer">pricing</a>`)
//       .replace(/\bwhatsapp\b/gi, `<a href="${politelyFormatWhatsapp()}" target="_blank" rel="noreferrer">WhatsApp</a>`)
//       .replace(/\bemail\b/gi, `<a href="mailto:${tonyKnowledge.contact.email}">email</a>`);

//     return NextResponse.json({
//       success: true,
//       reply: assistantText,
//       replyHtml,
//       suggestedButtons: suggested
//     });
//   } catch (err: any) {
//     return NextResponse.json({ success: false, error: err?.message || "Server error" }, { status: 500 });
//   }
// }


import { NextResponse } from "next/server";
import tonyKnowledge from "@/app/lib/tonyKnowledge";

type ReqBody = {
  message?: string;
  history?: { role: string; content: string }[];
  memory?: any;
};

const normalize = (s: string = "") => s.toLowerCase().trim();

const isPricingQuestion = (s: string) => {
  const q = normalize(s);
  return (
    q.includes("price") ||
    q.includes("pricing") ||
    q.includes("cost") ||
    q.includes("how much") ||
    q.includes("quote") ||
    q.includes("estimate")
  );
};

function politelyFormatWhatsapp() {
  return `https://wa.me/${tonyKnowledge.contact.whatsapp.replace(/\D/g, "")}`;
}

// explicit founder ask detection
function explicitlyAsksFounder(text: string) {
  const s = normalize(text);
  return (
    /who\s+(is|was)\s+(the\s+)?(founder|owner)|founder name|owner name/.test(s)
  );
}

// indirect founder detection (user asks about the person but requests no name)
function indirectlyAsksFounder(text: string) {
  const s = normalize(text);
  return (
    s.includes("tell me something about the person") ||
    s.includes("something about the person") ||
    s.includes("person who started") ||
    s.includes("about the person who") ||
    s.includes("don't mention") ||
    s.includes("dont mention") ||
    s.includes("do not mention")
  );
}

function asksToSendExternalMessage(text: string) {
  const s = normalize(text);
  return s.includes("whatsapp") && (s.includes("send") || s.includes("message") || s.includes("text") || s.includes("dm"));
}

function asksForEmailAndWhatsApp(text: string) {
  const s = normalize(text);
  return s.includes("email") && s.includes("whatsapp");
}

// build system prompt (keeps rules for downstream LLM if used)
function buildSystemPrompt(memory: any = {}) {
  return `
You are Tony — Brave Moor support assistant.
Reply short (1-2 lines), friendly, professional.
RULES:
- No long paragraphs.
- No fixed prices; ask "Which type of website? (blog/ecommerce/portfolio/brochure)" if user asks pricing.
- Do not collect contact details unless user says "Start a Project".
- If name known, confirm it instead of re-asking.
- Exit lead flow on "stop|exit|cancel|close".
- Reveal founder name ONLY when explicitly asked "who is the founder/owner".
- If user asks indirectly about the founder (eg "tell me something... don't mention name"), do NOT reveal the name — give a short non-identifying background line.
- Never invent team member names or personal details.
About: ${tonyKnowledge.shortDescription}
Contact: ${tonyKnowledge.contact.contactPage}
WhatsApp: ${politelyFormatWhatsapp()}
Memory: ${JSON.stringify(memory || {})}
`.trim();
}

// Suggestion generation (very conservative)
function suggestButtons(message: string, reply: string) {
  const m = normalize(message);
  const r = normalize(reply);
  // Pricing prompts handled elsewhere
  if (isPricingQuestion(m) || isPricingQuestion(r)) {
    return ["Blog", "E-commerce", "Portfolio", "Brochure"];
  }

  if (m.includes("website") || r.includes("website")) {
    return ["Website Development", "Start a Project"];
  }

  if (m.includes("seo") || r.includes("seo")) {
    return ["SEO Help", "Start a Project"];
  }

  // default: no suggestion spam — only provide Contact if user explicitly asked contact-like things
  if (m.includes("contact") || m.includes("whatsapp") || m.includes("email") || r.includes("contact")) {
    return ["Contact"];
  }

  return [];
}

// helper to build tidy pill HTML for contact links (Option 3 pill style)
function buildContactPillsHtml() {
  const contactAnchor = `<a href="${tonyKnowledge.contact.contactPage}" target="_blank" rel="noreferrer" style="text-decoration:none;color:#ff5c35;font-weight:600;">Contact Page</a>`;
  const whatsappAnchor = `<a href="https://wa.me/${tonyKnowledge.contact.whatsapp.replace(/\D/g, "")}" target="_blank" rel="noreferrer" style="text-decoration:none;color:#ff5c35;font-weight:600;">WhatsApp</a>`;
  const callAnchor = `<a href="tel:${tonyKnowledge.contact.whatsapp.replace(/\D/g, "")}" style="text-decoration:none;color:#ff5c35;font-weight:600;">Call</a>`;
  const emailAnchor = `<a href="mailto:${tonyKnowledge.contact.email}" style="text-decoration:none;color:#ff5c35;font-weight:600;">Email</a>`;

  return `${contactAnchor} &nbsp;&nbsp; ${whatsappAnchor} &nbsp;&nbsp; ${callAnchor} &nbsp;&nbsp; ${emailAnchor}`;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ReqBody;
    const message = (body.message || "").trim();
    const history = body.history ?? [];
    const memory = body.memory ?? {};

    const low = normalize(message);

    if (!message) {
      return NextResponse.json({
        success: true,
        reply: tonyKnowledge.shortDescription,
        suggestedButtons: ["Website Development", "Contact"]
      });
    }

    // 1. Explicit founder request -> reveal name only when explicit
    if (explicitlyAsksFounder(message)) {
      return NextResponse.json({
        success: true,
        reply: "Brave Moor was founded by Krishna Saini.",
        suggestedButtons: ["Contact"]
      });
    }

    // 2. Indirect founder (user asked not to reveal name) -> do not reveal
    if (indirectlyAsksFounder(message)) {
      return NextResponse.json({
        success: true,
        reply:
          "I can’t share the founder's name in that context. I can say the founder started Brave Moor to focus on long-term brand trust, practical design and human-first marketing.",
        suggestedButtons: ["Contact"]
      });
    }

    // 3. External-message attempts -> always refuse with contact pills
    if (asksToSendExternalMessage(message)) {
      const pillHtml = buildContactPillsHtml();
      return NextResponse.json({
        success: true,
        reply: `I can't send external messages directly. You can reach us:`,
        replyHtml: pillHtml,
        suggestedButtons: ["Contact"]
      });
    }

    // 4. Request for both email and WhatsApp -> give short single-line pills
    if (asksForEmailAndWhatsApp(message)) {
      const pillHtml = buildContactPillsHtml();
      return NextResponse.json({
        success: true,
        reply: `Email and WhatsApp:`,
        replyHtml: pillHtml,
        suggestedButtons: ["Contact"]
      });
    }

    // 5. Pricing detection
    if (isPricingQuestion(message)) {
      return NextResponse.json({
        success: true,
        reply: "Which type of website? (blog / ecommerce / portfolio / brochure)",
        suggestedButtons: ["Blog", "E-commerce", "Portfolio", "Brochure"]
      });
    }

    // 6. Memory question (explicit)
    if (low.includes("previous conversation") || low.includes("last week") || (low.includes("remember") && low.includes("previous"))) {
      return NextResponse.json({
        success: true,
        reply: "I don't retain conversations between sessions. I can remember things during this chat session only (like your name).",
        suggestedButtons: ["Contact"]
      });
    }

    // 7. LLM or fallback
    const HF_API_KEY = process.env.HF_API_KEY;
    let assistantText = "";

    if (!HF_API_KEY) {
      // simple deterministic fallback
      if (low.includes("website")) assistantText = "We build clean, fast websites. What features do you need?";
      else if (low.includes("seo")) assistantText = "We can help with SEO. What would you like to improve?";
      else if (low.includes("marketing")) assistantText = "We can support your marketing goals. What's your main goal?";
      else assistantText = `Sure — ${message}. Can you tell me a bit more?`;
    } else {
      const system = buildSystemPrompt(memory);
      const msgs = [
        { role: "system", content: system },
        ...history.slice(-6),
        { role: "user", content: message }
      ];

      const resp = await fetch("https://router.huggingface.co/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${HF_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "meta-llama/Llama-3.1-8B-Instruct",
          messages: msgs,
          max_tokens: 180,
          temperature: 0.15
        })
      });

      if (!resp.ok) {
        assistantText = `I'm here — can you tell me a bit more?`;
      } else {
        const data = await resp.json().catch(() => null);
        assistantText =
          data?.choices?.[0]?.message?.content ||
          data?.choices?.[0]?.text ||
          "Can you tell me more?";
      }
    }

    // sanitize & limit length (1-2 sentences)
    assistantText = String(assistantText || "")
      .replace(/<\/?[^>]+>/g, "")
      .split(/(?<=\.)\s+/)
      .slice(0, 2)
      .join(" ")
      .trim();

    if (!assistantText) assistantText = "Sure — could you tell me a bit more?";

    // build replyHtml only when contact words present OR we intentionally include pills
    let replyHtml = assistantText;
    // only convert keywords to pills when they exist in assistantText
    if (/\b(contact|whatsapp|email)\b/i.test(assistantText)) {
      replyHtml = assistantText
        .replace(/\bcontact\b/gi, `<a href="${tonyKnowledge.contact.contactPage}" target="_blank" rel="noreferrer">Contact Page</a>`)
        .replace(/\bwhatsapp\b/gi, `<a href="${politelyFormatWhatsapp()}" target="_blank" rel="noreferrer">WhatsApp</a>`)
        .replace(/\bemail\b/gi, `<a href="mailto:${tonyKnowledge.contact.email}">Email</a>`);
    } else {
      // keep plain assistant text; client renders plain text for user messages
      replyHtml = assistantText;
    }

    const suggested = suggestButtons(message, assistantText);

    return NextResponse.json({
      success: true,
      reply: assistantText,
      replyHtml,
      suggestedButtons: suggested
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err?.message || "Server error" }, { status: 500 });
  }
}
