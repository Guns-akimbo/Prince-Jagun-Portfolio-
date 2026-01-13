"use client";
import Footer from "@/components/landingpage/contents/footer";
import Header from "@/components/landingpage/navigations /header";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mjggvkqp");
  const router = useRouter();

  useEffect(() => {
    if (state.succeeded) {
      // Redirect to home page after 2 seconds
      const timer = setTimeout(() => {
        router.push("/");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded, router]);

  if (state.succeeded) {
    return (
      <main className="w-full text-[#143b2f] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-serif text-[#143b2f] mb-4">
            Thank You!
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Your message has been sent successfully.
          </p>
          <p className="text-sm text-gray-500">Redirecting to home page...</p>
        </div>
      </main>
    );
  }
  return (
    <main className="w-full text-[#143b2f]">
      <Header />
      <section className="relative bg-[#123f35] text-white h-135 flex flex-col justify-center items-center px-6 mb-8">
        <div className="absolute inset-0 bg-[url('/images/contact-bg.jpg')] bg-cover bg-no-repeat  bg-center opacity-14" />
        <div className="relative w-full text-center space-y-8 h-full flex flex-col justify-end items-center ">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-serif text-white"
          >
            Connect with Prince Adedotun
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-2xl max-w-3xl mx-auto mb-12"
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
          <div className="max-w-[90%] mx-auto px-6 md:px-8 grid md:grid-cols-2 grid-cols-1 gap-8 md:gap-36 items-center mb-8 bg--400">
            {" "}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 border-2 border-gray-200 rounded-xl md:mr-6 md:mb-0 mb-6"
            >
              <form onSubmit={handleSubmit} method="POST" className="space-y-5">
                <h3 className="text-2xl font-semibold mb-4 font-Cormorant Garamond">
                  Let&apos;s chat, Reach out to us
                </h3>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-md bg-white text-gray-800 focus:outline-none border-2"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 rounded-md bg-white text-gray-800 focus:outline-none border-2"
                />

                <textarea
                  rows={4}
                  name="message"
                  placeholder="Message"
                  required
                  className="w-full px-4 py-3 rounded-md bg-white text-gray-800 focus:outline-none border-2"
                ></textarea>

                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />

                <button
                  disabled={state.submitting}
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
                    <section className="p-2 w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center">
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
                    <section className="p-2 w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center">
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

      <div className="max-w-[90%] mx-auto mt-8 flex flex-col   gap-3 mb-20">
        <p className="text-xl">Socials</p>
        <div className="flex items-center gap-6">
          <a
            href="https://www.facebook.com/share/17sBVbZU4d/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="w-6 h-6 cursor-pointer hover:opacity-70 transition-opacity" />
          </a>
          <a
            href="https://www.instagram.com/fidipote_food_market?igsh=ZHZ3dDhtNXFucmg4&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-6 h-6 cursor-pointer hover:opacity-70 transition-opacity" />
          </a>
          <a
            href="https://www.linkedin.com/in/omo%E2%80%99ba-adedotun-260a761bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-6 h-6 cursor-pointer hover:opacity-70 transition-opacity" />
          </a>
        </div>
      </div>

      {/* <Footer /> */}
    </main>
  );
};

export default Contact;
