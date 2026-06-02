"use client"

import { BadgeCheck } from "lucide-react";
import Cta from "@/components/sections/CtaSection";
import PageHeader from "@/components/layout/PageHeader";
import Counter from "@/components/ui/counter";
import WhyCosmedd from "../../components/sections/WhyUsSection";
import ValuesCard from './components/ValuesCard';
import QualitySection from "@/components/sections/QualitySection";
import GlobalSection from "@/components/sections/GlobalSection";

export default function About() {
  return (
    <>
      <PageHeader
        title="Driven By Care, Defined by Reliability"
        description="Since 2015, Cosmedd Healthcare has been delivering trusted pharmaceutical and wellness sourcing solutions across international markets through quality, reliability, and lasting partnerships."
        bgImage="/images/worldwide-expansion.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" }
        ]}
      />

      <section className="about-intro my-24 lg:my-32">
        <div className="section-wrap">
          <div className="flex flex-col lg:flex-row lg:items-end gap-8">
            <div className="sec-title flex flex-col lg:w-[50%]">
              <div className="sub-title mb-4">CosMedd Story</div>
              <h2 className="text-black mb-6">Our Journey In Global Healthcare</h2>
              <div className="content">
                <p className="mb-4">Established in 2015, COSMEDD HEALTHCARE is an export-oriented company based out of India. It is managed by highly qualified and focused professionals with decades of experience in Pharmaceutical industry. We intend to provide quality products at affordable cost.</p>
                <p> We source and manufacture Pharmaceuticals, Nutraceuticals, Healthcare and Wellness products for our client base in Southeast Asia, Middle east Asia, Africa and CIS  region including Russia, from trusted and well established manufacturing companies in India, EUROPE and USA.</p>
              </div>
            </div>
            <div className="relative lg:w-[50%]">
              <div className="grid w-full grid-cols-2 lg:grid-cols-2 gap-6 stat-wrapper items-stretch">
                <Counter
                  value="10"
                  suffix="+"
                  title="Years of expertise"
                />
                <Counter
                  value="15"
                  suffix="+"
                  title="Countries Served"
                />
                <Counter
                  value="98"
                  suffix="%"
                  title="On Time Delivery"
                />
                <Counter
                  value="100"
                  suffix="%"
                  title="Compliance Ready"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="section-wrap">

        </div>
      </section>

      <section className="pb-28 bg-pri-50">
        <div className="relative">
          <img src="/images/cosmedd-principles.webp" alt="" className=" object-cover object-center h-[40em] w-full" />
          <div className="absolute w-full h-full top-0 left-0 bg-black/70"></div>
        </div>
        <div className="section-wrap mt-[-32em] lg:mt-[-22em] px-4 lg:px-0 relative">
          <div className="sec-title flex flex-col lg:flex-row items-end justify-between mb-16">
            <div className="lg:w-[40%] mb-6 lg:mb-0">
              <div className="sub-title mb-4">Core Priniciples</div>
              <h2 className="text-white">The Values Behind Our Commitment</h2>
            </div>
            <div className="lg:w-[50%]">
              <p className="mb-3 text-white">Trust, quality, integrity, and collaboration define every decision we make, shaping strong partnerships and enabling us to consistently deliver dependable healthcare solutions that create meaningful impact across markets while advancing better care through purpose-driven commitment.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12">
            <ValuesCard
              subTitle="Our Mission"
              title="Making Quality Healthcare Accessible for All"
              desc="To make quality healthcare solutions accessible through affordability, consistency, and trusted sourcing partnerships."
              pngSrc="/icons/goal.png"
              gifSrc="/icons/goal.gif"
            >
              <ul className="flex flex-col gap-3">
                <li className="flex font-bold">
                  Health And Wellness For All
                </li>
                <li className="flex font-bold">
                  Quality Products At Affordable Prices
                </li>
                <li className="flex font-bold">
                  Serving Diverse Healthcare Markets Globally
                </li>
                <li className="flex font-bold">
                  Building Trusted Partnerships That Last
                </li>
              </ul>
            </ValuesCard>

            <ValuesCard
              subTitle="Our Values"
              title="Shaping a Healthier Future Through Care"
              desc="To Spread Hope And Contribute To The Health And Well-Being Of Human Race By Providing The Best Of Care."
              pngSrc="/icons/test-tube.png"
              gifSrc="/icons/test-tube.gif"
            >
              <ul className="flex flex-col gap-3">
                <li className="flex font-bold">
                  Delivering Care Through Trusted Solutions
                </li>
                <li className="flex font-bold">
                  Advancing Health Through Innovation
                </li>
                <li className="flex font-bold">
                  Supporting Better Health Outcomes
                </li>
                <li className="flex font-bold">
                  Creating Lasting Healthcare Impact
                </li>
              </ul>
            </ValuesCard>
          </div>
        </div>
      </section>

      <div className="quality py-28">
        <QualitySection />
      </div>

      <div className="why-cosmedd">
        <WhyCosmedd />
      </div>

      <section className="global-presence py-20 lg:py-32 bg-white">
        <GlobalSection />
      </section>

      <Cta />
    </>
  );
}