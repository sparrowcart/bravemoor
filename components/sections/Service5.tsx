// import Link from "next/link"
// import '../../public/assets/css/newhome.css'; 

// export default function Service5() {
//     return (
//         <>
//             <section className="service-area-6 pb-60 black2-bg whybmsec">
//                 <div className="section__title section__title-three mb-55 wow img-custom-anim-left">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col-xxl-9">
//                                 <h6 className="sub-title2 text-white" style={{opacity:'0'}}>SERVICES</h6>
//                                 <h2 className="title title2 text-white" style={{paddingTop:'60px'}}> Brave Moor?</h2>
//                                   <p className="mb-60" style={{color:"#ffffff",fontSize:'18px',fontWeight:500}}>
//                                     We’re not just another digital agency — we’re brand builders, creative thinkers, 
//                                     <br />and growth partners. From strategy to execution, we focus on real business impact — <br />not just deliverables.



//                       </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="container">
//                     <div className="row gy-30 justify-content-center">
//                         <div className="col-lg-4 col-md-6">
//                             <div className="service-card2 shine-animate-item">
//                                 <h5 className="service-card2-number">01.</h5>
//                                 <h4 className="service-card2-title"><Link href="/service-details">Human-Centered Strategy</Link></h4>
//                                 <p className="service-card2-text">We design for emotion, memory, and action — creating experiences that people connect with.
// </p>
//                                 <div className="service-card2-img shine-animate">
//                                     <img src="/assets/img/service/6-1.jpg" alt="img" />
//                                     <Link href="/service-details" className="btn icon-btn">
//                                         <i className="icon-arrow-top-left" />
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                             <div className="service-card2 shine-animate-item">
//                                 <h5 className="service-card2-number">02.</h5>
//                                 <h4 className="service-card2-title"><Link href="/service-details">Conversion-Focused Design</Link></h4>
//                                 <p className="service-card2-text">Every layout, word, and pixel is crafted to guide action and drive measurable results.

// </p>
//                                 <div className="service-card2-img shine-animate">
//                                     <img src="/assets/img/service/6-2.jpg" alt="img" />
//                                     <Link href="/service-details" className="btn icon-btn">
//                                         <i className="icon-arrow-top-left" />
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6">
//                             <div className="service-card2 shine-animate-item">
//                                 <h5 className="service-card2-number">03.</h5>
//                                 <h4 className="service-card2-title"><Link href="/service-details">Built for the Long Run
// </Link></h4>
//                                 <p className="service-card2-text">We don’t disappear after launch. We’re here to evolve with your brand and fuel ongoing growth.

// </p>
//                                 <div className="service-card2-img shine-animate">
//                                     <img src="/assets/img/service/6-3.jpg" alt="img" />
//                                     <Link href="/service-details" className="btn icon-btn">
//                                         <i className="icon-arrow-top-left" />
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }


"use client";

import Link from "next/link";
import "../../public/assets/css/newhome.css";
import { servicesData } from "@/data/servicesData";

export default function Service5() {
  // ✅ Filter only the 3 desired titles
  const whyBraveMoorData = servicesData.filter((item) =>
    [
      "human-centered-strategy",
      "conversion-focused-design",
      "built-for-the-long-run",
    ].includes(item.slug)
  );

  return (
    <section className="service-area-6 pb-60 black2-bg whybmsec">
      {/* Section Header */}
      <div className="section__title section__title-three mb-55 wow img-custom-anim-left">
        <div className="container">
          <div className="row">
            <div className="col-xxl-9">
              <h6 className="sub-title2 text-white" style={{ opacity: "0" }}>
                SERVICES
              </h6>
              <h2
                className="title title2 text-white"
                style={{ paddingTop: "60px" }}
              >
                Why Brave Moor?
              </h2>
              <p
                className="mb-60"
                style={{
                  color: "#ffffff",
                  fontSize: "18px",
                  fontWeight: 500,
                }}
              >
                We’re not just another digital agency — we’re brand builders,
                creative thinkers,
                <br />
                and growth partners. From strategy to execution, we focus on
                real business impact —
                <br />
                not just deliverables.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filtered Cards */}
      <div className="container">
        <div className="row gy-30 justify-content-center">
          {whyBraveMoorData.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={item.slug}>
              <div className="service-card2 shine-animate-item">
                <h5 className="service-card2-number">
                  {String(index + 1).padStart(2, "0")}.
                </h5>
                <h4 className="service-card2-title">
                  <Link href={`/services/${item.slug}`}>{item.title}</Link>
                </h4>
                <p className="service-card2-text">{item.shortDescription}</p>
                <div className="service-card2-img shine-animate">
                  <img src={item.image} alt={item.title} />
                  <Link
                    href={`/services/${item.slug}`} 
                    className="btn icon-btn"
                  >
                    <i className="icon-arrow-top-left" />
                    
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


