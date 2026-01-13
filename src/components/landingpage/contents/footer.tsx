import { Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <section className="bg-[#0f3d2e] text-white py-0 px-0 lg:py-12 lg:px-6 cursor-pointer">
      <div className="w-full">
        <div className="w-full max-w-full lg:max-w-[95%] p-4 lg:p-8 mx-auto">
          <h2 className="text-4xl font-serif mb-8">Get in Touch</h2>
          <div className="border-t-4 border-dotted  border-white/30 mb-0 lg:mb-6 w-full"></div>{" "}
        </div>
        <div className=" max-w-full lg:max-w-[95%] mx-auto grid lg:grid-cols-2 gap-10 p-4 lg:p-8 ">
          <div>
            <p className="text-white/80 max-w-lg   mb-10 text-base lg:text-2xl">
              For inquiries, partnership, or formal engagement, please use the
              contact details below.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-700 flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="uppercase text-base text-white/60">Email</p>
                  <p className="font-medium text-base">
                    FidipoteRoyalties@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-700 flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="uppercase text-base text-white/60">Location</p>
                  <p className="font-medium text-base">Ijebu Ode, Ogun State</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#1e4f3d] rounded-xl p-8 shadow-lg">
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-md bg-white text-gray-800 focus:outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-md bg-white text-gray-800 focus:outline-none"
              />

              <textarea
                rows={4}
                placeholder="Message"
                className="w-full px-4 py-3 rounded-md bg-white text-gray-800 focus:outline-none"
              ></textarea>

              <button
                type="submit"
                className="bg-[#d9a441] text-white px-8 py-3 rounded-md uppercase text-sm tracking-wide hover:opacity-90 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="max-w-[90%] mx-auto mt-8 flex justify-between items-center gap-6">
        <div className="flex items-center">
          <div className="flex items-center gap-3">
            <Image
              priority
              quality={100}
              width={60}
              height={60}
              alt="Prince Jagun Logo"
              className="object-contain bg-transparent rounded-full"
              src="/images/logo.jpg"
              style={{
                filter: "invert(1) brightness(2) contrast(1)",
                mixBlendMode: "screen",
              }}
            />
          </div>
        </div>
        <div className="flex items-center gap-6 mb-4">
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
    </section>
  );
}
