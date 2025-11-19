// import Accordion from '@/components/elements/Accordion'
// import Layout from "@/components/layout/Layout"
// import Link from "next/link"
// import { servicesData } from "@/data/servicesData";


// export default function Service() {

//     return (
//         <>

//             <Layout headerStyle={8} footerStyle={2} breadcrumbTitle="Our Services">

                
//                 <div>

//                                     <section className="skill-area-1 pt-60 pb-60 new-white-bg-sections position-relative">
//                 {/* <div className="skill-area-bg-shape1 square-shape-wrap">
//                     <div className="square-shape1" />
//                     <div className="square-shape3" />
//                     <div className="square-shape4" />
//                 </div> */}
//                 <div className="container">
//                     <div className="row gy-40 align-items-center text-center">

//                     <div className="section__title mb-50 wow img-custom-anim-left">
//                                         <h2 className="title text-black">Services That Shape Brands and <br /> Build Momentum</h2>
//                                         <p className="sec-text text-black">At Brave Moor, we don’t just market — we connect. Every service we offer is built on one goal: to help your brand earn attention, trust, and results that last. Whether you’re starting small or scaling big, we craft strategies that make every move matter.</p>
//                                     </div>

//                     </div>
                
//                     <div className="row gy-40 align-items-center mfp-hide">
                        
//                         <div className="col-xl-5">
//                             <div className="skill-thumb-box1 wow img-custom-anim-left ">
//                                 <img src="https://www.singlegrain.com/wp-content/themes/singlegrain/assets/dist/images/careers/Our-Values-Image-v2.png" alt="img" />
//                                 {/* <div className="square-shape-wrap">
//                                     <div className="square-shape1" />
//                                     <div className="square-shape2" />
//                                     <div className="square-shape3" />
//                                     <div className="square-shape4" />
//                                 </div> */}
//                             </div>
//                         </div>
//                         <div className="col-xl-7 m-0">
//                             <div className="skill-wrap1">
//                                 <div className="section__title mb-50 wow img-custom-anim-left">
//                                     {/* <h2 className="title blck-title">Drdiven by Brand Growth, Rooted in Trust</h2> */}
//                                     <p className="sec-text blck-title m-0">

//                                        We exist for one purpose: to help brands earn trust that lasts. Every strategy we craft blends data with emotion, because real growth doesn’t come from clicks — it comes from connection. <br /> <br />
//                                        Our founder, Krishna Saini, started Brave Moor with the belief that marketing should feel human again. From humble beginnings to helping businesses find their digital voice, the journey has been driven by one value — showing up when it truly matters. <br /> <br /> 
//                                        Today, Brave Moor stands as a space where creativity meets clarity. We’re not here to follow trends; we’re here to build stories that move people, and brands that stay remembered.
//                                         </p>
//                                 </div>
                               
//                             </div>
//                         </div>
//                     </div>
                    
//                 </div>
//             </section>

