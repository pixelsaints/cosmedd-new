import PageHeader from "@/components/layout/PageHeader";
import ProductSingle from "@/components/sections/ProductSingle";
import { womenCareData } from "@/data/womenCare";

export default function WomensHealthcare() {
  return (
    <>
      <PageHeader
        title="Women's Healthcare"
        description="Delivering high-quality pharmaceutical, nutraceutical, and healthcare solutions through trusted sourcing partnerships tailored to evolving global market needs."
        bgImage="/images/quality-slide.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Women's Healthcare" }
        ]}
      />
      <section className="my-24 lg:my-32">
        <div className="section-wrap">
          <ProductSingle data={womenCareData} />
        </div>
      </section>
    </>
  )
}
