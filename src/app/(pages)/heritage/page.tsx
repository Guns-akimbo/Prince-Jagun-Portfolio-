import Footer from "@/components/landingpage/contents/footer";
import Header from "@/components/landingpage/navigations /header";
import Image from "next/image";
import React from "react";

const HeritagePage = () => {
  return (
    <div>
      <Header />
      <div className="min-h-fit bg-[#0F3D2E] text-white px-16 pt-16 relative overflow-hidden rounded-bl-[300px]">
        <div className="absolute right-[-5%] top-[12%] w-50 h-50 border-30 border-white/5 rounded-full pointer-events-none"></div>
        <div className="absolute left-[-10%] top-[20%] w-100 h-100 border-60 border-white/5 rounded-full pointer-events-none"></div>

        <div className="mx-auto relative z-10 ">
          <div className="text-center mb-12">
            <h1 className="text-xl md:text-4xl font-serif font-bold text-amber-400 mb-4">
              HERITAGE & TITLES
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100">
              A lineage of leadership, service, and civic responsibility.
            </p>
            <div className="text-center my-8 px-4">
              <p className="text-lg leading-relaxed text-emerald-50">
                Prince Otunba Adedotun Adebola Babatunde Jagun stands within a
                distinguished Ijebu lineage defined by nobility, enterprise, and
                public service. His heritage reflects generations of leadership
                shaped by responsibility, cultural stewardship, and commitment
                to community.
              </p>
            </div>
          </div>

          <div className="flex flex-col-reverse md:flex-row gap-20">
            <div className="flex justify-center md:w-1/3 w-full  ">
              <div className="relative">
                <Image
                  src="/images/heritage1.jpg"
                  alt="Prince seated on throne"
                  className="w-full h-150 object-cover rounded-2xl mb-[-50px] "
                  width={700}
                  height={100}
                />
              </div>
            </div>
            <div className="md:w-2/3 w-full">
              <h2 className="text-xl md:text-5xl font-serif font-bold text-amber-400 text-center mb-12">
                Ancestry & Family Legacy
              </h2>
              <div>
                <div className="space-y-6 text-emerald-50">
                  <p className="text-base md:text-lg leading-relaxed">
                    Prince Adedotun is honored to be the great-great-grandson of
                    Awujale Ademuyewo Fidipote, who reigned from 1850 to 1886,
                    and the great-grandson of Princess Adefowope Ademuyewo, wife
                    of &#39;Dada&#39; Olateju Jagun, renowned as the
                    Generalissimo of Ijebuland. His family legacy continued
                    through his grandparents, Prince Rabiu Adeniji Jagun, a
                    distinguished cocoa magnate, and Princess Alhaja Jagun.
                  </p>

                  <p className="text-base md:text-lg leading-relaxed">
                    Prince Rabiu was a notable figure during Nigeria&#39;s
                    pre-independence era and a key supporter of the Tribune
                    newspaper under the leadership of Chief Obafemi Awolowo in
                    1960. The family residence on Fusigboye Street, Fidipote,
                    Ijebu Ode, remains a living testament to continuity,
                    responsibility, and heritage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" p-16">

      </div>
      <Footer />
    </div>
  );
};

export default HeritagePage;
