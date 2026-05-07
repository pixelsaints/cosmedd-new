"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { gsap } from "gsap";

export default function TransitionLink({ href, children, ...props }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e) => {
    // allow new tab / middle click
    if (
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey ||
      e.button !== 0
    ) {
      return;
    }

    // prevent default navigation
    e.preventDefault();

    // ignore same route
    if (href === pathname) return;

    // prevent spam clicks
    if (gsap.isTweening(".page-mask")) return;

    const tl = gsap.timeline({
      onComplete: () => {
        router.push(href);
      },
    });

    // LEAVE animation
    tl.to(".page-mask", {
      scaleY: 1,
      transformOrigin: "bottom",
      duration: 0.8,
      ease: "power4.inOut",
    });
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}