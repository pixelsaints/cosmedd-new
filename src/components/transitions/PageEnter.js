"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PageEnter() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);

    gsap.fromTo(
      "main",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      }
    );
  }, [pathname]);

  useEffect(() => {
    const handleVisibility = () => {
      if (!document.hidden) {
        ScrollTrigger.refresh();
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () =>
      document.removeEventListener(
        "visibilitychange",
        handleVisibility
      );
  }, []);

  return null;
}