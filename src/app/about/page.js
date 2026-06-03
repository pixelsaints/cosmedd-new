"use client"
import { useRef, useLayoutEffect } from "react";
import Cta from "@/components/sections/CtaSection";
import PageHeader from "@/components/layout/PageHeader";
import StorySection from "./sections/storySection";
import WhyCosmedd from "../../components/sections/WhyUsSection";
import ValuesCard from './components/ValuesCard';
import QualitySection from "@/components/sections/QualitySection";
import GlobalSection from "@/components/sections/GlobalSection";
import { sectionAnimation } from "@/lib/sectionAnimation";
import PrincipleSection from "./sections/principleSection";


export default function About() {
  const introRef = useRef(null);
  const whyIntro = useRef(null);
  const galleryRef = useRef(null);

  useLayoutEffect(() => {



    return () => {
    };
  }, []);

  return (
    <>
      <PageHeader
        title="Driven By Care, Defined by Reliability"
        description="Since 2015, Cosmedd Healthcare has been delivering trusted pharmaceutical and wellness sourcing solutions across international markets through quality, reliability, and lasting partnerships."
        bgImage="/images/worldwide-expansion.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" }
        ]}
      />

      <StorySection />
      <PrincipleSection />

      <div className="quality py-28">
        <QualitySection />
      </div>

      <div className="why-cosmedd">
        <WhyCosmedd />
      </div>

      <section className="global-presence py-20 lg:py-32 bg-white">
        <GlobalSection />
      </section>

      <Cta />
    </>
  );
}