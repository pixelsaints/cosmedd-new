"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import TransitionLink from "@/components/transitions/TransitionLink";
import { ChevronRight } from "lucide-react";
import { reveal, fadeUp } from "@/lib/animations";

export default function PageHeader({
  title,
  description,
  bgImage,
  // currentPage,
  breadcrumbs = [],
}) {
  const headerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const heading = new SplitType(
        headerRef.current.querySelector("h1"),
        { types: "words" }
      );

      const desc = new SplitType(
        headerRef.current.querySelector("p"),
        { types: "lines" }
      );

      const tl = gsap.timeline();

      tl
        .from(".breadcrumbs", {
          ...reveal,
          duration: 0.6,
        })
        .from(
          heading.words,
          {
            ...reveal,
            stagger: 0.04,
          },
          "-=0.35"
        )
        .from(
          desc.lines,
          {
            ...reveal,
            stagger: 0.04,
          },
          "-=0.45"
        );

      gsap.from(".page-header-overlay", {
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(".page-header", {
        scale: 1.08,
        duration: 1.6,
        ease: "power3.out",
      });

    }, headerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={headerRef}
      className="relative overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="page-header">
        <div className="page-header-overlay"></div>

        <div className="section-wrap relative z-10 px-6">
          <div className="md:max-w-[80%] lg:max-w-[60%]">

            <div className="breadcrumbs flex items-center gap-2 mb-6 text-sm text-white/70">
              {breadcrumbs.map((crumb, index) => (
                <div key={index} className="flex items-center gap-2">
                  {crumb.href ? (
                    <span className="flex items-center">
                      <TransitionLink href={crumb.href} className="text-white mr-2">{crumb.label}</TransitionLink>
                      <ChevronRight size={16} />
                    </span>
                  ) : (
                    <span className="text-white/70">{crumb.label}</span>
                  )}
                </div>
              ))}
            </div>

            <h1 className="text-white mb-5 whitespace-pre-line">
              {title}
            </h1>

            <p className="lead text-white/80 mb-8">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}