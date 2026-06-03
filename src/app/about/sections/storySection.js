"use client";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

import Counter from "@/components/ui/counter";

export default function StorySection() {
  const introRef = useRef(null);

  useLayoutEffect(() => {
    const section = introRef.current;

    const ctx = gsap.context(() => {
      if (!section) return;

      const subtitleEl = section.querySelector(".sub-title");
      const titleEl = section.querySelector("h2.title");
      const descLines = section.querySelectorAll(".description p");

      const title = titleEl ? new SplitType(titleEl, { types: "chars, words, lines" }) : null;

      const stat = gsap.utils.toArray(
        section.querySelectorAll(".stat")
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      if (subtitleEl) {
        tl.from(subtitleEl, {
          opacity: 0,
          y: 20,
          duration: 1,
          stagger: 0.04,
          ease: "power2.out",
        });
      }

      if (title) {
        tl.from(title.chars, {
          opacity: 0,
          y: 20,
          duration: 1,
          stagger: 0.04,
          ease: "power2.out",
        }, "-=1.2");
      }

      if (descLines) {
        tl.from(descLines, {
          opacity: 0,
          y: 20,
          duration: 1,
          stagger: 0.1,
          ease: "power2.out",
        }, "-=1.2");
      }

      if (stat.length) {
        tl.from(stat, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        }, "-=1");
      }
    });

    return () => {
      ctx.revert();
    };

  }, []);

  return (
    <section className="about-intro my-24 lg:my-32" ref={introRef}>
      <div className="section-wrap">
        <div className="flex flex-col lg:flex-row lg:items-end gap-8">
          <div className="sec-title flex flex-col lg:w-[50%]">
            <div className="sub-title mb-4">Cosmedd Story</div>
            <h2 className="text-black mb-6 title">Our Journey In Global Healthcare</h2>
            <div className="content description">
              <p className="mb-4 line">Established in 2015, COSMEDD HEALTHCARE is an export-oriented company based out of India. It is managed by highly qualified and focused professionals with decades of experience in Pharmaceutical industry. We intend to provide quality products at affordable cost.</p>
              <p className="line"> We source and manufacture Pharmaceuticals, Nutraceuticals, Healthcare and Wellness products for our client base in Southeast Asia, Middle east Asia, Africa and CIS  region including Russia, from trusted and well established manufacturing companies in India, EUROPE and USA.</p>
            </div>
          </div>
          <div className="relative lg:w-[50%]">
            <div className="grid w-full grid-cols-2 lg:grid-cols-2 gap-6 stat-wrapper items-stretch">
              <Counter
                value="10"
                suffix="+"
                title="Years of expertise"
                className="card"
              />
              <Counter
                value="15"
                suffix="+"
                title="Countries Served"
                className="card"
              />
              <Counter
                value="98"
                suffix="%"
                title="On Time Delivery"
                className="card"
              />
              <Counter
                value="100"
                suffix="%"
                title="Compliance Ready"
                className="card"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
