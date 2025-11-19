// import Link from 'next/link'

// import LogoIcon from '../header/LogoIcon'

// export default function Footer2() {
//     return (
//         <>
//           <footer className="footer__area white-bg">
//   {/* ======== Contact Section ======== */}
//   <section className="contact-area pt-60 pb-120 position-relative overflow-hidden">
//     <div className="container">
//       <div className="contact__wrapper">
//         {/* LEFT SIDE IMAGE */}
//         <div className="contact__image">
//           <img
//             src="/assets/img/service/getintouchbm.png"
//             alt="Get in touch with Brave Moor"
//           />
//         </div>

//         {/* RIGHT SIDE FORM */}
//         <div className="contact__content">
//           <h2 className="contact__title">
//             Talk to us today <br />
//             your growth story starts with <span>Brave Moor.</span>
//           </h2>

//           <p className="contact__subtitle">
//             Got a project you want to collaborate on? <br />
//             Or just fancy a chat?
//           </p>

//           <form className="contact__form">
//             <div className="form-group">
//               <label>
//                 <img src="/assets/img/icon/svg-img/user.svg" alt="icon" />
//               </label>
//               <input type="text" placeholder="Name*" required />
//             </div>

//             <div className="form-group">
//               <label>
//                 <img src="/assets/img/icon/svg-img/brifcase.svg" alt="icon" />
//               </label>
//               <input type="text" placeholder="Organisation*" required />
//             </div>

//             <div className="form-group">
//               <label>
//                 <img src="/assets/img/icon/svg-img/envelope.svg" alt="icon" />
//               </label>
//               <input type="email" placeholder="Email*" required />
//             </div>

//             <div className="form-group">
//               <label>
//                 <img src="/assets/img/icon/svg-img/brush.svg" alt="icon" />
//               </label>
//               <textarea placeholder="Message*" required></textarea>
//             </div>

//             <button type="submit" className="btn btn-three square-btn mt-30">
//               SEND MESSAGE
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   </section>
// <footer className="footer__area white-bg">
//   {/* ==== Footer Top ==== */}
//   <div className="footer__top">
//     <div className="container">
//       <div className="footer__grid">
//         {/* === 1. Logo & About === */}
//         <div className="footer__col footer__brand">
//            <div className="footer__brand " style={{display:'flex'}}>
//  <LogoIcon textColor="black" direction="vertical" width={60} height={70} />

  
// </div>

//           <img
//             src="/assets/img/logo/bravemoor-logo.png"
//             alt="Brave Moor Logo"
//             className="footer__logo mfp-hide"
//           />
//           <p className='pt-20'>
//             We’re building brands that matter. <br />
//             Brave Moor helps businesses grow through strategy, creativity, and
//             performance.
//           </p>
//         </div>

//         {/* === 2. Quick Links === */}
//         <div className="footer__col">
//           <h4>Quick Links</h4>
//           <ul>
//             <li><a href="/">Home</a></li>
//             <li><a href="/services">Services</a></li>
//             <li><a href="/about">About</a></li>
//             <li><a href="/blogs">Blogs</a></li>
//             <li><a href="/contact">Contact</a></li>
//           </ul>
//         </div>

//         {/* === 3. Policies === */}
//         <div className="footer__col">
//           <h4>Legal</h4>
//           <ul>
//             <li><a href="/privacy-policy">Privacy Policy</a></li>
//             <li><a href="/terms">Terms & Conditions</a></li>
//             <li><a href="/cookie-policy">Cookie Policy</a></li>
//           </ul>
//         </div>

//         {/* === 4. Social Links === */}
//         <div className="footer__col">
//           <h4>Follow Us</h4>
//           <ul className="footer__social">
//             <li>
//               <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
//                 <i className="fab fa-facebook-f"></i> Facebook
//               </a>
//             </li>
//             <li>
//               <a href="https://www.instagram.com/brave.moor/" target="_blank" rel="noreferrer">
//                 <i className="fab fa-instagram"></i> Instagram
//               </a>
//             </li>
//             <li>
//               <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
//                 <i className="fab fa-linkedin-in"></i> LinkedIn
//               </a>
//             </li>
            
//           </ul>
//         </div>
//       </div>
//     </div>
//   </div>

//   {/* ==== Footer Bottom ==== */}

// </footer>

//   {/* ======== Footer Bottom ======== */}
//   <div className="footer__bottom text-center">
//     <p>
//       © {new Date().getFullYear()} <strong>Brave Moor</strong> — All rights
//       reserved.
//     </p>
//   </div>
// </footer>

//         </>
//     )
// }


"use client";

import Link from "next/link";
import { useState } from "react";
import LogoIcon from "../header/LogoIcon";
import { usePathname } from "next/navigation";



