// import Layout from "@/components/layout/Layout"
// import Link from "next/link"
// export default function Contact() {

//     return (
//         <>

//             <Layout headerStyle={8} footerStyle={2} breadcrumbTitle="Contact">
//                 <div>
//                     <section className="contact-area-1 pt-120 pb-120 overflow-hidden">
//                         <div className="container">
//                             <div className="section__title mb-60">
//                                 <h2 className="title">LET'S GET IN TOUCH</h2>
//                             </div>
//                             <div className="row gy-60">
//                                 <div className="col-lg-6">
//                                     <div className="contact__info-wrap">
//                                         <ul className="list-wrap">
//                                             <li>
//                                                 <h6 className="title">Phone</h6>
//                                                 <Link href="/tel:0123456789">+(2) 578-365-379</Link>
//                                             </li>
//                                             <li>
//                                                 <h6 className="title">Email</h6>
//                                                 <Link href="mailto:hello@vexa.com">hello@vexa.com</Link>
//                                             </li>
//                                             <li>
//                                                 <h6 className="title">Headquarters</h6>
//                                                 27 Division St, New York, <br className="d-md-block d-none" /> NY 10002, USA
//                                             </li>
//                                             <li>
//                                                 <Link href="https://www.google.com/maps" className="link-btn">
//                                                     See on Google Map
//                                                     <i className="icon-arrow-top-left" />
//                                                 </Link>
//                                             </li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-6">
//                                     <div className="contact-form-wrap">
//                                         <div className="section__title mb-60">
//                                             <h4 className="subtitle">Got a project you want to collaborate on?
//                                                 Or just fancy a chat?</h4>
//                                         </div>
//                                         <form action="mail.php" method="POST" className="contact__form ajax-contact">
//                                             <div className="row gy-35">
//                                                 <div className="col-12 form-group">
//                                                     <label className="form-icon-left"><img src="/assets/img/icon/svg-img/user.svg" alt="icon" /></label>
//                                                     <input type="text" className="form-control style-border" name="name" id="name" placeholder="Name*" />
//                                                 </div>
//                                                 <div className="col-12 form-group">
//                                                     <label className="form-icon-left"><img src="/assets/img/icon/svg-img/brifcase.svg" alt="icon" /></label>
//                                                     <input type="text" className="form-control style-border" name="website" id="website" placeholder="Organisation*" />
//                                                 </div>
//                                                 <div className="col-12 form-group">
//                                                     <label className="form-icon-left"><img src="/assets/img/icon/svg-img/envelope.svg" alt="icon" /></label>
//                                                     <input type="text" className="form-control style-border" name="email" id="email" placeholder="Email*" />
//                                                 </div>
//                                                 <div className="col-12 form-group">
//                                                     <label className="form-icon-left"><img src="/assets/img/icon/svg-img/brush.svg" alt="icon" /></label>
//                                                     <textarea name="message" placeholder="Message*" id="contactForm" className="form-control style-border" />
//                                                 </div>
//                                             </div>
//                                             <button type="submit" className="btn btn-three square-btn mt-60">
//                                                 SEND MESSAGE
//                                             </button>
//                                         </form>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </section>
//                     {/*======== / Contact Section ========*/}
//                     {/* contact-map */}
//                     <div className="contact-map">
//                         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48409.69813174607!2d-74.05163325136718!3d40.68264649999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bae694479a3%3A0xb9949385da52e69e!2sBarclays%20Center!5e0!3m2!1sen!2sbd!4v1684309529719!5m2!1sen!2sbd" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
//                     </div>
//                 </div>

//             </Layout>
//         </>
//     )
// }


// "use client";

// import Layout from "@/components/layout/Layout";
// import Link from "next/link";
// import { useState } from "react";

// import OurOffice360 from "@/components/360/OurOffice360";


// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     organisation: "",
//     email: "",
//     phone: "",
//     category: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     // You can integrate EmailJS, SendGrid, or your own API here
//   };

