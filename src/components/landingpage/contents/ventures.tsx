"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Ventures = () => {
  return (
    <main className="w-full bg-[#F8F8F8] px-6 md:px-8 py-6 overflow-x-hidden">
      <div className="max-w-410 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl 2xl:text-6xl font-serif font-bold text-[#0F3D2E] text-center mb-8"
        >
          Ventures
        </motion.h2>

        <motion.section
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="w-full flex flex-col 2xl:flex-row justify-between items-center lg:mb-10 2xl:mb-0"
        >
          <div className="w-full 2xl:w-1/2 flex flex-col justify-center items-center mb-8 lg:mb-0 ">
            <div className="space-y-6 2xl:space-y-10 md:px-0 px-4 max-w-3xl">
              <h1 className="text-2xl font-serif md:text-3xl lg:text-4xl 2xl:text-[55px] text-center text-[#0F3D2E]">
                Fidipote Food Market
              </h1>
              <p className="text-base md:text-2xl 2xl:text-2xlleading-relaxed font-sans">
                Fidipote Food Market is an agricultural and food distribution
                venture focused on farming, sourcing, and supplying fresh farm
                produce to local and international markets at accessible
                prices—supporting farmers while promoting food security.
              </p>
            </div>
          </div>
          <div className="w-full 2xl:w-1/2 flex justify-end items-center p-4 2xl:p-8  mb-12 lg:mb-10 2xl:mb-0">
            <div className="w-full md:h-180 lg:h-220 2xl:h-140 2xl:max-w-none 2xl:w-124.25 rounded-md">
              <Image
                src="/images/fidipoteFood.png"
                alt="Fidipote Food Market"
                className="w-full h-full 2xl:h-133.5 object-cover rounded-md"
                width={497}
                height={534}
              />
              <h3 className="text-base md:text-2xl text-center text-[#0F3D2E]  mt-2">
                Fidipote Food Market
              </h3>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full flex flex-col 2xl:flex-row-reverse justify-between items-center md:mb-12 2xl:mb-0  "
        >
          <div className="w-full 2xl:w-1/2 flex flex-col lg:mb-8 2xl:mb-0 ">
            <div className="space-y-6  2xl:space-y-10 2xl:px-4 md:px-2 max-w-4xl">
              <h1 className="text-2xl md:text-4xl lg:text-5xl 2xl:text-[55px] font-serif text-center text-[#0F3D2E]">
                Fidipote Royalty Limited
              </h1>
              <p className=" sm:text-center font-sans text-base md:text-2xl 2xl:text-2xl leading-relaxed lg:text-left">
                Fidipote Royalty Limited is a real estate and land development
                venture centered on responsible land stewardship, property
                development, and long-term community value.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex justify-end w-full  mb-0 lg:mb-8 "
              >
                <Link
                  href="/ventures"
                  className="inline-flex text-lg items-center font-sans font-medium text-[#D89B2D] hover:text-[#D89B2D]/80 transition-colors group"
                >
                  Learn More
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
                </Link>
              </motion.div>
            </div>
          </div>
          <div className="w-full 2xl:w-1/2 flex 2xl:justify-start 2xl:items-start justify-center items-center  mb-12 lg:mb-0 ">
            <div className="w-full md:h-180 2xl:max-w-none lg:h-190 lg:w-220 2xl:w-134.5 rounded-md">
              <Image
                src="/images/fidiroyal.png"
                alt="Fidipote Royalty Limited"
                className="w-full h-full 2xl:h-133.5 object-cover rounded-md"
                width={497}
                height={534}
              />
              <h3 className="text-base md:text-2xl text-center text-[#0F3D2E] mt-8">
                Fidipote Royalty Limited
              </h3>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
};

export default Ventures;
