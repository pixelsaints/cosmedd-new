"use client";

import { usePathname } from "next/navigation";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Lottie from "lottie-react";
import { ArrowRight } from "lucide-react";
import TransitionLink from "@/components/transitions/TransitionLink"
import globeAnimation from "@/lib/globe.json";
import { reveal } from "@/lib/animations";


export default function GlobalSection() {

  const globeRef = useRef(null);
  const globeTitleRef = useRef(null);
  const globeContentRef = useRef(null);

  const pathname = usePathname();

  useLayoutEffect(() => {

    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {

      const globeTitle = new SplitType(globeTitleRef.current.querySelector("h2"), { types: "words", });
      const globeTitleDesc = new SplitType(globeTitleRef.current.querySelector("p.lead"), { types: "lines", });

      const globeInto = gsap.timeline({
        scrollTrigger: {
          trigger: globeTitleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })

      globeInto
        .from(globeTitleRef.current.querySelector(".sub-title"), {
          ...reveal
        })
        .from(globeTitle.words, {
          ...reveal,
          stagger: 0.04
        }, "-=0.6")
        .from(globeTitleDesc.lines, {
          ...reveal,
          stagger: 0.04
        }, "-=0.6")
        .from(globeTitleRef.current.querySelector(".btn-wrap"), {
          ...reveal,
          stagger: 0.04
        }, "-=0.6");

      mm.add("(min-width: 1024px)", () => {

        // Top Left
        gsap.from(".top-left", {
          x: 100,
          scale: 0.8,
          opacity: 0,
          scrollTrigger: {
            trigger: globeContentRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: true
          }
        });

        // Middle Left
        gsap.from(".middle-left", {
          x: 100,
          scale: 0.8,
          opacity: 0,
          scrollTrigger: {
            trigger: globeContentRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: true
          }
        });

        // Bottom Left
        gsap.from(".bottom-left", {
          y: -160,
          scale: 0.8,
          opacity: 0,
          scrollTrigger: {
            trigger: globeContentRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: true
          }
        });

        // Top Right
        gsap.from(".top-right", {
          x: -100,
          opacity: 0,
          scale: 0.8,
          scrollTrigger: {
            trigger: globeContentRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: true
          }
        });

        // Middle Right
        gsap.from(".middle-right", {
          x: -100,
          opacity: 0,
          scale: 0.8,
          scrollTrigger: {
            trigger: globeContentRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: true
          }
        });

        // Bottom Right
        gsap.from(".bottom-right", {
          x: -160,
          opacity: 0,
          scale: 0.8,
          scrollTrigger: {
            trigger: globeContentRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: true
          }
        });

        // Globe
        gsap.from(".globe", {
          scale: 0.6,
          opacity: 0,
          rotate: -20,
          ease: "power3.out",
          scrollTrigger: {
            trigger: globeContentRef.current,
            start: "top 80%",
            end: "top 40%",
            scrub: true
          }
        });
      });

      mm.add("(max-width: 1023px)", () => {
        gsap.from(".location", {
          ...reveal,
          y: 60,
          scale: 0.9,
          stagger: 0.2,
          scrollTrigger: {
            trigger: globeContentRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        });

        gsap.from(".globe", {
          scale: 0.7,
          opacity: 0,
          rotate: -10,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: globeContentRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        });
      });

    }, globeRef);

    return () => {
      mm.revert();
      ctx.revert()
    };
  }, []);

  return (
    <div className="section-wrap" ref={globeRef}>
      <div ref={globeTitleRef} className="flex flex-col items-center justify-start lg:w-[75%] mx-auto">
        <div className="sub-title">Our Global Presence</div>
        <h2 className="mt-6 mb-3 text-black text-center lg:w-[80%]">Expanding Healthcare Access Across Global Markets</h2>
        <p className="text-black/70 lead text-center mb-6 lg:w-[70%]">Delivering trusted healthcare and wellness solutions across Southeast Asia, CIS regions, and emerging international markets.</p>

        {pathname !== "/global-presence" && (
          <div className="btn-wrap">
            <TransitionLink
              href="/global-presence"
              className="btn btn-link-white"
            >
              <span data-title="Learn More">Learn More</span>
              <ArrowRight size={20} absoluteStrokeWidth />
            </TransitionLink>
          </div>
        )}
      </div>
      <div ref={globeContentRef}>
        <div className="hidden lg:flex flex-row gap-8 items-center mt-[4em]" >
          <div className="col w-[35%] flex flex-col items-center justify-center">
            <div className="location top-left flex flex-col self-end">
              <div className="icon">
                <img src="/icons/russia.svg" alt="" />
              </div>
              <h5 className="p-6 text-center font-bold" >Russia & CIS Region</h5>
            </div>
            <div className="location middle-left flex flex-col self-start">
              <div className="icon">
                <img src="/icons/vietnam.svg" alt="" />
              </div>
              <h5 className="p-6 text-center font-bold" >Vietnam</h5>
            </div>
            <div className="location bottom-left flex flex-col self-end">
              <div className="icon">
                <img src="/icons/myanmar.svg" alt="" />
              </div>
              <h5 className="p-6 text-center font-bold" >Myanmar</h5>
            </div>
          </div>
          <div className="w-[40%] left-col lottie-anime">
            <div className="globe">
              <Lottie animationData={globeAnimation} loop className="w-full scale-[3]" />
            </div>
          </div>
          <div className="col w-[35%] flex flex-col items-center justify-center">
            <div className="location top-right flex flex-col self-start">
              <div className="icon">
                <img src="/icons/philippines.svg" alt="" />
              </div>
              <h5 className="p-6 text-center font-bold" >Philippines</h5>
            </div>
            <div className="location middle-right flex flex-col self-end">
              <div className="icon">
                <img src="/icons/thailand.svg" alt="" />
              </div>
              <h5 className="p-6 text-center font-bold" >Thailand</h5>
            </div>
            <div className="location bottom-right flex flex-col self-start">
              <div className="icon">
                <img src="/icons/africa.svg" alt="" />
              </div>
              <h5 className="p-6 text-center font-bold" >Africa & Middle East</h5>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:hidden">
          <div className="globe">
            <Lottie animationData={globeAnimation} loop className="w-full scale-[1.6] mt-24" />
          </div>
          <div className="grid grid-cols-2 lg:hidden gap-4 px-4 -mt-10">
            <div className="location top-left flex flex-col self-end">
              <div className="icon">
                <img src="/icons/russia.svg" alt="" />
              </div>
              <h5 className="p-6 text-center font-bold" >Russia & CIS Region</h5>
            </div>
            <div className="location middle-left flex flex-col self-start">
              <div className="icon">
                <img src="/icons/vietnam.svg" alt="" />
              </div>
              <h5 className="p-6 text-center font-bold" >Vietnam</h5>
            </div>
            <div className="location bottom-left flex flex-col self-end">
              <div className="icon">
                <img src="/icons/myanmar.svg" alt="" />
              </div>
              <h5 className="p-6 text-center font-bold" >Myanmar</h5>
            </div>
            <div className="location top-right flex flex-col self-start">
              <div className="icon">
                <img src="/icons/philippines.svg" alt="" />
              </div>
              <h5 className="p-6 text-center font-bold" >Philippines</h5>
            </div>
            <div className="location middle-right flex flex-col self-end">
              <div className="icon">
                <img src="/icons/thailand.svg" alt="" />
              </div>
              <h5 className="p-6 text-center font-bold" >Thailand</h5>
            </div>
            <div className="location bottom-right flex flex-col self-start">
              <div className="icon">
                <img src="/icons/africa.svg" alt="" />
              </div>
              <h5 className="p-6 text-center font-bold" >Africa & Middle East</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
