import PageHeader from "@/components/layout/PageHeader";
import Cta from "@/components/sections/CtaSection";
import ProductSingle from "@/components/sections/ProductSingle";
import WhyUsAlt from "@/components/sections/WhyUsAlt";
import { consumerHealthcareData } from "@/data/consumerHealthcare";


export default function ConsumerHealthcare() {
  return (
    <>
      <PageHeader
        title="Integrated Consumer Healthcare Products"
        description="Everyday consumer healthcare products supporting wellness, immunity, nutrition, personal care, and preventive health through safe, effective, and quality-driven formulations."
        bgImage="/images/quality-slide.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Consumer Healthcare" }
        ]}
      />
      <section className="my-24 lg:my-32">
        <div className="section-wrap">
          <ProductSingle data={consumerHealthcareData} />
        </div>
      </section>

      <section className="bg-slate-100 py-24 lg:py-32">
        <WhyUsAlt />
      </section>

      <Cta />
    </>
  )
}
