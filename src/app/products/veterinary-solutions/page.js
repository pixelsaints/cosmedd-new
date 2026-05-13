import PageHeader from "@/components/layout/PageHeader";
import ProductSingle from "@/components/sections/ProductSingle";
import { veterinaryData } from "@/data/veterinary";

export default function VeterinarySolutions() {
  return (
    <>
      <PageHeader
        title="Veterinary Solutions"
        description="Delivering high-quality pharmaceutical, nutraceutical, and healthcare solutions through trusted sourcing partnerships tailored to evolving global market needs."
        bgImage="/images/quality-slide.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Veterinary Solutions" }
        ]}
      />
      <section className="my-24 lg:my-32">
        <div className="section-wrap">
          <ProductSingle data={veterinaryData} />
        </div>
      </section>
    </>
  )
}
