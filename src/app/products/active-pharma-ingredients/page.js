import PageHeader from "@/components/layout/PageHeader";
import ProductSingle from "@/components/sections/ProductSingle";
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
    </>
  )
}
