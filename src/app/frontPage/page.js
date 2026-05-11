import HeroSlider from "./HeroSlider";
import AboutSection from "@/components/sections/AboutSection";
import ProductSection from "@/components/sections/ProductSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import GlobalSection from "@/components/sections/GlobalSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import CtaSection from "@/components/sections/CtaSection";
import QualitySection from "@/components/sections/QualitySection";



export default function FrontPage() {
  return (
    <>
      <HeroSlider />
      <section className="my-20 lg:my-32">
        <AboutSection />
      </section>
      <section className="bg-pri-50 py-20 lg:py-32">
        <ProductSection />
      </section>
      <section className="why-cosmedd">
        <WhyUsSection />
      </section>
      <section className="quality-section bg-slate-50 py-20 lg:py-32">
        <QualitySection />
      </section>
      <section className="global-presence py-20 lg:py-32 bg-white">
        <GlobalSection />
      </section>
      <section>
        <CtaSection />
      </section>
    </>
  )
}
