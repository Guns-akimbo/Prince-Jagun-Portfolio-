"use client";
import Footer from "@/components/landingpage/contents/footer";
import Header from "@/components/landingpage/navigations /header";
import Image from "next/image";

const HeritagePage = () => {
  return (
    <main className="bg-[#F8F8F8] ">
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
              <p className="text-base md:text-2xl 2xl:text-2xl text-emerald-50">
                Omo’ba Adedotun A. Olateju Jagun stands within a distinguished
                Ijebu lineage defined by nobility, enterprise, and public
                service. His heritage reflects generations of leadership shaped
                by responsibility, cultural stewardship, and commitment to
                community.
              </p>
            </div>
          </div>

          <div className="flex flex-col-reverse md:flex-row md:gap-2 lg:gap-6 gap-20 ">
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
            <div className="md:w-2/3  w-full mb-4">
              <h2 className="text-2xl md:text-4xl font-serif font-bold text-amber-400 text-center mt-0 lg:mt-8 mb-12">
                Ancestry & Family Legacy
              </h2>
              <div>
                <div className="space-y-6 text-emerald-50 text-center lg:text-left">
                  <p className="text-base md:text-2xl 2xl:text-2xlleading-relaxed">
                    Omo’ba Adedotun A. Olateju Jagun is honored to be the
                    great-great-grandson of Awujale Ademuyewo Fidipote, who
                    reigned from 1850 to 1886, and the great-grandson of
                    Princess Adefowope Ademuyewo, wife of &#39;Dada&#39; Olateju
                    Jagun, renowned as the Generalissimo of Ijebuland. His
                    family legacy continued through his grandparents, Prince
                    Rabiu Adeniji Jagun, a distinguished cocoa magnate, and
                    Princess Alhaja Jagun.
                  </p>

                  <p className="text-base md:text-2xl 2xl:text-2xl leading-relaxed">
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
      <div className="h-fit animate-fade-slide-in delay-150 mt-8 p-4 flex flex-col 2xl:flex-row items-center w-full 2xl:h-[80vh] mb-10 ">
        <div className="2xl:w-2/3  h-full flex p-2 2xl:p-10">
          <div className="2xl:max-w-5xl ">
            <h3 className="font-bold 2xl:text-4xl text-2xl md:text-4xl text-teal-900 text-center font-serif ">
              Civic Engagement & Traditional Roles
            </h3>
            <div className="mt-4 flex flex-col items-start">
              <div className="w-full ">
                <p className="text-base md:text-2xl 2xl:text-2xl mb-6 ">
                  A bonafide member of the Fidipote Ruling House, Omo’ba
                  Adedotun A. Olateju Jagun holds several respected traditional
                  titles reflecting leadership and service across communities
                </p>

                <div className="flex w-full items-start space-x-4 mb-6  ">
                  <div className="w-11 h-5 md:w-6 md:h-6 2xl:w-6 2xl:h-6 rounded-full bg-[#0F3D2E]"></div>
                  <span className="flex flex-col list-none space-y-2  ">
                    <li className=" 2xl:text-xl md:text-2xl text-lg font-bold text-[#0F3D2E] ">
                      Otunba Apesinola of Oke-Eri, Ijebu Ode
                    </li>
                    <li className="md:text-2xl 2xl:text-base">
                      Conferred by His Royal Highness, Oba Babatunde Adegboyega
                      Oredipe Akanwun Owe 1 The Olu of Oke-Eri
                    </li>
                    <li className="md:text-2xl 2xl:text-base">
                      Project initiative: Building a Oba Market project in
                      Oke-Eri multimillion naira complex center for traders.
                    </li>
                  </span>
                </div>

                <div className="flex w-full items-start justify- space-x-4 mb-6  ">
                  <div className="w-10 h-5 md:w-6 md:h-6  2xl:w-6 2xl:h-6 rounded-full bg-[#0F3D2E]"></div>
                  <span className="flex flex-col list-none space-y-2  ">
                    <li className=" 2xl:text-xl md:text-2xl text-lg font-bold text-[#0F3D2E] ">
                      Otun-Asiwaju of Ibiade, Ogun Waterside{" "}
                    </li>
                    <li className="md:text-2xl 2xl:text-base">
                      Conferred by His Royal Highness, Oba Bola Raimi (Laigbo 1).
                      The Alarige of Ibiade
                    </li>
                    <li className="md:text-2xl 2xl:text-base">
                      promoting cultural heritage preservation and support with
                      the economic growth of Ibiade
                    </li>
                  </span>
                </div>

                <div className="flex w-full justify- space-x-4 mb-6  ">
                  <div className="w-16 h-5 md:w-8 md:h-6  2xl:w-6 2xl:h-6 rounded-full bg-[#0F3D2E]"></div>
                  <span className="flex flex-col list-none space-y-1 ">
                    <li className=" 2xl:text-xl md:text-2xl text-lg font-bold text-[#0F3D2E] ">
                      Otunba Shobaloju I of Orile-Igbore{" "}
                    </li>
                    <li className="md:text-2xl 2xl:text-base">
                      Conferred by His Royal Majesty Oba Segun Joseph OGUNBONA
                      ALAWONLA 1 Onigbore of Igbore, Olu of Orile Igbore
                    </li>
                    <li className="md:text-2xl 2xl:text-base">
                      Project initiative: Rebuilding police station in Igbore,
                      foodbank donation, provided supply of clean water and
                      cultural heritage preservation.
                    </li>
                  </span>
                </div>

                <div className="flex w-full items-start justify- space-x-4 mb-6  ">
                  <div className="w-14 h-5 md:w-8 md:h-6  2xl:w-6 2xl:h-6 rounded-full bg-[#0F3D2E]"></div>
                  <span className="flex flex-col list-none space-y-1  ">
                    <li className=" 2xl:text-xl md:text-2xl text-lg font-bold text-[#0F3D2E] ">
                      Otunba Olutoyese of Ijebu-Mushin
                    </li>
                    <li className="md:text-2xl 2xl:text-base">
                      Conferred by Obelu of Esure Kingdom Ijebu Mushin. His Royal
                      Highness His Royal Highness Oba Abdulsamad Olalekan Kasali
                      (Alarada III)
                    </li>
                    <li className="md:text-2xl 2xl:text-base">
                      Project Initiative: preservation of cultural heritage and
                      hosting an endowment fund for schools student and market
                      women.
                    </li>
                  </span>
                </div>

                <p className="text-base md:text-2xl mb-8 2xl:text-lg hidden lg:block">
                  He is also an honorary member of the Bobamayegun Okunrin
                  Asiwaju Akile Ijebu, reinforcing his continued involvement in
                  cultural leadership and grassroots advocacy. His life
                  represents a balance of heritage, academic achievement, and
                  professional dedication, guided by a deep respect for family,
                  culture, and community.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="2xl:w-1/3 w-full h-full flex items-center justify-center mb-8 2xl:mb-0 ">
          <div className="w-full md:h-full h-11/12  lg:p-0 flex justify-center items-center ">
            <Image
              src="/images/heritage2.png"
              alt="Prince seated on throne"
              className="h-140 md:h-full 2xl:h-190 w-full  object-cover rounded-2xl "
              width={800}
              height={100}
              priority
            />
          </div>
        </div>
        <p className="text-base md:text-2xl 2xl:text-2xl lg:hidden p-2">
          He is also an honorary member of the Bobamayegun Okunrin Asiwaju Akile
          Ijebu, reinforcing his continued involvement in cultural leadership
          and grassroots advocacy. His life represents a balance of heritage,
          academic achievement, and professional dedication, guided by a deep
          respect for family, culture, and community.
        </p>
      </div>

      <div className="animate-fade-slide-in delay-300">
        <div className=" flex flex-col 2xl:flex-row  md:h-[100vh] 2xl:h-[95vh] w-full items-stretch justify-between   ">
          <h1 className="text-3xl font-serif font-bold text-teal-900 mb-6 text-center 2xl:hidden">
            Family Dignitaries
          </h1>
          <div className="w-full 2xl:w-1/2 2xl:bg-[#E9FFF8] p-6  2xl:p-8">
            <div className="flex flex-col items-center justify-center gap-">
              <div className="w-full 2xl:max-w-lg aspect-4/3  relative mb-4">
                <Image
                  src="/images/sisters.jpeg"
                  alt="Fidpote Sisters"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <p className="text-center text-[#0F3D2E] mb-4 ">
                Fidipote Sister
              </p>
              <div className="flex flex-col items-center justify-center space-y-4   ">
                <p className="text-base lg:hidden">
                  The Jagun family legacy extends through respected figures who
                  have contributed to leadership, governance, and cultural life
                  across Yorubaland.
                </p>
              </div>
              <div className="flex flex-col  w-full justify-center items-center mt-6 2xl:hidden mb-6 ">
                <h1 className="text-3xl font-serif font-bold text-teal-900 text-center mb-6">
                  Notable Family Dignitaries
                </h1>
                <div className="w-full h-full  md:grid-cols-3 grid justify-between gap-6 ">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-500">👑</span>
                      <h3 className="font-semibold text-lg md:text-2xl 2xl:text-lg">
                        Chief Bayo Aremu
                      </h3>
                    </div>
                    <div className="pl-6 space-y-1 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#0F3D2E]" />
                        <p className="text-lg md:text-xl 2xl:text-lg">Great Uncle</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#0F3D2E]" />
                        <p className="text-lg md:text-xl 2xl:text-lg">Double Otunba of Iwo and Shagamu (Late)</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-500">👑</span>
                      <h3 className="font-semibold  text-lg md:text-2xl 2xl:text-lg">Dr. Shola Obada</h3>
                    </div>
                    <div className="pl-6 space-y-1 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#0F3D2E]" />
                        <p className="text-lg md:text-xl 2xl:text-lg">Mother’s cousin</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#0F3D2E]" />
                        <p className="text-lg md:text-xl 2xl:text-lg">Erelu of Ijeshaland</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-500">👑</span>
                      <h3 className="font-semibold  text-lg md:text-2xl 2xl:text-lg">Dr. Bisi Jagun</h3>
                    </div>
                    <div className="pl-6 space-y-1 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#0F3D2E]" />
                        <p className="text-lg md:text-xl 2xl:text-lg">Father’s half-sister</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#0F3D2E]" />
                        <p className="text-lg md:text-xl 2xl:text-lg">Chief of Ikomodu</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-500">👑</span>
                      <h3 className="font-semibold  text-lg md:text-2xl 2xl:text-lg">Dr. Mary Boyd</h3>
                    </div>
                    <div className="pl-6 space-y-1 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#0F3D2E]" />
                        <p className="text-lg md:text-xl 2xl:text-lg">Younger sister</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#0F3D2E]" />
                        <p className="text-lg md:text-xl 2xl:text-lg">Yeye Maiyegun of Orile Igbon</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-500">👑</span>
                      <h3 className="font-semibold text-lg md:text-2xl 2xl:text-lg">
                        Prince Adedotun Jagun
                      </h3>
                    </div>
                    <div className="pl-6 space-y-1 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#0F3D2E]" />
                        <p className="text-lg md:text-xl 2xl:text-lg">Otunba Shobaloju of Orile Igbon</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-500">👑</span>
                      <h3 className="font-semibold  text-lg md:text-2xl 2xl:text-lg">Chief Ayo Aremu</h3>
                    </div>
                    <div className="pl-6 space-y-1 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#0F3D2E]" />
                        <p className="text-lg md:text-xl 2xl:text-lg">Uncle</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#0F3D2E]" />
                        <p className="text-lg md:text-xl 2xl:text-lg">Son of Chief Bayo Aremu</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#0F3D2E]" />
                        <p className="text-lg md:text-xl 2xl:text-lg">Baamofin of Iwo</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-500">👑</span>
                      <h3 className="font-semibold  text-lg md:text-2xl 2xl:text-lg">Justice Aremu</h3>
                    </div>
                    <div className="pl-6 space-y-1 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#0F3D2E]" />
                        <p className="text-lg md:text-xl 2xl:text-lg">Great Uncle</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#0F3D2E]" />
                        <p className="text-lg md:text-xl 2xl:text-lg">Junior brother to Chief Bayo Aremu</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#0F3D2E]" />
                        <p className="text-lg md:text-xl 2xl:text-lg">Baamofin of Ede (Late)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full 2xl:max-w-lg aspect-4/3 relative mb-4">
                <Image
                  src="/images/tree.jpeg"
                  alt="Fidipote Family Tree"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <p className="text-center text-[#0F3D2E] mt-2 ">
                Fidipote Family Tree
              </p>
            </div>
          </div>

          <div className="2xl:w-1/2  bg-[#FFFFFF] p-10  text-[#0F3D2E] hidden 2xl:block">
            <div className="flex flex-col items-center justify-center space-y-4   ">
              <h1 className="text-4xl 2xl:text-5xl font-serif font-bold text-teal-900 mb-6 text-center">
                Family Dignitaries
              </h1>
              <p className="text-base md:text-2xl 2xl:text-2xl lg:px-8 max-w-5xl ">
                The Jagun family legacy extends through respected figures who
                have contributed to leadership, governance, and cultural life
                across Yorubaland.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center mt-6">
              <h1 className="text-base md:text-2xl 2xl:text-2xl font-serif font-bold text-teal-900 text-center">
                Notable Family Dignitaries
              </h1>
              <div className="w-full h-full p-8">
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
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500">👑</span>
                    <h3 className="font-semibold text-lg">
                      Prince Adedotun Jagun
                    </h3>
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
        </div>
      </div>

      <div className="h-fit bg-gray-100 p-4 lg:p-16 animate-fade-slide-in delay-500">
        <div className="2xl:max-w-[85%] max-w-full mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-between ">
            <div className="space-y-4 w-full lg:w-1/2">
              <h2 className="text-2xl md:text-5xl font-serif text-center text-emerald-900 leading-tight">
                Heritage as Responsibility
              </h2>

              <p className="text-base md:text-2xl 2xl:text-2xl text-gray-700 leading-relaxed">
                For Omo’ba Adedotun A. Olateju Jagun, heritage is not symbolic,
                it is lived. It shapes how he leads, serves, and builds for
                future generations. Through enterprise, cultural stewardship,
                and community engagement, he continues a legacy defined by
                purpose, dignity, and progress.
              </p>
            </div>

            <div className="h-100 md:h-180 md:p-2 w-full lg:h-145 lg:w-140.25">
              <Image
                src="/images/heritage5.png"
                alt="Prince seated on throne"
                className="w-full h-full lg:h-full object-cover rounded-2xl"
                width={800}
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
