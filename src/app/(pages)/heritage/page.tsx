import Footer from "@/components/landingpage/contents/footer";
import Header from "@/components/landingpage/navigations /header";
import Image from "next/image";
import React from "react";

const HeritagePage = () => {
  return (
    <div className="bg-[#F8F8F8]">
      <Header />
      <div className="min-h-fit bg-[#0F3D2E] text-white px-16 pt-16 relative overflow-hidden rounded-bl-[300px] ">
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
      <div className=" py-16 gap-y-8 h-fit ">
        <div className="space-y-6 mb-8 px-16">
          <h3 className="font-bold md:text-4xl text-lg text-teal-700 text-center font-serif ">
            Civic Engagement & Traditional Roles
          </h3>
          <p className="font-normal md:text-2xl text-base font-serif text-justify ">
            A bonafide member of the Fidipote Ruling House, Prince Adedotun
            holds several respected traditional titles reflecting leadership and
            service across communities:
          </p>
        </div>
        <div className=" flex justify-between md:flex-row flex-col h-50vh] ">
          <div className="flex">
            <div className="absolute mt-10 relative w-[8.5rem] h-[23rem]">
              <div className="absolute inset-0 bg-gradient-to-b from-[#D89B2D] to-[#F8F8F8]"></div>

              <div className="absolute bottom-0 left-0 top-[1.88px] right-[1.88px] bg-[#F8F8F8]"></div>

              <div className="relative z-10">
                <div className="h-6 w-6 rounded-full bg-[#0F3D2E] relative left-[90%] my-5 md:my-10"></div>
                <div className="h-6 w-6 rounded-full bg-[#0F3D2E] relative left-[90%] my-9 md:my-12"></div>
                <div className="h-6 w-6 rounded-full bg-[#0F3D2E] relative left-[90%] my-6 md:my-14"></div>
                <div className="h-6 w-6 rounded-full bg-[#0F3D2E] relative left-[90%] my-8 md:my-6"></div>
              </div>
            </div>

            <div className="w-6/12  pt-4 md:ml-30 ml-15 mt-10 ">
              <ul className="list-none space-y-4   ">
                <li className=" md:text-2xl text-sm font-normal">
                  Otunba Apesinola of Oke-Eri, Ijebu Ode
                </li>
                <li className=" md:text-2xl text-sm font-normal">
                  Otun-Asiwaju of Ibiade, Ogun Waterside
                </li>
                <li className=" md:text-2xl text-sm font-normal pt-1">
                  Otunba Shobaloju I of Orile-Igbore
                </li>
                <li className=" md:text-2xl text-sm font-normal pt-1">
                  Otunba Olutoyese of Ijebu-Mushin
                </li>
              </ul>
            </div>
          </div>
          <div className="w-4/12 py-2">
            <div className="h-4/5 w-[390px] rounded-md">
              <Image
                src="/images/heritage2.png"
                alt="Prince seated on throne"
                className="w-full object-cover rounded-2xl "
                width={700}
                height={100}
              />
            </div>
          </div>
        </div>
        <div>
          <p className="text-lg font-normal text-justify p-16">
            He is also an honorary member of the Bobamayegun Okunrin Asiwaju
            Akile Ijebu, reinforcing his continued involvement in cultural
            leadership and grassroots advocacy. His life represents a balance of
            heritage, academic achievement, and professional dedication, guided
            by a deep respect for family, culture, and community.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HeritagePage;
