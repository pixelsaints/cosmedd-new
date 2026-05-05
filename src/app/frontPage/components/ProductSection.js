"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import TransitionLink from "@/components/transitions/TransitionLink";
import SplitType from "split-type";
import { productData } from "../data";
import ProductCard from "@/components/layout/ProductCard";

const ProductSection = () => {
  const productsRef = useRef(null);
  const productsTitleRef = useRef(null);
  const productsBlockRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // Fade title while cards scroll
      gsap.to(productsTitleRef.current, {
        opacity: 0.1,
        ease: "none",
        scrollTrigger: {
          trigger: productsBlockRef.current,
          start: "top 70%",
          end: "top top",
          scrub: true,
        },
      });

      // Split title
      const productTitle = new SplitType(
        productsTitleRef.current.querySelector("h2"), { types: "words", }
      );

      const productSubTitle = new SplitType(
        productsTitleRef.current.querySelector("p"), { types: "lines" }
      );

      // Intro animation
      const introTL = gsap.timeline({
        scrollTrigger: {
          trigger: productsTitleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      introTL
        .from(productsTitleRef.current.querySelector(".sub-title"), {
          y: 40,
          rotate: 6,
          filter: "blur(8px)",
          opacity: 0,
          duration: 0.7,
          stagger: 0.06,
          ease: "power3.out",
        })
        .from(productTitle.words, {
          y: 40,
          rotate: 6,
          filter: "blur(8px)",
          opacity: 0,
          duration: 0.7,
          stagger: 0.06,
          ease: "power3.out",
        }, "-=0.6")
        .from(productsTitleRef.current.querySelector(".btn-wrap"), {
          y: 40,
          rotate: 6,
          opacity: 0,
          duration: 0.7,
          stagger: 0.06,
          filter: "blur(8px)",
          ease: "power3.out",
        }, "-=0.6");

      const cards = productsBlockRef.current.querySelectorAll(".product-card");

      // Cards
      cards.forEach((item, i) => {
        gsap.from(item, {
          opacity: 0,
          y: 80,
          filter: "blur(8px)",
          duration: 0.8,
          delay: i * 0.05,
          ease: "power4.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true,
          },
        });
      });

      ScrollTrigger.refresh();

    }, productsRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="products bg-pri-600 py-20 lg:mt-32 lg:py-32">
        <div className="section-wrap overflow-clip px-4" ref={productsRef}>
          <div ref={productsTitleRef} className="title-section flex flex-col items-start justify-start lg:w-[60%] ml-auto mb-12">
            <div className="sub-title">Our Product Portfolio</div>
            <h2 className="mt-6 mb-6 text-white">Global Healthcare Solutions Across Diverse Segments</h2>

            <div className="btn-wrap">
              <TransitionLink href="/product" className="btn btn-link-white">
                <span data-title="Explore Range">Explore Range</span>
                <ArrowRight size={20} absoluteStrokeWidth />
              </TransitionLink>
            </div>
          </div>
          <div ref={productsBlockRef} className="products-block grid lg:grid-cols-3 lg:gap-8 justify-between items-stretch ">

            <div className="product-cards flex flex-col gap-8 lg:gap-10">
              {productData.slice(0, 3).map((item) => (
                <ProductCard key={item.number} {...item} />
              ))}
            </div>

            <div className="product-cards flex flex-col gap-8 lg:gap-10">
              {productData.slice(3, 6).map((item) => (
                <ProductCard key={item.number} {...item} />
              ))}
            </div>

            <div className="product-cards flex flex-col gap-8 lg:gap-10">
              {productData.slice(6, 9).map((item) => (
                <ProductCard key={item.number} {...item} />
              ))}
            </div>
          </div>
        </div>
        <div className="image-bg">
          <img src="/images/logo-bg.svg" alt="" />
        </div>
      </div>
    </>
  )
}

export default ProductSection;