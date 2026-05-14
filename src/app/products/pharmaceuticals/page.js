
import PageHeader from "@/components/layout/PageHeader";
import Cta from "@/components/sections/CtaSection";
import ProductSingle from "@/components/sections/ProductSingle";
import WhyUsAlt from "@/components/sections/WhyUsAlt";
import { pharmaTabs } from "@/data/pharmaceuticals";

export default function Pharmaceutical() {

  return (
    <>
      <PageHeader
        title="Innovative Global Pharmaceuticals Care"
        description="Comprehensive pharmaceuticals formulations addressing acute, chronic, and specialty therapeutic needs through quality-assured sourcing and trusted manufacturing partnerships."
        bgImage="/images/pharma-lab.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Pharmaceuticals" }
        ]}
      />
      <section className="my-24 lg:my-32">
        <div className="section-wrap">
          <ProductSingle data={pharmaTabs} />
        </div>
      </section >

      <section className="bg-slate-100 py-24 lg:py-32">
        <WhyUsAlt />
      </section>

      <Cta />
    </>
  )
}
