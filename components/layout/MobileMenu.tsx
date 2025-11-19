// 'use client'

// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import { useState } from 'react'
// interface ActiveState {
//     status: boolean
//     key: number
// }

// export default function MobileMenu() {
//     const pathname = usePathname()
//     const [isActive, setIsActive] = useState<ActiveState>({
//         status: false,
//         key: 0,
//     })

//     const handleClick = (key: number) => {
//         if (isActive.key === key) {
//             setIsActive({
//                 ...isActive,
//                 status: false,
//             })
//         } else {
//             setIsActive({
//                 status: true,
//                 key,
//             })
//         }
//     }
//     return (
//         <>
//             <ul className="navigation me-0">
//                 <li className="menu-item-has-children"><Link href="/#">HOME</Link>
//                     <ul className="sub-menu" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
//                         <li className={pathname == "/" ? "active" : ""}><Link href="/">Digital Agency</Link></li>
//                         <li className={pathname == "/home-2" ? "active" : ""}><Link href="/home-2">Creative Agency</Link></li>
//                         <li className={pathname == "/home-3" ? "active" : ""}><Link href="/home-3">Design Studio</Link></li>
//                         <li className={pathname == "/home-4" ? "active" : ""}><Link href="/home-4">Digital Marketing</Link></li>
//                         <li className={pathname == "/home-5" ? "active" : ""}><Link href="/home-5">Modern Agency</Link></li>
//                         <li className={pathname == "/home-6" ? "active" : ""}><Link href="/home-6">Creative Studio</Link></li>
//                         <li className={pathname == "/home-7" ? "active" : ""}><Link href="/home-7">Startup Agency</Link></li>
//                         <li className={pathname == "/home-8" ? "active" : ""}><Link href="/home-8">Personal Portfolio</Link></li>
//                         <li className={pathname == "/home-9" ? "active" : ""}><Link href="/home-9">Home 9</Link></li>
//                     </ul>
//                     <div className={isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleClick(1)}><span className="plus-line" /></div>
//                 </li>
//                 <li className="menu-item-has-children"><Link href="/#">PAGES</Link>
//                     <ul className="sub-menu" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
//                         <li className={pathname == "/about" ? "active" : ""}><Link href="/about">About Us</Link></li>
//                         <li className={pathname == "/services" ? "active" : ""}><Link href="/services">Service</Link></li>
//                         <li className={pathname == "/service-details" ? "active" : ""}><Link href="/service-details">Service Details</Link></li>
//                         <li className={pathname == "/team" ? "active" : ""}><Link href="/team">Our Team</Link></li>
//                         <li className={pathname == "/team-details" ? "active" : ""}><Link href="/team-details">Team Details</Link></li>
//                         <li className={pathname == "/pricing" ? "active" : ""}><Link href="/pricing">Pricing</Link></li>
//                         <li className={pathname == "/faq" ? "active" : ""}><Link href="/faq">FAQ Page</Link></li>
//                         <li className={pathname == "/error" ? "active" : ""}><Link href="/error">404 Error Page</Link></li>
//                     </ul>
//                     <div className={isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleClick(2)}><span className="plus-line" /></div>
//                 </li>
//                 <li className="menu-item-has-children"><Link href="/#">PORTFOLIO</Link>
//                     <ul className="sub-menu" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
//                         <li className={pathname == "/project" ? "active" : ""}><Link href="/project">Portfolio</Link></li>
//                         <li className={pathname == "/project-details" ? "active" : ""}><Link href="/project-details">Portfolio Details</Link></li>
//                     </ul>
//                     <div className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleClick(3)}><span className="plus-line" /></div>
//                 </li>
//                 <li className="menu-item-has-children"><Link href="/#">BLOG</Link>
//                     <ul className="sub-menu" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
//                         <li className={pathname == "/blog" ? "active" : ""}><Link href="/blog">Our Blog</Link></li>
//                         <li className={pathname == "/blog-details" ? "active" : ""}><Link href="/blog-details">Blog Details</Link></li>
//                     </ul>
//                     <div className={isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleClick(4)}><span className="plus-line" /></div>
//                 </li>
//                 <li className={pathname == "/contact" ? "active" : ""}><Link href="/contact">CONTACT</Link></li>
//             </ul>
//         </>
//     )
// }

// ok menu mob

// 'use client'

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState } from "react";

// interface ActiveState {
//   status: boolean;
//   key: number;
// }

// export default function MobileMenu() {
//   const pathname = usePathname();
//   const [isActive, setIsActive] = useState<ActiveState>({
//     status: false,
//     key: 0,
//   });