//                     <section className="service-area-2 pt-90 pb-120">
//                         <div className="container">
//                             <div className="row gx-30 gy-30">
//                                 <div className="col-xl-4 col-md-6">
//                                     <div className="service-card style2">
//                                         <div className="service-card-img">
//                                             <img src="/assets/img/service/1-3.jpg" alt="img" />
//                                         </div>
//                                         <h5 className="service-card-number">01</h5>
//                                         <h4 className="service-card-title"><Link href="/service-details">Website Design & Development</Link></h4>
//                                         <p className="service-card-text">We design websites that don’t just look good — they perform. Built for speed, clarity, and conversion, your site becomes your strongest salesperson.</p>
//                                         <Link href="/service-details" className="link-btn">
//                                             Learn More
//                                             <i className="icon-arrow-top-left" />
//                                         </Link>
//                                     </div>
//                                 </div>
//                                 <div className="col-xl-4 col-md-6">
//                                     <div className="service-card style2">
//                                         <div className="service-card-img">
//                                             <img src="/assets/img/service/1-2.jpg" alt="img" />
//                                         </div>
//                                         <h5 className="service-card-number">02</h5>
//                                         <h4 className="service-card-title"><Link href="/service-details">SEO & Content Strategy</Link></h4>
//                                         <p className="service-card-text">Visibility is power. Our SEO and storytelling approach turns your brand into an authority that ranks higher and resonates deeper.</p>
//                                         <Link href="/service-details" className="link-btn">
//                                             Learn More
//                                             <i className="icon-arrow-top-left" />
//                                         </Link>
//                                     </div>
//                                 </div>
//                                 <div className="col-xl-4 col-md-6">
//                                     <div className="service-card style2">
//                                         <div className="service-card-img">
//                                             <img src="/assets/img/service/1-3.jpg" alt="img" />
//                                         </div>
//                                         <h5 className="service-card-number">03</h5>
//                                         <h4 className="service-card-title"><Link href="/service-details">Social Media Marketing</Link></h4>
//                                         <p className="service-card-text">Every post is a chance to connect. We help your brand stand out, speak up, and spark conversations that drive loyalty.</p>
//                                         <Link href="/service-details" className="link-btn">
//                                             Learn More
//                                             <i className="icon-arrow-top-left" />
//                                         </Link>
//                                     </div>
//                                 </div>
//                                 <div className="col-xl-4 col-md-6">
//                                     <div className="service-card style2">
//                                         <div className="service-card-img">
//                                             <img src="/assets/img/service/1-2.jpg" alt="img" />
//                                         </div>
//                                         <h5 className="service-card-number">04</h5>
//                                         <h4 className="service-card-title"><Link href="/service-details">Performance Advertising (Meta / Google Ads)</Link></h4>
//                                         <p className="service-card-text">Stop wasting ad spend. Our performance campaigns focus on meaningful metrics — clicks that convert and audiences that stick.</p>
//                                         <Link href="/service-details" className="link-btn">
//                                             Learn More
//                                             <i className="icon-arrow-top-left" />
//                                         </Link>
//                                     </div>
//                                 </div>
//                                 <div className="col-xl-4 col-md-6">
//                                     <div className="service-card style2">
//                                         <div className="service-card-img">
//                                             <img src="/assets/img/service/1-3.jpg" alt="img" />
//                                         </div>
//                                         <h5 className="service-card-number">05</h5>
//                                         <h4 className="service-card-title"><Link href="/service-details">Brand Strategy & Identity Design</Link></h4>
//                                         <p className="service-card-text">A strong brand isn’t just seen — it’s remembered. We help you find your unique voice, look, and message that people instantly recognize.</p>
//                                         <Link href="/service-details" className="link-btn">
//                                             Learn More
//                                             <i className="icon-arrow-top-left" />
//                                         </Link>
//                                     </div>
//                                 </div>
//                                 <div className="col-xl-4 col-md-6">
//                                     <div className="service-card style2">
//                                         <div className="service-card-img">
//                                             <img src="/assets/img/service/1-2.jpg" alt="img" />
//                                         </div>
//                                         <h5 className="service-card-number">06</h5>
//                                         <h4 className="service-card-title"><Link href="/service-details">Email Marketing & Automation</Link></h4>
//                                         <p className="service-card-text">Keep your audience engaged long after they visit. Personalized emails and smart automations that nurture customers, not just leads.</p>
//                                         <Link href="/service-details" className="link-btn">
//                                             Learn More
//                                             <i className="icon-arrow-top-left" />
//                                         </Link>
//                                     </div>
//                                 </div>
//                                  <div className="col-xl-4 col-md-6">
//                                     <div className="service-card style2">
//                                         <div className="service-card-img">
//                                             <img src="/assets/img/service/1-2.jpg" alt="img" />
//                                         </div>
//                                         <h5 className="service-card-number">07</h5>
//                                         <h4 className="service-card-title"><Link href="/service-details">Analytics & Growth Consulting</Link></h4>
//                                         <p className="service-card-text">Growth starts with clarity. We track, measure, and fine-tune every effort to keep your brand evolving in the right direction.</p>
//                                         <Link href="/service-details" className="link-btn">
//                                             Learn More
//                                             <i className="icon-arrow-top-left" />
//                                         </Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </section>

