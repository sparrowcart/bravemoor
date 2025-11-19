
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Marquee from "react-fast-marquee"

import '../../public/assets/css/newhome.css';  // Import the CSS from the 'styles' folder


export default function About() {

    return (
        <>

            <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="ABOUT US">

                {/* Left right image text */}
                <section className="skill-area-1 pt-60 pb-60 new-white-bg-sections position-relative">
                {/* <div className="skill-area-bg-shape1 square-shape-wrap">
                    <div className="square-shape1" />
                    <div className="square-shape3" />
                    <div className="square-shape4" />
                </div> */}
                <div className="container">
                    <div className="row gy-40 align-items-center text-center">

                    <div className="section__title mb-50 wow img-custom-anim-left">
                                        <h2 className="title text-black">Our story wasn't <br /> written in boardrooms.</h2>
                                        <p className="sec-text text-black">It began with late-night coffee, honest conversations, and a stubborn belief — that marketing should build trust, not just traffic.</p>
                                    </div>

                    </div>
                
                    <div className="row gy-40 align-items-center">
                        
                        <div className="col-xl-5">
                            <div className="skill-thumb-box1 wow img-custom-anim-left ">
                                <img src="/assets/img/others/abus.png" alt="img" />
                                {/* <div className="square-shape-wrap">
                                    <div className="square-shape1" />
                                    <div className="square-shape2" />
                                    <div className="square-shape3" />
                                    <div className="square-shape4" />
                                </div> */}
                            </div>
                        </div>
                        <div className="col-xl-7 m-0">
                            <div className="skill-wrap1">
                                <div className="section__title mb-50 wow img-custom-anim-left">
                                    {/* <h2 className="title blck-title">Drdiven by Brand Growth, Rooted in Trust</h2> */}
                                    <p className="sec-text blck-title m-0">
                                    We exist for one purpose: to help brands earn trust that lasts.
Every strategy we craft blends data with emotion, because real growth doesn’t come from clicks — it comes from connection.
<br />
<br />
From coding in small rooms to helping businesses find their digital voice, our journey taught us one thing —
growth happens when you care more about people than profits.
<br />
<br />
Our founder, Krishna Saini, started Brave Moor with the belief that marketing should feel human again.
From humble beginnings to guiding brands across industries, the journey has been driven by one value —
showing up when it truly matters.
<br />
<br />
Today, Brave Moor stands as a space where creativity meets clarity.
We’re not here to follow trends — we’re here to build stories that move people, and brands that stay remembered.

                                      </p>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>


                <section className="pb-120 pt-60">
                    <div className="overflow-hidden">
                        <div className="container">
                      <div className="row gy-40 justify-content-evenly text-center">
                                <div className="section__title mb-50 wow img-custom-anim-left">
                                        <h2 className="title text-black">What Drives Us Forward</h2>
  <p className="sec-text text-black">At Brave Moor, we don’t just deliver services — we deliver meaning. <br />
Every project is guided by one purpose: helping brands grow with clarity, creativity, and confidence.</p>
<br />
Our <b> why </b> is simple — when our clients succeed, we succeed.
                                    </div>
                              <div className="col-xl-auto col-lg-4 col-md-6 counter-divider no-divider">
                                    <div className="counter-box">
                                        <div className="counter-box_icon">
                                           <img src="/assets/img/icon/aip.png" style={{width:'110px'}} alt="" />
                                        </div>
                                        <h3 className="counter-box_title"><span className="counter-number"></span> 🔍 Stay Curious</h3>
                                        <p className="counter-box_text">We ask what if? until we find what works.

</p>
                                    </div>
                                </div>
                                <div className="col-xl-auto col-lg-4 col-md-6 counter-divider no-divider">
                                    <div className="counter-box">
                                        <div className="counter-box_icon">
                                           <img src="/assets/img/icon/trust.png" style={{width:'110px'}} alt="" />
                                        </div>
                                        <h3 className="counter-box_title"><span className="counter-number"></span>🤝 Be Reliable
</h3>
                                        <p className="counter-box_text">We show up — especially when it’s hard. That’s what real partners do.

</p>
                                    </div>
                                </div>
                                <div className="col-xl-auto col-lg-4 col-md-6 counter-divider no-divider">
                                    <div className="counter-box">
                                        <div className="counter-box_icon">
                                            {/* <i className="icon-service-icon3" /> */}
                                            <img src="/assets/img/icon/goal.png" style={{width:'110px'}} alt="" />
                                        </div>
                                        <h3 className="counter-box_title"><span className="counter-number"></span> ⚡ Always Improving
</h3>
                                        <p className="counter-box_text">Growth never stops. We analyze, adapt, and push boundaries so our clients stay ahead — today, and tomorrow.

</p>
                                    </div>
                                </div>
                                 <div className="mb-0 wow img-custom-anim-left">
                                        <h2 className="title text-black pt-60 counter-box_title" style={{fontSize:'2.4em',textDecoration:'underline'}}>Core Idea of Our Existence</h2>
  <p className="sec-text text-black">Brave Moor was built to make marketing human again — <br /> blending data, design, and trust to help brands grow with meaning.</p>
<br />
                                    </div>
                            </div>
                        </div>
                    </div>
                </section>

{/* middel section hide */}
                {/*
                <section className="pb-120 pt-120">
                    <div className="overflow-hidden">
                        <div className="container">
                            <div className="row gy-40 justify-content-evenly text-center">
                                <div className="section__title mb-50 wow img-custom-anim-left">
                                        <h2 className="title text-black">Our Mission — Building Brands That Matter</h2>
                                        <p className="sec-text  text-black">At Brave Moor, our mission is simple — to help brands stand for something meaningful.
We believe growth isn’t just about numbers; it’s about trust, connection, and lasting impact.
That’s why every project we take on is guided by three principles:</p>
                                    </div>
                                <div className="col-xl-auto col-lg-4 col-md-6 counter-divider no-divider">
                                    <div className="counter-box">
                                        <div className="counter-box_icon">
                                           <img src="/assets/img/icon/define1.png" style={{width:'110px'}} alt="" />
                                        </div>
                                        <h3 className="counter-box_title"><span className="counter-number"></span> 🎯 Purpose over Noise</h3>
                                        <p className="counter-box_text">🎯 Purpose over NoiseWe craft strategies that mean something, not just sound good.

</p>
                                    </div>
                                </div>
                                <div className="col-xl-auto col-lg-4 col-md-6 counter-divider no-divider">
                                    <div className="counter-box">
                                        <div className="counter-box_icon">
                                           <img src="/assets/img/icon/define2.png" style={{width:'110px'}} alt="" />
                                        </div>

                                        <h3 className="counter-box_title"><span className="counter-number"></span>Noise

🧠 People First
</h3>
                                        <p className="counter-box_text">Every design, word, and campaign starts with understanding human behavior.

</p>

                                    </div>
                                </div>
                                <div className="col-xl-auto col-lg-4 col-md-6 counter-divider no-divider">
                                    <div className="counter-box">
                                        <div className="counter-box_icon">
                                       
                                            <img src="/assets/img/icon/define3.png" style={{width:'110px'}} alt="" />
                                        </div>
                                        <h3 className="counter-box_title"><span className="counter-number"></span> 🚀 Progress Always
</h3>
                                        <p className="counter-box_text">We innovate fearlessly, adapt quickly, and learn constantly.

</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                */}
 {/* 
                 */}
                {/*======== / Counter Section ========*/}
                {/*==============================
Skill Area 01
==============================*/}


                <section className="skill-area-1 pt-120 pb-120 black-bg position-relative">
                    <div className="skill-area-bg-shape1 square-shape-wrap">
                        <div className="square-shape1" />
                        <div className="square-shape3" />
                        <div className="square-shape4" />
                    </div>
                    <div className="container">
                        <div className="row gy-40 align-items-center">
                            <div className="col-xl-5">
                                <div className="skill-thumb-box1 wow img-custom-anim-left">
                                    <img src="/assets/img/others/abiut.png" alt="img" />
                                    <div className="square-shape-wrap">
                                        <div className="square-shape1" />
                                        <div className="square-shape2" />
                                        <div className="square-shape3" />
                                        <div className="square-shape4" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7">
                                <div className="skill-wrap1">
                                    <div className="section__title mb-50 wow img-custom-anim-left">
                                        <h2 className="title text-white">brands that stay remembered

</h2>
                                        <p className="sec-text text-white">Because in a world of digital noise, we help you become the signal that people actually want to hear:

</p>
                                    </div>
                                    <div className="skill-feature">
                                        <h3 className="skill-feature_title">🎯 Purpose over Noise → We filter 100+ distractions to focus on what actually moves your business
</h3>
                                        <div className="progress">
                                            <div className="progress-bar " style={{ width: '92%' }}>
                                            </div>
                                            <div className="progress-value mfp-hide"><span className="counter-number">92</span>%</div>
                                        </div>
                                    </div>
                                    <div className="skill-feature">
                                        <h3 className="skill-feature_title">People First → Every strategy starts with understanding human behavior, not just algorithms
</h3>
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: '90%' }}>
                                            </div>
                                            <div className="progress-value mfp-hide"><span className="counter-number">90</span>%</div>
                                        </div>
                                    </div>
                                    <div className="skill-feature">
                                        <h3 className="skill-feature_title">🚀 Progress Always → We measure growth in customer smiles, not just spreadsheet cells
