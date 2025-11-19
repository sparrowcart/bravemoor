// 'use client'
// import Link from "next/link"
// import { usePathname } from "next/navigation"

// const homeLinks = [
// 	// { id: 9, name: 'Home', path: '/home-9' },
// 	// { id: 1, name: 'Digital Agency', path: '/' },
// 	// { id: 2, name: 'Creative Agency', path: '/home-2' },
// 	// { id: 3, name: 'Design Studio', path: '/home-3' },
// 	// { id: 4, name: 'Digital Marketing', path: '/home-4' },
// 	// { id: 5, name: 'Modern Agency', path: '/home-5' },
// 	// { id: 6, name: 'Creative Studio', path: '/home-6' },
// 	// { id: 7, name: 'Startup Agency', path: '/home-7' },
// 	// { id: 8, name: 'Personal Portfolio', path: '/home-8' },
// ]

// const pageLinks = [
// 	{ id: 1, name: 'About Us', path: '/about' },
// 	{ id: 2, name: 'Service', path: '/service' },
// 	{ id: 3, name: 'Service Details', path: '/service-details' },
// 	{ id: 4, name: 'Our Team', path: '/team' },
// 	{ id: 5, name: 'Team Details', path: '/team-details' },
// 	{ id: 6, name: 'Pricing', path: '/pricing' },
// 	{ id: 7, name: 'FAQ Page', path: '/faq' },
// 	{ id: 8, name: '404 Error Page', path: '/error' },
// ]
// const porfolioLinks = [
// 	{ id: 1, name: 'Portfolio', path: '/project' },
// 	{ id: 2, name: 'Portfolio Details', path: '/project-details' },
// ]
// const blogLinks = [
// 	{ id: 1, name: 'Blog', path: '/blog' },
// 	{ id: 2, name: 'Blog Details', path: '/blog-details' },
// ]
// export default function Menu({ menuLeft }: any) {
//     const pathname = usePathname()    
//     const isActive = (path: string) => path === pathname
//     const isHomeLinkActive = () => {
//         return homeLinks.some((link) => link.path === pathname) ? true : false
//     };
//     const isPageLinkActive = () => {
//         return pageLinks.some((link) => link.path === pathname) ? true : false
//     };
//     const isPorfolioLinkActive = () => {
//         return porfolioLinks.some((link) => link.path === pathname) ? true : false
//     };
//     const isBlogLinkActive = () => {
//         return blogLinks.some((link) => link.path === pathname) ? true : false
//     };
//     return (
//         <>
//             <ul className={`navigation ${menuLeft ? "ms-xxl-0" : "me-0"} `}>
//                 <li className={`menu-item-has-children ${isHomeLinkActive() ? 'active' : ''}`}><Link href="/#">HOME</Link>
//                     <ul className="sub-menu">
//                         {homeLinks.map((link) => {
//                             return (
//                                 <li key={link.id} className={isActive(link.path) ? 'active' : ''}>
//                                     <Link
//                                         href={link.path}                                       
//                                     >
//                                         {link.name}
//                                     </Link>
//                                 </li>
//                             );
//                         })}
//                     </ul>
//                 </li>
//                 <li className={`menu-item-has-children ${isPageLinkActive() ? 'active' : ''}`}><Link href="/#">PAGES</Link>
//                     <ul className="sub-menu">
//                         {pageLinks.map((link) => {
//                             return (
//                                 <li key={link.id} className={isActive(link.path) ? 'active' : ''}>
//                                     <Link
//                                         href={link.path}                                       
//                                     >
//                                         {link.name}
//                                     </Link>
//                                 </li>
//                             );
//                         })}
//                     </ul>
//                 </li>
//                 <li className={`menu-item-has-children ${isPorfolioLinkActive() ? 'active' : ''}`}><Link href="/#">PORTFOLIO</Link>
//                     <ul className="sub-menu">
//                         {porfolioLinks.map((link) => {
//                             return (
//                                 <li key={link.id} className={isActive(link.path) ? 'active' : ''}>
//                                     <Link
//                                         href={link.path}                                       
//                                     >
//                                         {link.name}
//                                     </Link>
//                                 </li>
//                             );
//                         })}
//                     </ul>
//                 </li>
//                 <li className={`menu-item-has-children ${isBlogLinkActive() ? 'active' : ''}`}><Link href="/#">BLOG</Link>
//                     <ul className="sub-menu">
//                         {blogLinks.map((link) => {
//                             return (
//                                 <li key={link.id} className={isActive(link.path) ? 'active' : ''}>
//                                     <Link
//                                         href={link.path}                                       
//                                     >
//                                         {link.name}
//                                     </Link>
//                                 </li>
//                             );
//                         })}
//                     </ul>
//                 </li>
//                 <li className={pathname == "/contact" ? "active" : ""}><Link href="/contact">CONTACT</Link></li>
//             </ul>
//         </>
//     )
// }


