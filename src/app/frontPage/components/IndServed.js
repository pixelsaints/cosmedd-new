"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import { indData } from "../data";
import "swiper/css";
import "swiper/css/pagination";
import IndCard from "@/components/layout/IndCard";

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
      <div className="block px-4 lg:pl-14 lg:pr-0">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={3.2}
          pagination={{ clickable: true }}
        >
          {indData.map((item) => (
            <SwiperSlide key={item.number} className="ind-card">
              {/* <IndCard {...item} /> */}
              <div className="icon">
                <img src={item.icon} alt={item.title} />
                {/* <img src={item.icon} alt={item.title} className="icon-image" /> */}
              </div>

              <div className="icon-content">
                <div className="icon-content-title">{item.title}</div>
                <div className="icon-content-desc">{item.desc}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}
