import PageHeader from "@/components/layout/PageHeader"

export default function ConsumerHealthcare() {
  return (
    <>
      <PageHeader
        title="Consumer Healthcare"
        description="Delivering high-quality pharmaceutical, nutraceutical, and healthcare solutions through trusted sourcing partnerships tailored to evolving global market needs."
        bgImage="/images/quality-slide.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Consumer Healthcare" }
        ]}
      />
    </>
  )
}
