"use client";

type PageHeroProps = {
  label: string;
  title: string;
  subtitle: string;
};

export default function PageHero({ label, title, subtitle }: PageHeroProps) {
  return (
    <section className="pt-44 pb-20 px-6 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 text-[14rem] font-black text-gray-50/80 select-none pointer-events-none tracking-tighter leading-none">
        ICT
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-10 h-[1px] bg-[#C59D2A]" />
            <span className="text-[#C59D2A] text-[11px] font-black uppercase tracking-[0.5em]">
              {label}
            </span>
          </div>
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-[#0B1F3A] leading-[0.9] tracking-tighter mb-7">
            {title}
          </h1>
          <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed max-w-3xl">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
