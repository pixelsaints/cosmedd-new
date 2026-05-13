import PageHeader from "@/components/layout/PageHeader";
import ProductSingle from "@/components/sections/ProductSingle";
import { menCareData } from "@/data/menCare";

export default function MensHealthcare() {
  return (
    <>
      <PageHeader
        title="Men's Healthcare"
        description="Delivering high-quality pharmaceutical, nutraceutical, and healthcare solutions through trusted sourcing partnerships tailored to evolving global market needs."
        bgImage="/images/quality-slide.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Men's Healthcare" }
        ]}
      />
      <section className="my-24 lg:my-32">
        <div className="section-wrap">
          <ProductSingle data={menCareData} />
        </div>
      </section>
    </>
  )
}
