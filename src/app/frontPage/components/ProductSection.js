"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import TransitionLink from "@/components/transitions/TransitionLink";
import SplitType from "split-type";
import { productData } from "../data";
import ProductCard from "@/components/layout/ProductCard";
import { reveal, fadeUp } from "@/lib/animations";

gsap.registerPlugin(ScrollTrigger);

const ProductSection = () => {
  const productsRef = useRef(null);
  const productsTitleRef = useRef(null);
  const productsBlockRef = useRef(null);

  useLayoutEffect(() => {
    let productTitle;

    const ctx = gsap.context(() => {

      if (!productsTitleRef.current) return;

      // Split title
      productTitle = new SplitType(
        productsTitleRef.current.querySelector("h2"), { types: "words", }
      );

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
          ...reveal,
          stagger: 0.06,
        })
        .from(productTitle.words, {
          ...reveal,
          stagger: 0.06,
        }, "-=0.6")
        .from(productsTitleRef.current.querySelector(".btn-wrap"), {
          ...reveal,
          stagger: 0.06,
        }, "-=0.6");

      const cards = productsBlockRef.current.querySelectorAll(".product-card");
      if (!cards?.length) return;

      // Cards
      cards.forEach((item, i) => {
        gsap.from(item, {
          ...fadeUp,
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

    return () => {
      ctx.revert();
      productTitle?.revert();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <>
      <div className="products">
        <div className="section-wrap overflow-clip px-4" ref={productsRef}>
          <div ref={productsTitleRef} className="title-section flex flex-col items-start justify-start lg:w-[60%] ml-auto mb-12">
            <div className="sub-title">Our Product Portfolio</div>
            <h2 className="mt-6 mb-6 text-white">Global Healthcare Solutions Across Diverse Segments</h2>

            <div className="btn-wrap">
              <TransitionLink href="/products" className="btn btn-link-white">
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
