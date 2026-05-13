import PageHeader from "@/components/layout/PageHeader";
import ProductSingle from "@/components/sections/ProductSingle";
import { herbalsTabs } from "@/data/herbals";

export default function HerbalNatural() {
  return (
    <>
      <PageHeader
        title="Herbal & Natural Medicines"
        description="Natural and herbal healthcare formulations supporting holistic wellness, immunity, vitality, and preventive care through safe plant-based therapeutic solutions."
        bgImage="/images/quality-slide.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Herbal & Natural Medicines" }
        ]}
      />
      <section className="my-24 lg:my-32">
        <div className="section-wrap">
          <ProductSingle data={herbalsTabs} />
        </div>
      </section >
    </>
  )
}
