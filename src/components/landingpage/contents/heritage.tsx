"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Heritage = () => {
  return (
    <main className="w-full bg-[#F8F8F8] overflow-x-hidden">
      <div className="max-w-410 mx-auto lg:h-[90vh] 2xl:h-[80vh] ">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl  md:text-4xl lg:text-7xl font-serif font-bold text-[#0F3D2E]  text-center"
        >
          Heritage & Titles
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid 2xl:grid-cols-2 lg:h-140 gap-10  w-full mx-auto mt-4 lg:mt-24 "
        >
          <div className=" w-full p-4 2xl:p-0 ">
            <Image
              src="/images/title.jpeg"
              alt="Prince seated on throne"
              className="w-full h-70 md:p-9 md:h-130 lg:h-163  2xl:h-120 2xl:w-11/12 md:object-cover 2xl:object-contain rounded-2xl "
              width={800}
              height={240}
              priority
            />
          </div>
          <div className="text-gray-700 leading-relaxed mb-5 items-end flex justify-center flex-col font-sans p-6">
            <p className="lg:mb-6  mb-4 text-base lg:text-2xl 2xl:text-2xl ">
              Oma’ba Adedotun A. Olateju-Jagun holds respected traditional
              titles across Ogun State and remains actively engaged in cultural
              leadership and grassroots advocacy within Ijebu land.
            </p>

            <p className="mb-10 text-base  2xl:text-2xl lg:text-2xl  ">
              His titles includes the Otunba Shobaloju of Orile-Igboore, Otunba
              Apesinola of Oke-Eri, Ijebu Ode, Otun-Asiwaju of Ibiade, Ogun
              Waterside and others.
            </p>

            <a
              href="/heritage"
              className="inline-flex items-center  lg:text-2xl  underline font-sans font-medium text-[#D89B2D] hover:text-[#D89B2D]/80 transition-colors group"
            >
              View Titles &amp; Lineage
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Heritage;
