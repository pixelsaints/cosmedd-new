import PageHeader from "@/components/layout/PageHeader";
import Cta from "@/components/sections/CtaSection";
import TransitionLink from "@/components/transitions/TransitionLink";
import { ArrowRight } from "lucide-react";
import { productData } from "@/data/homeContent";

export default function Products() {

  return (
    <>
      <PageHeader
        title="Comprehensive Solutions for Modern Healthcare"
        description="Delivering high-quality pharmaceutical, nutraceutical, and healthcare solutions through trusted sourcing partnerships tailored to evolving global market needs."
        bgImage="/images/quality-slide.webp"
        breadcrumbs={[
          { label: "Home", href: "/", sperator: ">" },
          { label: "Products" }
        ]}
      />
      <section className="title-intro py-20 lg:py-28">
        <div className="section-wrap text-center px-4 lg:px-0">
          <div className="lg:w-[80%] flex mx-auto">
            <h4 className="text-black">From regulated pharmaceuticals to wellness and veterinary solutions, our product portfolio is designed to support diverse healthcare requirements across international markets.</h4>
          </div>
        </div>
      </section>
      <section className="section-wrap pb-20 lg:pb-28">
        <div className="flex flex-col gap-24">
          {productData.map((product, index) => {
            const reverse = index % 2 !== 0;
            return (
              <div
                key={product.number}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${reverse ? "lg:flex-row-reverse" : ""
                  }`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full object-cover rounded-xl"
                  />
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <h4 className="mb-3 text-black font-semibold">
                    {product.title}
                  </h4>

                  <p className="mb-8">
                    {product.desc}
                  </p>

                  <div className="mb-8">
                    <div className="mb-6 text-black font-semibold sub-heading">
                      Here's what we offer
                    </div>

                    <ul className="flex flex-row flex-wrap gap-3">
                      {product.highlights.map((item) => (
                        <li key={item} className="flex items-center gap-2 bg-slate-100 py-2 px-4 rounded-4xl font-semibold text-slate-800 text-[14px]" >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <TransitionLink
                    className="btn btn-small btn-black-outline"
                    href={product.link}
                  >
                    <span data-title="Explore Category">
                      Explore Category
                    </span>
                    <ArrowRight size={20} absoluteStrokeWidth />
                  </TransitionLink>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Cta />
    </>
  )
}
