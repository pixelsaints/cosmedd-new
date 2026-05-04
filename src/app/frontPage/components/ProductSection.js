"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import TransitionLink from "@/components/transitions/TransitionLink";
import SplitType from "split-type";

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
          opacity: 0,
          duration: 0.7,
          stagger: 0.06,
          ease: "power3.out",
        })
        .from(productTitle.words, {
          y: 40,
          rotate: 6,
          opacity: 0,
          duration: 0.7,
          stagger: 0.06,
          ease: "power3.out",
        }, "-=0.6")
        .from(productSubTitle.lines, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
        }, "-=0.6")
        .from(productsTitleRef.current.querySelector(".btn-wrap"), {
          y: 40,
          rotate: 6,
          opacity: 0,
          duration: 0.7,
          stagger: 0.06,
          ease: "power3.out",
        }, "-=0.6");

      const cards = productsBlockRef.current.querySelectorAll(".product-card");

      // Cards
      cards.forEach((item, i) => {
        gsap.from(item, {
          opacity: 0,
          y: 80,
          rotate: 8,
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
    <div className="my-32">
      <section className="products bg-pri-600 mt-32 py-32">
        <div className="section-wrap" ref={productsRef}>
          <div ref={productsTitleRef} className="title-section flex flex-col items-start justify-start w-[60%] mb-12 ml-auto">
            <div className="sub-title">Our Product Portfolio</div>
            <h2 className="mt-6 mb-4 text-white">Global Healthcare Solutions Across Diverse Segments</h2>
            <p className="text-white/80 lead mb-6 text-left">Delivering globally trusted healthcare, wellness, and pharmaceutical solutions across diverse therapeutic and consumer segments.</p>

            <div className="btn-wrap">
              <TransitionLink href="/product" className="btn btn-link-white">
                <span data-title="Explore Range">Explore Range</span>
                <ArrowRight size={20} absoluteStrokeWidth />
              </TransitionLink>
            </div>
          </div>
          <div ref={productsBlockRef} className="products-block grid grid-cols-3 gap-8 justify-between items-stretch ">

            <div className="product-cards flex flex-col gap-10">

              <div className="product-card">
                <img src="/images/pharmaceutical-generics.webp" alt="" />
                <div className="product-card-content">
                  <h4 className="mb-3">Pharmaceutical Generics</h4>
                  <p>Reliable pharmaceutical formulations for chronic, acute, and specialized therapeutic healthcare needs globally.</p>
                </div>
              </div>

              <div className="product-card">
                <img src="/images/apis-excipients.webp" alt="" />
                <div className="product-card-content">
                  <h4 className="mb-3">APIs & Excipients</h4>
                  <p>High-quality active ingredients and excipients sourced for dependable pharmaceutical manufacturing applications.</p>
                </div>
              </div>

              <div className="product-card">
                <img src="/images/herbal-natural-medicines.webp" alt="" />
                <div className="product-card-content">
                  <h4 className="mb-3">Herbal & Natural Medicines</h4>
                  <p>Natural healthcare solutions supporting preventive wellness and effective therapeutic care.</p>
                </div>
              </div>

            </div>

            <div className="product-cards flex flex-col gap-10">

              <div className="product-card">
                <img src="/images/nutraceuticals-probiotics.webp" alt="" />
                <div className="product-card-content">
                  <h4 className="mb-3">Nutraceuticals & Probiotics</h4>
                  <p>Science-driven nutritional supplements promoting immunity, gut health, and overall wellness.</p>
                </div>
              </div>

              <div className="product-card">
                <img src="/images/cosmeceuticals.webp" alt="" />
                <div className="product-card-content">
                  <h4 className="mb-3">Cosmeceuticals</h4>
                  <p>Innovative skincare and beauty formulations combining cosmetic excellence with therapeutic benefits.</p>
                </div>
              </div>

              <div className="product-card">
                <img src="/images/men-s-women-s-care.webp" alt="" />
                <div className="product-card-content">
                  <h4 className="mb-3">Men's & Women's Care</h4>
                  <p>Specialized healthcare products addressing gender-specific wellness and personal care needs.</p>
                </div>
              </div>

            </div>

            <div className="product-cards flex flex-col gap-10">

              <div className="product-card">
                <img src="/images/medical-devices.webp" alt="" />
                <div className="product-card-content">
                  <h4 className="mb-3">Medical Devices</h4>
                  <p>Essential medical equipment and consumables supporting clinical and healthcare operations</p>
                </div>
              </div>

              <div className="product-card">
                <img src="/images/essential-oils.webp" alt="" />
                <div className="product-card-content">
                  <h4 className="mb-3">Essential Oils</h4>
                  <p>Pure botanical extracts serving wellness, food, fragrance, and therapeutic industries.</p>
                </div>
              </div>

              <div className="product-card">
                <img src="/images/veterinary-solutions.webp" alt="" />
                <div className="product-card-content">
                  <h4 className="mb-3">Veterinary Solutions</h4>
                  <p>Comprehensive animal healthcare products for nutrition, wellness, and treatment support.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductSection;