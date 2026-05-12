import PageHeader from "@/components/layout/PageHeader";

export default function HerbalNatural() {
  return (
    <>
      <PageHeader
        title="Herbal & Natural Medicines"
        description="Delivering high-quality pharmaceutical, nutraceutical, and healthcare solutions through trusted sourcing partnerships tailored to evolving global market needs."
        bgImage="/images/quality-slide.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Herbal & Natural Medicines" }
        ]}
      />
    </>
  )
}