// 'use client'
// import Link from "next/link"
// import { usePathname } from "next/navigation"

// const pageLinks = [
// 	{ id: 1, name: 'About Us', path: '/about' },
// 	{ id: 2, name: 'Services', path: '/services' },
// 	{ id: 3, name: 'Service Details', path: '/service-details' },
// 	{ id: 4, name: 'Our Team', path: '/team' },
// 	{ id: 5, name: 'Team Details', path: '/team-details' },
// 	{ id: 6, name: 'Pricing', path: '/pricing' },
// 	{ id: 7, name: 'FAQ Page', path: '/faq' },
// 	{ id: 8, name: '404 Error Page', path: '/error' },
// ]

// const porfolioLinks = [
// 	{ id: 1, name: 'Portfolio', path: '/project' },
// 	{ id: 2, name: 'Portfolio Details', path: '/project-details' },
// ]

// const blogLinks = [
// 	{ id: 1, name: 'Blog', path: '/blog' },
// 	{ id: 2, name: 'Blog Details', path: '/blog-details' },
// ]

// export default function Menu({ menuLeft }: any) {
// 	const pathname = usePathname()
// 	const isActive = (path: string) => path === pathname

// 	const isPageLinkActive = () => pageLinks.some(link => link.path === pathname)
// 	const isPorfolioLinkActive = () => porfolioLinks.some(link => link.path === pathname)
// 	const isBlogLinkActive = () => blogLinks.some(link => link.path === pathname)

// 	return (
// 		<ul className={`navigation ${menuLeft ? "ms-xxl-0" : "me-0"}`}>
// 			{/* HOME menu removed */}
//              <li className={pathname === "/" ? "active" : ""}>
//         <Link href="/">HOME</Link>
//     </li>

// <li className={pathname === "/about" ? "active" : ""}><Link href="/about">About</Link></li>

// 	<li className={`menu-item-has-children ${isPageLinkActive() ? 'active' : ''}`}><Link href="/services">Services</Link>
// 				<ul className="sub-menu">
// 					{pageLinks.map(link => (
// 						<li key={link.id} className={isActive(link.path) ? 'active' : ''}>
// 							<Link href={link.path}>{link.name}</Link>
// 						</li>
// 					))}
// 				</ul>
// 			</li>
// <li className={pathname === "/case-studies" ? "active" : ""}><Link href="/case-studies">Case Studies</Link></li>
// <li className={pathname === "/blog" ? "active" : ""}><Link href="/blog">Blog</Link></li>
// <li className={`pathname === "/services" ? "active" : "" mfp-hide`}><Link href="/services" >Services</Link></li>
// 			<li className={`menu-item-has-children ${isPageLinkActive() ? 'active' : ''} mfp-hide`}><Link href="/#">PAGES</Link>
// 				<ul className="sub-menu">
// 					{pageLinks.map(link => (
// 						<li key={link.id} className={isActive(link.path) ? 'active' : ''}>
// 							<Link href={link.path}>{link.name}</Link>
// 						</li>
// 					))}
// 				</ul>
// 			</li>

