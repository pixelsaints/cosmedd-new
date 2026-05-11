"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ProductCard from "@/components/ui/ProductCard";
import TransitionLink from "@/components/transitions/TransitionLink";
import { reveal, fadeUp } from "@/lib/animations";
import { productData } from "@/data/homeContent";

import "swiper/css";
import "swiper/css/pagination";

gsap.registerPlugin(ScrollTrigger);

const ProductSection = () => {
  const productsRef = useRef(null);
  const productsTitleRef = useRef(null);
  const productsBlockRef = useRef(null);

  const swiperConfig = {
    modules: [Navigation, Pagination],
    spaceBetween: 20,
    slidesPerView: 1.2,
    loop: true,
    parallax: true,

    navigation: {
      prevEl: ".why-prev",
      nextEl: ".why-next",
    },

    pagination: {
      el: ".why-pagination",
      clickable: true,
      type: "progressbar",
    },

    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    breakpoints: {
      640: {
        slidesPerView: 1.2,
      },
      1024: {
        slidesPerView: 3.2,
      },
    },
  };

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      if (!productsTitleRef.current) return;

      const productTitle = new SplitType(
        productsTitleRef.current.querySelector("h2"),
        { types: "words" }
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
          ...reveal,
        })
        .from(productTitle.words, {
          ...reveal,
          stagger: 0.06,
        }, "-=0.4")
        .from(productsTitleRef.current.querySelector(".btn-wrap"), {
          ...reveal,
        }, "-=0.4");

      const cards = productsBlockRef.current.querySelectorAll(".products-block > div");

      gsap.from(cards, {
        ...fadeUp,
        scrollTrigger: {
          trigger: productsBlockRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      //fadeUp

    }, productsRef);

    return () => {
      ctx.revert();
    };

  }, []);

  return (
    <>
      <div className="products">
        <div className="section-wrap overflow-clip px-4" ref={productsRef}>
          <div ref={productsTitleRef} className="flex flex-col items-center justify-start lg:w-[60%] mx-auto mb-20 text-center">
            <div className="sub-title">Our Product Portfolio</div>
            <h2 className="mt-4 mb-6 text-black">Global Healthcare Solutions Across Diverse Segments</h2>

            <div className="btn-wrap">
              <TransitionLink href="/products" className="btn btn-link-white">
                <span data-title="Explore Range">Explore Range</span>
                <ArrowRight size={20} absoluteStrokeWidth />
              </TransitionLink>
            </div>
          </div>
          <div ref={productsBlockRef} className="products-block">
            <div>
              <Swiper {...swiperConfig}>
                {productData.map((item) => (
                  <SwiperSlide key={item.number}>
                    <ProductCard {...item} />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="flex flex-row items-center justify-between w-[90%] mx-auto">
                <div className="w-full relative">
                  <div className="why-pagination" />
                </div>
                <div className="btns-wrap flex flex-row gap-4">
                  {/* Arrows */}
                  <button className="why-prev">
                    <ChevronLeft size={26} />
                  </button>

                  <button className="why-next">
                    <ChevronRight size={26} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductSection;