//                                                         <section className="skill-area-1 pt-60 pb-60 new-white-bg-sections position-relative">
//                 {/* <div className="skill-area-bg-shape1 square-shape-wrap">
//                     <div className="square-shape1" />
//                     <div className="square-shape3" />
//                     <div className="square-shape4" />
//                 </div> */}
//                 <div className="container">
//                     <div className="row gy-40 align-items-center text-center">

//                     <div className="section__title mb-50 wow img-custom-anim-left">
//                                         <h2 className="title text-black">Growth That Feels Personal</h2>
//                                         <p className="sec-text text-black">We believe great marketing isn’t about being everywhere — it’s about showing up where it matters most. Let’s craft a strategy that amplifies your brand, connects with your audience, and builds something real <br /> — together.</p>
//                                     </div>

//                     </div>
                
//                     <div className="row gy-40 align-items-center mfp-hide">
                        
//                         <div className="col-xl-5">
//                             <div className="skill-thumb-box1 wow img-custom-anim-left ">
//                                 <img src="https://www.singlegrain.com/wp-content/themes/singlegrain/assets/dist/images/careers/Our-Values-Image-v2.png" alt="img" />
//                                 {/* <div className="square-shape-wrap">
//                                     <div className="square-shape1" />
//                                     <div className="square-shape2" />
//                                     <div className="square-shape3" />
//                                     <div className="square-shape4" />
//                                 </div> */}
//                             </div>
//                         </div>
//                         <div className="col-xl-7 m-0">
//                             <div className="skill-wrap1">
//                                 <div className="section__title mb-50 wow img-custom-anim-left">
//                                     {/* <h2 className="title blck-title">Drdiven by Brand Growth, Rooted in Trust</h2> */}
//                                     <p className="sec-text blck-title m-0">

//                                        We exist for one purpose: to help brands earn trust that lasts. Every strategy we craft blends data with emotion, because real growth doesn’t come from clicks — it comes from connection. <br /> <br />
//                                        Our founder, Krishna Saini, started Brave Moor with the belief that marketing should feel human again. From humble beginnings to helping businesses find their digital voice, the journey has been driven by one value — showing up when it truly matters. <br /> <br /> 
//                                        Today, Brave Moor stands as a space where creativity meets clarity. We’re not here to follow trends; we’re here to build stories that move people, and brands that stay remembered.
//                                         </p>
//                                 </div>
                               
//                             </div>
//                         </div>
//                     </div>
                    
//                 </div>
//             </section>
           
//                 </div>

//             </Layout>
//         </>
//     )
// }

// ye ok hai 1st hai
// import Layout from "@/components/layout/Layout";
// import Link from "next/link";
// import { servicesData } from "@/data/servicesData";

// export default function Service() {
//   return (
//     <Layout headerStyle={8} footerStyle={2} breadcrumbTitle="Our Services">
//       <section className="skill-area-1 pt-60 pb-60 new-white-bg-sections position-relative">
//         <div className="container">
//           <div className="section__title mb-50 text-center">
//             <h2 className="title text-black">
//               Services That Shape Brands and <br /> Build Momentum
//             </h2>
//             <p className="sec-text text-black">
//               At Brave Moor, we don’t just market — we connect. Every service we
//               offer is built on one goal: to help your brand earn attention,
//               trust, and results that last.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* 💡 Dynamic Services Section */}
//       <section className="service-area-2 pt-90 pb-120">
//         <div className="container">
//           <div className="row gx-30 gy-30">
//             {servicesData.map((service, index) => (
//               <div className="col-xl-4 col-md-6" key={service.slug}>
//                 <div className="service-card style2">
//                   <div className="service-card-img">
//                     <img src={service.image} alt={service.title} />
//                   </div>
//                   <h5 className="service-card-number">
//                     {String(index + 1).padStart(2, "0")}
//                   </h5>
//                   <h4 className="service-card-title">
//                     <Link href={`/services/${service.slug}`}>
//                       {service.title}
//                     </Link>
//                   </h4>
//                   <p className="service-card-text">
//                     {service.shortDescription}
//                   </p>
//                   <Link
//                     href={`/services/${service.slug}`}
//                     className="link-btn"
//                   >
//                     Learn More
//                     <i className="icon-arrow-top-left" />
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// }