// 			<li className={`menu-item-has-children  ${isPorfolioLinkActive() ? 'active' : ''} mfp-hide`}><Link href="/#">PORTFOLIO</Link>
// 				<ul className="sub-menu">
// 					{porfolioLinks.map(link => (
// 						<li key={link.id} className={isActive(link.path) ? 'active' : ''}>
// 							<Link href={link.path}>{link.name}</Link>
// 						</li>
// 					))}
// 				</ul>
// 			</li>
// 			<li className={`menu-item-has-children ${isBlogLinkActive() ? 'active' : ''} mfp-hide`}>  <Link href="/#">BLOG</Link>
// 				<ul className="sub-menu">
// 					{blogLinks.map(link => (
// 						<li key={link.id} className={isActive(link.path) ? 'active' : ''}>
// 							<Link href={link.path}>{link.name}</Link>
// 						</li>
// 					))}
// 				</ul>
// 			</li>

// 			<li className={pathname === "/contact" ? "active" : ""}><Link href="/contact">Contact</Link></li>
// 		</ul>
// 	)
// }

// ok hai menu

// 'use client'
// import Link from "next/link"
// import { usePathname } from "next/navigation"



// // Service Categories with nested services
// const serviceCategories = [
//   { 
//     id: 1, 
//     name: 'AI & Emerging Tech', 
//     path: '/services/ai-tech',
//     services: [
//       { id: 1, name: 'Web Experience Engineering', path: '/services/web-experience-engineering' },
//       { id: 2, name: 'AI Marketing Automation', path: '/services/ai-marketing-automation' },
//       { id: 3, name: 'AI Video Generation', path: '/services/ai-video-generation' },
//       { id: 4, name: 'Voice AI & Marketing', path: '/services/voice-ai' },
//       { id: 5, name: 'Metaverse Experiences', path: '/services/metaverse' },
//     ]
//   },
//   { 
//     id: 2, 
//     name: 'Creative & Design', 
//     path: '/services/creative-design',
//     services: [
//       { id: 1, name: 'Graphic Design', path: '/services/graphic-design' },
//       { id: 2, name: 'Content Intelligence', path: '/services/content-intelligence' }
//     ]
//   },
//   { 
//     id: 3, 
//     name: 'Growth & Marketing', 
//     path: '/services/growth-marketing',
//     services: [
//       { id: 1, name: 'Profit-First Marketing', path: '/services/profit-first-marketing' },
//       { id: 2, name: 'Local SEO Dominance', path: '/services/local-seo' },
//       { id: 3, name: 'Conversion Optimization', path: '/services/conversion-optimization' },
//     ]
//   },
//   { 
//     id: 4, 
//     name: 'Business Solutions', 
//     path: '/services/business-solutions',
//     services: [
//       { id: 1, name: 'Founder Brand Accelerator', path: '/services/founder-brand-accelerator' },
//       { id: 2, name: 'E-commerce Revolution', path: '/services/ecommerce-revolution' },
//       { id: 3, name: 'Marketing ROI Systems', path: '/services/marketing-roi-systems' },
//     ]
//   }
// ]

// const blogLinks = [
//   { id: 1, name: 'Blog', path: '/blog' },
//   { id: 2, name: 'Blog Details', path: '/blog-details' },
// ]

// export default function Menu({ menuLeft }: any) {
//   const pathname = usePathname()
  
//   const isActive = (path: string) => path === pathname
//   const isBlogLinkActive = () => blogLinks.some(link => link.path === pathname)
  
//   // Check if any service is active
//   const isServiceActive = () => {
//     return serviceCategories.some(category => 
//       category.services.some(service => service.path === pathname)
//     )
//   }

//   return (
//     <ul className={`navigation ${menuLeft ? "ms-xxl-0" : "me-0"}`}>
//       {/* HOME */}
//       <li className={pathname === "/" ? "active" : ""}>
//         <Link href="/">HOME</Link>
//       </li>

//       {/* ABOUT */}
//       <li className={pathname === "/about" ? "active" : ""}>
//         <Link href="/about">About</Link>
//       </li>

