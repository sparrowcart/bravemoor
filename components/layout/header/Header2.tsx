// "use client";

// import Link from "next/link";
// import Menu from "../Menu";
// import MobileMenu from "../MobileMenu";
// import OffcanvasMenu from "../OffcanvasMenu";
// import LogoIcon from "../header/LogoIcon";
// import { useState, useEffect } from "react";

// export default function Header2({ scroll, isOffcanvasMenu, handleOffcanvasMenu }: any) {
//   const [isMobileMenu, setIsMobileMenu] = useState(false);

//   // Lock body scroll when menu is open
//   useEffect(() => {
//     if (isMobileMenu) {
//       document.body.classList.add("mobile-menu-visible");
//     } else {
//       document.body.classList.remove("mobile-menu-visible");
//     }
//   }, [isMobileMenu]);

//   return (
//     <>
//       <header>
//         <div
//           id="sticky-header"
//           className={`tg-header__area transparent-header tg-header__area-two ${
//             scroll ? "sticky-menu" : ""
//           }`}
//         >
//           <div className="container custom-container">
//             <div className="row">
//               <div className="col-12">
//                 <div className="tgmenu__wrap">
//                   <nav className="tgmenu__nav">
//                     <div className="logo">
//                       <LogoIcon textColor="white" direction="vertical" width={60} height={70} />
//                     </div>

//                     <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex">
//                       <Menu />
//                     </div>

//                     <div className="tgmenu__action d-none d-md-block mfp-hide">
//                       <ul className="list-wrap">
//                         <li className="offCanvas-menu" onClick={handleOffcanvasMenu}>
//                           <a className="menu-tigger sidebar-btn">
//                             <span className="line" />
//                             <span className="line" />
//                             <span className="line" />
//                           </a>
//                         </li>
//                       </ul>
//                     </div>

//                     {/* Hamburger icon */}
//                     <div className="mobile-nav-toggler" onClick={() => setIsMobileMenu(true)}>
//                       <a className="sidebar-btn">
//                         <span className="line" />
//                         <span className="line" />
//                         <span className="line" />
//                       </a>
//                     </div>
//                   </nav>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ================= Mobile Menu ================= */}
//         <div className={`tgmobile__menu ${isMobileMenu ? "menu-open" : ""}`}>
//           <nav className="tgmobile__menu-box">
//             <div className="close-btn" onClick={() => setIsMobileMenu(false)}>
//               <i className="fas fa-times" />
//             </div>

//             <div className="nav-logo">
//               <Link href="/">
//                 <img src="/assets/img/logo/logo-white.svg" alt="Logo" />
//               </Link>
//             </div>

//             <div className="tgmobile__search">
//               <form action="#">
//                 <input type="text" placeholder="Search here..." />
//                 <button>
//                   <i className="fas fa-search" />
//                 </button>
//               </form>
//             </div>

//             <div className="tgmobile__menu-outer">
//               <MobileMenu />
//             </div>

//             <div className="tgmobile__menu-bottom">
//               <div className="contact-info">
//                 <ul className="list-wrap">
//                   <li>
//                     <Link href="mailto:info@bravemoor.com">info@bravemoor.com</Link>
//                   </li>
//                   <li>
//                     <Link href="/tel:+919999999999">+91 99999 99999</Link>
//                   </li>
//                 </ul>
//               </div>

//               <div className="social-links">
//                 <ul className="list-wrap">
//                   <li>
//                     <Link href="https://www.facebook.com/" target="_blank">
//                       <i className="fab fa-facebook-f" />
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="https://twitter.com" target="_blank">
//                       <i className="fab fa-twitter" />
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="https://www.instagram.com/" target="_blank">
//                       <i className="fab fa-instagram" />
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="https://www.youtube.com/" target="_blank">
//                       <i className="fab fa-youtube" />
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </nav>
//         </div>

//         {/* Backdrop */}
//         {isMobileMenu && (
//           <div className="tgmobile__menu-backdrop" onClick={() => setIsMobileMenu(false)} />
//         )}

//         {/* Offcanvas */}
//         <OffcanvasMenu
//           isOffcanvasMenu={isOffcanvasMenu}
//           handleOffcanvasMenu={handleOffcanvasMenu}
//         />
//       </header>
//     </>
//   );
// }


// ok menu 
"use client";

import Link from "next/link";
import Menu from "../Menu";
import MobileMenu from "../MobileMenu";
import OffcanvasMenu from "../OffcanvasMenu";
import LogoIcon from "../header/LogoIcon";
import { useState, useEffect } from "react";

