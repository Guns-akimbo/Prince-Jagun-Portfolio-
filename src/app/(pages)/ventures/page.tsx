"use client";
import Footer from "@/components/landingpage/contents/footer";
import Header from "@/components/landingpage/navigations /header";
import Image from "next/image";
import { motion } from "framer-motion";

export default function VenturesSection() {
  return (
    <main className="w-full text-[#143b2f] pt-20 overflow-x-hidden">
      <Header />
      <section className="relative bg-[#123f35] text-white h-135 flex flex-col justify-center items-center px-6">
        <div className="absolute inset-0 bg-[url('/images/stock.jpg')] bg-cover bg-no-repeat bg-center opacity-" />
        <div className="relative max-w-5xl text-center space-y-8 h-full flex flex-col mt-2 lg:mt-10 justify-center items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.7 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif text-[#d4a441] mb-8"
          >
            Ventures
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.7 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-3xl max-w-3xl mx-auto mb-12"
          >
            Building sustainable enterprises rooted in heritage, responsibility,
            and community impact.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.7 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base md:text-lg text-white/80 max-w-4xl mx-auto"
          >
            Prince Otunba Adedotun Adebola Babatunde Jagun oversees ventures
            that address real needs—food security, land stewardship, and
            responsible development—while creating long-term value for
            communities and stakeholders.
          </motion.p>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.7 }}
        transition={{ duration: 0.8 }}
        className="bg-[#D89B2D] w-full h-70 flex flex-col items-center justify-center "
      >
        <div className="max-w-[97%] h-full mx-auto  flex flex-col items-center justify-center bg-[#F8F8F8]">
          <div className="w-full lg:w-2/3 gap-4 flex flex-col  items-center justify-center ">
            <h2 className="text-2xl md:text-4xl font-serif mb-4 text-center">
              Enterprise with Purpose
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm lg:text-xl text-center ">
              Prince Adedotun’s approach to enterprise is guided by
              sustainability, responsibility, and long-term thinking. Each
              venture under his stewardship is designed to serve people, respect
              culture, and support economic growth—balancing tradition with
              modern business practices.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.7 }}
        transition={{ duration: 0.8 }}
        className=""
      >
        <div className="md:max-w-[95%] w-full mx-auto flex flex-col lg:flex-row gap-y-6 md:gap-x-6 items-center bg--500">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.7 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 "
          >
            <div className="w-full lg:w-10/12">
              <h3 className="md:text-6xl text-3xl font-serif mb-8">
                Fidipote Food Market
              </h3>
              <p className="text-gray-700 mb-4 text-sm md:text-xl">
                Fidipote Food Market focuses on farming, food sourcing, and the
                distribution of fresh agricultural produce to local and
                international markets. The venture is built on a simple
                principle: nutritious food should be accessible, affordable, and
                sustainably produced.
              </p>
              <p className="text-gray-700 mb-6 text-sm md:text-xl">
                By working closely with farmers and streamlining supply chains,
                Fidipote Food Market supports local agriculture while improving
                food availability for households and communities.
              </p>
              <a
                href="http://fidipotefoodmarket.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d4a441] font-medium underline hover:text-[#d4a441]/80 transition-colors cursor-pointer"
              >
                Explore Fidipote Food Market
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.7 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className=" rounded-xl md:h-180 md:w-270 w-full h-100 p-2 "
          >
            <Image
              src="/images/frame5.jpg"
              alt="Fidipote Food Market"
              className="rounded-lg w-full h-full"
              width={800}
              height={400}
            />
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.7 }}
        transition={{ duration: 0.8 }}
        className=""
      >
        <div className="max-w-[95%] mx-auto grid md:grid-cols-2 grid-cols-1 gap-y-6 gap-x-6 items-center mb-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.7 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 md:order-1 rounded-xl md:h-180 md:w-170 w-full h-100 p-2 "
          >
            <Image
              src="/images/frame6.jpg"
              alt="Fidipote Royalty Limited"
              className="rounded-lg w-full h-full"
              width={800}
              height={400}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.7 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.4 }}
            className="order-1 md:order-2 pl-4 "
          >
            <div className="w-11/12">
              <h3 className="md:text-5xl text-2xl font-serif mb-8">
                Fidipote Royalty Limited
              </h3>
              <p className="text-gray-700 mb-4 text-sm md:text-base">
                Fidipote Royalties is the real estate and property development
                arm under Prince Adedotun&#39;s leadership. The venture focuses
                on land management, residential development, and
                community-oriented projects that respect cultural heritage while
                embracing modern planning standards.
              </p>
              <p className="text-gray-700 mb-6 text-sm md:text-base">
                Through a long-term approach to value creation, Fidipote
                Royalties aligns traditional land ownership with sustainable
                real estate practices that benefit families, investors, and host
                communities.
              </p>
              <a
                href="https://fidipote.com/"
                className="text-[#d4a441] font-medium underline hover:underline "
                target="_blank"
                rel="noopener noreferrer"
              >
                View Fidipote Royalty
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>
      <Footer />
    </main>
  );
}
