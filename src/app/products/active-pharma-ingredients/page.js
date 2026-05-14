import PageHeader from "@/components/layout/PageHeader";
import Cta from "@/components/sections/CtaSection";
import ProductSingle from "@/components/sections/ProductSingle";
import WhyUsAlt from "@/components/sections/WhyUsAlt";
import { apiData } from "@/data/apiData";

export default function ActivePharmaIngredients() {
  return (
    <>
      <PageHeader
        title="APIs & Excipients"
        description="Advanced APIs and pharmaceutical excipients supporting formulation development, product stability, bioavailability, and high-quality manufacturing across diverse therapeutic applications."
        bgImage="/images/quality-slide.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "APIs & Excipients" }
        ]}
      />
      <section className="my-24 lg:my-32">
        <div className="section-wrap">
          <ProductSingle data={apiData} />
        </div>
      </section>

      <section className="bg-slate-100 py-24 lg:py-32">
        <WhyUsAlt />
      </section>

      <Cta />

    </>
  )
}
