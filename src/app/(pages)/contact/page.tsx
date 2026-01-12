"use client";
import Footer from "@/components/landingpage/contents/footer";
import Header from "@/components/landingpage/navigations /header";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <main className="w-full text-[#143b2f]">
      <Header />
      <section className="relative bg-[#123f35] text-white h-135 flex flex-col justify-center items-center px-6">
        <div className="absolute inset-0 bg-[url('/images/contact-bg.jpg')] bg-cover bg-no-repeat  bg-center opacity-14" />
        <div className="relative max-w-5xl text-center space-y-8 h-full flex flex-col justify-end items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif text-white"
          >
            Connect with Prince Adedotun
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-3xl max-w-3xl mx-auto mb-12"
          >
            For enquiries related to enterprise, community initiatives, or
            official correspondence, please reach out using the details below or
            the contact form.
          </motion.p>
        </div>
      </section>

      <div>
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className=""
        >
          <div className="md:max-w-[90%] w-full mx-auto grid md:grid-cols-2 grid-cols-1 gap-y-6 md:gap-x-6 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 border-2 border-gray-200 rounded-xl md:mr-6 md:mb-0 mb-6"
            >
              <form className="space-y-5">
                <h3 className="text-2xl font-semibold mb-4 font-Cormorant Garamond">
                  Let’s chat, Reach out to us
                </h3>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-md bg-white text-gray-800 focus:outline-none border-2"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-md bg-white text-gray-800 focus:outline-none border-2"
                />

                <textarea
                  rows={4}
                  placeholder="Message"
                  className="w-full px-4 py-3 rounded-md bg-white text-gray-800 focus:outline-none border-2"
                ></textarea>

                <button
                  type="submit"
                  className="bg-[#D89B2D] w-full text-white px-8 py-3 rounded-lg uppercase text-sm tracking-wide hover:opacity-90 cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className=" rounded-xl md:h-180 md:w-170 w-full h-100 p-2 "
            >
              <div className="flex flex-col gap-6 md:mt-26 mt-0 ">
                <div className="h-4/6">
                  <Image
                    src="/images/contact2.jpg"
                    alt="Fidipote Food Market"
                    className="rounded-lg w-full h-full"
                    width={800}
                    height={400}
                  />
                </div>
                <div className="h-4/6 space-y-4">
                  <div className="flex gap-4">
                    <section className="p-2 w-8 h-8 rounded-full bg-gray-400">
                      <MapPin />
                    </section>
                    <section>
                      <p className="text-sm ">Address</p>
                      <p className="text-sm">
                        {" "}
                        Ijebu Ode, Ogun State, Nigeria.
                      </p>
                    </section>
                  </div>

                  <div className="flex gap-4 mb-8">
                    <section className="p-2 w-8 h-8 rounded-full bg-gray-400">
                      <Mail />
                    </section>
                    <section>
                      <p className="text-sm ">Email</p>
                      <p className="text-sm">FidipoteRoyalties@gmail.com</p>
                    </section>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>

      <Footer />
    </main>
  );
};

export default Contact;