export default function Header2({
  scroll,
  isOffcanvasMenu,
  handleOffcanvasMenu,
}: any) {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  // Body scroll lock when menu open
  useEffect(() => {
    document.body.classList.toggle("mobile-menu-visible", isMobileMenu);
  }, [isMobileMenu]);

  return (
    <>
      <header>
        {/* 🔹 Top Trust Bar */}
        <div
          className="topbar text-white text-center py-1"
          style={{
            fontSize: "14px",
            letterSpacing: "0.3px",
            fontWeight: 400,
            background: "#ff5c35",
          }}
        >
          <p className="mb-0 text-white">
            💡 Brave Moor — Building Trust, Creativity, and Growth like top
            digital marketing leaders.
          </p>
        </div>

        {/* 🔹 Main Header */}
        <div
          id="sticky-header"
          className={`tg-header__area transparent-header tg-header__area-two ${
            scroll ? "sticky-menu" : ""
          }`}
        >
          <div className="container ">
            <div
              className="d-flex align-items-center justify-content-between"
              style={{
                minHeight: "90px",
                position: "relative",
                zIndex: 999,
              }}
            >
              {/* Left: Logo */}
              <div className="header-left d-flex align-items-center">
                <Link href="/" className="d-inline-block">
                  <LogoIcon
                    textColor="white"
                    direction="vertical"
                    width={60}
                    height={70}
                  />
                </Link>
              </div>

              {/* Center: Menu (Flex-based — No hover issue) */}
              <div className="header-center d-none d-lg-flex justify-content-center flex-grow-1">
                <div className="tgmenu__navbar-wrap tgmenu__main-menu text-center mx-auto">
                  <Menu />
                </div>
              </div>

              {/* Right: Social Icons */}
              <div className="header-right d-none d-lg-flex align-items-center gap-3">
                <Link
                  href="https://wa.me/919999999999"
                  target="_blank"
                  className="text-white"
                  style={{ fontSize: "18px" }}
                >
                  <i className="fab fa-whatsapp"></i>
                </Link>
                <Link
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="text-white"
                  style={{ fontSize: "18px" }}
                >
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="text-white"
                  style={{ fontSize: "18px" }}
                >
                  <i className="fab fa-instagram"></i>
                </Link>
              </div>

              {/* Mobile Menu Toggle */}
              <div className="mobile-nav-toggler d-lg-none">
                <button
                  className="sidebar-btn border-0 bg-transparent"
                  onClick={() => setIsMobileMenu(true)}
                >
                  <span className="line" />
                  <span className="line" />
                  <span className="line" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ================= Mobile Menu ================= */}
        <div className={`tgmobile__menu ${isMobileMenu ? "menu-open" : ""}`}>
          <nav className="tgmobile__menu-box">
            <div className="close-btn" onClick={() => setIsMobileMenu(false)}>
              <i className="fas fa-times" />
            </div>

            <div className="nav-logo mfp-hide">
              <Link href="/">
                <img
                  src="/assets/img/logo/bravemoor-logo.png"
                  alt="Logo"
                  style={{ maxHeight: "40px" }}
                />
              </Link>
            </div>
           

            <div className="tgmobile__menu-outer">
              <MobileMenu />
            </div>

            <div className="tgmobile__menu-bottom">
              <div className="contact-info mb-3">
                <ul className="list-wrap">
                  <li>
                    <Link href="mailto:info@bravemoor.com">
                      info@bravemoor.com
                    </Link>
                  </li>
                  <li>
                    <a href="tel:+919911522986">+91 9911522986</a>
                  </li>
                </ul>
              </div>

              <div className="social-links">
                <ul className="list-wrap">
                  <li>
                    <Link href="https://wa.me/+919911522986" target="_blank">
                      <i className="fab fa-whatsapp" />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.facebook.com/" target="_blank">
                      <i className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.instagram.com/brave.moor/" target="_blank">
                      <i className="fab fa-instagram" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        {/* Backdrop */}
        {isMobileMenu && (
          <div
            className="tgmobile__menu-backdrop"
            onClick={() => setIsMobileMenu(false)}
          />
        )}

        {/* Offcanvas */}
        <OffcanvasMenu
          isOffcanvasMenu={isOffcanvasMenu}
          handleOffcanvasMenu={handleOffcanvasMenu}
        />
      </header>
    </>
  );
}
