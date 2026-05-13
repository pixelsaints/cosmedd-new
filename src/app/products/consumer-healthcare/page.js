import PageHeader from "@/components/layout/PageHeader";
import ProductSingle from "@/components/sections/ProductSingle";
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
    </>
  )
}
