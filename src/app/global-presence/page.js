"use client"
import { usePathname } from "next/navigation";
import PageHeader from "@/components/layout/PageHeader"
import GlobalSection from "@/components/sections/GlobalSection"
import Cta from "@/components/sections/CtaSection";
import Counter from "@/components/ui/counter";
import QualitySection from "@/components/sections/QualitySection";

const capabilityData = [
  {
    image: "/images/pharmaceutical_distributors.webp",
    title: "Regulatory Documentation Support",
    description: "Ensuring accurate, compliant documentation for seamless approvals and efficient product movement across regulated international healthcare markets."
  },
  {
    image: " /images/slide-1.webp",
    title: "Reliable Manufacturing Network",
    description: "Partnering with certified manufacturers to deliver consistent product quality, dependable production timelines, and trusted operational excellence."
  },
  {
    image: "/images/market-compliance.webp",
    title: "Market-Specific Adaptability",
    description: "Aligning healthcare solutions with regional regulations, evolving market needs, and diverse international customer requirements."
  },
  {
    image: "/images/supply-confidence.webp",
    title: "Consistent Supply Assurance",
    description: "Ensuring dependable sourcing and seamless coordination for consistent product availability across expanding healthcare markets."
  }
]

export default function GlobalPresence() {

  const pathname = usePathname();

  return (
    <>
      <PageHeader
        title="Delivering Healthcare Across Global Markets"
        description="Cosmedd Healthcare supports international healthcare markets through trusted sourcing partnerships, regulatory-aligned supply solutions, and a growing presence across key global regions."
        bgImage="/images/cosmedd-in-numbers.webp"
        breadcrumbs={[
          { label: "Home", href: "/", sperator: ">" },
          { label: "Global Presence" }
        ]}
      />

      <section className="my-24 lg:my-32">
        <div className="section-wrap flex flex-col items-center justify-center gap-8 lg:gap-12">
          <div className="lg:w-full flex flex-col lg:flex-row items-center">
            <h2 className="text-black mb-6 lg:mb-0 w-[50%]">Extending Healthcare Partnerships Worldwide</h2>
            <p className="w-[50%]">Since 2015, Cosmedd Healthcare has strengthened its international presence by delivering dependable sourcing solutions, regulatory-aligned products, and trusted long-term partnerships across diverse healthcare markets worldwide.</p>
          </div>
          <div className="lg:w-full">

            <div className="stats grid w-full grid-cols-2 lg:grid-cols-4 gap-6 stat-wrapper items-stretch">
              <Counter
                value="10"
                suffix="+"
                title="Years of expertise"
              />
              <Counter
                value="15"
                suffix="+"
                title="Countries Served"
              />
              <Counter
                value="7"
                suffix="+"
                title="Product Segments"
              />
              <Counter
                value="25"
                suffix="+"
                title="Healthcare Solutions"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="global-presence py-24 lg:py-32 bg-slate-100">
        <GlobalSection />
      </section>

      <section className="py-24 lg:py-32 bg-pri-50">
        <QualitySection />
      </section>

      <section className="py-24 lg:py-32 bg-[url(/images/why-cosmedd.webp)] bg-no-repeat bg-cover">
        <div className="section-wrap flex flex-col lg:flex-row items-start gap-8 lg:gap-14">
          <div className="lg:w-1/2 lg:sticky lg:top-40">
            <div className="sub-title mb-6">Export Capability</div>
            <h2 className="text-white mb-5">Built for International Supply Excellence</h2>
            <p className="text-white/70 mb-6">Our export ecosystem is built to support global healthcare distribution through efficient sourcing processes, regulatory-compliant documentation, reliable manufacturing partnerships, and adaptable supply capabilities that ensure consistent product delivery across diverse international markets.</p>
          </div>
          <div className="w-1/2">
            <div className="flex flex-col gap-8">
              {
                capabilityData.map((item) => {
                  return (
                    <div key={item.title} className="capability-card flex flex-col bg-white/10">
                      <img src={item.image} alt={item.title} className="h-[12em] object-cover object-center mb-4" />
                      <div className="content p-4">
                        <div className="text-white mb-3 text-[24px] font-semibold">{item.title}</div>
                        <p className="text-white/70">{item.description}</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </>
  )
}


// re_hqBNxS4n_CLppFThiFgaQDq4wceU4YQGB