//   const handleClick = (key: number) => {
//     // Toggle submenu open/close
//     if (isActive.key === key) {
//       setIsActive({ status: false, key: 0 });
//     } else {
//       setIsActive({ status: true, key });
//     }
//   };

//   return (
//     <>
//       <ul className="navigation me-0">
//         {/* HOME */}
//         <li className="menu-item-has-children">
//           <Link href="#">HOME</Link>
//           <ul
//             className="sub-menu"
//             style={{
//               display: isActive.key === 1 ? "block" : "none",
//               transition: "all 0.4s ease",
//             }}
//           >
//             <li className={pathname === "/" ? "active" : ""}>
//               <Link href="/">Digital Agency</Link>
//             </li>
//             <li className={pathname === "/home-2" ? "active" : ""}>
//               <Link href="/home-2">Creative Agency</Link>
//             </li>
//             <li className={pathname === "/home-3" ? "active" : ""}>
//               <Link href="/home-3">Design Studio</Link>
//             </li>
//           </ul>
//           <div
//             className={`dropdown-btn ${isActive.key === 1 ? "open" : ""}`}
//             onClick={() => handleClick(1)}
//             style={{ cursor: "pointer", zIndex: 20 }}
//           >
//             <span className="plus-line" />
//           </div>
//         </li>

//         {/* PAGES */}
//         <li className="menu-item-has-children">
//           <Link href="#">PAGES</Link>
//           <ul
//             className="sub-menu"
//             style={{
//               display: isActive.key === 2 ? "block" : "none",
//               transition: "all 0.4s ease",
//             }}
//           >
//             <li className={pathname === "/about" ? "active" : ""}>
//               <Link href="/about">About Us</Link>
//             </li>
//             <li className={pathname === "/services" ? "active" : ""}>
//               <Link href="/services">Services</Link>
//             </li>
//             <li className={pathname === "/faq" ? "active" : ""}>
//               <Link href="/faq">FAQ</Link>
//             </li>
//           </ul>
//           <div
//             className={`dropdown-btn ${isActive.key === 2 ? "open" : ""}`}
//             onClick={() => handleClick(2)}
//             style={{ cursor: "pointer", zIndex: 20 }}
//           >
//             <span className="plus-line" />
//           </div>
//         </li>

//         {/* PORTFOLIO */}
//         <li className="menu-item-has-children">
//           <Link href="#">PORTFOLIO</Link>
//           <ul
//             className="sub-menu"
//             style={{
//               display: isActive.key === 3 ? "block" : "none",
//               transition: "all 0.4s ease",
//             }}
//           >
//             <li className={pathname === "/project" ? "active" : ""}>
//               <Link href="/project">Portfolio</Link>
//             </li>
//             <li className={pathname === "/project-details" ? "active" : ""}>
//               <Link href="/project-details">Portfolio Details</Link>
//             </li>
//           </ul>
//           <div
//             className={`dropdown-btn ${isActive.key === 3 ? "open" : ""}`}
//             onClick={() => handleClick(3)}
//             style={{ cursor: "pointer", zIndex: 20 }}
//           >
//             <span className="plus-line" />
//           </div>
//         </li>

//         {/* BLOG */}
//         <li className="menu-item-has-children">
//           <Link href="#">BLOG</Link>
//           <ul
//             className="sub-menu"
//             style={{
//               display: isActive.key === 4 ? "block" : "none",
//               transition: "all 0.4s ease",
//             }}
//           >
//             <li className={pathname === "/blog" ? "active" : ""}>
//               <Link href="/blog">Our Blog</Link>
//             </li>
//             <li className={pathname === "/blog-details" ? "active" : ""}>
//               <Link href="/blog-details">Blog Details</Link>
//             </li>
//           </ul>
//           <div
//             className={`dropdown-btn ${isActive.key === 4 ? "open" : ""}`}
//             onClick={() => handleClick(4)}
//             style={{ cursor: "pointer", zIndex: 20 }}
//           >
//             <span className="plus-line" />
//           </div>
//         </li>

//         {/* CONTACT */}
//         <li className={pathname === "/contact" ? "active" : ""}>
//           <Link href="/contact">CONTACT</Link>
//         </li>
//       </ul>
//     </>
//   );
// }


'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface ActiveState {
  status: boolean;
  key: number;
}

