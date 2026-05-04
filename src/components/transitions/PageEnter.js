"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

export default function PageEnter() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);

    const tl = gsap.timeline();

    // ENTER (like Barba enter)
    tl.to(".page-mask", {
      scaleY: 0,
      transformOrigin: "top",
      duration: 0.8,
      ease: "power3.inOut",
    });
  }, [pathname]);

  return null;
}