"use client";

import { navlinks } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";
import Image from "next/image";

const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-black" />
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-6 p-0 bg-white backdrop-blur-xl rounded-2xl shadow-2xl border-none animate-slide-in overflow-hidden min-h-[80vh]">
        <nav className="flex flex-col justify-center gap-8 bg-white">
          <header className="border-b-2 bo">
            <Image
              priority
              quality={100}
              width={60}
              height={10}
              alt="logo"
              className="object-contain mx-4"
              src="/images/logo.jpg"
            />
          </header>
          {navlinks.map((link, idx) => (
            <Link
              href={link.path}
              key={idx}
              onClick={() => setIsOpen(false)}
              className={`px-6 py-2 rounded-xl text-lg font-semibold capitalize transition-all duration-200 w-full text-justify
                ${
                  pathname === link.path
                    ? "text-[#013524] font-bold"
                    : "text-[#010302] hover:bg-amber-50 hover:text-amber-600"
                }
              `}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
      <style jsx global>{`
        @keyframes slide-in {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </Sheet>
  );
};

export default MobileNav;
