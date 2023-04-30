import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import img1 from '../assets/images/happycouple1.jpeg';
import img2 from '../assets/images/happycouple2.jpeg';
import img3 from '../assets/images/happycouple3.jpeg';

export default function Carrousel () {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper mx-5"
            >
               
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-screen"
                        src={img2}
                        alt="image slide 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-screen relative"
                        src={img1}
                        alt="image slide 1"
                    />
                    <div className="text absolute" data-swiper-parallax="-100">
                      <h1 className=" text-9xl text-zinc-400 text-left">Denturo</h1>
                      <p className="text-3xl w-1/2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                        dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                        laoreet justo vitae porttitor porttitor.
                      </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-screen"
                        src={img3}
                        alt="image slide 3"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}