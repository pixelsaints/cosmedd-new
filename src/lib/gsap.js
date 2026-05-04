"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export const useGSAP = (callback) => {
  const scope = useRef(null);

  useLayoutEffect(() => {
    if (!scope.current) return;

    const ctx = gsap.context(() => {
      callback();
    }, scope);

    return () => ctx.revert(); // 🔥 prevents memory leaks
  }, []);

  return scope;
};