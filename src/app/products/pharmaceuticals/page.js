"use client";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import PageHeader from "@/components/layout/PageHeader";
import Cta from "@/components/sections/CtaSection";
import TransitionLink from "@/components/transitions/TransitionLink";
import { whyCosmeddData } from "@/data/homeContent";
import { pharmaTabs } from "@/data/pharmaceuticals";



import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TabsSection from "@/components/layout/TabsSection";

export default function Pharmaceutical() {

  const swiperConfig = {
    modules: [Navigation, Pagination],
    spaceBetween: 20,
    slidesPerView: 1.1,
    loop: true,
    parallax: true,

    navigation: {
      prevEl: ".prev",
      nextEl: ".next",
    },

    pagination: {
      el: ".pagination",
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
        slidesPerView: 2.2,
      },
      1024: {
        slidesPerView: 3.2,
      },
    },
  };

  return (
    <>
      <PageHeader
        title="Innovative Global Pharmaceutical Care"
        description="Comprehensive pharmaceutical formulations addressing acute, chronic, and specialty therapeutic needs through quality-assured sourcing and trusted manufacturing partnerships."
        bgImage="/images/pharma-lab.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Pharmaceuticals" }
        ]}
      />
      <section className="my-24 lg:my-32">
        {/* <TabsSection tabs={pharmaTabs} /> */}

        <div className="section-wrap">
          <div className="flex flex-row items-start gap-16 border-b border-slate-200 pb-16 mb-16">
            <div className="lg:w-1/3 sticky top-24">
              <h4 className="text-black font-semibold mb-3">Pharma Generics</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis eaque, a, suscipit beatae perspiciatis aut odio numquam quibusdam nulla accusantium magni voluptatibus sunt debitis. Sequi fugit corrupti impedit earum debitis.</p>
            </div>
            <div className="lg:w-2/3">
              <div className="grid grid-cols-2 gap-8">
                <div className="prod-card">
                  <img src="/images/products/antibiotics.webp" alt="" />
                  <div className="prod-card-content">
                    <h4 className="mb-4">Anti-Infective Formulations </h4>
                    <p className="line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus accusantium harum cupiditate, sunt distinctio natus odit sequi quisquam nam repellendus tempore obcaecati, adipisci laudantium recusandae quaerat laboriosam eum suscipit minus.</p>

                    <div className="sub-heading text-black font-bold my-6">What we offer</div>

                    <ul className="pills">
                      <li className="pill">Cefixime</li>
                      <li className="pill">Amoxicillin</li>
                      <li className="pill">Azithromycin</li>
                      <li className="pill">Cefpodoxime</li>
                      <li className="pill">Ciprofloxacin</li>
                    </ul>
                  </div>
                </div>
                <div className="prod-card">
                  <img src="/images/products/oncology.webp" alt="" />
                  <div className="prod-card-content">
                    <h4 className="mb-4">Oncology & Pain Management</h4>
                    <p className="line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus accusantium harum cupiditate, sunt distinctio natus odit sequi quisquam nam repellendus tempore obcaecati, adipisci laudantium recusandae quaerat laboriosam eum suscipit minus.</p>

                    <div className="sub-heading text-black font-bold my-6">What we offer</div>

                    <ul className="pills">
                      <li className="pill">Methotrexate</li>
                      <li className="pill">Capecitabine</li>
                      <li className="pill">Diclofenac</li>
                      <li className="pill">Etoricoxib</li>
                      <li className="pill">Celecoxib</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row items-start gap-16 border-b border-slate-200 pb-16 mb-16">
            <div className="lg:w-1/3 sticky top-24">
              <h4 className="text-black font-semibold mb-3">Chronic Therapy</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis eaque, a, suscipit beatae perspiciatis aut odio numquam quibusdam nulla accusantium magni voluptatibus sunt debitis. Sequi fugit corrupti impedit earum debitis.</p>
            </div>
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 gap-6">
                <div className="prod-card">
                  <img src="/images/products/cholesterol.webp" alt="" />
                  <div className="prod-card-content">
                    <h4 className="mb-4">Cardiometabolic Care Solutions</h4>
                    <p className="line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus accusantium harum cupiditate, sunt distinctio natus odit sequi quisquam nam repellendus tempore obcaecati, adipisci laudantium recusandae quaerat laboriosam eum suscipit minus.</p>

                    <div className="sub-heading text-black font-bold my-6">What we offer</div>

                    <ul className="pills">
                      <li className="pill">Cefixime</li>
                      <li className="pill">Amoxicillin</li>
                      <li className="pill">Azithromycin</li>
                      <li className="pill">Cefpodoxime</li>
                      <li className="pill">Ciprofloxacin</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row items-start gap-16 border-b border-slate-200 pb-16 mb-16">
            <div className="lg:w-1/3 sticky top-24">
              <h4 className="text-black font-semibold mb-3">Actute Therapy</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis eaque, a, suscipit beatae perspiciatis aut odio numquam quibusdam nulla accusantium magni voluptatibus sunt debitis. Sequi fugit corrupti impedit earum debitis.</p>
            </div>
            <div className="lg:w-2/3">
              <div className="grid grid-cols-2 gap-8">
                <div className="prod-card">
                  <img src="/images/products/cholesterol.webp" alt="" />
                  <div className="prod-card-content">
                    <h4 className="mb-4">Acute Care Treatments</h4>
                    <p className="line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus accusantium harum cupiditate, sunt distinctio natus odit sequi quisquam nam repellendus tempore obcaecati, adipisci laudantium recusandae quaerat laboriosam eum suscipit minus.</p>

                    <div className="sub-heading text-black font-bold my-6">What we offer</div>

                    <ul className="pills">
                      <li className="pill">Cefixime</li>
                      <li className="pill">Amoxicillin</li>
                      <li className="pill">Azithromycin</li>
                      <li className="pill">Cefpodoxime</li>
                      <li className="pill">Ciprofloxacin</li>
                    </ul>
                  </div>
                </div>
                <div className="prod-card">
                  <img src="/images/products/cholesterol.webp" alt="" />
                  <div className="prod-card-content">
                    <h4 className="mb-4">Bronchitis</h4>
                    <p className="line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus accusantium harum cupiditate, sunt distinctio natus odit sequi quisquam nam repellendus tempore obcaecati, adipisci laudantium recusandae quaerat laboriosam eum suscipit minus.</p>

                    <div className="sub-heading text-black font-bold my-6">What we offer</div>

                    <ul className="pills">
                      <li className="pill">Cefixime</li>
                      <li className="pill">Amoxicillin</li>
                      <li className="pill">Azithromycin</li>
                      <li className="pill">Cefpodoxime</li>
                      <li className="pill">Ciprofloxacin</li>
                    </ul>
                  </div>
                </div>
                <div className="prod-card">
                  <img src="/images/products/cholesterol.webp" alt="" />
                  <div className="prod-card-content">
                    <h4 className="mb-4">Gastroenteritis</h4>
                    <p className="line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus accusantium harum cupiditate, sunt distinctio natus odit sequi quisquam nam repellendus tempore obcaecati, adipisci laudantium recusandae quaerat laboriosam eum suscipit minus.</p>

                    <div className="sub-heading text-black font-bold my-6">What we offer</div>

                    <ul className="pills">
                      <li className="pill">Cefixime</li>
                      <li className="pill">Amoxicillin</li>
                      <li className="pill">Azithromycin</li>
                      <li className="pill">Cefpodoxime</li>
                      <li className="pill">Ciprofloxacin</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      <section className="bg-slate-100 py-24 lg:py-32">
        <div className="section-wrap">
          <div className="sec-title flex flex-col lg:flex-row items-end justify-between mb-16">
            <div className="lg:w-[40%] mb-6 lg:mb-0">
              <div className="sub-title mb-4">Why Choose Us</div>
              <h2 className="text-black">We lead & inspire in modern healthcare</h2>
            </div>
            <div className="lg:w-[50%]">
              <p className="mb-4 text-black/70">We lead and inspire in modern healthcare by delivering innovative pharmaceutical solutions, ensuring quality-driven care, and building trusted global partnerships that enhance wellness, improve outcomes, and support sustainable healthcare advancement worldwide.</p>
              <div className="btn-wrap pb-2">
                <TransitionLink href="/why-choose-us" className="btn btn-small btn-black-outline">
                  <span data-title="Learn More">Learn More </span>
                  <ArrowRight size={16} absoluteStrokeWidth />
                </TransitionLink>
              </div>
            </div>
          </div>
          <div className="whyus-swiper custom-swiper">
            <Swiper {...swiperConfig}>
              {whyCosmeddData.slider.map((item) => (
                <SwiperSlide key={item.number}>
                  <div className="icon">
                    <img src={item.icon} alt={item.title} className="icon-image" />
                    <div className="icon-number text-black">{item.number}</div>
                  </div>

                  <div className="icon-content">
                    <div className="icon-content-title">{item.title}</div>
                    <div className="icon-content-desc">{item.desc}</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="flex flex-row items-center justify-between w-[90%] mx-auto">
              <div className="w-full relative">
                <div className="pagination" />
              </div>
              <div className="btns-wrap flex flex-row gap-4">
                {/* Arrows */}
                <button className="prev">
                  <ChevronLeft size={26} />
                </button>

                <button className="next">
                  <ChevronRight size={26} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </>
  )
}