export default function Footer2() {

  const pathname = usePathname();

  // ---------- FORM STATES ----------
  const [formData, setFormData] = useState({
    name: "",
    organisation: "",
    email: "",
    phone: "",
    category: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // ---------- HANDLE INPUT CHANGE ----------
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ---------- SUBMIT FORM ----------
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        setSuccessMessage("Message sent successfully! We'll get back to you soon.");
        setErrorMessage("");

        setFormData({
          name: "",
          organisation: "",
          email: "",
          phone: "",
          category: "",
          message: "",
        });

        setTimeout(() => setSuccessMessage(""), 5000);
      } else {
        setErrorMessage("Failed to send message. Please try again.");
        setTimeout(() => setErrorMessage(""), 5000);
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Something went wrong. Please try again.");
      setTimeout(() => setErrorMessage(""), 5000);
    } finally {
      setLoading(false);
    }
  };

  const categories = ["Website", "Marketing", "SEO", "Branding", "Other"];

  return (
    <>
      {/* ⭐ SINGLE FOOTER ONLY ⭐ */}
      <footer className="footer__area white-bg">

        {/* ================= Contact Section ================= */}
        {pathname !== "/contact" && (
  <section className="contact-area pt-60 pb-120 position-relative overflow-hidden">
          <div className="container">
            <div className="contact__wrapper">

              {/* LEFT IMAGE */}
              <div className="contact__image">
                <img
                  src="/assets/img/service/getintouchbm.png"
                  alt="Get in touch with Brave Moor"
                />
              </div>

              {/* RIGHT FORM */}
              <div className="contact__content">
                <h2 className="contact__title">
                  Talk to us today <br />
                  Your growth story starts with <span>Brave Moor.</span>
                </h2>

                <p className="contact__subtitle">
                  Got a project you want to collaborate on? <br />
                  Or just fancy a chat?
                </p>

                {/* SUCCESS / ERROR MESSAGES */}
                {successMessage && (
                  <div
                    style={{
                      background: "#e6f9e6",
                      border: "1px solid #37b24d",
                      color: "#2f9e44",
                      padding: "12px 16px",
                      borderRadius: "8px",
                      marginBottom: "15px",
                      fontWeight: "500",
                      fontSize: "14px",
                    }}
                  >
                    {successMessage}
                  </div>
                )}

                {errorMessage && (
                  <div
                    style={{
                      background: "#ffe6e6",
                      border: "1px solid #ff6b6b",
                      color: "#d63333",
                      padding: "12px 16px",
                      borderRadius: "8px",
                      marginBottom: "15px",
                      fontWeight: "500",
                      fontSize: "14px",
                    }}
                  >
                    {errorMessage}
                  </div>
                )}

                {/* FORM */}
                <form className="contact__form" onSubmit={handleSubmit}>
                  
                  <div className="form-group">
                    <label><img src="/assets/img/icon/svg-img/user.svg" alt="icon" /></label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name *"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label><img src="/assets/img/icon/svg-img/brifcase.svg" alt="icon" /></label>
                    <input
                      type="text"
                      name="organisation"
                      placeholder="Organisation (optional)"
                      value={formData.organisation}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label><img src="/assets/img/icon/svg-img/envelope.svg" alt="icon" /></label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email *"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label><img src="/assets/img/icon/svg-img/phone.svg" alt="icon" /></label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone (optional)"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label><img src="/assets/img/icon/svg-img/dropdown.svg" alt="icon" /></label>
                    <select
                      name="category"
                      required
                      value={formData.category}
                      onChange={handleChange}
                      style={{ paddingLeft: "45px" }}
                    >
                      <option value="">Select Service *</option>
                      {categories.map((cat, i) => (
                        <option key={i} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label><img src="/assets/img/icon/svg-img/brush.svg" alt="icon" /></label>
                    <textarea
                      name="message"
                      placeholder="Message *"
                      required
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <button type="submit" className="btn btn-three square-btn mt-30">
                    {loading ? "SENDING..." : "SEND MESSAGE"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        )}

        {/* ================= FOOTER TOP ================= */}
        <div className="footer__top">
          <div className="container">
            <div className="footer__grid">

              {/* BRAND */}
              <div className="footer__col footer__brand">
                <div style={{ display: "flex" }}>
                  <LogoIcon textColor="black" direction="vertical" width={60} height={70} />
                </div>

                <p className="pt-20">
                  We’re building brands that matter. <br />
                  Brave Moor helps businesses grow through strategy, creativity, and performance.
                </p>
              </div>

              {/* QUICK LINKS */}
              <div className="footer__col">
                <h4>Quick Links</h4>
                <ul>
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/services">Services</Link></li>
                  <li><Link href="/about">About</Link></li>
                  <li><Link href="/blogs">Blogs</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                </ul>
              </div>

              {/* LEGAL */}
              <div className="footer__col">
                <h4>Legal</h4>
                <ul>
                  <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                  <li><Link href="/terms">Terms & Conditions</Link></li>
                  <li><Link href="/cookie-policy">Cookie Policy</Link></li>
                </ul>
              </div>

              {/* SOCIAL */}
              <div className="footer__col">
                <h4>Follow Us</h4>
                <ul className="footer__social">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fab fa-facebook-f"></i> Facebook
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/brave.moor/" target="_blank">
                      <i className="fab fa-instagram"></i> Instagram
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="fab fa-linkedin-in"></i> LinkedIn
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>

        {/* ================= FOOTER BOTTOM ================= */}
        <div className="footer__bottom text-center">
          <p>
            © {new Date().getFullYear()} <strong>Brave Moor</strong> — All rights reserved.
          </p>
        </div>

      </footer>
    </>
  );
}
