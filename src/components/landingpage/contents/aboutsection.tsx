"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="relative">
      <div className="bg-white relative">
        <div className="container mx-auto px-6 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center ml-3 ">
            {/* Throne Portrait */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4  bg-[#0F3D2E] w-full max-w-112.5 rounded-2xl transform -rotate-2" />
              <div className="relative w-full max-w-115 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/aboutimage.jpeg"
                  alt="Prince seated on throne"
                  className="w-full h-150 object-cover rounded-2xl"
                  width={700}
                  height={100}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-black"
            >
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0F3D2E] mb-6">
                About the Prince
              </h2>

              <p className="font-sans leading-relaxed text-black/90 text-lg mb-6 lg:text-2xl">
                Prince Otunba Adedotun Adebola Babatunde Jagun is a member of
                the Fidipote Ruling House of Ijebu Ode, Ogun State, with a
                lifelong commitment to practical, people-centered development.
              </p>

              <p className="font-sans leading-relaxed text-black/90 mb-8 text-lg lg:text-2xl">
                Guided by heritage and driven by responsibility, his work
                focuses on building sustainable systems that improve access to
                food, land, and opportunity—particularly for the elderly and the
                youth. His approach emphasizes structure, dignity, and long-term
                impact over short-term solutions.
              </p>

              <motion.a
                href="#story"
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
