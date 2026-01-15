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
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/images/your-mobile-bg.jpg" 
              alt="Prince Adedotun background"
              fill
              className="object-cover object-center"
              loading="lazy"
              quality={75}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Cc5xmTb2O4WW3AhMvEhIHJ9DzThd+DRJnJaxZJf/Z"
              priority={false}
            />
          </div>
          <div className="grid lg:grid-cols-2 gap-1 items-start w-full lg:w-10/12 mx-auto p-8 mt-25 ">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className=" w-full lg:h-72 "
            >
              <div className="flex flex-col items-center h-full  w-full p-6">
                <h2 className="font-serif text-[32px] lg:text-7xl text-center font-bold mb-8 text-[#0F3D2E]">
                  PRINCE ADEDOTUN OLATEJU JAGUN
                </h2>
                <p className="font-sans text-lg lg:text-3xl leading-relaxed lg:mb-8 text-center">
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
                  <p className="font-sans text-base lg:text-2xl leading-relaxed mb-8">
                    Prince Otunba Adedotun Adebola Babatunde Jagun is a
                    community-focused entrepreneur and cultural leader deeply
                    rooted in Ijebu Ode. His work reflects a lifelong commitment
                    to preserving heritage while building practical, modern
                    solutions that support economic growth, food security, and
                    community well-being.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="py-16 lg:py-14 w-full bg-white overflow-x-hidden ">
          <div className="grid lg:grid-cols-2 gap-1 items-start w-full lg:w-10/12 mx-auto p-4 lg:p-8 ">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className=" w-full h-full"
            >
              <div className="flex flex-col justify-center items-center h-full w-full md:p-6">
                <h2 className="font-serif text-3xl text-center lg:text-6xl font-bold text-[#0F3D2E] mb-8  ">
                  A Legacy in Motion
                </h2>
                <p className="font-sans text-lg lg:text-3xl leading-relaxed mb-8">
                  Born in the United States and raised between Nigeria and the
                  U.S., Prince Adedotun embodies a global perspective grounded
                  in tradition. A proud member of the Fidipote Ruling House of
                  Ijebu Ode, his identity is shaped by lineage, responsibility,
                  and service to community.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className=" aspect-auto rounded flex items-center justify-center">
                <div className="h-120 w-full lg:h-160 lg:w-135.25 lg:p-0 p-2">
                  <Image
                    src="/images/about2.jpg"
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
          className="w-full justify-center flex "
        >
          <div className="flex flex-col justify-center items-center h-fit w-full lg:w-[85%] py-6 md:px-16 px-4">
            <h2 className="font-serif text-center text-3xl lg:text-6xl font-bold text-[#0F3D2E] mb-6 ">
              Early Life & Foundation
            </h2>
            <p className="font-sans text-base lg:text-2xl leading-relaxed">
              Prince Adedotun’s formative years were shaped by movement across
              cultures and communities. Educated at Saint Finbar’s College,
              Akoka, he developed discipline, leadership, and a strong sense of
              service—values reinforced by his mother’s resilience as an
              educator, farmer, and trader.
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
        <div className="mx-auto w-full lg:max-w-[85%] py-0 lg:py-6 lg:px-16 px-4 ">
          <div className="flex lg:flex-row flex-col w-full justify-center items-center gap-8 lg:gap-4  mb-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 h-160 flex flex-col justify-center items-start text-center"
            >
              <div className="h-120 w-full lg:h-140 lg:w-135.25 ">
                <Image
                  src="/images/about3.png"
                  alt="Prince seated on throne"
                  className="w-full h-full lg:h-full object-cover  rounded-2xl "
                  width={800}
                  height={100}
                  priority
                />
                <h2 className="font-sans text-lg md:text-xl font-normal mt-4">
                  A sculptured of Awùjalès S. K. Adetona{" "}
                </h2>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className=" w-full lg:w-1/2 lg:h-160 "
            >
              <div className="flex flex-col justify-center items-center h-full w-full">
                <h2 className="font-serif text-center text-3xl md:text-5xl font-bold mb-6 text-[#0F3D2E]">
                  Roots of Royal Heritage
                </h2>
                <p className="font-sans text-lg lg:text-2xl leading-relaxed lg:mb-0 mb-8">
                  Prince Adedotun is a direct descendant of Awujale Ademuyewo
                  Fidipote, who reigned from 1850 to 1886, and the
                  great-grandson of Princess Adefowope Ademuyewo and ‘Dada’
                  Olateju Jagun, the Generalissimo of Ijebuland. His lineage
                  reflects generations of leadership, commerce, and service.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="py-16 lg:py-14 w-full bg-[#0F3D2E] p-4 lg:p-0">
          <div className="grid lg:grid-cols-2 gap-1 items-start justify-between bg-white  w-full lg:w-10/12 mx-auto p-8 shadow-lg lg:h-160">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className=" w-full h-full"
            >
              <div className="flex flex-col justify-center items-center h-full w-full p-0 lg:p-6">
                <h2 className="text-3xl text-center font-serif lg:text-5xl font-bold text-[#0F3D2E] mb-8 ">
                  Lineage of Leadership
                </h2>
                <p className="font-sans text-lg lg:text-2xl text-left leading-relaxed mb-8">
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
                    src="/images/about-oba.jpg"
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
        <div className=" mx-auto py-6 lg:py-14 bg-red00  w-full  lg:w-10/12">
          <div className="grid lg:grid-cols-2 gap-1 items-start w-full justify-between lg:h-160">
            <div className="p-4 lg:hidden">
              <h2 className="text-3xl text-center font-serif lg:text-4xl font-bold text-[#0F3D2E] mb-8 ">
                Values & Social Commitment
              </h2>
              <p className="font-sans text-lg lg:text-2xl leading-relaxed ">
                Guided by a humanitarian philosophy, Prince Adedotun believes
                communities thrive through access to education, skills, food,
                and opportunity. His work supports youth development,
                agricultural skills, food security, clean water access, and care
                for the elderly.
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
                <div className="h-120 w-full lg:h-150 lg:w-125.25">
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
                  <h2 className="text-2xl  font-serif lg:text-4xl font-bold text-[#0F3D2E] mb-8 text-center">
                    Values & Social Commitment
                  </h2>
                  <p className="font-sans text-lg lg:text-2xl leading-relaxed mb-8">
                    Guided by a humanitarian philosophy, Prince Adedotun
                    believes communities thrive through access to education,
                    skills, food, and opportunity. His work supports youth
                    development, agricultural skills, food security, clean water
                    access, and care for the elderly.
                  </p>
                </div>

                <h2 className="text-3xl text-center font-serif lg:text-4xl font-bold text-[#0F3D2E] mb-8  ">
                  Continuing The Legacy
                </h2>
                <p className="font-sans text-lg lg:text-2xl leading-relaxed order-2 lg:order-1">
                  Prince Otunba Adedotun Adebola Babatunde Jagun represents a
                  balance of heritage and progress. His journey reflects respect
                  for tradition, guided by a clear vision for sustainable
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