</h3>
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: '89%' }}>
                                            </div>
                                            <div className="progress-value mfp-hide"><span className="counter-number">89</span>%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*======== / Skill Section ========*/}
                {/*==============================
Team Area
==============================*/}
                <section className="pt-110 pb-120 position-relative">
                    <div className="contact-area-bg-shape1 square-shape-wrap d-lg-inline-flex d-none">
                        <div className="square-shape1" />
                        <div className="square-shape2" />
                        <div className="square-shape3" />
                        <div className="square-shape4" />
                    </div>
                    <div className="container">
                        <div className="section__title text-center mb-50">
                            <h2 className="title wow img-custom-anim-top">Meet The Makers</h2>
                        </div>
                        <div className="row gx-30 gy-30 justify-content-center">
                            <div className="col-xl-3 col-lg-4 col-md-6 wow img-custom-anim-top">
                                <div className="team-card">
                                    <div className="team-card-thumb">
                                        <img src="/assets/img/team/team-1-1.jpg" alt="img" />
                                    </div>
                                    <div className="team-card-details">
                                        <div className="media-left">
                                            <h4 className="team-card-title"><Link href="/team-details">Terry Souro</Link></h4>
                                            <p className="team-card-text">Creative Director</p>
                                        </div>
                                        <div className="team-social">
                                            <button className="icon-btn"><i className="fas fa-plus" /></button>
                                            <div className="social-icon-wrap">
                                                <Link href="https://facebook.com/"><i className="fab fa-facebook-f" /></Link>
                                                <Link href="https://twitter.com/"><i className="fab fa-twitter" /></Link>
                                                <Link href="https://linkedin.com/"><i className="fab fa-linkedin-in" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow img-custom-anim-top">
                                <div className="team-card">
                                    <div className="team-card-thumb">
                                        <img src="/assets/img/team/team-1-2.jpg" alt="img" />
                                    </div>
                                    <div className="team-card-details">
                                        <div className="media-left">
                                            <h4 className="team-card-title"><Link href="/team-details">Souro Terry</Link></h4>
                                            <p className="team-card-text">Creative Director</p>
                                        </div>
                                        <div className="team-social">
                                            <button className="icon-btn"><i className="fas fa-plus" /></button>
                                            <div className="social-icon-wrap">
                                                <Link href="https://facebook.com/"><i className="fab fa-facebook-f" /></Link>
                                                <Link href="https://twitter.com/"><i className="fab fa-twitter" /></Link>
                                                <Link href="https://linkedin.com/"><i className="fab fa-linkedin-in" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow img-custom-anim-top">
                                <div className="team-card">
                                    <div className="team-card-thumb">
                                        <img src="/assets/img/team/team-1-3.jpg" alt="img" />
                                    </div>
                                    <div className="team-card-details">
                                        <div className="media-left">
                                            <h4 className="team-card-title"><Link href="/team-details">Stephen</Link></h4>
                                            <p className="team-card-text">Creative Director</p>
                                        </div>
                                        <div className="team-social">
                                            <button className="icon-btn"><i className="fas fa-plus" /></button>
                                            <div className="social-icon-wrap">
                                                <Link href="https://facebook.com/"><i className="fab fa-facebook-f" /></Link>
                                                <Link href="https://twitter.com/"><i className="fab fa-twitter" /></Link>
                                                <Link href="https://linkedin.com/"><i className="fab fa-linkedin-in" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow img-custom-anim-top">
                                <div className="team-card">
                                    <div className="team-card-thumb">
                                        <img src="/assets/img/team/team-1-4.jpg" alt="img" />
                                    </div>
                                    <div className="team-card-details">
                                        <div className="media-left">
                                            <h4 className="team-card-title"><Link href="/team-details">Terry Souro</Link></h4>
                                            <p className="team-card-text">Creative Director</p>
                                        </div>
                                        <div className="team-social">
                                            <button className="icon-btn"><i className="fas fa-plus" /></button>
                                            <div className="social-icon-wrap">
                                                <Link href="https://facebook.com/"><i className="fab fa-facebook-f" /></Link>
                                                <Link href="https://twitter.com/"><i className="fab fa-twitter" /></Link>
                                                <Link href="https://linkedin.com/"><i className="fab fa-linkedin-in" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*======== / Team Section ========*/}
                {/*==============================
Award Area
==============================*/}
  {/*
                <section className="award-area-1 pt-110 pb-120 theme-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="section__title mb-50 wow img-custom-anim-left">
                                    <h2 className="title">AWARDS  RECOGNITIONS</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-end">
                            <div className="col-lg-12">
                                <ul className="award-wrap-area">
                                    <li className="single-award-list">
                                        <div className="award-details">
                                            <h4><Link href="/about">Honorable Mention</Link></h4>
                                            <p>AWWARDS</p>
                                        </div>
                                        <span className="award-year">2022</span>
                                    </li>
                                    <li className="single-award-list">
                                        <div className="award-details">
                                            <h4><Link href="/about">Site of The Day</Link></h4>
                                            <p>CSS Winners</p>
                                        </div>
                                        <span className="award-year">2021</span>
                                    </li>
                                    <li className="single-award-list">
                                        <div className="award-details">
                                            <h4><Link href="/about">Best UI Design</Link></h4>
                                            <p>CSS Design Awards</p>
                                        </div>
                                        <span className="award-year">2024</span>
                                    </li>
                                    <li className="single-award-list">
                                        <div className="award-details">
                                            <h4><Link href="/about">Site of The Day</Link></h4>
                                            <p>AWWARDS</p>
                                        </div>
                                        <span className="award-year">2023</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
              
                  */}
                {/*======== / Award Section ========*/}
                {/*==============================
Contact Area
==============================*/}
{/* 
                <section className="contact-area-1 pt-120 pb-120 position-relative overflow-hidden ">
                    <div className="contact-thumb1 wow img-custom-anim-left">
                        <img src="/assets/img/service/getintouchbm.png" alt="img" />
                    </div>
                    <div className="container">
                        <div className="row align-items-center justify-content-end">
                            <div className="col-lg-6">
                                <div className="contact-form-wrap">
                                    <div className="section__title mb-60 wow img-custom-anim-left">
                                        <h2 className="title">GET IN TOUCH</h2>
                                        <p className="sec-text mt-3">Got a project you want to collaborate on? <br />
                                            Or just fancy a chat?
                                        </p>
                                    </div>
                                    <form action="mail.php" method="POST" className="contact__form ajax-contact">
                                        <div className="row gy-35">
                                            <div className="col-12 form-group">
                                                <label className="form-icon-left"><img src="/assets/img/icon/svg-img/user.svg" alt="icon" /></label>
                                                <input type="text" className="form-control style-border" name="name" id="name" placeholder="Name*" />
                                            </div>
                                            <div className="col-12 form-group">
                                                <label className="form-icon-left"><img src="/assets/img/icon/svg-img/brifcase.svg" alt="icon" /></label>
                                                <input type="text" className="form-control style-border" name="website" id="website" placeholder="Organisation*" />
                                            </div>
                                            <div className="col-12 form-group">
                                                <label className="form-icon-left"><img src="/assets/img/icon/svg-img/envelope.svg" alt="icon" /></label>
                                                <input type="text" className="form-control style-border" name="email" id="email" placeholder="Email*" />
                                            </div>
                                            <div className="col-12 form-group">
                                                <label className="form-icon-left"><img src="/assets/img/icon/svg-img/brush.svg" alt="icon" /></label>
                                                <textarea name="message" placeholder="Message*" id="contactForm" className="form-control style-border" />
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-three square-btn mt-60">
                                            SEND MESSAGE
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/*======== / Contact Section ========*/}
                {/*==============================
Marquee Area
==============================*/}
                <div className="container-fluid px-0 overflow-hidden pb-30 pt-30 theme-bg mfp-hide">
                    <h2 className="title wow img-custom-anim-top text-center">Trusted by Ambitious Brands</h2>
                    <div className="slider__marquee clearfix marquee-wrap style3">
                        
                        <Marquee className="marquee_mode marquee__group">
                            <div className="item m-item"><Link href="/#"><img src="/assets/img/partner/partner1-1.svg" alt="img" /></Link></div>
                            <div className="item m-item"><Link href="/#"><img src="/assets/img/partner/partner1-2.svg" alt="img" /></Link></div>
                            <div className="item m-item"><Link href="/#"><img src="/assets/img/partner/partner1-3.svg" alt="img" /></Link></div>
                            <div className="item m-item"><Link href="/#"><img src="/assets/img/partner/partner1-4.svg" alt="img" /></Link></div>
                            <div className="item m-item"><Link href="/#"><img src="/assets/img/partner/partner1-5.svg" alt="img" /></Link></div>
                            <div className="item m-item"><Link href="/#"><img src="/assets/img/partner/partner1-6.svg" alt="img" /></Link></div>
                        </Marquee>
                    </div>
                </div>
                {/*======== / Marquee Section ========*/}


            </Layout>
        </>
    )
}