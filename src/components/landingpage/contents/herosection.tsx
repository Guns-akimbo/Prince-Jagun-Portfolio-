import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Main Green Container */}
      <div className="relative bg-[#0F3D2E]  min-h-200 pt-20 pb-40 px-6 md:px-24 flex items-center">
        {/* Background Decorative Rings (Large faint circles on sides) */}
        <div className="absolute left-[-10%] top-[20%] w-100 h-100 border-60 border-white/5 rounded-full pointer-events-none"></div>
        <div className="absolute right-[-5%] top-[12%] w-50 h-50 border-30 border-white/5 rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-20">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold text-[#C9A050] mb-4 leading-tight">
              OMO’BA ADEDOTUN <br /> A. OLATEJU-JAGUN
            </h1>
            <p className="text-lg md:text-xl mb-10 font-light opacity-90">
              Omo’ba Afidipotemole ti Ijebu-Ode
            </p>
            <p className="text-base md:text-lg leading-relaxed max-w-xl font-light opacity-80">
              Community-focused entrepreneur, cultural leader, and advocate for
              sustainable development. Bridging heritage, enterprise, and impact
              through food security, responsible real estate, and community
              empowerment.
            </p>
          </div>

          <div className="flex justify-center md:justify-end relative z-50">
            <div className="w-80 h-80 md:w-112.5 md:h-112.5 rounded-full border-4 border-white/30 overflow-hidden shadow-2xl z-30">
              <Image
                src="/images/prince.jpg"
                alt="Prince Adedotun Olateju-Jagun"
                className="w-full h-full object-cover"
                width={450}
                height={450}
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-72 md:h-68 overflow-hidden z-10">
          <svg
            viewBox="0 0 1400 400"
            className="absolute bottom-0 w-full h-full pl-7"
            preserveAspectRatio="none"
          >
            <path
              fill="#eaeaea"
              d="M0,200 Q350,320 700,200 T1400,120 L1400,400 L0,400 Z"
            />
          </svg>

          <svg
            viewBox="0 0 1400 400"
            className="absolute bottom-0 w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              d="M0,230 Q350,350 700,230 T1400,150 L1400,400 L0,400 Z"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
