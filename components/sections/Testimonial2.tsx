'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import '../../public/assets/css/newhome.css';  // Import the CSS from the 'styles' folder

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        '1200': {
            slidesPerView: 1,
        },
        '992': {
            slidesPerView: 1,
        },
        '768': {
            slidesPerView: 1,
        },
        '576': {
            slidesPerView: 1,
        },
        '0': {
            slidesPerView: 1,
        },
    },
    // Navigation arrows
    navigation: {
        nextEl: '.testimonial-button-next',
        prevEl: '.testimonial-button-prev',
    },
}


export default function Testimonial2() {
    return (
        <>
            <section className="testimonial-area-2 pt-60 pb-60 white-bg new-white-bg-sections">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="section__title pb-55">
                                <h2 className="shadow-title ">TESTIMONIAL</h2>
                                <h2 className="title title2 wow img-custom-anim-left blck-title">FEEDBACK FROM OUR CLIENTS</h2>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial__item-wrap2">
                        <div className="swiper testimonial-active" id="testimonialSlider1">
                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                <SwiperSlide>
                                    <div className="row gy-30 align-items-center">
                                        <div className="col-xl-5">
                                            <div className="testimonial__author">
                                                <div className="thumb">
                                                    <img src="/assets/img/others/testimonial5-1.jpg" alt="img" />
                                                </div>
                                                <div className="testimonial__author-content">
                                                    <h4 className="testimonial__title">Alex Carter</h4>
                                                    <span className="testimonial__desig">COO, Silverline Dynamics</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-7">
                                            <div className="testimonial__item style2">
                                                <div className="testimonial__icon">
                                                    <img src="/assets/img/icon/svg-img/quote-left2.svg" alt="img" />
                                                </div>
                                                <div className="testimonial__content">
                                                    <p className="testimonial__text blck-title">Brave Moor has been a reliable partner, delivering 
                                                        practical marketing strategies that truly impact our growth. Their transparency 
                                                        and professionalism stand out.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="row gy-30 align-items-center">
                                        <div className="col-xl-5">
                                            <div className="testimonial__author">
                                                <div className="thumb">
                                                    <img src="/assets/img/others/group-img-1-3.jpg" alt="img" />
                                                </div>
                                                <div className="testimonial__author-content">
                                                    <h4 className="testimonial__title">Mia Reynolds</h4>
                                                    <span className="testimonial__desig">Marketing Director, Evercrest Solutions</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-7">
                                            <div className="testimonial__item style2">
                                                <div className="testimonial__icon">
                                                    <img src="/assets/img/icon/svg-img/quote-left2.svg" alt="img" />
                                                </div>
                                                <div className="testimonial__content">
                                                    <p className="testimonial__text">We trust Brave Moor to deliver realistic
                                                         goals and steady growth. Their transparency and expertise make them a standout partner</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="row gy-30 align-items-center">
                                        <div className="col-xl-5">
                                            <div className="testimonial__author">
                                                <div className="thumb">
                                                    <img src="/assets/img/others/group-img-1-3.jpg" alt="img" />
                                                </div>
                                                <div className="testimonial__author-content">
                                                    <h4 className="testimonial__title">Liam Bennett</h4>
                                                    <span className="testimonial__desig">Founder, HarborPoint Apparel</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-7">
                                            <div className="testimonial__item style2">
                                                <div className="testimonial__icon">
                                                    <img src="/assets/img/icon/svg-img/quote-left2.svg" alt="img" />
                                                </div>
                                                <div className="testimonial__content">
                                                    <p className="testimonial__text">Brave Moor’s honest and focused marketing efforts 
                                                        have helped us reach new revenue milestones without overpromising.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="row gy-30 align-items-center">
                                        <div className="col-xl-5">
                                            <div className="testimonial__author">
                                                <div className="thumb">
                                                    <img src="/assets/img/others/group-img-1-3.jpg" alt="img" />
                                                </div>
                                                <div className="testimonial__author-content">
                                                    <h4 className="testimonial__title">Olivia Hayes</h4>
                                                    <span className="testimonial__desig">VP Sales, SummitWorks Innovations</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-7">
                                            <div className="testimonial__item style2">
                                                <div className="testimonial__icon">
                                                    <img src="/assets/img/icon/svg-img/quote-left2.svg" alt="img" />
                                                </div>
                                                <div className="testimonial__content">
                                                    <p className="testimonial__text">Their strategic insights and on-time delivery
                                                         make Brave Moor an essential part of our growth strategy.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="row gy-30 align-items-center">
                                        <div className="col-xl-5">
                                            <div className="testimonial__author">
                                                <div className="thumb">
                                                    <img src="/assets/img/others/group-img-1-3.jpg" alt="img" />
                                                </div>
                                                <div className="testimonial__author-content">
                                                    <h4 className="testimonial__title">Ethan Brooks</h4>
                                                    <span className="testimonial__desig">CEO, Vanguard Systems</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-7">
                                            <div className="testimonial__item style2">
                                                <div className="testimonial__icon">
                                                    <img src="/assets/img/icon/svg-img/quote-left2.svg" alt="img" />
                                                </div>
                                                <div className="testimonial__content">
                                                    <p className="testimonial__text">Working with Brave Moor means real partnership and measurable results. 
                                                        Their marketing plans have consistently boosted our business.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="row justify-content-end">
                            <div className="col-xl-7">
                                <div className="btn-wrap">
                                    <button className="testimonial-button-next btn border-btn icon-btn slider-prev default"><i className="fas fa-angle-left" /></button>
                                    <button className="testimonial-button-next btn border-btn icon-btn slider-next default"><i className="fas fa-angle-right" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
