"use client"

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
import WhyCard from "@/components/layout/WhyCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import { whyCosmeddData } from "../data";
import { reveal, fadeUp } from "@/lib/animations";

import "swiper/css";
import "swiper/css/pagination";


const WhyCosmedd = () => {
  const whySection = useRef(null);
  const whySectionTitleRef = useRef(null);
  const whySectionCards = useRef(null);
  const whySwiper = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // Split title
      const productTitle = new SplitType(
        whySectionTitleRef.current.querySelector("h2"), { types: "words", }
      );

      // Intro animation
      const introTL = gsap.timeline({
        scrollTrigger: {
          trigger: whySectionTitleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      introTL
        .from(whySectionTitleRef.current.querySelector(".sub-title"), {
          ...reveal,
          stagger: 0.06,
        })
        .from(productTitle.words, {
          ...reveal,
          stagger: 0.06,
        }, "-=0.3")
        .from(whySectionTitleRef.current.querySelector("img"), {
          ...reveal,
          stagger: 0.06,
        }, "-=0.3");

      const cards = whySectionCards.current.querySelectorAll(".why-card");

      // Cards
      cards.forEach((item, i) => {
        gsap.from(item, {
          ...fadeUp,
          delay: i * 0.05,
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true,
          },
        });
      });
      // why-swiper

      const swiperRef = whySwiper.current.querySelector(".why-swiper")

      gsap.from(swiperRef, {
        ...fadeUp,
        scrollTrigger: {
          trigger: whySwiper.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })


      ScrollTrigger.refresh();

    }, whySection);

    return () => ctx.revert();
  }, []);



  return (
    <>
      <div ref={whySection} className="section-wrap px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row items-start gap-12">

          {/* Left Content */}
          <div ref={whySectionTitleRef} className="title-section w-full lg:w-[44%] mb-12 lg:mb-0">
            <div className="sub-title mb-6">Why Choose Us</div>

            <h2 className="mb-8 text-white">
              We lead & inspire in modern healthcare fields
            </h2>

            <img
              className="rounded-lg w-full object-cover"
              src="/images/cosmedd-in-numbers.webp"
              alt="Cosmedd"
            />
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-[56%] lg:pl-6">

            {/* Desktop Grid */}
            <div ref={whySectionCards} className="hidden lg:grid lg:grid-cols-2 gap-6 w-full">
              <div className="grid-left space-y-6">
                {whyCosmeddData.left.map((item) => (
                  <WhyCard key={item.number} {...item} />
                ))}
              </div>

              <div className="grid-right lg:pt-16 space-y-6">
                {whyCosmeddData.right.map((item) => (
                  <WhyCard key={item.number} {...item} />
                ))}
              </div>
            </div>

            {/* Mobile Swiper */}
            <div className="block lg:hidden" ref={whySwiper}>
              <div className="why-swiper">
                <Swiper
                  modules={[Pagination]}
                  spaceBetween={20}
                  slidesPerView={1.1}
                  pagination={{ clickable: true }}
                >
                  {whyCosmeddData.slider.map((item) => (
                    <SwiperSlide key={item.number}>
                      <WhyCard {...item} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default WhyCosmedd;
