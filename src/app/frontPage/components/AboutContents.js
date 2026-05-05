"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Counter from "@/components/ui/counter";
import { ArrowRight } from "lucide-react";
import TransitionLink from "@/components/transitions/TransitionLink";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const AboutContents = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageLeft = useRef(null);
  const imageRight = useRef(null);
  const counterRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // About Animation

      // Image animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(imageLeft.current, {
        yPercent: -15,
        opacity: 0,
        filter: "blur(10px)",
        duration: 1,
        ease: "power3.out",
      }).from(
        imageRight.current,
        {
          yPercent: 15,
          opacity: 0,
          filter: "blur(10px)",
          duration: 1,
          ease: "power3.out",
        },
        "-=0.8"
      );

      // Text animation
      const titleAnimate = new SplitType(".title-animate", {
        types: ["words", "chars"],
      });

      const subTitle = textRef.current.querySelector(".sub-title");
      const leadText = new SplitType(textRef.current.querySelector("p.lead"), { types: ["lines"] });
      const des = textRef.current.querySelectorAll("p.desc");
      const btnAbout = textRef.current.querySelector(".btn-wrap");


      const tlText = gsap.timeline({
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tlText
        .from(subTitle, {
          y: 40,
          rotate: 8,
          opacity: 0,
          duration: 0.6,
          ease: "power4.out",
        })
        .from(titleAnimate.words, {
          y: 40,
          rotate: 8,
          opacity: 0,
          duration: 0.6,
          ease: "power4.out",
          stagger: 0.1,
        }, "-=0.6")
        .from(leadText.lines, {
          y: 40,
          opacity: 0,
          duration: 0.6,
          ease: "power4.out",
          stagger: 0.1,
        }, "-=0.4")
        .from(des, {
          y: 40,
          opacity: 0,
          duration: 0.6,
          ease: "power4.out",
          stagger: 0.1,
        }, "-=0.4")
        .from(btnAbout, {
          y: 40,
          opacity: 0,
          duration: 0.6,
          ease: "power4.out",
          stagger: 0.1,
        }, "-=0.4");


      // Stat Cards

      const startCards = counterRef.current.querySelectorAll(".stat-wrapper > div");

      startCards.forEach((item, i) => {
        gsap.from(item, {
          opacity: 0,
          y: 80,
          // filter: "blur(10px)",
          duration: 0.8,
          delay: i * 0.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true,
          },
        });
      });

      ScrollTrigger.refresh();

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div ref={sectionRef} className="about section-wrap">
        <div className="flex sm:flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-[45%] mb-12 lg:mb-0">
            <div className="flex flex-row gap-4">
              <div ref={imageLeft} className="w-1/2 flex flex-col gap-4">
                <img
                  className="mask-img-media lg:h-[20em] h-[10em] object-cover w-full rounded-xl"
                  src="/images/lab-jar.webp"
                  alt="Cosmedd"
                />
                <img
                  className="mask-img-media h-[14em] object-cover lg:w-[90%] rounded-xl self-end"
                  src="/images/scientist-laboratory.webp"
                  alt="Cosmedd"
                />
              </div>
              <div ref={imageRight} className="w-1/2 flex flex-col gap-4 lg:pt-8">
                <img
                  className="mask-img-media h-[14em] object-cover lg:w-[90%] rounded-xl self-start"
                  src="/images/precision-medicine-image.webp"
                  alt="Cosmedd"
                />
                <img
                  className="mask-img-media lg:h-[20em] h-[10em] object-cover w-full rounded-xl"
                  src="/images/cosmedd-laboratory.webp"
                  alt="Cosmedd"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-[50%]">
            <div className="flex flex-col" ref={textRef}>
              <div className="sub-title mb-3 fade-up">About Cosmedd</div>

              <h2 className="mb-4 title-animate text-black">Simplifying complexity in modern healthcare systems</h2>

              <p className="mb-4 lead">We build intuitive, scalable digital healthcare experiences that connect patients, providers, and systems seamlessly.</p>

              <p className="mb-6 desc">Established in 2015, Cosmedd Healthcare is an export-oriented company based in India. We specialize in sourcing and manufacturing healthcare and wellness products for clients across Southeast Asia and the CIS region, including Russia.</p>

              <div className="btn-wrap">
                <TransitionLink href="/about" className="btn btn-link btn-small">
                  <span data-title="Learn More">Learn More </span>
                  <ArrowRight size={16} absoluteStrokeWidth />
                </TransitionLink>
              </div>
            </div>
          </div>
        </div>

        <div ref={counterRef} className="grid lg:grid-cols-3 gap-6 stat-wrapper mt-24 items-center">
          <div className="mb-8 lg:mb-0">
            <div className="sub-title mb-3">Cosmedd by the numbers</div>
            <h3 className="-mb-1 font-medium">The Cosmedd Impact In Numbers</h3>
          </div>
          <Counter
            value="15"
            suffix="+"
            title="Years of pharma expertise"
          />
          <Counter
            value="24"
            suffix="+"
            title="Countries Served Globally"
          />
          <Counter
            value="98"
            suffix="%"
            title="Projects delivered on schedule"
          />
          <Counter
            value="100"
            suffix="%"
            title="Regulatory-compliant integrations"
          />
          <div>
            <img src="/images/cosmedd-in-numbers.webp" alt="The Cosmedd Impact" className="h-[11em] w-full object-cover" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContents;