import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { rotateUp, fadeUp, reveal } from "./animations";

gsap.registerPlugin(ScrollTrigger);

export const sectionAnimation = (sectionRef) => {

  const section = sectionRef?.current || sectionRef;

  if (!section) return [];

  const subtitleEl = section.querySelector(".sub-title");
  const titleEl = section.querySelector("h2.title");
  const descEl = section.querySelectorAll(".description p");
  const descLines = section.querySelectorAll(".description p.line");

  // const subtitle = subtitleEl ? new SplitType(subtitleEl, { types: "chars" }) : null;

  const title = titleEl
    ? new SplitType(titleEl, { types: "chars, words, lines" })
    : null;

  const descLinesEl = descLines
    ? new SplitType(descLines, { types: "lines" })
    : null;

  const start = gsap.utils.toArray(
    section.querySelectorAll(".stat")
  );

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 75%",
      toggleActions: "play none none reverse",
      // markers: true,
    },
  });

  if (subtitleEl) {
    tl.from(subtitleEl, {
      ...fadeUp,
      stagger: 0.04,
      duration: 1,
    });
  }

  if (title) {
    tl.from(title.chars, {
      ...fadeUp,
    }, "-=0.8");
  }

  if (descLinesEl) {
    tl.from(descLinesEl.lines, {
      ...fadeUp,
      stagger: 0.1,
    }, "-=1.2");
  }

  if (descEl) {
    tl.from(descEl, {
      ...fadeUp,
      stagger: 0.1,
    }, "-=1.4");
  }

  if (start.length) {
    tl.from(start, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    }, "-=1");
  }

  requestAnimationFrame(() => ScrollTrigger.refresh());

  return [
    {
      revert: () => {
        tl.scrollTrigger?.kill();
        tl.revert();
        [subtitle, title, desc].forEach((instance) => instance?.revert());
      },
    },
  ];
};
