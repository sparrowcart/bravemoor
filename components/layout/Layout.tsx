'use client'
import AOS from 'aos'
import { useEffect, useState } from "react"
import AddClassBody from '../elements/AddClassBody'
import BackToTop from '../elements/BackToTop'
import DataBg from '../elements/DataBg'
import MagnetsComponent from '../elements/MagnetsComponent'
import Breadcrumb from './Breadcrumb'

import Footer2 from './footer/Footer2'

// ONLY Header2 — all other headers removed
import Header2 from './header/Header2'

interface LayoutProps {
    headerStyle?: Number
    footerStyle?: Number
    children?: React.ReactNode
    breadcrumbTitle?: string
}

export default function Layout({ headerStyle, footerStyle, breadcrumbTitle, children }: LayoutProps) {

    const [scroll, setScroll] = useState<boolean>(false)

    // Mobile + Offcanvas Menus
    const [isMobileMenu, setMobileMenu] = useState<boolean>(false)
    const handleMobileMenu = () => {
        setMobileMenu(!isMobileMenu)
        !isMobileMenu
            ? document.body.classList.add("mobile-menu-visible")
            : document.body.classList.remove("mobile-menu-visible")
    }

    const [isOffcanvasMenu, setOffcanvasMenu] = useState<boolean>(false)
    const handleOffcanvasMenu = () => setOffcanvasMenu(!isOffcanvasMenu)

    useEffect(() => {
        const WOW: any = require('wowjs');
        (window as any).wow = new WOW.WOW({ live: false });
        (window as any).wow.init()

        AOS.init()

        const onScroll = () => setScroll(window.scrollY > 100)

        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <>
            {/* Only Header2 used */}
            <Header2
                scroll={scroll}
                isMobileMenu={isMobileMenu}
                handleMobileMenu={handleMobileMenu}
                isOffcanvasMenu={isOffcanvasMenu}
                handleOffcanvasMenu={handleOffcanvasMenu}
            />

            <DataBg />
            <MagnetsComponent />
            <AddClassBody />

            <main className="fix" id='top'>
                {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
                {children}
            </main>

            {footerStyle == 2 && <Footer2 />}

            <BackToTop target="#top" />
        </>
    )
}
