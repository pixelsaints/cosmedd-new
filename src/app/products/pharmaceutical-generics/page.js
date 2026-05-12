import PageHeader from "@/components/layout/PageHeader";

export default function Pharmaceutical() {
  return (
    <>
      <PageHeader
        title="PHARMACEUTICALS"
        description="Delivering high-quality pharmaceutical, nutraceutical, and healthcare solutions through trusted sourcing partnerships tailored to evolving global market needs."
        bgImage="/images/quality-slide.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Pharmaceuticals" }
        ]}
      />
    </>
  )
}
