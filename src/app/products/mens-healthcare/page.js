import PageHeader from "@/components/layout/PageHeader";

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
    </>
  )
}
