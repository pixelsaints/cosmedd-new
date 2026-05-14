"use client";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import TransitionLink from "@/components/transitions/TransitionLink";
import { whyCosmeddData } from "@/data/homeContent";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function WhyUsAlt() {
  const swiperConfig = {
    modules: [Navigation, Pagination],
    spaceBetween: 20,
    slidesPerView: 1.1,
    loop: true,
    parallax: true,

    navigation: {
      prevEl: ".prev",
      nextEl: ".next",
    },

    pagination: {
      el: ".pagination",
      clickable: true,
      type: "progressbar",
    },

    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    breakpoints: {
      640: {
        slidesPerView: 2.2,
      },
      1024: {
        slidesPerView: 3.2,
      },
    },
  };

  return (
    <div className="section-wrap px-4 lg:px-0">
      <div className="sec-title flex flex-col lg:flex-row items-end justify-between mb-16">
        <div className="lg:w-[40%] mb-6 lg:mb-0">
          <div className="sub-title mb-4">Why Choose Us</div>
          <h2 className="text-black">We lead & inspire in modern healthcare</h2>
        </div>
        <div className="lg:w-[50%]">
          <p className="mb-4 text-black/70">We lead and inspire in modern healthcare by delivering innovative pharmaceutical solutions, ensuring quality-driven care, and building trusted global partnerships that enhance wellness, improve outcomes, and support sustainable healthcare advancement worldwide.</p>
          <div className="btn-wrap pb-2">
            <TransitionLink href="/why-choose-us" className="btn btn-small btn-black-outline">
              <span data-title="Learn More">Learn More </span>
              <ArrowRight size={16} absoluteStrokeWidth />
            </TransitionLink>
          </div>
        </div>
      </div>
      <div className="whyus-swiper custom-swiper">
        <Swiper {...swiperConfig}>
          {whyCosmeddData.slider.map((item) => (
            <SwiperSlide key={item.number}>
              <div className="icon">
                <img src={item.icon} alt={item.title} className="icon-image" />
                <div className="icon-number text-black">{item.number}</div>
              </div>

              <div className="icon-content">
                <div className="icon-content-title">{item.title}</div>
                <div className="icon-content-desc">{item.desc}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex flex-row items-center justify-between w-[90%] mx-auto">
          <div className="w-full relative">
            <div className="pagination" />
          </div>
          <div className="btns-wrap flex flex-row gap-4">
            {/* Arrows */}
            <button className="prev">
              <ChevronLeft size={26} />
            </button>

            <button className="next">
              <ChevronRight size={26} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
