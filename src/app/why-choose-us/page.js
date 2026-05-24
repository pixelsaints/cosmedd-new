import PageHeader from "@/components/layout/PageHeader";
import { FaVialCircleCheck, FaAward, FaClipboardCheck } from "react-icons/fa6";
import { FaHandHoldingMedical } from "react-icons/fa";

export default function WhyChoose() {

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

  return (
    <>
      <PageHeader
        title="We lead & inspire in modern healthcare"
        description="Our robust quality management systems ensure every product meets stringent international standards through rigorous quality assurance, compliance, and continuous process improvement."
        bgImage="/images/cosmedd-in-numbers.webp"
        breadcrumbs={[
          { label: "Home", href: "/", sperator: ">" },
          { label: "Why Choose Us" }
        ]}
      />

      <section className="py-24 lg:py-32">
        <div className="section-wrap flex flex-col items-center lg:flex-row gap-8 lg:gap-12">
          <div className="lg:w-1/2">
            <img className="rounded-xl object-fit object-cover w-full" src="/images/cosmedd-laboratory.webp" alt="Quality Overview" />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-black mb-6">Commitment to Quality at Every Stage</h2>
            <p className="mb-12 lg:mb-6">At Cosmedd Healthcare, we ensure that all our products and services meet international regulatory standards and customer expectations. Our robust Quality Management System (QMS) comprises Error Free Checks, Strict Quality Control, Quality Assurance and constant improvement with the changing market conditions.</p>
            <ul className="flex flex-col">
              <li></li>
            </ul>
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
    </>
  )
}
