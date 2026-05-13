"use client"

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import TransitionLink from "@/components/transitions/TransitionLink"
import { reveal } from "@/lib/animations";
import { useDrawer } from "@/context/DrawerContext";

export default function Cta({
  ctaTitle = "Build Your Healthcare Supply Network",
  ctaSubtitle = "Partner with Cosmedd for trusted sourcing, quality healthcare products, and scalable global supply solutions."
}) {

  const { openDrawer } = useDrawer();
  const ctaRef = useRef(null);

  useLayoutEffect(() => {
    if (!ctaRef.current) return;

    ctaTitle = new SplitType(
      ctaRef.current.querySelector("h2"),
      { types: "words" }
    );

    ctaSubtitle = new SplitType(
      ctaRef.current.querySelector("p"),
      { types: "lines" }
    );

    const ctaButtons = ctaRef.current.querySelector('.buttons');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    })

    tl.from(ctaTitle.words, {
      ...reveal,
      stagger: 0.08,
    })
      .from(ctaSubtitle.lines, {
        ...reveal,
        stagger: 0.08,
      }, "-=0.4")
      .from(ctaButtons, {
        ...reveal,
      }, "-=0.6");

    return () => ctaTitle.revert();
  }, []);

  return (
    <>
      <div className="cta flex items-center justify-center" ref={ctaRef}>
        <div className="flex flex-col items-center justify-center w-full lg:w-[40%] mx-auto text-center">
          <h2 className="text-white mb-6">Build Your Healthcare Supply Network</h2>
          <p className="lead text-white/70">Partner with Cosmedd for trusted sourcing, quality healthcare products, and scalable global supply solutions.</p>

          <div className="buttons mt-8 flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-4 w-full mx-auto">
            <TransitionLink href="/contact" className="btn btn-primary">
              <span data-title="Become A Partner">
                Become A Partner
              </span>
            </TransitionLink>

            <button
              onClick={openDrawer}
              className="btn btn-outline"
            >
              <span data-title="Enquire Now">
                Enquire Now
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
