"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import { indData } from "../data";

export default function IndServed() {
  const indServedRef = useRef(null);
  const indServedTitleRef = useRef(null);
  const indServedContentRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      const indTitle = new SplitType(indServedTitleRef.current.querySelector("h2"), { types: "words", });
      const indTitleDesc = new SplitType(indServedTitleRef.current.querySelector("p.lead"), { types: "lines", });

      const indInto = gsap.timeline({
        scrollTrigger: {
          trigger: indServedTitleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })

      indInto
        .from(indServedTitleRef.current.querySelector(".sub-title"), {
          y: 40,
          rotate: 6,
          filter: "blur(8px)",
          opacity: 0,
          duration: 0.7,
          stagger: 0.06,
          ease: "power3.out",
        })
        .from(indTitle.words, {
          y: 40,
          rotate: 6,
          filter: "blur(8px)",
          opacity: 0,
          duration: 0.7,
          stagger: 0.06,
          ease: "power3.out",
        }, "-=0.6")
        .from(indTitleDesc.lines, {
          y: 40,
          rotate: 6,
          filter: "blur(8px)",
          opacity: 0,
          duration: 0.7,
          stagger: 0.06,
          ease: "power3.out",
        }, "-=0.6");

      gsap.from(indServedContentRef.current, {
        y: 40,
        filter: "blur(8px)",
        opacity: 0,
        duration: 0.7,
        stagger: 0.06,
        ease: "power3.out",

        scrollTrigger: {
          trigger: indServedContentRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })


    }, indServedRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="section-wrap" ref={indServedRef}>
        <div ref={indServedTitleRef} className="flex flex-col items-center justify-start lg:w-[60%] mx-auto mb-12">
          <div className="sub-title">Industries We Serve</div>
          <h2 className="mt-6 mb-3 text-black text-center">Healthcare Solutions Across Diverse Industry Sectors</h2>
          <p className="text-black/70 lead text-center mb-6">Serving global healthcare industries with reliable sourcing, compliant products, and scalable solutions tailored for diverse market needs.</p>
        </div>
      </div>

      <div className="relative ind-swiper w-full pl-10" ref={indServedContentRef}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={3.4}
          loop={true}
          parallax={true}
          navigation={{
            prevEl: ".why-prev",
            nextEl: ".why-next",
          }}
          pagination={{
            el: ".why-pagination",
            clickable: true,
            type: "progressbar",
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: { slidesPerView: 1.2, },
            1024: { slidesPerView: 3.4 }
          }}
        >
          {
            indData.map((item) => (
              <SwiperSlide key={item.number} className="ind-card">
                {/* <IndCard {...item} /> */}
                <div className="icon" data-swiper-parallax="-100">
                  <img src={item.icon} alt={item.title} className="icon-img" />
                  <img src={item.iconSvg} alt={item.title} className="icon-svg" />
                </div>

                <div className="icon-content">
                  <div className="icon-content-title" data-swiper-parallax="-200">{item.title}</div>
                  <div className="icon-content-desc" data-swiper-parallax="-300">{item.desc}</div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>

        <div className="flex flex-row items-center justify-between w-[90%] mx-auto">
          <div className="w-full relative">
            <div className="why-pagination" />
          </div>
          <div className="btns-wrap flex flex-row gap-4">
            {/* Arrows */}
            <button className="why-prev">
              <ChevronLeft size={26} />
            </button>

            <button className="why-next">
              <ChevronRight size={26} />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}