//   const services = [
//     "SEO Optimization",
//     "Social Media Marketing",
//     "Performance Marketing",
//     "Content Marketing",
//     "Influencer Marketing",
//     "Brand Strategy",
//     "Logo & Visual Design",
//     "Website Design",
//     "Website Development",
//     "E-Commerce Development",
//     "WordPress Development",
//     "UI/UX Design",
//     "App Development",
//     "Lead Generation",
//     "Email Marketing",
//     "Video Marketing",
//     "Public Relations (PR)",
//     "Online Reputation Management",
//     "Marketing Automation",
//     "AI Marketing",
//     "Other",
//   ];

//   return (
//     <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="Contact">
//       <div>
//         <section className="contact-area-1 pt-120 pb-120 overflow-hidden">
//           <div className="container">
//             <div className="section__title mb-60">
//               <h2 className="title">LET'S GET IN TOUCH</h2>
//             </div>

//             <div className="row gy-60">
//               {/* Contact Info */}
//               <div className="col-lg-6">
//                 <div className="contact__info-wrap">
//                   <ul className="list-wrap">
//                     <li>
//                       <h6 className="title">Phone</h6>
//                       <Link href="tel:+917000000000">+91 70000 00000</Link>
//                     </li>
//                     <li>
//                       <h6 className="title">Email</h6>
//                       <Link href="mailto:hello@bravemoor.com">
//                         hello@bravemoor.com
//                       </Link>
//                     </li>
//                     <li>
//                       <h6 className="title">Headquarters</h6>
//                       Gurugram, Haryana, India
//                     </li>
//                     <li>
//                       <Link
//                         href="https://www.google.com/maps"
//                         className="link-btn"
//                         target="_blank"
//                       >
//                         See on Google Map <i className="icon-arrow-top-left" />
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//               </div>

//               {/* Contact Form */}
//               <div className="col-lg-6">
//                 <div className="contact-form-wrap">
//                   <div className="section__title mb-40">
//                     <h4 className="subtitle">
//                       Got a project you want to collaborate on? <br />
//                       Or just fancy a chat?
//                     </h4>
//                   </div>

//                   <form onSubmit={handleSubmit} className="contact__form">
//                     <div className="row gy-30">
//                       <div className="col-12 form-group">
//                         <input
//                           type="text"
//                           name="name"
//                           className="form-control style-border"
//                           placeholder="Name*"
//                           value={formData.name}
//                           onChange={handleChange}
//                           required
//                         />
//                       </div>

//                       <div className="col-12 form-group">
//                         <input
//                           type="text"
//                           name="organisation"
//                           className="form-control style-border"
//                           placeholder="Organisation*"
//                           value={formData.organisation}
//                           onChange={handleChange}
//                         />
//                       </div>

//                       <div className="col-12 form-group">
//                         <input
//                           type="email"
//                           name="email"
//                           className="form-control style-border"
//                           placeholder="Email*"
//                           value={formData.email}
//                           onChange={handleChange}
//                           required
//                         />
//                       </div>

//                       <div className="col-12 form-group">
//                         <input
//                           type="tel"
//                           name="phone"
//                           className="form-control style-border"
//                           placeholder="Phone (with country code)* e.g. +91 9876543210"
//                           value={formData.phone}
//                           onChange={handleChange}
//                           required
//                         />
//                       </div>

//                       <div className="col-12 form-group">
//                         <select
//                           name="category"
//                           className="form-control style-border"
//                           value={formData.category}
//                           onChange={handleChange}
//                           required
//                         >
//                           <option value="">Select Your Service*</option>
//                           {services.map((service, index) => (
//                             <option key={index} value={service}>
//                               {service}
//                             </option>
//                           ))}
//                         </select>
//                       </div>

//                       <div className="col-12 form-group">
//                         <textarea
//                           name="message"
//                           placeholder="Message*"
//                           className="form-control style-border"
//                           rows={4}
//                           value={formData.message}
//                           onChange={handleChange}
//                           required
//                         />
//                       </div>
//                     </div>

