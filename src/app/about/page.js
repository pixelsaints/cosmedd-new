"use client"

import Cta from "@/components/layout/Cta";
import PageHeader from "@/components/layout/PageHeader";
import Counter from "@/components/ui/counter";
import WhyCosmedd from "../frontPage/components/WhyCosmedd";


export default function About() {
  return (
    <>
      <PageHeader
        title="Driven By Care, Powered By Global Partnerships"
        description="Since 2015, Cosmedd Healthcare has been delivering trusted pharmaceutical and wellness sourcing solutions across international markets through quality, reliability, and lasting partnerships."
        bgImage="/images/worldwide-expansion.webp"
        currentPage="About"
      />

      <section className="about-intro py-20 lg:py-28">
        <div className="section-wrap">
          <div className="flex flex-col items-center">
            <div className="images-left relative">

            </div>
            <div className="sec-title flex flex-col items-center lg:w-[50%] text-center">
              <div className="sub-title mb-6">CosMedd Story</div>
              <h2>Our Journey In Global Healthcare</h2>
              <p></p>
            </div>
          </div>
        </div>

        <div className="section-wrap">
          <div className="grid lg:grid-cols-4 gap-6 stat-wrapper mt-24 items-center">
            <Counter
              value="15"
              suffix="+"
              title="Years of pharma expertise"
            />
            <Counter
              value="24"
              suffix="+"
              title="Countries Served Globally"
            />
            <Counter
              value="98"
              suffix="%"
              title="Projects delivered on schedule"
            />
            <Counter
              value="100"
              suffix="%"
              title="Regulatory-compliant integrations"
            />
          </div>
        </div>
      </section>

      <section className="py-28 bg-pri-50">
        {/* <img className="w-full" src="/temp/values.png" alt="" /> */}
        <div className="section-wrap">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="sec-title">
              <div className="sub-title mb-6">Our Values</div>
              <h2 className="text-black">Core principles that drive us</h2>
            </div>
            <div className="value">

            </div>

            <div className="value">
            </div>
          </div>
        </div>
      </section>

      <div className="why-cosmedd">
        <WhyCosmedd />
      </div>

      <Cta />
    </>
  );
}