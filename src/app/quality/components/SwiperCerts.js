"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { topCerts, bottomCerts } from "@/data/homeContent";

import "swiper/css";

export default function SwiperCerts() {



  const baseSwiperConfig = {
    modules: [Autoplay, FreeMode],
    loop: true,
    allowTouchMove: false,
    speed: 5000,
    direction: "vertical",

    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 2.5,
        spaceBetween: 16,
      },

      768: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },

      1200: {
        slidesPerView: 3.5,
        spaceBetween: 24,
      },
    },
  };

  const swiperConfigFromTop = {
    ...baseSwiperConfig,
  };

  const swiperConfigFromBottom = {
    ...baseSwiperConfig,

    autoplay: {
      ...baseSwiperConfig.autoplay,
      reverseDirection: true,
    },
  };

  return (
    <div className="swiper-certs">
      <div className="grid grid-cols-2 gap-6 h-[20em] lg:h-[35em] overflow-hidden items-center justify-center px-8 lg:px-0 ">
        {/* Top → Bottom */}
        <Swiper {...swiperConfigFromTop} className="h-full w-full" >
          {topCerts.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col w-full py-6 items-center justify-center rounded border border-slate-200 bg-white h-30">
                <img src={item.img} alt={item.title} />
                {/* <span className="text-[14px] mt-3 font-semibold tracking-wide text-slate-900">{item.title}</span> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom → Top */}
        <Swiper {...swiperConfigFromBottom} className="h-full w-full" >
          {bottomCerts.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col w-full py-6 items-center justify-center rounded border border-slate-200 bg-white h-30">
                <img src={item.img} alt={item.title} />
                {/* <span className="text-[14px] mt-3 font-semibold tracking-wide text-slate-900">{item.title}</span> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