//                     <button type="submit" className="btn btn-three square-btn mt-40">
//                       SEND MESSAGE
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Google Map (commented for now) */}
//         {/*
//         <div className="contact-map">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=..."
//             style={{ border: 0 }}
//             allowFullScreen
//             loading="lazy"
//           />
//         </div>
//         */}

//         <OurOffice360 />

//       </div>
//     </Layout>
//   );
// }

// "use client";

// import Layout from "@/components/layout/Layout";
// import Link from "next/link";
// import { useState } from "react";
// import OurOffice360 from "@/components/360/OurOffice360";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     organisation: "",
//     email: "",
//     phone: "",
//     category: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     // You can integrate EmailJS, SendGrid, or your API
//   };

//   const services = [
//     "SEO Optimization",
//     "Social Media Marketing",
//     "Performance Marketing",
//     "Content Marketing",
//     "Influencer Marketing",
//     "Brand Strategy",
//     "Logo & Visual Design",
//     "Website Design",
//     "Website Development",
//     "E-Commerce Development",
//     "WordPress Development",
//     "UI/UX Design",
//     "App Development",
//     "Lead Generation",
//     "Email Marketing",
//     "Video Marketing",
//     "Public Relations (PR)",
//     "Online Reputation Management",
//     "Marketing Automation",
//     "AI Marketing",
//     "Other",
//   ];

//   return (
//     <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="Contact">
//       <section className="contact-area-1 pt-120 pb-120 overflow-hidden">
//         <div className="container">
//           <div className="section__title mb-60">
//             <h2 className="title">LET'S GET IN TOUCH</h2>
//           </div>

//           <div className="row gy-60">
//             {/* Contact Info */}
//             <div className="col-lg-6">
//               <div className="contact__info-wrap">
//                 <ul className="list-wrap">
//                   <li>
//                     <h6 className="title">Phone</h6>
//                     <Link href="tel:+917000000000">+91 70000 00000</Link>
//                   </li>
//                   <li>
//                     <h6 className="title">Email</h6>
//                     <Link href="mailto:hello@bravemoor.com">
//                       hello@bravemoor.com
//                     </Link>
//                   </li>
//                   <li>
//                     <h6 className="title">Headquarters</h6>
//                     Gurugram, Haryana, India
//                   </li>
//                   <li>
//                     <Link
//                       href="https://www.google.com/maps"
//                       className="link-btn"
//                       target="_blank"
//                     >
//                       See on Google Map <i className="icon-arrow-top-left" />
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             {/* Contact Form */}
//             <div className="col-lg-6">
//               <div className="contact-form-wrap">
//                 <div className="section__title mb-40">
//                   <h4 className="subtitle">
//                     Got a project you want to collaborate on? <br />
//                     Or just fancy a chat?
//                   </h4>
//                 </div>

//                 <form onSubmit={handleSubmit} className="contact__form">
//                   <div className="row gy-30">
//                     <div className="col-12 form-group">
//                       <input
//                         type="text"
//                         name="name"
//                         className="form-control style-border"
//                         placeholder="Name*"
//                         value={formData.name}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>

//                     <div className="col-12 form-group">
//                       <input
//                         type="text"
//                         name="organisation"
//                         className="form-control style-border"
//                         placeholder="Organisation*"
//                         value={formData.organisation}
//                         onChange={handleChange}
//                       />
//                     </div>

//                     <div className="col-12 form-group">
//                       <input
//                         type="email"
//                         name="email"
//                         className="form-control style-border"
//                         placeholder="Email*"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>

//                     <div className="col-12 form-group">
//                       <input
//                         type="tel"
//                         name="phone"
//                         className="form-control style-border"
//                         placeholder="Phone (with country code)* e.g. +91 9876543210"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>

