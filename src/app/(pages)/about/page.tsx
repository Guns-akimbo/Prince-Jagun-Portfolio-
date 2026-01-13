"use client";
import Footer from "@/components/landingpage/contents/footer";
import Header from "@/components/landingpage/navigations /header";
import { motion } from "framer-motion";
import Image from "next/image";
const AboutPage = () => {
  return (
    <>
      <Header />
      <div className="  bg-[url('/images/frame7.svg')] bg-cover w-[100%] bg-no-repeat   opacity- h-[60vh]"></div>
      <div className="container mx-auto py-16 lg:py-14 mb-10 max-w-9xl bg-amber-700">
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
            <div className="flex flex-col justify-center items-center h-160 w-full">
              <h2 className="font-serif text-3xl md:text-3xl font-bold text-primary mb-8 ">
                Values & Social Commitment
              </h2>
              <p className="font-sans text-foreground/80 leading-relaxed mb-8">
                Guided by a humanitarian philosophy, Prince Adedotun believes
                communities thrive through access to education, skills, food,
                and opportunity. His work supports youth development,
                agricultural skills, food security, clean water access, and care
                for the elderly.
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

      <Footer />
    </>
  );
};

export default AboutPage;
