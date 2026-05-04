"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Counter({ value = 0, suffix = "", title }) {
  const containerRef = useRef(null);
  const digitRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const digits = value.toString().split("");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true
          // toggleActions: "play none none reverse",
        },
      });

      digitRefs.current.forEach((el, i) => {
        const num = parseInt(digits[i], 10);

        // initial state
        gsap.set(el, {
          yPercent: -100,
        });

        tl.to(
          el,
          {
            yPercent: -(9 - num) * 10,
            duration: 1,
            ease: "expo.out",
          },
          i * 0.1
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [value]);

  const digits = value.toString().split("");

  return (
    <div
      ref={containerRef}
      className="stat flex flex-col items-center justify-center"
    >
      <div className="flex items-start overflow-hidden h-[4em]">
        {digits.map((digit, i) => (
          <div key={i} className="digit overflow-hidden">
            <div
              ref={(el) => (digitRefs.current[i] = el)}
              className="sequence flex flex-col"
            >
              {[9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((n) => (
                <span key={n}>{n}</span>
              ))}
            </div>
          </div>
        ))}

        {suffix && <span className="suffix text-orange-600 leading-none">{suffix}</span>}
      </div>

      <p className="opacity-70">{title}</p>
    </div>
  );
}