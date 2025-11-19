// components/LogoCarousel.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper core styles
import 'swiper/css/navigation'; // Import navigation styles
import 'swiper/css/pagination'; // Import pagination styles
import { Autoplay } from 'swiper/modules'; // Ensure you import Autoplay module

// Define the LogoCarousel component
const LogoCarousel: React.FC = () => {
  return (
    
    <div className="logo-carousel-container">
            <h2
  className="title text-black text-90 text-center"
  style={{ fontWeight: 200 ,fontSize:'1.25vw' }}
>
  Partnered With
</h2>

      <Swiper
        spaceBetween={30} // Space between slides
        slidesPerView={4} // Number of slides visible at once
        loop={true} // Infinite loop
        autoplay={{
          delay: 2000, // Auto move every 2.5 seconds
          disableOnInteraction: false, // Keep moving even if user interacts
        }}
        speed={1000} // Smooth 1-second transition
        modules={[Autoplay]} // Make sure Autoplay module is enabled
        breakpoints={{
          640: {
            slidesPerView: 1, // 1 logo on small screens
          },
          768: {
            slidesPerView: 2, // 2 logos on medium screens
          },
          1024: {
            slidesPerView: 3, // 3 logos on large screens
          },
          1280: {
            slidesPerView: 4, // 4 logos on extra-large screens
          },
        }}
      >
        <SwiperSlide><img src="/assets/img/partner/partner1-1.svg" alt="Client 1" /></SwiperSlide>
        <SwiperSlide><img src="/assets/img/partner/partner1-2.svg" alt="Client 2" /></SwiperSlide>
        <SwiperSlide><img src="/assets/img/partner/partner1-3.svg" alt="Client 3" /></SwiperSlide>
        <SwiperSlide><img src="/assets/img/partner/partner1-4.svg" alt="Client 4" /></SwiperSlide>
        <SwiperSlide><img src="/assets/img/partner/partner1-5.svg" alt="Client 5" /></SwiperSlide>
        <SwiperSlide><img src="/assets/img/partner/partner1-6.svg" alt="Client 6" /></SwiperSlide>
        <SwiperSlide><img src="/assets/img/partner/partner2-1.svg" alt="Client 7" /></SwiperSlide>
        <SwiperSlide><img src="/assets/img/partner/partner2-2.svg" alt="Client 8" /></SwiperSlide>
        <SwiperSlide><img src="/assets/img/partner/partner2-3.svg" alt="Client 9" /></SwiperSlide>
        <SwiperSlide><img src="/assets/img/partner/partner2-4.svg" alt="Client 10" /></SwiperSlide>
        <SwiperSlide><img src="/assets/img/partner/partner2-5.svg" alt="Client 11" /></SwiperSlide>
        <SwiperSlide><img src="/assets/img/partner/partner2-6.svg" alt="Client 12" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default LogoCarousel;