//                     <div className="col-12 form-group">
//                       <select
//                         name="category"
//                         className="form-control style-border"
//                         value={formData.category}
//                         onChange={handleChange}
//                         required
//                       >
//                         <option value="">Select Your Service*</option>
//                         {services.map((service, index) => (
//                           <option key={index} value={service}>
//                             {service}
//                           </option>
//                         ))}
//                       </select>
//                     </div>

//                     <div className="col-12 form-group">
//                       <textarea
//                         name="message"
//                         placeholder="Message*"
//                         className="form-control style-border"
//                         rows={4}
//                         value={formData.message}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                   </div>

//                   <button
//                     type="submit"
//                     className="btn btn-three square-btn mt-40"
//                   >
//                     SEND MESSAGE
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
        
//       </section>

//       {/* Interactive 360° viewer */}
//       <OurOffice360 />
//     </Layout>
//   );
// }

// ok hai 19 novmber ko change 



// "use client";

// import Layout from "@/components/layout/Layout";
// import Link from "next/link";
// import { useState } from "react";
// import OurOffice360 from "@/components/360/OurOffice360";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     organisation: "",
//     email: "",
//     phone: "",
//     category: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

// const handleChange = (
//   e: React.ChangeEvent<
//     HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//   >
// ) => {
//   setFormData({ ...formData, [e.target.name]: e.target.value });
// };

// const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();
//   setLoading(true);

//   try {
//     const res = await fetch("/api/sendMail", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });

//     const result = await res.json();

//     if (result.success) {
//       alert("✅ Message sent successfully! We'll get back to you soon.");
//       setFormData({
//         name: "",
//         organisation: "",
//         email: "",
//         phone: "",
//         category: "",
//         message: "",
//       });
//     } else {
//       alert("❌ Failed to send message. Please try again later.");
//     }
//   } catch (error) {
//     console.error("Error:", error);
//     alert("⚠️ Something went wrong. Please try again later.");
//   } finally {
//     setLoading(false);
//   }
// };


//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   setLoading(true);

//   //   try {
//   //     const res = await fetch("/api/sendMail", {
//   //       method: "POST",
//   //       headers: { "Content-Type": "application/json" },
//   //       body: JSON.stringify(formData),
//   //     });

//   //     const result = await res.json();

