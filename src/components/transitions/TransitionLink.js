"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { gsap } from "gsap";

export default function TransitionLink({
  href,
  children,
  onClick,
  ...props
}) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e) => {
    if (
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey ||
      e.button !== 0
    ) {
      return;
    }

    e.preventDefault();

    if (href === pathname) return;
    if (gsap.isTweening(".page-mask")) return;

    // run custom click logic first
    if (onClick) {
      onClick(e);
    }

    const tl = gsap.timeline({
      onComplete: () => {
        router.push(href);
      },
    });

    // tl.to(".page-mask", {
    //   scaleY: 1,
    //   transformOrigin: "bottom",
    //   duration: 0.8,
    //   ease: "power4.inOut",
    // });

    tl.to("main", {
      opacity: 0,
      y: 20,
      duration: 0.35,
      ease: "power2.out",
    });
  };

  return (
    <Link href={href} onClick={handleClick} {...props} >
      {children}
    </Link>
  );
}