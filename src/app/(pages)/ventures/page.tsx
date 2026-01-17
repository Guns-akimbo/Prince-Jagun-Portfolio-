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
        <div className="relative max-w-7xl text-center space-y-8 h-full flex flex-col mt-2 lg:mt-10 justify-center items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif text-[#d4a441] mb-8"
          >
            Ventures
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-3xl max-w-3xl mx-auto mb-12"
          >
            Building sustainable enterprises rooted in heritage, responsibility,
            and community impact.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base md:text-2xl text-white/80 w-full mx-auto"
          >
            Omo’ba Adedotun A. Olateju-Jagun oversees ventures that address real
            needs—food security, land stewardship, and responsible
            development—while creating long-term value for communities and
            stakeholders.
          </motion.p>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="bg-[#D89B2D] w-full h-80 flex flex-col items-center justify-center "
      >
        <div className="max-w-[97%] h-full mx-auto  flex flex-col items-center justify-center bg-[#F8F8F8]">
          <div className="w-full p-1 lg:w-2/3 gap-4 flex flex-col  items-center justify-center ">
            <h2 className="text-2xl md:text-4xl font-serif mb-4 text-center">
              Enterprise with Purpose
            </h2>
            <p className="text-gray-700 leading-relaxed text-base p-2  md:text-2xl 2xl:text-2xltext-center ">
              Omo’ba Adedotun A. Olateju-Jagun approach to enterprise is guided
              by sustainability, responsibility, and long-term thinking. Each
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
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className=""
      >
        <div className="2xl:max-w-[95%] w-full mx-auto flex flex-col lg:flex-row gap-y-6  md:gap-x-6 items-center ">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 "
          >
            <div className="w-full 2xl:w-10/12 ">
              <h3 className="lg:text-5xl md:text-4xl text-2xl text-center 2xl:text-left font-serif mb-8">
                Fidipote Food Market
              </h3>
              <p className="text-gray-700 mb-4 text-base md:text-2xl 2xl:text-2xl">
                Fidipote Food Market focuses on farming, food sourcing, and the
                distribution of fresh agricultural produce to local and
                international markets. The venture is built on a simple
                principle: nutritious food should be accessible, affordable, and
                sustainably produced.
              </p>
              <p className="text-gray-700 mb-6 text-base md:text-2xl 2xl:text-2xl">
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
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className=" rounded-xl lg:h-180 lg:w-450  w-full h-140 p-2 mb-8 lg:mb-0 "
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
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className=""
      >
        <div className="2xl:max-w-[95%] p-4 mx-auto grid lg:grid-cols-2 grid-cols-1 gap-y-6 gap-x-6 items-center mb-8">
          <div className="lg:hidden">
            <h3 className="xl:text-5xl md:text-4xl text-3xl text-center 2xl:text-left font-serif mb-8">
              Fidipote Royalty Limited
            </h3>
            <p className="text-gray-700 mb-4 text-base md:text-2xl 2xl:text-2xl">
              Fidipote Royalties is the real estate and property development arm
              under Omo’ba Adedotun A. Olateju-Jagun  leadership. The venture focuses on
              land management, residential development, and community-oriented
              projects that respect cultural heritage while embracing modern
              planning standards.
            </p>
            <p className="text-gray-700 mb-6 text-base md:text-2xl 2xl:text-2xl">
              Through a long-term approach to value creation, Fidipote Royalties
              aligns traditional land ownership with sustainable real estate
              practices that benefit families, investors, and host communities.
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
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 lg:order-1 rounded-xl lg:h-170 2xl:h-180 lg:w-125.5 2xl:w-170 w-full md:h-120 h-100  "
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
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.4 }}
            className="order-1 md:order-2 pl-4 "
          >
            <div className="w-full 2xl:w-11/12 hidden lg:block">
              <h3 className="lg:text-5xl md:text-4xl text-3xl text-center 2xl:text-left font-serif mb-8">
                Fidipote Royalty Limited
              </h3>
              <p className="text-gray-700 mb-4 text-base md:text-2xl 2xl:text-2xl">
                Fidipote Royalties is the real estate and property development
                arm under Omo’ba Adedotun A. Olateju-Jagun leadership. The venture focuses
                on land management, residential development, and
                community-oriented projects that respect cultural heritage while
                embracing modern planning standards.
              </p>
              <p className="text-gray-700 mb-6 text-base md:text-2xl 2xl:text-2xl">
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

        <div className=" mx-auto py-6 lg:py-14 p-4 w-full  xl:w-10/12  ">
          <div className="grid lg:grid-cols-2 gap-1 items-start w-full justify-between lg:h-160">
            <div className="p-4 lg:hidden">
              <h2 className="text-2xl md:text-4xl text-center font-serif 2xl:text-4xl font-bold text-[#0F3D2E] mb-8 ">
                Building Beyond Business
              </h2>
              <p className="font-sans text-base md:text-2xl 2xl:text-2xl leading-relaxed ">
                Beyond commercial success, his ventures are structured to
                support broader community development, strengthening food
                security, encouraging responsible land use, and creating
                opportunities that endure across generations.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className=" w-full lg:h-160 items-center justify-center "
            >
              <div className="flex flex-col justify-center items-center h-full gap-3 w-full p-4 lg:p-6  ">
                <div className="hidden lg:flex lg:flex-col ">
                  <h2 className="text-2xl md:text-4xl text-center font-serif lg:text-4xl font-bold text-[#0F3D2E] mb-8  ">
                    Building Beyond Businesss
                  </h2>
                  <p className="font-sans text-base md:text-2xl 2xl:text-2xl leading-relaxed ">
                    Beyond commercial success, his ventures are structured to
                    support broader community development, strengthening food
                    security, encouraging responsible land use, and creating
                    opportunities that endure across generations.
                  </p>
                  <p className="font-sans text-base md:text-2xl 2xl:text-2xl leading-relaxed order-2 lg:order-1 mt-4">
                    As his ventures continue to grow, Omo’ba Adedotun A. Olateju-Jagun  remains
                    focused on innovation, sustainability, and service—ensuring
                    that enterprise remains a tool for empowerment and long-term
                    progress.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:h-160 "
            >
              <div className="aspect-auto rounded flex justify-end order-2 lg:p-0">
                <div className=" w-full lg:h-155 lg:w-125.25">
                  <Image
                    src="/images/frame9.jpg"
                    alt="Prince seated on throne"
                    className="w-full h-full  object-contain rounded-2xl"
                    width={800}
                    height={100}
                    priority
                  />
                </div>
              </div>
            </motion.div>

            <p className="font-sans text-base md:text-2xl 2xl:text-2xlleading-relaxed order-2 lg:order-1 p-4 lg:hidden">
              As his ventures continue to grow, Omo’ba Adedotun A. Olateju-Jagun remains focused
              on innovation, sustainability, and service—ensuring that
              enterprise remains a tool for empowerment and long-term progress.
            </p>
          </div>
        </div>
      </motion.section>
      <Footer />
    </main>
  );
}
