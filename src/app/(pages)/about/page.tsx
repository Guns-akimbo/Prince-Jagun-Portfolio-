"use client";
import Footer from "@/components/landingpage/contents/footer";
import Header from "@/components/landingpage/navigations /header";
import { motion } from "framer-motion";
import Image from "next/image";
const AboutPage = () => {
  return (
    <>
      <Header />
      <main className="w-full">
        <div className="  bg-[url('/images/frame7.svg')] bg-cover w-[100%] bg-no-repeat   opacity- h-[60vh]"></div>
        <div className="container mx-auto px-6 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
                A Legacy in Motion
              </h2>
              <p className="font-sans text-foreground/80 leading-relaxed mb-4">
                Born in the United States and raised between Nigeria and the
                U.S., Prince Adedotun embodies a global perspective grounded in
                tradition. A proud member of the Fidipote Ruling House of Ijebu
                Ode, his identity is shaped by lineage, responsibility, and
                service to community.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="border-4 border-gold/60 p-2 rounded-lg">
                <div className="bg-gold/10 aspect-[4/3] rounded flex items-center justify-center">
                  <span className="text-gold/60 font-serif text-lg italic">
                    Childhood Photo
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="bg-muted/30 py-16 lg:py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-8 underline decoration-gold/50 underline-offset-8">
                Early Life & Foundation
              </h2>
              <p className="font-sans text-foreground/80 leading-relaxed mb-6">
                Prince Adedotun&apos;s formative years were shaped by movement across
                cultures and communities. Educated at Saint Finbar&apos;s College,
                Akoka, he developed discipline, leadership, and a strong sense
                of service—values reinforced by his mother&apos;s resilience as an
                educator, farmer, and trader.
              </p>
              <p className="font-sans text-foreground/80 leading-relaxed">
                He holds a BSc in Management Information Systems and an MBA from
                the University of Maryland, College Park. His academic training
                sharpened his analytical and strategic approach, shaping a
                development philosophy rooted in structured opportunity rather
                than charity.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Roots of Royal Heritage */}
        <div className="container mx-auto px-6 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="relative">
                <div className="border-4 border-primary/30 p-2 rounded-lg">
                  <div className="bg-primary/5 aspect-[3/4] rounded flex items-center justify-center">
                    <span className="text-primary/40 font-serif text-lg italic text-center px-4">
                      Sculptured Photo
                    </span>
                  </div>
                </div>
                <p className="text-sm text-foreground/60 italic mt-3 text-center">
                  A sculptured of Awujale S. K. Adesona
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6 underline decoration-gold/50 underline-offset-8">
                Roots of Royal Heritage
              </h2>
              <p className="font-sans text-foreground/80 leading-relaxed">
                Prince Adedotun is a direct descendant of Awujale Ademuyewo
                Fidipote, who reigned from 1850 to 1886, and the great-grandson
                of Princess Adekusipe Ademuyewo and Deisi&apos; Otunba Jagun, the
                Generalissimo of Ijebuland. His lineage reflects generations of
                leadership, commerce, and service.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="bg-primary py-16 lg:py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-gold mb-6 underline decoration-gold-light/50 underline-offset-8">
                  Lineage of Leadership
                </h2>
                <p className="font-sans text-primary-foreground/90 leading-relaxed mb-4">
                  The Jagun family legacy extends beyond royalty into enterprise
                  and national contribution. His grandparents, Prince Rabia
                  Adeniji Jagun—a prominent cocoa merchant—and Princess Atheja
                  Jagun, established a foundation of economic leadership and
                  civic responsibility. The family home in Fidipote, Ijebu Ode
                  remains a symbol of continuity and service.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-gold/20 p-3 rounded-xl">
                  <div className="bg-primary-foreground/10 aspect-[4/3] rounded-lg flex items-center justify-center">
                    <span className="text-gold/60 font-serif text-lg italic">
                      Family Heritage Photo
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="py-16 lg:py-14 mb-10 w-full ">
          <div className="grid lg:grid-cols-2 gap-1 items-start bg-red-600 mx-auto ">
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
              <div className="flex flex-col justify-center items-center h-160  bg-amber-600  max-w-4xl">
                <h2 className="font-serif text-3xl md:text-3xl font-bold text-primary mb-8 ">
                  Values & Social Commitment
                </h2>
                <p className="font-sans text-foreground/80 leading-relaxed mb-8">
                  Guided by a humanitarian philosophy, Prince Adedotun believes
                  communities thrive through access to education, skills, food,
                  and opportunity. His work supports youth development,
                  agricultural skills, food security, clean water access, and
                  care for the elderly.
                </p>

                <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary mt-8">
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
      </main>

      <Footer />
    </>
  );
};

export default AboutPage;