// same data as desktop menu
const serviceCategories = [
  {
    id: 1,
    name: "Marketing Essentials",
    path: "/#",
    services: [
      { id: 1, name: "Website Development", path: "/services/website-development" },
      { id: 2, name: "SEO Services", path: "/services/seo-services" },
      { id: 3, name: "Social Media Marketing", path: "/services/social-media-marketing" },
      { id: 4, name: "Email Marketing", path: "/services/email-marketing" },
      { id: 5, name: "Google/Facebook Ads", path: "/services/google-ads" },
    ],
  },
  {
    id: 2,
    name: "Advanced Growth",
    path: "/#",
    services: [
      { id: 1, name: "Profit-First Marketing", path: "/services/profit-first-marketing" },
      { id: 2, name: "Conversion Rate Optimization", path: "/services/conversion-optimization" },
      { id: 3, name: "Marketing Strategy & Planning", path: "/services/marketing-strategy" },
      { id: 4, name: "Founder Brand Accelerator", path: "/services/founder-brand-accelerator" },
      { id: 5, name: "E-commerce Solutions", path: "/services/ecommerce-solutions" },
    ],
  },
  {
    id: 3,
    name: "AI & Future Tech",
    path: "/#",
    services: [
      { id: 1, name: "AI-Powered Marketing Automation", path: "/services/ai-marketing-automation" },
      { id: 2, name: "AI Video Generation Studio", path: "/services/ai-video-generation" },
      { id: 3, name: "Voice AI & Conversational Marketing", path: "/services/voice-ai" },
      { id: 4, name: "Metaverse Brand Experiences", path: "/services/metaverse" },
      { id: 5, name: "Blockchain & Web3 Marketing", path: "/services/blockchain-web3" },
    ],
  },
];

const blogLinks = [
  { id: 1, name: "Blogs", path: "/blogs" },
];

export default function MobileMenu() {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState<ActiveState>({ status: false, key: 0 });
  const [subActive, setSubActive] = useState<ActiveState>({ status: false, key: 0 });

  const handleClick = (key: number) => {
    setIsActive(isActive.key === key ? { status: false, key: 0 } : { status: true, key });
  };

  const handleSubClick = (key: number) => {
    setSubActive(subActive.key === key ? { status: false, key: 0 } : { status: true, key });
  };

  const isActivePath = (path: string) => pathname === path;

  return (
    <ul className="navigation " style={{paddingTop:'60px'}}>
      {/* HOME */}
      <li className={isActivePath("/") ? "active" : ""}>
        <Link href="/">HOME</Link>
      </li>

      {/* ABOUT */}
      <li className={isActivePath("/about") ? "active" : ""}>
        <Link href="/about">About</Link>
      </li>

      {/* SERVICES (with nested dropdowns) */}
      <li className={`menu-item-has-children ${isActive.key === 1 ? "active" : ""}`}>
        <Link href="/services">Services</Link>

        <ul className="sub-menu" style={{ display: isActive.key === 1 ? "block" : "none" }}>
          {serviceCategories.map((category) => (
            <li
              key={category.id}
              className={`menu-item-has-children ${subActive.key === category.id ? "active" : ""}`}
            >
              <Link href={category.path}>{category.name}</Link>

              <ul
                className="sub-menu"
                style={{ display: subActive.key === category.id ? "block" : "none" }}
              >
                {category.services.map((service) => (
                  <li key={service.id} className={isActivePath(service.path) ? "active" : ""}>
                    <Link href={service.path}>{service.name}</Link>
                  </li>
                ))}
              </ul>

              <div
                className={`dropdown-btn ${subActive.key === category.id ? "open" : ""}`}
                onClick={() => handleSubClick(category.id)}
              >
                <span className="plus-line" />
              </div>
            </li>
          ))}
        </ul>

        <div
          className={`dropdown-btn ${isActive.key === 1 ? "open" : ""}`}
          onClick={() => handleClick(1)}
        >
          <span className="plus-line" />
        </div>
      </li>

      {/* CASE STUDIES */}
      <li className={isActivePath("/case-studies") ? "active" : ""}>
        <Link href="/case-studies">Case Studies</Link>
      </li>
 <li className={isActivePath("/blogs") ? "active" : ""}>
        <Link href="/blogs">blogs</Link>
      </li>
      {/* BLOG */}
      <li className={`menu-item-has-children ${isActive.key === 2 ? "active" : ""} mfp-hide`}>
        <Link href="/blogs">Blogs</Link>

        <ul className="sub-menu" style={{ display: isActive.key === 2 ? "block" : "none" }}>
          {blogLinks.map((link) => (
            <li key={link.id} className={isActivePath(link.path) ? "active" : ""}>
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>

        <div
          className={`dropdown-btn ${isActive.key === 2 ? "open" : ""}`}
          onClick={() => handleClick(2)}
        >
          <span className="plus-line" />
        </div>
      </li>

      {/* CONTACT */}
      <li className={isActivePath("/contact") ? "active" : ""}>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
}
