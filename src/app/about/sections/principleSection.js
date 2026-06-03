"use client"
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import splitType from "split-type";
import ValuesCard from "../components/ValuesCard";

gsap.registerPlugin(ScrollTrigger);

const PrincipleSection = () => {
  const introRef = useRef(null);

  useEffect(() => {
    const subtitleEl = introRef.current.querySelector(".sub-title");
    const titleEl = introRef.current.querySelector("h2.title");
    const descEl = introRef.current.querySelector("p.description");
    const valuesEls = introRef.current.querySelectorAll(".value");

    const titleAnim = titleEl ? new splitType(titleEl, { types: "words, lines" }) : null;
    const descAnim = descEl ? new splitType(descEl, { types: "lines" }) : null;

    const ctx = gsap.context(() => {

      const introAnim = gsap.from(introRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: introRef.current,
          start: "top 80%",
          // end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: introRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });

      if (subtitleEl) {
        tl.from(subtitleEl, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: "back.out(1.7)",
        });
      }

      if (titleAnim) {
        tl.from(titleAnim.words, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.1,
        }, "-=0.4");
      }

      if (descAnim) {
        tl.from(descAnim.lines, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
        }, "-=0.6");
      }

      const valuesAnim = gsap.from(valuesEls, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.2,
        scrollTrigger: {
          trigger: valuesEls[0],
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      ScrollTrigger.refresh();

    }, introRef);

    return () => {
      ctx.revert();
    };

  }, []);

  return (
    <section className="pb-28 bg-pri-50" ref={introRef}>
      <div className="relative">
        <img src="/images/cosmedd-principles.webp" alt="" className=" object-cover object-center h-[40em] w-full" />
        <div className="absolute w-full h-full top-0 left-0 bg-black/70"></div>
      </div>
      <div className="section-wrap mt-[-32em] lg:mt-[-22em] px-4 lg:px-0 relative">
        <div className="sec-title flex flex-col lg:flex-row items-end justify-between mb-16">
          <div className="lg:w-[40%] mb-6 lg:mb-0">
            <div className="sub-title mb-4">Core Priniciples</div>
            <h2 className="text-white title">The Values Behind Our Commitment</h2>
          </div>
          <div className="lg:w-[50%]">
            <p className="mb-3 text-white description">
              Trust, quality, integrity, and collaboration define every decision we make, shaping strong partnerships and enabling us to consistently deliver dependable healthcare solutions that create meaningful impact across markets while advancing better care through purpose-driven commitment.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12">
          <ValuesCard
            subTitle="Our Mission"
            title="Making Quality Healthcare Accessible for All"
            desc="To make quality healthcare solutions accessible through affordability, consistency, and trusted sourcing partnerships."
            pngSrc="/icons/goal.png"
            gifSrc="/icons/goal.gif"
          >
            <ul className="flex flex-col gap-3">
              <li className="flex font-bold">
                Health And Wellness For All
              </li>
              <li className="flex font-bold">
                Quality Products At Affordable Prices
              </li>
              <li className="flex font-bold">
                Serving Diverse Healthcare Markets Globally
              </li>
              <li className="flex font-bold">
                Building Trusted Partnerships That Last
              </li>
            </ul>
          </ValuesCard>

          <ValuesCard
            subTitle="Our Values"
            title="Shaping a Healthier Future Through Care"
            desc="To Spread Hope And Contribute To The Health And Well-Being Of Human Race By Providing The Best Of Care."
            pngSrc="/icons/test-tube.png"
            gifSrc="/icons/test-tube.gif"
          >
            <ul className="flex flex-col gap-3">
              <li className="flex font-bold">
                Delivering Care Through Trusted Solutions
              </li>
              <li className="flex font-bold">
                Advancing Health Through Innovation
              </li>
              <li className="flex font-bold">
                Supporting Better Health Outcomes
              </li>
              <li className="flex font-bold">
                Creating Lasting Healthcare Impact
              </li>
            </ul>
          </ValuesCard>
        </div>
      </div>
    </section>
  );
};

export default PrincipleSection;