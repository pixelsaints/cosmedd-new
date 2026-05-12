import PageHeader from "@/components/layout/PageHeader";
import Cta from "@/components/sections/CtaSection";
import TransitionLink from "@/components/transitions/TransitionLink";
import { ArrowRight } from "lucide-react";

export default function Products() {

  const productsData = [
    {
      number: "01",
      title: "Pharmaceuticals",
      desc: "Comprehensive pharmaceutical formulations developed to address acute, chronic, and specialty therapeutic needs, delivering dependable treatment solutions through trusted manufacturing partnerships and stringent quality-driven sourcing processes.",
      highlights: [
        "Pharma Generics",
        "Chronic Therapy",
        "Acute Therapy",
        "Antibiotics & Oncology",
      ],
      image: "/images/products/pharma.webp",
      link: "/products/pharmaceutical-generics",
    },
    {
      number: "02",
      title: "Herbals & Nutraceuticals",
      desc: "Science-backed herbal and nutraceutical formulations designed to support preventive wellness, chronic health management, and nutritional balance through carefully sourced ingredients and innovative healthcare solutions.",
      highlights: [
        "Chronic Therapy",
        "Preventive Care",
        "Immunity Support",
        "Dietary Supplements",
      ],
      image: "/images/products/nutraceuticals.webp",
      link: "/products/herbal-natural-medicines",
    },
    {
      number: "03",
      title: "APIs & Excipients",
      desc: "Reliable sourcing of active pharmaceutical ingredients, excipients, and advanced drug delivery systems engineered to meet diverse manufacturing requirements with consistency, regulatory compliance, and technical precision.",
      highlights: [
        "Pellets",
        "Controlled Release Systems",
        "Functional Excipients",
        "Multiple Grades",
      ],
      image: "/images/products/apis-excipients.webp",
      link: "/products/active-pharma-ingredients",
    },
    {
      number: "04",
      title: "Cosmeceuticals",
      desc: "Innovative personal care and consumer healthcare solutions developed to address evolving wellness demands through high-quality formulations spanning skincare, medicated cosmetics, and specialized health-focused applications.",
      highlights: [
        "Women's Care",
        "Men's Health",
        "Skin & Hair Care",
        "Medicated Cosmetics",
      ],
      image: "/images/products/cosmeceuticals.webp",
      link: "/products/consumer-healthcare",
    },
    {
      number: "05",
      title: "Veterinary Solutions",
      desc: "Specialized veterinary supplements and medicines formulated to support animal health, nutrition, and performance through effective feed solutions, therapeutic formulations, and trusted healthcare manufacturing partnerships.",
      highlights: [
        "Feed Supplements",
        "Mineral Support",
        "Herbal Solutions",
        "Vet Medicines",
      ],
      image: "/images/products/veterinary.webp",
      link: "/products/veterinary-solutions",
    },
  ];

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
        <div className="section-wrap text-center">
          <div className="w-[80%] flex mx-auto">
            <h4 className="text-black">From regulated pharmaceuticals to wellness and veterinary solutions, our product portfolio is designed to support diverse healthcare requirements across international markets.</h4>
          </div>
        </div>
      </section>
      <section className="section-wrap pb-20 lg:pb-28">
        <div className="flex flex-col gap-24">
          {productsData.map((product, index) => {
            const reverse = index % 2 !== 0;

            return (
              <div
                key={product.number}
                className={`flex flex-col lg:flex-row items-center gap-16 ${reverse ? "lg:flex-row-reverse" : ""
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
                        <li
                          key={item}
                          className="flex items-center gap-2 bg-slate-100 py-2 px-4 rounded-4xl"
                        >
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
