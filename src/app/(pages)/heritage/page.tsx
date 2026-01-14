"use client";
import Footer from "@/components/landingpage/contents/footer";
import Header from "@/components/landingpage/navigations /header";
import Image from "next/image";

const HeritagePage = () => {
  return (
    <main className="bg-[#F8F8F8]">
      <Header />
      <div className="min-h-fit bg-[#0F3D2E] text-white px-4 lg:px-16  pt-4 lg:pt-16 relative overflow-hidden rounded-bl-[200px] lg:rounded-bl-[300px] animate-fade-slide-in">
        {/* <div className="absolute left-[-10%] top-[20%] w-100 h-100 border-60 border-white/5 rounded-full pointer-events-none"></div> */}
        <div className="absolute left-[-72%] lg:left-[-13%] top-[15%] lg:top-[20%] w-100 h-100 border-60  border-white/5 rounded-full pointer-events-none"></div>

        <div className="mx-auto relative z-10  w-full mt-24 lg:mt-20">
          <div className="text-center mt-4 mb-12 flex flex-col items-center justify-center">
            <h1 className="text-2xl md:text-4xl font-serif font-bold text-amber-400 mb-4">
              HERITAGE & TITLES
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100">
              A lineage of leadership, service, and civic responsibility.
            </p>
            <div className=" my-8 max-w-4xl ">
              <p className="text-sm lg:text-lg  text-emerald-50">
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
              <div className="relative ">
                <Image
                  src="/images/heritage1.jpg"
                  alt="Prince seated on throne"
                  className="w-full h-150 object-cover rounded-2xl -mb-12.5 "
                  width={700}
                  height={700}
                  priority
                />
              </div>
            </div>
            <div className="md:w-2/3 w-full">
              <h2 className="text-2xl md:text-5xl font-serif font-bold text-amber-400 text-center mt-0 lg:mt-8 mb-12">
                Ancestry & Family Legacy
              </h2>
              <div>
                <div className="space-y-6 text-emerald-50 text-center lg:text-left">
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
      <div className="gap-y-8 py-16 h-fit animate-fade-slide-in delay-150 mt-8  ">
        <h3 className="font-bold md:text-5xl text-3xl text-teal-700 text-center font-serif ">
          Civic Engagement & Traditional Roles
        </h3>
        <div className="space-y  mt-4 lg:mt-14 flex flex-col md:flex-row items-center justify-center  ">
          <div className="w-full lg:w-1/2">
            <p className="text-base lg:text-xl font-normal text-justify px-8 lg:px-16 pt-5 w-full lg:max-w-4xl">
              A bonafide member of the Fidipote Ruling House, Prince Adedotun
              holds several respected traditional titles reflecting leadership
              and service across communities
            </p>
            <p className="text-base font-normal text-justify lg:text-xl  px-8 lg:px-16 pt-5 max-w-4xl">
              He is also an honorary member of the Bobamayegun Okunrin Asiwaju
              Akile Ijebu, reinforcing his continued involvement in cultural
              leadership and grassroots advocacy. His life represents a balance
              of heritage, academic achievement, and professional dedication,
              guided by a deep respect for family, culture, and community.
            </p>
            <div className="flex mt-20">
              <div className="mt-10 relative md:w-38 w-22 h-92">
                <div className="absolute inset-0 bg-gradient-to-b from-[#D89B2D] to-[#F8F8F8]"></div>

                <div className="absolute bottom-0 left-0 top-[1.88px] right-[1.88px] bg-[#F8F8F8]"></div>

                <div className="relative z-10 ">
                  <div className="h-6 w-6 rounded-full bg-[#0F3D2E] relative lg:left-[90%] left-[85%] my-5 md:my-10"></div>
                  <div className="h-6 w-6 rounded-full bg-[#0F3D2E] relative lg:left-[90%] left-[85%]  my-9 md:my-12"></div>
                  <div className="h-6 w-6 rounded-full bg-[#0F3D2E] relative lg:left-[90%] left-[85%]  my-6 md:my-14"></div>
                  <div className="h-6 w-6 rounded-full bg-[#0F3D2E] relative lg:left-[90%] left-[85%]  my-8 md:my-6"></div>
                </div>
              </div>

              <div className="w-9/12 pt-4 ml-8 mt-5 lg:mt-10 ">
                <ul className="list-none lg:space-y-12 space-y-10  ">
                  <li className=" md:text-xl text-sm font-normal mt-4">
                    Otunba Apesinola of Oke-Eri, Ijebu Ode
                  </li>
                  <li className=" md:text-xl text-sm font-normal">
                    Otun-Asiwaju of Ibiade, Ogun Waterside
                  </li>
                  <li className=" md:text-xl text-sm font-normal pt-1">
                    Otunba Shobaloju I of Orile-Igbore
                  </li>
                  <li className=" md:text-xl text-sm font-normal pt-1">
                    Otunba Olutoyese of Ijebu-Mushin
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-4 lg:p-0 bg--500 flex justify-center items-center ">
            {" "}
            <Image
              src="/images/heritage2.png"
              alt="Prince seated on throne"
              className=" h-140 lg:h-190 w-full lg:w-2/3  object-cover rounded-2xl "
              width={700}
              height={100}
              priority
            />
          </div>
        </div>
      </div>
      <div className="animate-fade-slide-in delay-300">
        <div className="flex flex-col items-center justify-center space-y-4 mt-6 ">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-teal-900 mb-6 text-center">
            Family / Notable Dignitaries
          </h1>
          <p className="text-base md:text-lg px-8 lg:px-16 pb-16 max-w-5xl text-center">
            The Jagun family legacy extends through respected figures who have
            contributed to leadership, governance, and cultural life across
            Yorubaland.
          </p>
        </div>
        <div className="px-6 lg:px-16 pb-10 flex items-center md:justify-around  gap-8 flex-col md:flex-row ">
          <div className="md:w-1/2 md:w-h-[319px] w-full ">
            <Image
              src="/images/tree.jpeg"
              alt="Prince seated on throne"
              className="w-full object-cover rounded-2xl "
              width={700}
              height={100}
            />
          </div>
          <div className="text-[#0F3D2E] Family">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-yellow-500">👑</span>
                <h3 className="font-semibold text-lg">Chief Bayo Aremu</h3>
              </div>
              <div className="pl-6 space-y-1 text-sm">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#0F3D2E]" />
                  <p>Great Uncle</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#0F3D2E]" />
                  <p>Double Otunba of Iwo and Shagamu (Late)</p>
                </div>
              </div>
            </div>

            {/* Item */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-yellow-500">👑</span>
                <h3 className="font-semibold text-lg">Justice Aremu</h3>
              </div>
              <div className="pl-6 space-y-1 text-sm">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#0F3D2E]" />
                  <p>Great Uncle</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#0F3D2E]" />
                  <p>Junior brother to Chief Bayo Aremu</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#0F3D2E]" />
                  <p>Baamofin of Ede (Late)</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-yellow-500">👑</span>
                <h3 className="font-semibold text-lg">Chief Ayo Aremu</h3>
              </div>
              <div className="pl-6 space-y-1 text-sm">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#0F3D2E]" />
                  <p>Uncle</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#0F3D2E]" />
                  <p>Son of Chief Bayo Aremu</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#0F3D2E]" />
                  <p>Baamofin of Iwo</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-yellow-500">👑</span>
                <h3 className="font-semibold text-lg">Dr. Shola Obada</h3>
              </div>
              <div className="pl-6 space-y-1 text-sm">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#0F3D2E]" />
                  <p>Mother’s cousin</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#0F3D2E]" />
                  <p>Erelu of Ijeshaland</p>
                </div>
              </div>
            </div>

            {/* Item */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-yellow-500">👑</span>
                <h3 className="font-semibold text-lg">Dr. Bisi Jagun</h3>
              </div>
              <div className="pl-6 space-y-1 text-sm">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#0F3D2E]" />
                  <p>Father’s half-sister</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#0F3D2E]" />
                  <p>Chief of Ikomodu</p>
                </div>
              </div>
            </div>

            {/* Item */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-yellow-500">👑</span>
                <h3 className="font-semibold text-lg">Dr. Mary Boyd</h3>
              </div>
              <div className="pl-6 space-y-1 text-sm">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#0F3D2E]" />
                  <p>Younger sister</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#0F3D2E]" />
                  <p>Yeye Maiyegun of Orile Igbon</p>
                </div>
              </div>
            </div>

            {/* Item */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-yellow-500">👑</span>
                <h3 className="font-semibold text-lg">Prince Adedotun Jagun</h3>
              </div>
              <div className="pl-6 space-y-1 text-sm">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#0F3D2E]" />
                  <p>Otunba Shobaloju of Orile Igbon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-fit bg-gray-100 p-8 md:p-16 animate-fade-slide-in delay-500">
        <div className="lg:max-w-[85%] max-w-full mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-between ">
            <div className="space-y-4 w-full lg:w-1/2">
              <h2 className="text-2xl md:text-5xl font-serif text-center text-emerald-900 leading-tight">
                Heritage as Responsibility
              </h2>

              <p className="text-base md:text-xl text-gray-700 leading-relaxed">
                For Prince Adedotun, heritage is not symbolic, it is lived. It
                shapes how he leads, serves, and builds for future generations.
                Through enterprise, cultural stewardship, and community
                engagement, he continues a legacy defined by purpose, dignity,
                and progress.
              </p>
            </div>

            <div className="h-120 w-full lg:h-145 lg:w-135.25">
              <Image
                src="/images/heritage5.png"
                alt="Prince seated on throne"
                className="w-full h-[90%] lg:h-full object-cover rounded-2xl"
                width={200}
                height={100}
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <style jsx global>{`
        @keyframes fade-slide-in {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-slide-in {
          animation: fade-slide-in 0.9s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
        .delay-150 {
          animation-delay: 0.15s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </main>
  );
};

export default HeritagePage;