"use client";

import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { servicesData } from "@/data/servicesData";

// ✅ Map services to fixed categories
const categories = [
  "Marketing Essentials",
  "Advanced Growth",
  "AI & Future Tech",
  "philosophy",
  "commitment",
  "method",

];

const categoryServices: { [key: string]: string[] } = {
  "Marketing Essentials": [
    "Website Development",
    "SEO Services",
    "Social Media Marketing",
    "Email Marketing",
    "Google/Facebook Ads",
    "Graphic Design & Branding",
    "Content Marketing",
  ],
  "Advanced Growth": [
    "Profit-First Marketing",
    "Conversion Rate Optimization",
    "Marketing Strategy & Planning",
    "Founder Brand Accelerator",
    "E-commerce Solutions",
    "Local SEO Dominance",
    "International Expansion",
  ],
  "AI & Future Tech": [
    "AI-Powered Marketing Automation",
    "AI Video Generation Studio",
    "Voice AI & Conversational Marketing",
    "Metaverse Brand Experiences",
    "Blockchain & Web3 Marketing",
    "Data Intelligence & BI Dashboards",
  ],
  "philosophy": ["Human-Centered Strategy", ],
  "commitment": ["Built for the Long Run", ],
  "method": ["Conversion-Focused Design", ],
};

export default function Service() {
  const [selectedCategory, setSelectedCategory] = useState("Marketing Essentials");

  // Filter services based on the selected category
  const filteredServices = servicesData.filter((service) =>
    categoryServices[selectedCategory].includes(service.title)
  );

  return (
    <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="Our Services">
      {/* Section Header */}
      <section className="skill-area-1 pt-60 pb-60 new-white-bg-sections position-relative">
        <div className="container">
          <div className="section__title mb-50 text-center">
            <h2 className="title text-black">
              Services That Shape Brands and <br /> Build Momentum
            </h2>
            <p className="sec-text text-black">
              At Brave Moor, we don’t just market — we connect. Every service we
              offer is built on one goal: to help your brand earn attention,
              trust, and results that last.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section with Category Filter */}
      <section className="service-area-2 pt-30 pb-120">
        <div className="container">
          {/* Filter Buttons */}
          <div className="text-center mb-40">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`mx-2 px-4 py-2 rounded-full border transition-all ${
                  selectedCategory === cat
                    ? "bg-black text-white border-black"
                    : "bg-transparent text-black border-gray-400 hover:bg-black hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Service Cards */}
          <div className="row gx-30 gy-30">
            {filteredServices.map((service, index) => (
              <div className="col-xl-4 col-md-6" key={service.slug}>
                <div className="service-card style2">
                  <div className="service-card-img">
                    <img src={service.image} alt={service.title} />
                  </div>
                  <h5 className="service-card-number">
                    {String(index + 1).padStart(2, "0")}
                  </h5>
                  <h4 className="service-card-title">
                    <Link href={`/services/${service.slug}`}>
                      {service.title}
                    </Link>
                  </h4>
                  <p className="service-card-text">
                    {service.shortDescription}
                  </p>
                  <Link href={`/services/${service.slug}`} className="link-btn">
                    Learn More
                    <i className="icon-arrow-top-left" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}


// ok up one also ok

