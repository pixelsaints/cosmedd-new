import HoverGif from "@/components/ui/HoverGif";

export default function ValuesCard({
  subTitle,
  title,
  desc,
  pngSrc,
  gifSrc,
  children,
}) {
  return (
    <div className="value bg-white p-6 lg:p-8 rounded-lg shadow-sm">


      <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-6 pb-4 border-b border-slate-200">
        <div className="order-2 lg:order-1">
          <div className="text-pri-400 font-semibold mb-3">{subTitle}</div>
          <h4 className="text-black">{title}</h4>
        </div>

        <div className="relative w-20 h-20 grayscale-100 scale-[0.9] opacity-70 order-1 lg:order-2">
          <HoverGif
            pngSrc={pngSrc}
            gifSrc={gifSrc}
            alt={subTitle}
          />
        </div>
      </div>

      <p className="mb-6 lead">{desc}</p>

      {children}
    </div>
  );
}