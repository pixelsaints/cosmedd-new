import AboutContents from "./components/AboutContents";
import GlobalPresence from "./components/GlobalPresence";
import HeroSlider from "./components/HeroSlider";
import IndServed from "./components/IndServed";
import ProductSection from "./components/ProductSection";
import WhyCosmedd from "./components/WhyCosmedd";

export default function FrontPage() {
  return (
    <>
      <HeroSlider />
      <section className="my-20 lg:my-32">
        <AboutContents />
      </section>
      <section className="bg-pri-600 py-20 lg:mt-32 lg:py-32">
        <ProductSection />
      </section>
      <section className="why-cosmedd">
        <WhyCosmedd />
      </section>
      <section className="global-presence py-20 lg:py-32 bg-slate-100">
        <GlobalPresence />
      </section>
      <section className="ind-served py-20 lg:py-32">
        <IndServed />
      </section>
    </>
  )
}
