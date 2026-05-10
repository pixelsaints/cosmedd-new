"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import { reveal } from "@/lib/animations";
import TransitionLink from "../transitions/TransitionLink";
import CertCard from "@/components/ui/CertCard";

import "swiper/css";

gsap.registerPlugin(ScrollTrigger);

const topCerts = ["EU-GMP", "WHO-GMP", "USFDA", "PIC/S", "ISO 9001"];
const bottomCerts = ["ISO 14001", "ISO 22000", "FSSAI", "HALAL", "HACCP"];

export default function QualitySection() {
  const qcSection = useRef(null);
  const qaSectionTitle = useRef(null);
  const qaSectionCards = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {


      // Text animation
      const titleAnimate = new SplitType(".title-section h2", {
        types: ["words", "chars"],
      });
      const leadText = new SplitType(qaSectionTitle.current.querySelector("p"), {
        types: ["lines"]
      });

      const subTitle = qaSectionTitle.current.querySelector(".sub-title");
      const btnAbout = qaSectionTitle.current.querySelector(".btn-wrap");


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


      // Stat Cards

      const startCards = qaSectionCards.current.querySelectorAll(".qc-certificates > div");

      startCards.forEach((item, i) => {
        gsap.from(item, {
          scale: 1.3,
          delay: i * 0.5,
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true,
          },
        });
      });

      ScrollTrigger.refresh();

    }, qcSection);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={qcSection} className="section-wrap">
      <div className="flex flex-col lg:flex-row items-center">
        <div ref={qaSectionTitle} className="title-section w-1/2 pr-8">
          <div className="sub-title mb-4">Quality Compliance</div>

          <h2 className="mb-8 text-black">
            Internationally Compliant Quality Standards
          </h2>

          <p className="mb-6">
            Our Quality Management System ensures strict adherence to
            international regulatory requirements through rigorous quality
            assurance, control checks, and continuous improvement.
          </p>

          <div className="btn-wrap">
            <TransitionLink className="btn" href="/quality-compliance">
              <span data-title="Learn More">Learn More</span>
              <ArrowRight size={20} absoluteStrokeWidth />
            </TransitionLink>
          </div>
        </div>

        <div className="w-1/2 pl-8">
          <img
            className="rounded-lg w-full object-cover h-[26em]"
            src="/images/cosmedd-in-numbers.webp"
            alt="Cosmedd Quality"
          />
        </div>
      </div>

      <div ref={qaSectionCards} className="qc-certificates relative mt-20 overflow-hidden" >

        <div>
          <Swiper
            modules={[Autoplay]}
            loop
            allowTouchMove={false}
            speed={5000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 16 },
              768: { slidesPerView: 3.5, spaceBetween: 20 },
              1200: { slidesPerView: 5, spaceBetween: 24 },
            }}
            className="mb-6"
          >
            {[...topCerts, ...topCerts].map((cert, i) => (
              <SwiperSlide key={i}>
                <div className="flex h-24 w-56 items-center justify-center rounded border border-slate-200 bg-white">
                  <span className="text-lg font-semibold tracking-wide text-slate-900">
                    {cert}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div>
          <Swiper
            modules={[Autoplay]}
            loop
            // dir="rtl"
            allowTouchMove={false}
            speed={5000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true,
              pauseOnMouseEnter: true
            }}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 16 },
              768: { slidesPerView: 3.5, spaceBetween: 20 },
              1200: { slidesPerView: 5, spaceBetween: 24 },
            }}
          >
            {[...bottomCerts, ...bottomCerts].map((cert, i) => (
              <SwiperSlide key={i}>
                <div className="flex h-24 w-56 items-center justify-center rounded border border-slate-200 bg-white">
                  <span className="text-lg font-semibold tracking-wide text-slate-900">
                    {cert}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}