import PageHeader from "@/components/layout/PageHeader";
import Counter from "@/components/ui/counter";
import Cta from "@/components/sections/CtaSection";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { FaVialCircleCheck, FaAward, FaClipboardCheck } from "react-icons/fa6";
import { FaHandHoldingMedical } from "react-icons/fa";




import SwiperCerts from "./components/SwiperCerts";

const process = [
  {
    title: "Error-Free Verification",
    description: "Rigorous checks across sourcing and documentation.",
    icon: FaVialCircleCheck,
  },
  {
    title: "Strict Quality Control",
    description: "Comprehensive testing and inspection procedures.",
    icon: FaClipboardCheck,
  },
  {
    title: "Quality Assurance",
    description: "Regulatory-aligned compliance monitoring.",
    icon: FaHandHoldingMedical,
  },
  {
    title: "Evolving Excellence",
    description: "Adaptive enhancement to evolving market standards.",
    icon: FaAward,
  },
];

const compliance = [
  {
    title: "International Regulatory Alignment",
    description: "Meeting global regulatory standards for safety, compliance, consistency, and market acceptance.",
    icon: BsFillPatchCheckFill
  },
  {
    title: "Verified Quality Systems",
    description: "Maintaining precise quality systems ensuring reliability, documentation accuracy, and pharmaceutical consistency.",
    icon: BsFillPatchCheckFill
  },
  {
    title: "Trusted Manufacturing Network",
    description: "Collaborating with certified manufacturers ensuring compliance and consistent production quality.",
    icon: BsFillPatchCheckFill
  }
]

const regulatory = [
  {
    number: "01",
    title: "Export Documentation",
    description: "Comprehensive export documentation ensuring smooth international product movement, customs clearance, and regulatory readiness worldwide.",
    icon: "/icons/export-documentation.svg"
  },
  {
    number: "02",
    title: "Regulatory Support",
    description: "Dedicated regulatory assistance supporting product registrations, compliance coordination, approvals, and evolving international healthcare requirements.",
    icon: "/icons/regulatory-support.svg"
  },
  {
    number: "03",
    title: "Batch Traceability",
    description: "Structured batch tracking systems ensuring transparent product traceability, manufacturing visibility, and reliable quality verification processes.",
    icon: "/icons/batch-traceability.svg"
  },
  {
    number: "04",
    title: "Global Compliance",
    description: "International compliance frameworks supporting consistent pharmaceutical standards, operational reliability, and responsible global healthcare distribution.",
    icon: "/icons/global-compliance.svg"
  },
  {
    number: "05",
    title: "Pharmacovigilance Support",
    description: "Ongoing pharmacovigilance practices supporting product safety monitoring, adverse event reporting, and healthcare accountability standards.",
    icon: "/icons/pharmacovigilance-support.svg"
  },
  {
    number: "06",
    title: "Product Validation",
    description:
      "Comprehensive product validation ensuring formulation consistency, performance reliability, stability compliance, and dependable manufacturing outcomes.",
    icon: "/icons/product-validation.svg"
  }
];

const matter = [
  {
    title: "Product Reliability",
    desc: "Ensuring consistent pharmaceutical quality, formulation stability, and dependable performance across every manufactured product batch.",
    img: "/images/scientist-laboratory.webp"
  },
  {
    title: "Supply Confidence",
    desc: "Supporting uninterrupted healthcare distribution through dependable sourcing networks, operational consistency, and trusted manufacturing partnerships.",
    img: "/images/supply-confidence.webp"
  },
  {
    title: "Market Compliance",
    desc: "Maintaining international regulatory alignment supporting safer distribution, documentation accuracy, and responsible global healthcare market access.",
    img: "/images/market-compliance.webp"
  }
]


