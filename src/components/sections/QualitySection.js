"use client";

import { usePathname } from "next/navigation";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import { reveal } from "@/lib/animations";
import TransitionLink from "../transitions/TransitionLink";
import { topCerts, bottomCerts } from "@/data/homeContent";

import "swiper/css";

gsap.registerPlugin(ScrollTrigger);

const swiperConfigRtl = {
  modules: [Autoplay, FreeMode],
  loop: true,
  allowTouchMove: false,
  speed: 5000,

  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 16,
    },

    768: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },

    1200: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
};

const swiperConfigLtr = {
  modules: [Autoplay, FreeMode],
  loop: true,
  allowTouchMove: false,
  speed: 5000,

  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
    reverseDirection: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 16,
    },

    768: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },

    1200: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
};

export default function QualitySection() {
  const qcSection = useRef(null);
  const qaSectionTitle = useRef(null);
  const qcSectionImg = useRef(null);
  const qaSectionCards = useRef(null);

  const pathname = usePathname();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {


      // Text animation
      const titleAnimate = new SplitType(qaSectionTitle.current.querySelector(".title-section h2"), {
        types: ["words", "chars"],
      });
      const leadText = new SplitType(qaSectionTitle.current.querySelector("p"), {
        types: ["lines"]
      });

      const subTitle = qaSectionTitle.current.querySelector(".sub-title");
      const btnAbout = qaSectionTitle.current.querySelector(".btn-wrap");
      const qcImage = qcSectionImg.current.querySelector("img");


      const tlText = gsap.timeline({
        scrollTrigger: {
          trigger: qaSectionTitle.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tlText
        .from(subTitle, {
          ...reveal,
        })
        .from(titleAnimate.words, {
          ...reveal,
          stagger: 0.1,
        }, "-=0.6")
        .from(leadText.lines, {
          ...reveal,
          stagger: 0.1,
        }, "-=0.4")
        .from(btnAbout, {
          ...reveal,
          stagger: 0.1,
        }, "-=0.4");

      gsap.from(qcImage, {
        ...reveal,
        scrollTrigger: {
          trigger: qcSectionImg.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      })


      // Stat Cards

      const certCards = qaSectionCards.current.querySelector(".qc-certificates > div");

      gsap.from(certCards, {
        y: 100,
        opacity: 0,
        // delay: i * 0.5,
        scrollTrigger: {
          trigger: certCards,
          start: "top 85%",
          toggleActions: "play none none reverse",
          invalidateOnRefresh: true,
        },
      });

      ScrollTrigger.refresh();

    }, qcSection);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={qcSection} className="section-wrap">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
        <div ref={qaSectionTitle} className="title-section lg:w-1/2 lg:pr-8 order-2 lg:order-1">
          <div className="sub-title mb-4">Quality Standards</div>

          <h2 className="mb-6 text-black">Internationally Compliant Quality Standards</h2>

          <p className="mb-6">At Cosmedd Healthcare, we ensure that all our products and services meet international regulatory standards and customer expectations. Our robust Quality Management System (QMS) comprises Error Free Checks, Strict Quality Control, Quality Assurance and constant improvement with the changing market conditions.</p>

          <div className="btn-wrap">
            {pathname !== "/global-presence" && (
              <TransitionLink className="btn" href="/quality">
                <span data-title="Learn More">Learn More</span>
                <ArrowRight size={20} absoluteStrokeWidth />
              </TransitionLink>
            )}
          </div>
        </div>

        <div ref={qcSectionImg} className="lg:w-1/2 lg:pl-8 order-1 lg:order-2">
          <img
            className="rounded-lg w-full object-cover h-[26em]"
            src="/images/quality-standards.webp"
            alt="Cosmedd Quality"
          />
        </div>
      </div>

      <div ref={qaSectionCards} className="qc-certificates relative mt-20 overflow-hidden" >
        <div>
          <div className="mb-6">
            <Swiper {...swiperConfigRtl}>
              {topCerts.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="flex flex-col w-full py-6 items-center justify-center rounded border border-slate-200 bg-white h-30">
                    <img src={item.img} alt={item.title} />
                    {/* <span className="text-[14px] mt-3 font-semibold tracking-wide text-slate-900">{item.title}</span> */}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div>
            <Swiper {...swiperConfigLtr}>
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
      </div>
    </div>
  );
}