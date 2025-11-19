// // // // /app/api/tonyLead/route.ts
// // // import { NextResponse } from "next/server";

// // // export async function POST(req: Request) {
// // //   try {
// // //     const data = await req.json();
// // //     // validate minimal
// // //     const name = data.name ?? "No name";
// // //     const email = data.email ?? "No email";
// // //     const phone = data.phone ?? "No phone";
// // //     const project = data.message ?? "No message";

// // //     // Forward to existing sendMail API (assumes app/api/sendMail/route.js exists)
// // //     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/api/sendMail`, {
// // //       method: "POST",
// // //       headers: { "Content-Type": "application/json" },
// // //       body: JSON.stringify({
// // //         name,
// // //         email,
// // //         phone,
// // //         organisation: data.organisation ?? "",
// // //         category: data.category ?? "",
// // //         message: `Lead captured by Tony chatbot\n\nProject: ${project}\nPhone: ${phone}`,
// // //       }),
// // //     });

// // //     if (!res.ok) {
// // //       const txt = await res.text();
// // //       return NextResponse.json({ success: false, error: txt }, { status: 500 });
// // //     }

// // //     return NextResponse.json({ success: true, message: "Lead forwarded to admin" });
// // //   } catch (error: any) {
// // //     return NextResponse.json({ success: false, error: error.message }, { status: 500 });
// // //   }
// // // }


// // // /app/api/tonyLead/route.ts
// // import { NextResponse } from "next/server";

// // type LeadBody = {
// //   name?: string;
// //   email?: string;
// //   phone?: string;
// //   message?: string;
// //   source?: string; // e.g., "chat"
// // };

// // export async function POST(req: Request) {
// //   try {
// //     const body = (await req.json()) as LeadBody;
// //     const { name, email, phone, message, source } = body;

// //     if (!name || !email) {
// //       return NextResponse.json({ success: false, error: "name and email required" }, { status: 400 });
// //     }

// //     // Forward to your existing sendMail API route which sends real email
// //     const sendRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/sendMail`, {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({
// //         name,
// //         email,
// //         phone: phone || "",
// //         organisation: "Lead via Tony Chat",
// //         category: "Lead",
// //         message: `Source: ${source || "chat"}\n\n${message || ""}`
// //       })
// //     });

// //     const sendJson = await sendRes.json().catch(() => null);

// //     if (sendJson && sendJson.success) {
// //       return NextResponse.json({ success: true, info: "Lead submitted and emailed", raw: sendJson });
// //     } else {
// //       // fallback: still store minimal record (optionally you can plug into DB)
// //       return NextResponse.json({
// //         success: false,
// //         error: "Failed to forward lead to email",
// //         raw: sendJson
// //       }, { status: 502 });
// //     }
// //   } catch (err: any) {
// //     return NextResponse.json({ success: false, error: err?.message || String(err) }, { status: 500 });
// //   }
// // }


// // /app/api/tonyLead/route.ts
// import { NextResponse } from "next/server";

// type LeadBody = {
//   name?: string;
//   email?: string;
//   phone?: string;
//   message?: string;
//   source?: string; // e.g., "chat"
// };

// export async function POST(req: Request) {
//   try {
//     const body = (await req.json()) as LeadBody;
//     const { name, email, phone, message, source } = body;

//     if (!name || !email) {
//       return NextResponse.json({ success: false, error: "name and email required" }, { status: 400 });
//     }

//     // Forward to your existing sendMail API route which sends real email
//     const sendRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/sendMail`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         name,
//         email,
//         phone: phone || "",
//         organisation: "Lead via Tony Chat",
//         category: "Lead",
//         message: `Source: ${source || "chat"}\n\n${message || ""}`
//       })
//     });

//     const sendJson = await sendRes.json().catch(() => null);

