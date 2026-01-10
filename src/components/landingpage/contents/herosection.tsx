import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Main Green Container */}
      <div className="relative bg-[#0F3D2E]  min-h-200 pt-20 pb-40 px-6 md:px-24 flex items-center">
        {/* Background Decorative Rings (Large faint circles on sides) */}
        <div className="absolute left-[-10%] top-[20%] w-[400px] h-[400px] border-[60px] border-white/5 rounded-full pointer-events-none"></div>
        <div className="absolute right-[-5%] top-[12%] w-[200px] h-[200px] border-[30px] border-white/5 rounded-full pointer-events-none"></div>

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

          <div className="flex justify-center md:justify-end relative">
            <div className="w-80 h-80 md:w-112.5 md:h-112.5 rounded-full border-4 border-white/30 overflow-hidden shadow-2xl z-10">
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


        {/* 1. The Grey Secondary Curve (Beneath) */}
        <div className="absolute bottom-0 left-0 w-full leading-none z-0 translate-y-4">
          <svg
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="w-full h-[150px] fill-[#E5E7EB]"
          >
            <path d="M0,160 C400,320 1000,0 1440,200 L1440,320 L0,320 Z"></path>
          </svg>
        </div>

        {/* 2. The Main White Wave Curve (Cuts into Green) */}
        <div className="absolute bottom-0 left-0 w-full leading-none z-10">
          <svg
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="w-full h-[150px] fill-white"
          >
            <path d="M0,160 C400,320 1000,0 1440,200 L1440,320 L0,320 Z"></path>
          </svg>
        </div>

        {/* --- CUSTOM CURVES END --- */}
      </div>
    </section>
  );
};

export default HeroSection;
