"use client"

import { useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import TransitionLink from "@/components/transitions/TransitionLink"
import CatalogDrawer from "./drawer"
import { reveal, fadeUp } from "@/lib/animations";

export default function Cta() {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);

  const ctaRef = useRef(null);

  useLayoutEffect(() => {
    if (!ctaRef.current) return;

    const ctaTitle = new SplitType(
      ctaRef.current.querySelector("h2"),
      { types: "words" }
    );

    const ctaDescription = new SplitType(
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
      .from(ctaDescription.lines, {
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
            <TransitionLink href="/products" className="btn btn-primary">
              <span data-title="Become A Partner">
                Become A Partner
              </span>
            </TransitionLink>

            <button
              onClick={openDrawer}
              className="btn btn-outline"
            >
              <span data-title="Request Catalog">
                Request Catalog
              </span>
            </button>
          </div>
        </div>
      </div>
      <CatalogDrawer
        isOpen={isOpen}
        onClose={closeDrawer}
      />
    </>
  )
}
