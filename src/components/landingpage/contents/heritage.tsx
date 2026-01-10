"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Heritage = () => {
  return (
    <main className="w-full bg-[#F8F8F8] px-6 md:px-8 py-16">
      <div className="max-w-410 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-serif font-bold text-[#0F3D2E] text-center mb-8"
        >
          Heritage & Titles
        </motion.h2>

        <motion.section
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full flex flex-col lg:flex-row-reverse justify-between items-center"
        >
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center mb-8 lg:mb-0">
            <div className="space-y-6 lg:space-y-10 px-4 max-w-2xl">
              <p className="text-base md:text-xl leading-relaxed">
                Prince Otunba Adedotun Adebola Babatunde Jagun holds respected
                traditional titles across Ogun State and remains actively
                engaged in cultural leadership and grassroots advocacy within
                Ijebu land.
              </p>
              <p className="text-base md:text-xl leading-relaxed">
                His titles includes the Otunba Shobaloju of Orile-Igboore,
                Otunba Apesinola of Oke-Eri, Ijebu Ode, Otun-Asiwaju of Ibiade,
                Ogun Waterside and others.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center items-center p-4 lg:p-8 h-100">
            <div className="w-full max-w-md lg:max-w-none lg:w-[497px] rounded-md  bg--500 ">
              <div className="flex flex-col items-center justify-center p-10 min-h-full ">
                {/* Main Container */}
                <div className="relative group cursor-pointer bg-black w-full">
                  {/* Background Decorative Frame (Bottom Layer) */}
                  <div className="absolute inset-0 border-2 border-black translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>

                  {/* Middle Decorative Frame */}
                  <div className="absolute inset-0 border-2 border-black translate-x-2 translate-y-2 bg-white z-10"></div>

                  {/* Top Content Layer (Image & Border) */}
                  <div className="relative z-20 border-2 border-black bg-white p-3 shadow-xl">
                    <div className="overflow-hidden bg-gray-200">
                      <img
                        src={"/images/fidiroyal.png"}
                        alt={"alt"}
                        className="w-64 h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    {/* {title && ( */}
                    <p className="mt-4 text-center font-mono font-bold text-black uppercase tracking-widest">
                      {/* {title} */}
                      hello
                    </p>
                    {/* )} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-end mt-16 w-11/12"
        >
          <Link
            href="/story"
            className="inline-flex items-center font-sans font-medium text-[#D89B2D] hover:text-[#D89B2D]/80 transition-colors group"
          >
            View Titles & Lineage
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

export default Heritage;