//       {/* SERVICES with Double Nested Menu */}
//       <li className={`menu-item-has-children ${isServiceActive() ? 'active' : ''}`}>
//         <Link href="/services">Services</Link>
//         <ul className="sub-menu">
//           {serviceCategories.map(category => (
//             <li key={category.id} className={`menu-item-has-children ${category.services.some(s => s.path === pathname) ? 'active' : ''}`}>
//               <Link href="#">{category.name}</Link>
//               <ul className="sub-menu">
//                 {category.services.map(service => (
//                   <li key={service.id} className={isActive(service.path) ? 'active' : ''}>
//                     <Link href={service.path}>{service.name}</Link>
//                   </li>
//                 ))}
//               </ul>
//             </li>
//           ))}
//         </ul>
//       </li>

//       {/* CASE STUDIES */}
//       <li className={pathname === "/case-studies" ? "active" : ""}>
//         <Link href="/case-studies">Case Studies</Link>
//       </li>

//       {/* BLOG */}
//       <li className={`menu-item-has-children ${isBlogLinkActive() ? 'active' : ''}`}>
//         <Link href="/blog">Blog</Link>
//         <ul className="sub-menu">
//           {blogLinks.map(link => (
//             <li key={link.id} className={isActive(link.path) ? 'active' : ''}>
//               <Link href={link.path}>{link.name}</Link>
//             </li>
//           ))}
//         </ul>
//       </li>

//       {/* CONTACT */}
//       <li className={pathname === "/contact" ? "active" : ""}>
//         <Link href="/contact">Contact</Link>
//       </li>
//     </ul>
//   )
// }



// ok menu 2

// pc menu

'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

// Fixed Service Categories with nested services
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
    ]
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
    ]
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
    ]
  }
]

const blogLinks = [
  { id: 1, name: 'Blogs', path: '/blogs' },
  // { id: 2, name: 'Blog Details', path: '/blog-details' },
]

export default function Menu({ menuLeft }: any) {
  const pathname = usePathname()

  const isActive = (path: string) => path === pathname

  const isBlogLinkActive = () => blogLinks.some(link => link.path === pathname)

  const isServiceActive = () => 
    serviceCategories.some(category => 
      category.services.some(service => service.path === pathname)
    )

  return (
    <ul className={`navigation ${menuLeft ? "ms-xxl-0" : ""}`}>
      {/* HOME */}
      <li className={pathname === "/" ? "active" : ""}>
        <Link href="/">HOME</Link>
      </li>

      {/* ABOUT */}
      <li className={pathname === "/about" ? "active" : ""}>
        <Link href="/about">About</Link>
      </li>

      {/* SERVICES */}
      <li className={`menu-item-has-children ${isServiceActive() ? 'active' : ''}`}>
        <Link href="/services">Services</Link>
        <ul className="sub-menu">
          {serviceCategories.map(category => (
            <li key={category.id} className={`menu-item-has-children ${category.services.some(s => s.path === pathname) ? 'active' : ''}`}>
              <Link href={category.path}>{category.name}</Link>
              <ul className="sub-menu">
                {category.services.map(service => (
                  <li key={service.id} className={isActive(service.path) ? 'active' : ''}>
                    <Link href={service.path}>{service.name}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </li>

      {/* CASE STUDIES */}
      <li className={pathname === "/case-studies" ? "active" : ""}>
        <Link href="/case-studies">Case Studies</Link>
      </li>
      <li className={pathname === "/blogs" ? "active" : ""}>
        <Link href="/blogs">blogs</Link>
      </li>

      {/* BLOG */}
      <li className={`menu-item-has-children ${isBlogLinkActive() ? 'active' : ''} mfp-hide`}>
        <Link href="/blogs">Blogs</Link>
        <ul className="sub-menu">
          {blogLinks.map(link => (
            <li key={link.id} className={isActive(link.path) ? 'active' : ''}>
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </li>
<li className={pathname === "/pricing" ? "active" : ""}>
        <Link href="/pricing">Plans</Link>
      </li>
      {/* CONTACT */}
      <li className={pathname === "/contact" ? "active" : ""}>
        <Link href="/contact">Contact</Link>
      </li>
      
    </ul>
  )
}
