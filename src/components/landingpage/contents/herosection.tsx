import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <main className="relative w-full bg-white overflow-x-hidden pt-20 animate-fade-slide-in">
      <div className="relative bg-[#0F3D2E]  min-h-[90vh] pt-20 pb-0 lg:pb-40 px-4 md:px-12 flex items-center  overflow-hidden">
        {/* Background Decorative Rings (Large faint circles on sides) */}
        <div className="absolute left-[-72%] lg:left-[-13%] top-[15%] lg:top-[20%] w-100 h-100 border-60  border-white/5 rounded-full pointer-events-none"></div>
        <div
          className="
    absolute
    lg:right-[-11%] right-[-32%]
    top-[-20%] lg:top-[-25%]
    w-50 h-50
    lg:w-80 lg:h-80
    rounded-full
    pointer-events-none
    translate-y-32
    bg-[conic-gradient(from_80deg,rgba(255,255,255,0.08)_0deg,rgba(255,255,255,0.08)_160deg,transparent_190deg)]
    mask-[radial-gradient(circle,transparent_44%,black_45%)]
  "
        ></div>

        <div className="max-w-380 mx-auto grid md:grid-cols-2 gap-12 items-center relative z-20 ">
          <div className="text-white  text-center ">
            <h1 className="text-4xl font-serif lg:text-7xl font-bold text-[#C9A050] mb-4 leading-tight text-center">
              OMO’BA ADEDOTUN A. OLATEJU-JAGUN
            </h1>
            <p className="text-lg  font-sans lg:text-3xl mb-10 font-light opacity-90 text-center">
              Omo’ba Afidipotemole ti Ijebu-Ode
            </p>
            <p className="text-base font-sans lg:text-2xl leading-relaxed max-w-3xl opacity-80 text-center ">
              Community-focused entrepreneur, cultural leader, and advocate for
              sustainable development. Bridging heritage, enterprise, and impact
              through food security, responsible real estate, and community
              empowerment.
            </p>
          </div>

          <div className="flex justify-center md:justify-end relative left-9  lg:left-0 bottom-0 lg:-bottom-24 z-50">
            <div className="w-80 h-80 lg:w-160.5 lg:h-160.5 rounded-full border-4 border-white/30 overflow-hidden shadow-2xl z-30">
              <Image
                src="/images/prince.jpg"
                alt="Prince Adedotun Olateju-Jagun"
                className="w-full h-full object-cover"
                width={450}
                height={450}
                priority
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
    </main>
  );
};

export default HeroSection;