//   //     if (result.success) {
//   //       alert("✅ Message sent successfully! We'll get back to you soon.");
//   //       setFormData({
//   //         name: "",
//   //         organisation: "",
//   //         email: "",
//   //         phone: "",
//   //         category: "",
//   //         message: "",
//   //       });
//   //     } else {
//   //       alert("❌ Failed to send message. Please try again later.");
//   //     }
//   //   } catch (error) {
//   //     console.error("Error:", error);
//   //     alert("⚠️ Something went wrong. Please try again later.");
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   const services = [
//     "SEO Optimization",
//     "Social Media Marketing",
//     "Performance Marketing",
//     "Content Marketing",
//     "Influencer Marketing",
//     "Brand Strategy",
//     "Logo & Visual Design",
//     "Website Design",
//     "Website Development",
//     "E-Commerce Development",
//     "WordPress Development",
//     "UI/UX Design",
//     "App Development",
//     "Lead Generation",
//     "Email Marketing",
//     "Video Marketing",
//     "Public Relations (PR)",
//     "Online Reputation Management",
//     "Marketing Automation",
//     "AI Marketing",
//     "Other",
//   ];

//   return (
//     <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="Contact">
//       <section className="contact-area-1 pt-120 pb-120 overflow-hidden">
//         <div className="container">
//           <div className="section__title mb-60">
//             <h2 className="title">LET'S GET IN TOUCH</h2>
//           </div>

//           <div className="row gy-60">
//             {/* Contact Info */}
//             <div className="col-lg-6">
//               <div className="contact__info-wrap">
//                 <ul className="list-wrap">
//                   <li>
//                     <h6 className="title">Phone</h6>
//                     <Link href="tel:+917000000000">+91 70000 00000</Link>
//                   </li>
//                   <li>
//                     <h6 className="title">Email</h6>
//                     <Link href="mailto:hello@bravemoor.com">
//                       hello@bravemoor.com
//                     </Link>
//                   </li>
//                   <li>
//                     <h6 className="title">Headquarters</h6>
//                     Gurugram, Haryana, India
//                   </li>
//                   <li>
//                     <Link
//                       href="https://www.google.com/maps"
//                       className="link-btn"
//                       target="_blank"
//                     >
//                       See on Google Map <i className="icon-arrow-top-left" />
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             {/* Contact Form */}
//             <div className="col-lg-6">
//               <div className="contact-form-wrap">
//                 <div className="section__title mb-40">
//                   <h4 className="subtitle">
//                     Got a project you want to collaborate on? <br />
//                     Or just fancy a chat?
//                   </h4>
//                 </div>

//                 <form onSubmit={handleSubmit} className="contact__form">
//                   <div className="row gy-30">
//                     <div className="col-12 form-group">
//                       <input
//                         type="text"
//                         name="name"
//                         className="form-control style-border"
//                         placeholder="Name*"
//                         value={formData.name}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>

//                     <div className="col-12 form-group">
//                       <input
//                         type="text"
//                         name="organisation"
//                         className="form-control style-border"
//                         placeholder="Organisation*"
//                         value={formData.organisation}
//                         onChange={handleChange}
//                       />
//                     </div>

//                     <div className="col-12 form-group">
//                       <input
//                         type="email"
//                         name="email"
//                         className="form-control style-border"
//                         placeholder="Email*"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>

//                     <div className="col-12 form-group">
//                       <input
//                         type="tel"
//                         name="phone"
//                         className="form-control style-border"
//                         placeholder="Phone (with country code)* e.g. +91 9876543210"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>

//                     <div className="col-12 form-group">
//                       <select
//                         name="category"
//                         className="form-control style-border"
//                         value={formData.category}
//                         onChange={handleChange}
//                         required
//                       >
//                         <option value="">Select Your Service*</option>
//                         {services.map((service, index) => (
//                           <option key={index} value={service}>
//                             {service}
//                           </option>
//                         ))}
//                       </select>
//                     </div>

//                     <div className="col-12 form-group">
//                       <textarea
//                         name="message"
//                         placeholder="Message*"
//                         className="form-control style-border"
//                         rows={4}
//                         value={formData.message}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                   </div>

//                   <button
//                     type="submit"
//                     className="btn btn-three square-btn mt-40 bravemoor-btn"
//                     disabled={loading}
//                   >
//                     {loading ? "SENDING..." : "SEND MESSAGE"}
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <OurOffice360 />
//     </Layout>
//   );
// }

// date 27/2/ todya i ma adding bot free code like save from bot

"use client";

import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import OurOffice360 from "@/components/360/OurOffice360";

import "@/public/assets/css/contactform.css";


export default function Contact() {
  // ---------- FORM STATES ----------
  const [formData, setFormData] = useState({
    name: "",
    organisation: "",
    email: "",
    phone: "",
    category: "",
    message: "",
          website: "", 
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // ---------- INPUT CHANGE ----------
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
        setErrorMessage("Failed to send message. Please try again later.");
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

  const services = [
    "SEO Optimization",
    "Social Media Marketing",
    "Performance Marketing",
    "Content Marketing",
    "Influencer Marketing",
    "Brand Strategy",
    "Logo & Visual Design",
    "Website Design",
    "Website Development",
    "E-Commerce Development",
    "WordPress Development",
    "UI/UX Design",
    "App Development",
    "Lead Generation",
    "Email Marketing",
    "Video Marketing",
    "Public Relations (PR)",
    "Online Reputation Management",
    "Marketing Automation",
    "AI Marketing",
    "Other",
  ];

  return (
    <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="Contact">
      <section className="contact-area-1 pt-120 pb-120 overflow-hidden">
        <div className="container">
          <div className="section__title mb-60">
            <h2 className="title">LET'S GET IN TOUCH</h2>
          </div>

          <div className="row gy-60">
            {/* Contact Info */}
            <div className="col-lg-6">
              <div className="contact__info-wrap">
                <ul className="list-wrap">
                  <li>
                    <h6 className="title">Phone</h6>
                    <Link href="tel:+917000000000">+91 70000 00000</Link>
                  </li>
                  <li>
                    <h6 className="title">Email</h6>
                    <Link href="mailto:hello@bravemoor.com">hello@bravemoor.com</Link>
                  </li>
                  <li>
                    <h6 className="title">Headquarters</h6>
                    Gurugram, Haryana, India
                  </li>
                  <li>
                    <Link href="https://www.google.com/maps" className="link-btn" target="_blank">
                      See on Google Map <i className="icon-arrow-top-left" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-6">
              <div className="contact-form-wrap">
                <div className="section__title mb-40">
                  <h4 className="subtitle">
                    Got a project you want to collaborate on? <br />
                    Or just fancy a chat?
                  </h4>
                </div>

                {/* SUCCESS/ERROR MESSAGE */}
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

                <form className="contact__form" onSubmit={handleSubmit}>

                         <input
    type="text"
    name="website"
    style={{ display: "none" }}
    tabIndex={-1}
    autoComplete="off"
  />

  {/* SUCCESS */}
  {successMessage && (
    <div className="alert-success-box">{successMessage}</div>
  )}

  {/* ERROR */}
  {errorMessage && (
    <div className="alert-error-box">{errorMessage}</div>
  )}

  {/* NAME */}
  <div className="form-group bm-form">
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

  {/* ORGANISATION */}
  <div className="form-group bm-form">
    <label><img src="/assets/img/icon/svg-img/brifcase.svg" alt="icon" /></label>
    <input
      type="text"
      name="organisation"
      placeholder="Organisation (optional)"
      value={formData.organisation}
      onChange={handleChange}
    />
  </div>

  {/* EMAIL */}
  <div className="form-group bm-form">
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

  {/* PHONE */}
  <div className="form-group bm-form">
    <label><img src="/assets/img/icon/svg-img/phone.svg" alt="icon" /></label>
    <input
      type="tel"
      name="phone"
      placeholder="Phone (optional)"
      value={formData.phone}
      onChange={handleChange}
    />
  </div>

  {/* CATEGORY — Long dropdown */}
  <div className="form-group bm-form">
    <label><img src="/assets/img/icon/svg-img/dropdown.svg" alt="icon" /></label>
    <select
      name="category"
      required
      value={formData.category}
      onChange={handleChange}
      className="bm-select"
    >
      <option value="">Select Your Service *</option>

      <option value="SEO Optimization">SEO Optimization</option>
      <option value="Social Media Marketing">Social Media Marketing</option>
      <option value="Performance Marketing">Performance Marketing</option>
      <option value="Content Marketing">Content Marketing</option>
      <option value="Influencer Marketing">Influencer Marketing</option>
      <option value="Brand Strategy">Brand Strategy</option>
      <option value="Logo & Visual Design">Logo & Visual Design</option>
      <option value="Website Design">Website Design</option>
      <option value="Website Development">Website Development</option>
      <option value="E-Commerce Development">E-Commerce Development</option>
      <option value="WordPress Development">WordPress Development</option>
      <option value="UI/UX Design">UI/UX Design</option>
      <option value="App Development">App Development</option>
      <option value="Lead Generation">Lead Generation</option>
      <option value="Email Marketing">Email Marketing</option>
      <option value="Video Marketing">Video Marketing</option>
      <option value="Public Relations (PR)">Public Relations (PR)</option>
      <option value="Online Reputation Management">Online Reputation Management</option>
      <option value="Marketing Automation">Marketing Automation</option>
      <option value="AI Marketing">AI Marketing</option>
      <option value="Other">Other</option>
    </select>
  </div>

  {/* MESSAGE */}
  <div className="form-group bm-form">
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
        </div>
      </section>

      <OurOffice360 />
    </Layout>
  );
}
