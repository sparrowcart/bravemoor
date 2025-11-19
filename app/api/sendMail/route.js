// // app/api/sendMail/route.js
// import nodemailer from "nodemailer";

// export async function POST(req) {
//   try {
//     const { name, email, phone, organisation, category, message } = await req.json();

//     // Create transporter (Gmail)
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     const mailOptions = {
//       from: email,
//       to: "bravemoor@gmail.com",
//       subject: `New Contact Form Submission from ${name}`,
//       text: `
// Name: ${name}
// Email: ${email}
// Phone: ${phone}
// Organisation: ${organisation}
// Category: ${category}
// Message: ${message}
//       `,
//     };

//     await transporter.sendMail(mailOptions);

//     return new Response(JSON.stringify({ success: true, message: "Email sent successfully" }), {
//       status: 200,
//     });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return new Response(JSON.stringify({ success: false, error: "Failed to send email" }), {
//       status: 500,
//     });
//   }
// }


// import nodemailer from "nodemailer";

// export async function POST(req) {
//   try {
//     const { name, email, phone, organisation, category, message } = await req.json();

//     // Gmail transporter
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     // HTML Email Template (Brave Moor style)
//     const htmlTemplate = `
//     <div style="font-family:Arial,Helvetica,sans-serif;max-width:650px;margin:auto;padding:25px;border:1px solid #eee;border-radius:12px;background:#fff;">
//       <img src="https://www.bravemoor.com/bravemoor-logo.png" width="90" alt="Brave Moor" style="display:block;margin:0 auto 15px auto;">
//       <h2 style="color:#ff5c35;text-align:center;margin-bottom:25px;">🚀 New Contact Form Submission</h2>
      
//       <table style="width:100%;border-collapse:collapse;">
//         <tr><td style="padding:10px;border-bottom:1px solid #eee;"><strong>Name:</strong></td><td style="padding:10px;border-bottom:1px solid #eee;">${name}</td></tr>
//         <tr><td style="padding:10px;border-bottom:1px solid #eee;"><strong>Email:</strong></td><td style="padding:10px;border-bottom:1px solid #eee;"><a href="mailto:${email}" style="color:#ff5c35;">${email}</a></td></tr>
//         <tr><td style="padding:10px;border-bottom:1px solid #eee;"><strong>Phone:</strong></td><td style="padding:10px;border-bottom:1px solid #eee;">${phone}</td></tr>
//         <tr><td style="padding:10px;border-bottom:1px solid #eee;"><strong>Organisation:</strong></td><td style="padding:10px;border-bottom:1px solid #eee;">${organisation}</td></tr>
//         <tr><td style="padding:10px;border-bottom:1px solid #eee;"><strong>Category:</strong></td><td style="padding:10px;border-bottom:1px solid #eee;">${category}</td></tr>
//         <tr><td style="padding:10px;"><strong>Message:</strong></td><td style="padding:10px;">${message}</td></tr>
//       </table>

//       <p style="font-size:14px;color:#555;margin-top:30px;text-align:center;">
//         — This message was sent from the <strong>Brave Moor</strong> contact form.
//       </p>
//     </div>
//     `;

//     // Send Email to Brave Moor
//     await transporter.sendMail({
//       from: `"${name}" <${email}>`,
//       to: "bravemoor@gmail.com",
//       subject: `New Contact Form Submission from ${name}`,
//       html: htmlTemplate,
//     });

//     // Optionally send auto-reply to sender
//     await transporter.sendMail({
//       from: `"Brave Moor" <${process.env.EMAIL_USER}>`,
//       to: email,
//       subject: `We've received your message, ${name}!`,
//       html: `
//         <div style="font-family:Arial,Helvetica,sans-serif;max-width:650px;margin:auto;padding:25px;border:1px solid #eee;border-radius:12px;background:#fff;">
//           <img src="https://www.bravemoor.com/assets/img/logo/bravemoor-logo.png" 
//      width="90" 
//      alt="Brave Moor" 
//      style="display:block;margin:0 auto 15px auto;">

//           <h2 style="color:#ff5c35;text-align:center;margin-bottom:20px;">Thank You for Reaching Out!</h2>
//           <p style="font-size:16px;color:#333;line-height:1.6;">
//             Hi <strong>${name}</strong>,<br><br>
//             We’ve received your message and our team will get back to you shortly.<br>
//             Meanwhile, feel free to explore our work at <a href="https://www.bravemoor.com" style="color:#ff5c35;text-decoration:none;">Brave Moor</a>.
//           </p>
//           <p style="font-size:14px;color:#666;margin-top:30px;text-align:center;">
//             — Warm Regards,<br><strong>Team Brave Moor</strong>
//           </p>
//         </div>
//       `,
//     });

//     return new Response(
//       JSON.stringify({ success: true, message: "Email sent successfully ✅" }),
//       { status: 200 }
//     );

//   } catch (error) {
//     console.error("Error sending email:", error);
//     return new Response(
//       JSON.stringify({ success: false, error: "Failed to send email ❌" }),
//       { status: 500 }
//     );
//   }
// }


import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, organisation, category, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    const htmlTemplate = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:650px;margin:auto;padding:25px;border:1px solid #eee;border-radius:12px;background:#fff;">
      <img src="https://www.bravemoor.com/assets/img/logo/bravemoor-logo.png" width="90" alt="Brave Moor" style="display:block;margin:0 auto 15px auto;">
      <h2 style="color:#ff5c35;text-align:center;margin-bottom:25px;">🚀 New Contact Form Submission</h2>
      
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:10px;border-bottom:1px solid #eee;"><strong>Name:</strong></td><td style="padding:10px;border-bottom:1px solid #eee;">${name}</td></tr>
        <tr><td style="padding:10px;border-bottom:1px solid #eee;"><strong>Email:</strong></td><td style="padding:10px;border-bottom:1px solid #eee;"><a href="mailto:${email}" style="color:#ff5c35;">${email}</a></td></tr>
        <tr><td style="padding:10px;border-bottom:1px solid #eee;"><strong>Phone:</strong></td><td style="padding:10px;border-bottom:1px solid #eee;">${phone}</td></tr>
        <tr><td style="padding:10px;border-bottom:1px solid #eee;"><strong>Organisation:</strong></td><td style="padding:10px;border-bottom:1px solid #eee;">${organisation}</td></tr>
        <tr><td style="padding:10px;border-bottom:1px solid #eee;"><strong>Category:</strong></td><td style="padding:10px;border-bottom:1px solid #eee;">${category}</td></tr>
        <tr><td style="padding:10px;"><strong>Message:</strong></td><td style="padding:10px;">${message}</td></tr>
      </table>

      <p style="font-size:14px;color:#555;margin-top:30px;text-align:center;">
        — This message was sent from the <strong>Brave Moor</strong> contact form.
      </p>
    </div>
    `;

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "bravemoor@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      html: htmlTemplate,
    });

    await transporter.sendMail({
      from: `"Brave Moor" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `We've received your message, ${name}!`,
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;max-width:650px;margin:auto;padding:25px;border:1px solid #eee;border-radius:12px;background:#fff;">
          <img src="https://www.bravemoor.com/assets/img/logo/bravemoor-logo.png" 
     width="90" 
     alt="Brave Moor" 
     style="display:block;margin:0 auto 15px auto;">
          <h2 style="color:#ff5c35;text-align:center;margin-bottom:20px;">Thank You for Reaching Out!</h2>
          <p style="font-size:16px;color:#333;line-height:1.6;">
            Hi <strong>${name}</strong>,<br><br>
            We’ve received your message and our team will get back to you shortly.<br>
            Meanwhile, feel free to explore our work at <a href="https://www.bravemoor.com" style="color:#ff5c35;text-decoration:none;">Brave Moor</a>.
          </p>
          <p style="font-size:14px;color:#666;margin-top:30px;text-align:center;">
            — Warm Regards,<br><strong>Team Brave Moor</strong>
          </p>
        </div>
      `,
    });

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully ✅" }),
      { status: 200 }
    );

  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Failed to send email ❌" }),
      { status: 500 }
    );
  }
}
