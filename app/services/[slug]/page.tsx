// import { notFound } from "next/navigation";
// import Layout from "@/components/layout/Layout";
// import { servicesData } from "@/data/servicesData";

// interface Props {
//   params: { slug: string };
// }

// export default function ServiceDetails({ params }: Props) {
//   const service = servicesData.find((item) => item.slug === params.slug);

//   if (!service) return notFound();

//   return (
//     <Layout
//       headerStyle={8}
//       footerStyle={2}
//       breadcrumbTitle={service.title}
//     >
//       <div className="service-details-page-area pt-110">
//         <div className="container">
//           <div className="row align-items-center justify-content-between">
//             <div className="col-xl-6">
//               <div className="section__title mb-50">
//                 <h2 className="title">{service.title}</h2>
//                 <p className="sec-text">{service.shortDescription}</p>
                
//               </div>
//             </div>
//             <div className="col-xl-auto align-self-end">
//               <div className="service-list7-wrap">
//                 <h4 className="service-list7-title">{service.details.subtitle}</h4>
//                 <ul>
//                   {service.details.features.slice(0, 3).map((feat, i) => (
//                     <li key={i}>
//                       <img src="/assets/img/icon/arrow-left.svg" alt="icon" /> {feat}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>

//           <div className="service-inner-thumb mt-60 mb-110">
//             <img className="w-100" src={service.image} alt={service.title} />
//             <h3 className="page-title mt-60 mb-30">{service.details.subtitle}</h3>
//             <p className="mb-30">{service.details.description}</p>
//             <h3 className="page-title mt-60 mb-30">{service.details.subtitle}</h3>
//             <p className="mb-30">{service.details.description}</p>
//             {/* <img className="w-100 mt-40" src={service.details.image2} alt="detail" /> */}
//           </div>

//           <div className="row gy-40 justify-content-between mt-60">
//             <div className="col-xl-5">
//               <h3 className="page-title mb-30">
//                 We tell the stories of your business.
//               </h3>
//               <p className="mb-30">
//                 The following details the responsibilities a user experience designer may have at each phase of a project.
//               </p>
//               <div className="service-list7-wrap">
//                 <ul>
//                   {service.details.features.map((feat, i) => (
//                     <li key={i}>
//                       <img src="/assets/img/icon/check-circle2.svg" alt="check" /> {feat}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//             <div className="col-lg-6">
//               <img className="w-100" src={service.details.image2} alt={service.title} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }


import { notFound } from "next/navigation";
import Layout from "@/components/layout/Layout";
import { servicesData } from "@/data/servicesData";

interface Props {
  params: { slug: string };
}

export default function ServiceDetails({ params }: Props) {
  const service = servicesData.find((item) => item.slug === params.slug);

  if (!service) return notFound();

  return (
    <Layout 
      headerStyle={2}
      footerStyle={2}
      // breadcrumbTitle={service.title}
    >
      <div className="service-details-page-area pt-110">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-6">
              <div className="section__title mb-50">
                <h2 className="title ">{service.title}</h2>
                <p className="sec-text">{service.shortDescription}</p>
                
              </div>
            </div>
            <div className="col-xl-auto align-self-end">
              <div className="service-list7-wrap">
                {/* <h4 className="service-list7-title">{service.details.subtitle}</h4> */}
<h4 className="service-list7-title"dangerouslySetInnerHTML={{__html: service.details.subtitle}} />
                <ul>
                  {service.details.features.slice(0, 3).map((feat, i) => (
                    <li key={i}>
                      <img src="/assets/img/icon/arrow-left.svg" alt="icon" /> {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="service-inner-thumb mt-60 mb-110">
            <img className="w-100" src={service.image} alt={service.title} />
            <h3 className="page-title mt-60 mb-30">{service.details.subtitle2}</h3>
            <p className="mb-30">{service.details.description2}</p>
            <h3 className="page-title mt-60 mb-30">{service.details.subtitle3}</h3>
            <p className="mb-30">{service.details.description3}</p>
            {/* <img className="w-100 mt-40" src={service.details.image2} alt="detail" /> */}
          </div>

          <div className="row gy-40 justify-content-between mt-60">
            <div className="col-xl-5">
              <h3 className="page-title mb-30">
                We tell the stories of your business.
              </h3>
              <p className="mb-30">
                The following details the responsibilities a user experience designer may have at each phase of a project.
              </p>
              <div className="service-list7-wrap">
                <ul>
                  {service.details.features.map((feat, i) => (
                    <li key={i}>
                      <img src="/assets/img/icon/check-circle2.svg" alt="check" /> {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <img className="w-100" src={service.details.image2} alt={service.title} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}