"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

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

  return null;
}