export default function Quality() {
  return (
    <>
      <PageHeader
        title="International Standards, Trusted Quality"
        description="Our robust quality management systems ensure every product meets stringent international standards through rigorous quality assurance, compliance, and continuous process improvement."
        bgImage="/images/quality-slide.webp"
        breadcrumbs={[
          { label: "Home", href: "/", sperator: ">" },
          { label: "Products" }
        ]}
      />

      <section className="py-24 lg:py-32">
        <div className="section-wrap flex flex-col items-center lg:flex-row gap-8 lg:gap-12">
          <div className="lg:w-1/2">
            <img className="rounded-xl object-fit object-cover w-full" src="/images/cosmedd-laboratory.webp" alt="Quality Overview" />
          </div>
          <div className="lg:w-1/2">
            <div className="sub-title mb-4">Quality Overview</div>
            <h2 className="text-black mb-6">Commitment to Quality at Every Stage</h2>
            <p className="mb-12 lg:mb-6">At Cosmedd Healthcare, we ensure that all our products and services meet international regulatory standards and customer expectations. Our robust Quality Management System (QMS) comprises Error Free Checks, Strict Quality Control, Quality Assurance and constant improvement with the changing market conditions.</p>

            <div className="stats grid w-full grid-cols-2 lg:grid-cols-2 gap-6 stat-wrapper items-stretch">
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
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="section-wrap px-4 lg:px-0">
          <div className="title flex flex-col lg:flex-row items-end mx-auto mb-12 lg:mb-24 lg:gap-16">
            <h2 className="lg:w-[50%] text-black mb-4 lg:mb-0">Quality Management System Process</h2>
            <p className="lg:w-[50%] pb-2">A structured quality framework focused on accuracy, regulatory compliance, product consistency, operational excellence, and continuous improvement across sourcing, manufacturing, documentation, and every stage of healthcare product delivery.</p>
          </div>

          <ul className="grid grid-cols-1 sm:mt-16 lg:mt-20 lg:grid-cols-4">
            {
              process.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.title} className="step">
                    <span className=""></span>
                    <div className="step-icon">
                      <Icon />
                    </div>
                    <div className="step-content">
                      <h4> {item.title} </h4>
                      <p> {item.description} </p>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white">
        <div className="section-wrap flex flex-col lg:flex-row gap-12 lg:items-center lg:justify-between">
          <div className="w-full lg:w-[50%]">
            <div className="sub-title mb-5">Certifications</div>
            <h2 className="text-black mb-6">Globally Recognized Compliance Standards</h2>
            <p className="mb-8">Our manufacturing and sourcing ecosystem aligns with internationally accepted certifications that reinforce product safety, quality consistency, and operational excellence.</p>

            <ul className="flex flex-col gap-5">
              {
                compliance.map((item) => {
                  const Icon = item.icon;

                  return (
                    <li key={item.title} className="flex flex-row gap-2">
                      <div className="w-[1.8em] pt-1">
                        <Icon size={18} className=" fill-pri-500 " />
                      </div>
                      <p className="">
                        <span className="font-semibold text-pri-500 inline-block pr-1">{item.title} -</span>
                        <span>{item.description}</span>
                      </p>
                    </li>
                  )
                })
              }
            </ul>
          </div>

          <div className="w-full lg:w-[42%]">
            <SwiperCerts />
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 regulatory-assurance">
        <div className="section-wrap px-4 lg:px-0 flex flex-col lg:flex-row gap-12 lg:gap-16 lg:items-start lg:justify-between">
          <div className="w-full lg:w-[45%] lg:sticky lg:top-32">
            <div className="sub-title mb-6">Quality Standards</div>
            <h2 className="text-white mb-5">Global Compliance Standards</h2>
            <p className="mb-8 text-white/70">Our manufacturing and sourcing ecosystem aligns with internationally accepted certifications that reinforce product safety, quality consistency, and operational excellence.</p>
            <img src="/images/scientific-precision.webp" className="rounded-xl h-[20em] w-full object-cover object-center" alt="" />
          </div>
          <div className="w-full lg:w-[55%]">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="flex flex-col gap-8">
                {
                  regulatory.slice(0, 3).map((item) => {
                    return (
                      <div key={item.number} className="p-4 bg-white/10 border border-white/15 rounded-xl backdrop-blur-xl">
                        <div className="flex flex-row items-center justify-between mb-8 lg:mb-16 text-white pt-4">
                          <img src={item.icon} alt={item.title} className="h-14 lg:h-20 w-auto opacity-70" />
                          <div className="number text-[20px] font-semibold text-white/70 pr-4">{item.number}</div>
                        </div>
                        <div>
                          <div className="text-white mb-4 text-[20px] font-semibold"> {item.title} </div>
                          <div className="text-white/70 leading-relaxed text-[15px]"> {item.description} </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
              <div className="flex flex-col gap-8 lg:mt-16">
                {
                  regulatory.slice(3, 6).map((item) => {
                    return (
                      <div key={item.number} className="p-4 bg-white/10 border border-white/15 rounded-xl backdrop-blur-xl">
                        <div className="flex flex-row items-center justify-between mb-8 lg:mb-16 text-white pt-4">
                          <img src={item.icon} alt={item.title} className="h-14 lg:h-20 w-auto opacity-70" />
                          <div className="number text-[20px] font-semibold text-white/70 pr-4">{item.number}</div>
                        </div>
                        <div>
                          <div className="text-white mb-4 text-[20px] font-semibold"> {item.title} </div>
                          <div className="text-white/70 leading-relaxed text-[15px]"> {item.description} </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="section-wrap flex flex-col gap-12 lg:gap-16 lg:items-center lg:justify-between">
          <div className="flex flex-col items-center title text-center w-full">
            <div className="sub-title mb-6">Why Quality Matters</div>
            <h2 className="text-black mb-4">Assurance in Every Delivery</h2>
            <p className="lg:w-[60%]">Structured quality systems ensuring regulatory confidence, product consistency, operational reliability, and trusted global healthcare partnerships.</p>
          </div>
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 lg:px-0">
            {
              matter.map((item) => {
                return (
                  <div key={item.title} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                    <img src={item.img} alt={item.title} className="w-full mb-6 h-[14em] object-cover object-center" />
                    <div className="px-4">
                      <h5 className="mb-4 text-black"> {item.title} </h5>
                      <p className="mb-4">{item.desc}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>

      <Cta
        ctaSubtitle="Connect with Cosmedd Healthcare for dependable sourcing solutions backed by internationally aligned quality systems."
      />
    </>
  )
}