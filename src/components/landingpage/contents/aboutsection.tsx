"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="relative">
      <div className="bg-white relative overflow-x-hidden">
        <div className="mx-auto px-6 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center justify-center ml-3 ">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="relative "
            >
              <div className="relative flex justify-center items-center w-full py-24 ">
                <div className="absolute w-lg h-128  rounded-full    border-4 border-black/10 [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]    [-webkit-mask-image:linear-gradient(to_bottom,black_65%,transparent_80%)] " />
                <div className="absolute  w-104 h-104   rounded-full   border-3 border-black/10   [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]    [-webkit-mask-image:linear-gradient(to_bottom,black_65%,transparent_80%)]" />
                <div className="relative z-10">
                  <img
                    src="/images/chair.svg"
                    alt="Royal Portrait"
                    className="max-w-[20rem] object-contain"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-black flex flex-col items-center justify-center w-full lg:w-11/12 "
            >
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0F3D2E] mb-12">
                About the Prince
              </h2>

              <p className="font-sans leading-relaxed text-lg mb-6 lg:text-2xl bg--300">
                Prince Otunba Adedotun Adebola Babatunde Jagun is a member of
                the Fidipote Ruling House of Ijebu Ode, Ogun State, with a
                lifelong commitment to practical, people-centered development.
              </p>

              <p className="font-sans leading-relaxed  mb-6 text-lg lg:text-2xl bg--700">
                Guided by heritage and driven by responsibility, his work
                focuses on building sustainable systems that improve access to
                food, land, and opportunity—particularly for the elderly and the
                youth. His approach emphasizes structure, dignity, and long-term
                impact over short-term solutions.
              </p>

              <div className="flex  justify-end w-full ">
                <motion.a
                  href="/about"
                  className="inline-flex items-center font-sans font-medium text-[#D89B2D] hover:text-[#D89B2D] transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  Read Full Story
                  <svg
                    className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
