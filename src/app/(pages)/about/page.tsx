"use client";
import Footer from "@/components/landingpage/contents/footer";
import Header from "@/components/landingpage/navigations /header";
import { motion } from "framer-motion";
import Image from "next/image";
const AboutPage = () => {
  return (
    <>
      <Header />
      <main className="w-full overflow-x-hidden">
        <div className="mobile-bg relative bg-cover w-full flex items-center bg-no-repeat opacity-  h-100vh lg:h-[70vh] lg:pt-0 overflow-x-hidden ">
          <div className="grid 2xl:grid-cols-2 gap-1 items-start w-full 2xl:w-10/12 mx-auto p-4 mt-16  ">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className=" w-full lg:h-72 "
            >
              <div className="flex flex-col items-center h-full space-y-4 w-full p-6 mb-">
                <h2 className="font-serif text-3xl md:text-5xl lg:text-7xl text-center font-bold  text-[#0F3D2E]">
                  OMO’BA ADEDOTUN A. OLATEJU-JAGUN
                </h2>
                <p className="font-sans text-base md:text-2xl lg:text-3xl leading-relaxed md:mb-0 mb-4 text-center">
                  Omo’ba Afidipotemole ti Ijebu-Ode
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-2 flex items-center justify-center h-72 ">
                <div className="rounded flex items-center justify-center">
                  <p className="font-sans text-base md:text-2xl lg:text-2xl leading-relaxed mb-8">
                    Omo’ba Adedotun A. Olateju-Jagun is a community-focused
                    entrepreneur and cultural leader deeply rooted in Ijebu Ode.
                    His work reflects a lifelong commitment to preserving
                    heritage while building practical, modern solutions that
                    support economic growth, food security, and community
                    well-being.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="py-4 2xl:py-14 w-full bg-white overflow-x-hidden ">
          <div className="grid 2xl:grid-cols-2 gap-1 items-start w-full 2xl:w-10/12 mx-auto p-4 lg:p-8  ">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className=" w-full h-full"
            >
              <div className="flex flex-col justify-center items-center h-full w-full 2xl:p-6">
                <h2 className="font-serif text-2xl text-center md:text-4xl 2xl:text-6xl font-bold text-[#0F3D2E] mb-8  ">
                  A Legacy in Motion
                </h2>
                <p className="font-sans text-base md:text-2xl 2xl:text-2xl leading-relaxed mb-8">
                  Born in the United States and raised between Nigeria and the
                  U.S., Omo’ba Adedotun A. Olateju-Jagun embodies a global
                  perspective grounded in tradition. A proud member of the
                  Fidipote Ruling House of Ijebu Ode, his identity is shaped by
                  lineage, responsibility, and service to community.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className=" aspect-auto rounded flex items-center justify-center">
                <div className="h-120 w-full md:h-270 2xl:h-160 2xl:w-135.25 lg:p-0 p-2">
                  <Image
                    src="/images/boo.jpeg"
                    alt="Prince seated on throne"
                    className="w-full h-full lg:h-full object-cover rounded-2xl"
                    width={800}
                    height={100}
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full justify-center flex md:p-4 2xl:p-0 "
        >
          <div className="flex flex-col justify-center items-center h-fit w-full 2xl:w-[85%] py-6 2xl:px-16 px-4">
            <h2 className="font-serif text-center text-2xl md:text-4xl 2xl:text-6xl font-bold text-[#0F3D2E] mb-6 ">
              Early Life & Foundation
            </h2>
            <p className="font-sans text-base md:text-2xl 2xl:text-2xl leading-relaxed">
              Omo’ba Adedotun A. Olateju-Jagun formative years were shaped by
              movement across cultures and communities. Educated at Saint
              Finbar’s College, Akoka, he developed discipline, leadership, and
              a strong sense of service—values reinforced by his mother’s
              resilience as an educator, farmer, and trader.
              <br />
              <br />
              He holds a BSc in Management Information Systems and an MBA from
              the University of Maryland, College Park. His academic training
              sharpened his analytical and strategic approach, shaping a
              development philosophy rooted in structured opportunity rather
              than charity.
            </p>
          </div>
        </motion.div>
        <div className="mx-auto w-full 2xl:max-w-[85%] py-0 2xl:py-6 2xl:px-16 px-4  ">
          <div className="flex 2xl:flex-row flex-col w-full justify-center items-center gap-8 2xl:gap-4  mb-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="w-full 2xl:w-1/2 h-140 md:h-270 flex flex-col justify-center items-start text-center"
            >
              <div className="h-120 w-full md:h-260 md:w-full 2xl:h-140 2xl:w-135.25 ">
                <Image
                  src="/images/about3.png"
                  alt="Prince seated on throne"
                  className="w-full h-full lg:h-full object-cover  rounded-2xl "
                  width={800}
                  height={100}
                  priority
                />
                <h2 className="font-sans text-lg md:text-2xl font-normal mt-4">
                  A sculptured of Awùjalès S. K. Adetona{" "}
                </h2>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className=" w-full 2xl:w-1/2 2xl:h-160 md:mt-14 "
            >
              <div className="flex flex-col justify-center items-center h-full w-full">
                <h2 className="font-serif text-center text-2xl md:text-4xl font-bold mb-6 text-[#0F3D2E]">
                  Roots of Royal Heritage
                </h2>
                <p className="font-sans text-base md:text-2xl 2xl:text-2xl leading-relaxed lg:mb-0 mb-8">
                  Omo’ba Adedotun A. Olateju-Jagun is a direct descendant of
                  Awujale Ademuyewo Fidipote, who reigned from 1850 to 1886, and
                  the great-grandson of Princess Adefowope Ademuyewo and ‘Dada’
                  Olateju Jagun, the Generalissimo of Ijebuland. His lineage
                  reflects generations of leadership, commerce, and service.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="py-16 2xl:py-14 w-full bg-[#0F3D2E] p-4 2xl:p-0">
          <div className="grid lg:grid-cols-2 gap-1 items-start justify-between bg-white  w-full 2xl:w-10/12 mx-auto md:p-4 p-2 2xl:p-8 shadow-lg lg:h-160">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className=" w-full h-full "
            >
              <div className="flex flex-col justify-center items-center h-full w-full p-0 lg:p-6">
                <h2 className="text-2xl text-center font-serif  md:text-4xl  2xl:text-5xl font-bold text-[#0F3D2E] mb-8 ">
                  Lineage of Leadership
                </h2>
                <p className="font-sans text-base md:text-2xl 2xl:text-2xltext-left leading-relaxed mb-8">
                  The Jagun family legacy extends beyond royalty into enterprise
                  and national contribution. His grandparents, Prince Rabiu
                  Adeniji Jagun—a prominent cocoa merchant—and Princess Alhaja
                  Jagun, established a foundation of economic leadership and
                  civic responsibility. The family home in Fidipote, Ijebu Ode
                  remains a symbol of continuity and service.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className=" aspect-auto rounded w-full flex items-center justify-end h-full ">
                <div className="h-full w-full flex items-center justify-end">
                  <Image
                    src="/images/grandpa.jpg"
                    alt="Prince seated on throne"
                    className="w-full h-full object-cover rounded-2xl lg:h-148 mb-2 lg:w-135.25"
                    width={800}
                    height={100}
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className=" mx-auto p-4 2xl:py-14  w-full  2xl:w-10/12">
          <div className="grid lg:grid-cols-2 gap-1 items-start w-full justify-center 2xl:h-160 ">
            <div className="p-4 lg:hidden">
              <h2 className="text-2xl text-center font-serif md:text-4xl 2xl:text-4xl font-bold text-[#0F3D2E] mb-8 ">
                Values & Social Commitment
              </h2>
              <p className="font-sans text-base md:text-2xl 2xl:text-2xl leading-relaxed ">
                Guided by a humanitarian philosophy, Omo’ba Adedotun A.
                Olateju-Jagun believes communities thrive through access to
                education, skills, food, and opportunity. His work supports
                youth development, agricultural skills, food security, clean
                water access, and care for the elderly.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:h-160 "
            >
              <div className="aspect-auto rounded flex items-start order-2 p-4 lg:p-0">
                <div className="h-120 w-full md:h-250 lg:h-150 lg:w-125.25">
                  <Image
                    src="/images/frame4.jpg"
                    alt="Prince seated on throne"
                    className="w-full h-full lg:h-full object-cover rounded-2xl"
                    width={800}
                    height={100}
                    priority
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className=" w-full lg:h-160 items-center justify-center "
            >
              <div className="flex flex-col justify-center items-center h-full gap-3 w-full p-4 lg:p-6  ">
                <div className="hidden lg:flex lg:flex-col ">
                  <h2 className="text-2xl  font-serif  md:text-4xl  2xl:text-4xl font-bold text-[#0F3D2E] mb-8 text-center">
                    Values & Social Commitment
                  </h2>
                  <p className="font-sans text-base md:text-2xl 2xl:text-2xlleading-relaxed mb-8">
                    Guided by a humanitarian philosophy, Omo’ba Adedotun A.
                    Olateju-Jagun believes communities thrive through access to
                    education, skills, food, and opportunity. His work supports
                    youth development, agricultural skills, food security, clean
                    water access, and care for the elderly.
                  </p>
                </div>

                <h2 className="text-3xl text-center m font-serif md:text-4xl  2xl:text-4xlfont-bold text-[#0F3D2E] ">
                  Continuing The Legacy
                </h2>
                <p className="font-sans text-base md:text-2xl 2xl:text-2xl leading-relaxed order-2 lg:order-1">
                  Omo’ba Adedotun A. Olateju-Jagun represents a balance of
                  heritage and progress. His journey reflects respect for
                  tradition, guided by a clear vision for sustainable
                  development and empowered communities.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default AboutPage;