//     if (sendJson && sendJson.success) {
//       return NextResponse.json({ success: true, info: "Lead submitted and emailed", raw: sendJson });
//     } else {
//       // fallback: still store minimal record (optionally you can plug into DB)
//       return NextResponse.json({
//         success: false,
//         error: "Failed to forward lead to email",
//         raw: sendJson
//       }, { status: 502 });
//     }
//   } catch (err: any) {
//     return NextResponse.json({ success: false, error: err?.message || String(err) }, { status: 500 });
//   }
// }




// // C:\bravemoor\app\api\tonyLead\route.ts
// import { NextResponse } from "next/server";

// type LeadBody = {
//   name?: string;
//   email?: string;
//   phone?: string;
//   message?: string;
//   source?: string; // e.g., "chat"
// };

// export async function POST(req: Request) {
//   try {
//     const body = (await req.json()) as LeadBody;
//     const { name, email, phone, message, source } = body;

//     if (!name || !email) {
//       return NextResponse.json({ success: false, error: "name and email required" }, { status: 400 });
//     }

//     // Forward to internal sendMail route (assumes you have /api/sendMail implemented)
//     const base = process.env.NEXT_PUBLIC_BASE_URL || "";
//     const sendRes = await fetch(`${base}/api/sendMail`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         name,
//         email,
//         phone: phone || "",
//         organisation: "Lead via Tony Chat",
//         category: "Lead",
//         message: `Source: ${source || "chat"}\n\n${message || ""}`,
//       }),
//     });

//     const sendJson = await sendRes.json().catch(() => null);

//     if (sendJson && sendJson.success) {
//       return NextResponse.json({ success: true, info: "Lead submitted and emailed", raw: sendJson });
//     } else {
//       // fallback: return the failure to the client for retry; you can extend with DB storage here
//       return NextResponse.json({
//         success: false,
//         error: "Failed to forward lead to email",
//         raw: sendJson,
//       }, { status: 502 });
//     }
//   } catch (err: any) {
//     return NextResponse.json({ success: false, error: err?.message || String(err) }, { status: 500 });
//   }
// }



// C:\bravemoor\app\api\tonyLead\route.ts


// import { NextResponse } from "next/server";

// type LeadBody = {
//   name?: string;
//   email?: string;
//   phone?: string;
//   message?: string;
//   source?: string;
// };

// export async function POST(req: Request) {
//   try {
//     const body = (await req.json()) as LeadBody;
//     const { name, email, phone, message, source } = body;

//     if (!name || !email) {
//       return NextResponse.json({ success: false, error: "Name and email required" }, { status: 400 });
//     }

//     const sendRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/sendMail`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         name,
//         email,
//         phone: phone || "",
//         organisation: "Lead via Tony Chat",
//         category: "Lead",
//         message: `Source: ${source || "chat"}\n\n${message || ""}`
//       })
//     });

//     const sendJson = await sendRes.json().catch(() => null);

//     if (sendJson?.success) {
//       return NextResponse.json({
//         success: true,
//         info: "Lead submitted successfully — our team will reach out within 24 hours."
//       });
//     }

//     return NextResponse.json({
//       success: false,
//       error: "Failed to forward lead to email",
//       raw: sendJson
//     }, { status: 502 });
//   } catch (err: any) {
//     return NextResponse.json({ success: false, error: err.message }, { status: 500 });
//   }
// }


import { NextResponse } from "next/server";

type LeadBody = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  source?: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as LeadBody;
    const { name, email, phone, message, source } = body;

    if (!name || !email) {
      return NextResponse.json({ success: false, error: "Name and email required" }, { status: 400 });
    }

    const sendRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/sendMail`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        phone: phone || "",
        organisation: "Lead via Tony Chat",
        category: "Lead",
        message: `Source: ${source || "chat"}\n\n${message || ""}`
      })
    });

    const sendJson = await sendRes.json().catch(() => null);

    if (sendJson?.success) {
      return NextResponse.json({
        success: true,
        info: "Lead submitted successfully — our team will reach out within 24 hours."
      });
    }

    return NextResponse.json({
      success: false,
      error: "Failed to forward lead to email",
      raw: sendJson
    }, { status: 502 });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
