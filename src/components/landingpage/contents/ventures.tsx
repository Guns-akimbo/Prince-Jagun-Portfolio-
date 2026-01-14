"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Ventures = () => {
  return (
    <main className="w-full bg-[#F8F8F8] px-6 md:px-8 py-16 overflow-x-hidden">
      <div className="max-w-410 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-6xl font-serif font-bold text-[#0F3D2E] text-center mb-8"
        >
          Ventures
        </motion.h2>

        <motion.section
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="w-full flex flex-col lg:flex-row justify-between items-center mb-20 lg:mb-32"
        >
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center mb-8 lg:mb-0">
            <div className="space-y-6 lg:space-y-10 px-4 max-w-3xl">
              <h1 className="text-2xl font-serif md:text-4xl lg:text-[55px] text-center text-[#0F3D2E]">
                Fidipote Food Market
              </h1>
              <p className="text-base md:text-2xl leading-relaxed font-sans">
                Fidipote Food Market is an agricultural and food distribution
                venture focused on farming, sourcing, and supplying fresh farm
                produce to local and international markets at accessible
                prices—supporting farmers while promoting food security.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center items-center p-4 lg:p-8">
            <div className="w-full max-w-md lg:max-w-none lg:w-124.25 rounded-md">
              <Image
                src="/images/fidipoteFood.png"
                alt="Fidipote Food Market"
                className="w-full h-85 lg:h-133.5 object-cover rounded-md"
                width={497}
                height={534}
              />
              <h3 className="text-sm md:text-base text-center text-[#0F3D2E] mt-2">
                Fidipote Food Market
              </h3>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full flex flex-col lg:flex-row-reverse justify-between items-center"
        >
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center mb-8 lg:mb-0">
            <div className="space-y-6 lg:space-y-10 px-4 max-w-4xl">
              <h1 className="text-2xl md:text-4xl lg:text-[55px] font-serif text-center text-[#0F3D2E]">
                Fidipote Royalty Limited
              </h1>
              <p className="text-base sm:text-center font-sans  lg:text-2xl leading-relaxed lg:text-left">
                Fidipote Royalty Limited is a real estate and land development
                venture centered on responsible land stewardship, property
                development, and long-term community value.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center items-center p-4 lg:p-8">
            <div className="w-full max-w-md lg:max-w-none lg:w-124.5 rounded-md">
              <Image
                src="/images/fidiroyal.png"
                alt="Fidipote Royalty Limited"
                className="w-full h-75 lg:h-133.5 object-cover rounded-md"
                width={497}
                height={534}
              />
              <h3 className="text-sm md:text-base text-center text-[#0F3D2E] mt-4">
                Fidipote Royalty Limited
              </h3>
            </div>
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-end w-full"
        >
          <Link
            href="/ventures"
            className="inline-flex items-center font-sans font-medium text-[#D89B2D] hover:text-[#D89B2D]/80 transition-colors group"
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
    </main>
  );
};

export default Ventures;
