import { Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <section className="bg-[#0f3d2e] text-white py-12 px-6 cursor-pointer">
      <div className="max-w-full lg:max-w-[95%] p-8 mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-4xl font-serif mb-4">Get in Touch</h2>
          <div className="border-t border-white/30 mb-6 w-full"></div>

          <p className="text-white/80 max-w-md mb-10">
            For inquiries, partnership, or formal engagement, please use the
            contact details below.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-700 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="uppercase text-sm text-white/60">Email</p>
                <p className="font-medium">FidipoteRoyalties@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-700 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="uppercase text-sm text-white/60">Location</p>
                <p className="font-medium">Ijebu Ode, Ogun State</p>
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
        <div className="flex items-center gap-6">
          <Facebook className="w-6 h-6 cursor-pointer hover:opacity-70 transition-opacity" />
          <Instagram className="w-6 h-6 cursor-pointer hover:opacity-70 transition-opacity" />
          <Linkedin className="w-6 h-6 cursor-pointer hover:opacity-70 transition-opacity" />
        </div>
      </div>
    </section>
  );
}
