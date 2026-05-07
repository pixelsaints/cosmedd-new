"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import TransitionLink from "@/components/transitions/TransitionLink";
import { slides } from "../data"

export default function HeroSlider() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".slide");
      const images = gsap.utils.toArray(".bg");
      const headings = gsap.utils.toArray(".heading");
      const descs = gsap.utils.toArray(".desc");
      const btnGroups = gsap.utils.toArray(".buttons");
      const outerWrappers = gsap.utils.toArray(".outer");
      const innerWrappers = gsap.utils.toArray(".inner");

      const indicatorCurrent = document.querySelector(".indicator-current");
      const indicatorTotal = document.querySelector(".indicator-total");

      let currentIndex = 0;
      let animating = false;
      const wrap = gsap.utils.wrap(0, sections.length);

      // Indicator setup
      if (indicatorTotal) {
        indicatorTotal.textContent = String(sections.length).padStart(2, "0");
      }

      function updateIndicator(index) {
        if (indicatorCurrent) {
          indicatorCurrent.textContent = String(index + 1).padStart(2, "0");
        }
      }

      const splitHeadings = headings.map(
        (h) => new SplitType(h, { types: ["words", "chars"] })
      );

      const splitDescs = descs.map(
        (d) =>
          new SplitType(d, {
            types: "lines",
            lineClass: "split-line",
          })
      );

      // Initial setup
      gsap.set(outerWrappers, { yPercent: 100 });
      gsap.set(innerWrappers, { yPercent: -100 });
      gsap.set(sections[0], { autoAlpha: 1, zIndex: 1 });
      gsap.set([outerWrappers[0], innerWrappers[0]], { yPercent: 0 });

      updateIndicator(0);

      function gotoSection(index, direction = 1) {
        if (animating || index === currentIndex) return;
        animating = true;

        index = wrap(index);
        const fromTop = direction === -1;
        const dFactor = fromTop ? -1 : 1;

        const tl = gsap.timeline({
          defaults: { duration: 0.9, ease: "power3.inOut" },
          onComplete: () => (animating = false),
        });

        gsap.set(sections[currentIndex], { zIndex: 0 });
        gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });

        tl.to(images[currentIndex], { yPercent: -15 * dFactor, scale: 1.05 }, 0)
          .to(sections[currentIndex], { autoAlpha: 0 }, 0.3)
          .fromTo(
            [outerWrappers[index], innerWrappers[index]],
            { yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor) },
            { yPercent: 0 },
            0
          )
          .fromTo(
            images[index],
            { yPercent: 20 * dFactor, scale: 1.05 },
            { yPercent: 0, scale: 1 },
            0
          )

          .fromTo(
            splitHeadings[index].chars,
            { autoAlpha: 0, yPercent: 120 * dFactor },
            {
              autoAlpha: 1,
              yPercent: 0,
              duration: 0.8,
              stagger: 0.02,
            },
            0.2
          )

          .fromTo(
            splitDescs[index].lines,
            { yPercent: 120, autoAlpha: 0 },
            {
              yPercent: 0,
              autoAlpha: 1,
              duration: 0.8,
              stagger: 0.08,
            },
            0.5
          )

          .fromTo(
            btnGroups[index],
            { autoAlpha: 0, y: 30 },
            { autoAlpha: 1, y: 0, duration: 0.6 },
            0.7
          );

        updateIndicator(index);
        currentIndex = index;
      }

      // Controls
      const nextBtn = document.getElementById("next");
      const prevBtn = document.getElementById("prev");

      const next = () => gotoSection(currentIndex + 1, 1);
      const prev = () => gotoSection(currentIndex - 1, -1);

      nextBtn?.addEventListener("click", next);
      prevBtn?.addEventListener("click", prev);

      // Autoplay
      let autoplay = setInterval(() => next(), 6000);

      const controls = document.querySelector(".slider-controls");

      const stopAutoplay = () => clearInterval(autoplay);
      const startAutoplay = () => {
        autoplay = setInterval(() => next(), 6000);
      };

      controls?.addEventListener("mouseenter", stopAutoplay);
      controls?.addEventListener("mouseleave", startAutoplay);

      return () => {
        nextBtn?.removeEventListener("click", next);
        prevBtn?.removeEventListener("click", prev);
        controls?.removeEventListener("mouseenter", stopAutoplay);
        controls?.removeEventListener("mouseleave", startAutoplay);
        clearInterval(autoplay);

        // revert split text (VERY important)
        splitHeadings.forEach((s) => s.revert());
        splitDescs.forEach((s) => s.revert());
      };
    }, sliderRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id="hero" ref={sliderRef} className="relative hero w-full overflow-hidden">

      {slides.map((slide, i) => (
        <section
          key={i}
          className="slide absolute inset-0 opacity-0 invisible"
        >
          <div className="outer w-full h-full overflow-hidden">
            <div className="inner w-full h-full flex items-center">
              <div className="bg absolute inset-0 bg-cover bg-center scale-105" style={{ backgroundImage: `url(${slide.image})` }}>
              </div>

              <div className="relative content">
                <h1 className="heading lg:w-[95%]">
                  {slide.title}
                </h1>

                <p className="desc">
                  {slide.desc}
                </p>

                <div className="buttons mt-8 flex gap-3 lg:gap-4 w-full">
                  <TransitionLink href={slide.primaryUrl} className="btn btn-primary">
                    <span data-title={slide.primary}>
                      {slide.primary}
                    </span>
                  </TransitionLink>

                  <TransitionLink href={slide.secondaryUrl} className="btn btn-outline">
                    <span data-title={slide.secondary}>
                      {slide.secondary}
                    </span>
                  </TransitionLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <div className="slider-controls">
        <button
          id="prev"
          className="slider-controls-prev"
        >
          Prev
        </button>
        <button
          id="next"
          className="slider-controls-next"
        >
          Next
        </button>
      </div>

      <div className="absolute bottom-8 left-10 text-white text-sm tracking-widest z-50">
        <span className="indicator-current">01</span>
        <span className="mx-1 opacity-50">/</span>
        <span className="indicator-total">04</span>
      </div>
    </div>
  );
}