"use client";
import Footer from "@/components/landingpage/contents/footer";
import Header from "@/components/landingpage/navigations /header";
import { motion } from "framer-motion";
import Image from "next/image";
const AboutPage = () => {
  return (
    <>
      <Header />
      <div className="  bg-[url('/images/frame7.svg')] bg-cover w-full flex items-center bg-no-repeat opacity- h-[60vh]">
        <div className="grid lg:grid-cols-2 gap-1 items-start w-10/12 mx-auto p-8 mt-25 ">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className=" w-full h-full"
          >
            <div className="flex flex-col  items-center h-full w-full p-6">
              <h2 className="font-serif text-xl md:text-4xl text-center font-bold mb-8 text-[#0F3D2E]">
                PRINCE ADEDOTUN OLATEJU JAGUN
              </h2>
              <p className="font-sans text-foreground/80 leading-relaxed mb-8">
                Omo’ba Afidipotemole ti Ijebu-Ode
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-2">
              <div className=" aspect-auto rounded flex items-center justify-center">
                <p className="font-sans text-foreground/80 leading-relaxed mb-8">
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
      <div className="py-16 lg:py-14 w-full bg-white">
        <div className="grid lg:grid-cols-2 gap-1 items-start w-10/12 mx-auto md:p-8 ">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className=" w-full h-full"
          >
            <div className="flex flex-col justify-center items-center h-full w-full md:p-6">
              <h2 className="font-serif text-xl md:text-3xl font-bold text-primary mb-8 ">
                A Legacy in Motion
              </h2>
              <p className="font-sans text-foreground/80 leading-relaxed mb-8">
                Born in the United States and raised between Nigeria and the
                U.S., Prince Adedotun embodies a global perspective grounded in
                tradition. A proud member of the Fidipote Ruling House of Ijebu
                Ode, his identity is shaped by lineage, responsibility, and
                service to community.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-2">
              <div className=" aspect-auto rounded flex items-center justify-center">
                <div className="h-120 w-full lg:h-160 lg:w-135.25">
                  <Image
                    src="/images/about2.jpg"
                    alt="Prince seated on throne"
                    className="w-full h-full lg:h-full object-cover rounded-2xl"
                    width={800}
                    height={100}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full justify-center flex"
      >
        <div className="flex flex-col justify-center items-center h-fit w-10/12  py-6 md:px-16 px-4">
          <h2 className="font-serif text-xl md:text-3xl font-bold text-primary mb-6 ">
            Early Life & Foundation
          </h2>
          <p className="font-sans text-foreground/80 leading-relaxed">
            Prince Adedotun’s formative years were shaped by movement across
            cultures and communities. Educated at Saint Finbar’s College, Akoka,
            he developed discipline, leadership, and a strong sense of
            service—values reinforced by his mother’s resilience as an educator,
            farmer, and trader.
            <br />
            <br />
            He holds a BSc in Management Information Systems and an MBA from the
            University of Maryland, College Park. His academic training
            sharpened his analytical and strategic approach, shaping a
            development philosophy rooted in structured opportunity rather than
            charity.
          </p>
        </div>
      </motion.div>
      <div className="container mx-auto py-16 lg:py-14 max-w-9xl ">
        <div className="grid lg:grid-cols-2 gap-1 items-start  ">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-2">
              <div className=" aspect-auto rounded flex items-center flex-col justify-center">
                <div className="h-120 w-full lg:h-160 lg:w-135.25">
                  <Image
                    src="/images/about3.png"
                    alt="Prince seated on throne"
                    className="w-full h-full lg:h-full object-cover rounded-2xl "
                    width={800}
                    height={100}
                  />
                </div>
                <h2 className="font-serif text-base md:text-xl font-normal text-primary mt-2">
                  A sculptured of Awùjalès S. K. Adetona{" "}
                </h2>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className=" w-full h-full"
          >
            <div className="flex flex-col justify-center items-center h-full w-full p-6">
              <h2 className="font-serif text-xl md:text-3xl font-bold text-primary mb-6 ">
                Roots of Royal Heritage
              </h2>
              <p className="font-sans text-foreground/80 leading-relaxed">
                Prince Adedotun is a direct descendant of Awujale Ademuyewo
                Fidipote, who reigned from 1850 to 1886, and the great-grandson
                of Princess Adefowope Ademuyewo and ‘Dada’ Olateju Jagun, the
                Generalissimo of Ijebuland. His lineage reflects generations of
                leadership, commerce, and service.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="py-16 lg:py-14 w-full bg-[#0F3D2E]">
        <div className="grid lg:grid-cols-2 gap-1 items-start bg-white w-10/12 mx-auto p-8 shadow-lg">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className=" w-full h-full"
          >
            <div className="flex flex-col justify-center items-center h-full w-full p-6">
              <h2 className="font-serif text-xl md:text-3xl font-bold text-primary mb-8 ">
                Lineage of Leadership
              </h2>
              <p className="font-sans text-foreground/80 text-center leading-relaxed mb-8">
                The Jagun family legacy extends beyond royalty into enterprise
                and national contribution. His grandparents, Prince Rabiu
                Adeniji Jagun—a prominent cocoa merchant—and Princess Alhaja
                Jagun, established a foundation of economic leadership and civic
                responsibility. The family home in Fidipote, Ijebu Ode remains a
                symbol of continuity and service.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-2">
              <div className=" aspect-auto rounded flex items-center justify-center">
                <div className="h-120 w-full lg:h-160 lg:w-135.25">
                  <Image
                    src="/images/about-oba.jpg"
                    alt="Prince seated on throne"
                    className="w-full h-full lg:h-full object-cover rounded-2xl"
                    width={800}
                    height={100}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="container mx-auto py-16 lg:py-14 max-w-9xl ">
        <div className="grid lg:grid-cols-2 gap-1 items-start  ">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-2">
              <div className=" aspect-auto rounded flex items-center justify-center">
                <div className="h-120 w-full lg:h-160 lg:w-135.25">
                  <Image
                    src="/images/frame4.jpg"
                    alt="Prince seated on throne"
                    className="w-full h-full lg:h-full object-cover rounded-2xl"
                    width={800}
                    height={100}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-col justify-center items-center h-fit w-full p-6">
              <h2 className="font-serif text-xl md:text-3xl font-bold text-primary mb-8 ">
                Values & Social Commitment
              </h2>
              <p className="font-sans text-foreground/80 leading-relaxed mb-8">
                Guided by a humanitarian philosophy, Prince Adedotun believes
                communities thrive through access to education, skills, food,
                and opportunity. His work supports youth development,
                agricultural skills, food security, clean water access, and care
                for the elderly.
              </p>

              <h3 className="font-serif text-xl md:text-3xl font-bold text-primary mb-8">
                Continuing The Legacy
              </h3>
              <p className="font-sans text-foreground/80 leading-relaxed">
                Prince Otunba Adedotun Adebola Babatunde Jagun represents a
                balance of heritage and progress. His journey reflects respect
                for tradition, guided by a clear vision for sustainable
                development and empowered communities.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutPage;
