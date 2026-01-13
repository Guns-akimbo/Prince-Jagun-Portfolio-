"use client";

import { navlinks } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "../../ui/sheet";
import Image from "next/image";

const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex justify-center items-center p-2 hover:bg-gray-100 rounded-md transition-colors duration-200">
        <CiMenuFries className="text-[28px] text-black" />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="flex flex-col gap-0 p-0 bg-white/95 backdrop-blur-xl shadow-2xl border-none overflow-hidden w-80 sm:max-w-80"
      >
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

        <div className="p-6 border-b border-gray-100 bg-white">
          <Image
            priority
            quality={100}
            width={60}
            height={60}
            alt="logo"
            className="object-contain"
            src="/images/logo.jpg"
          />
        </div>

        <nav className="flex flex-col py-6 bg-white">
          {navlinks.map((link, idx) => (
            <Link
              href={link.path}
              key={idx}
              onClick={() => setIsOpen(false)}
              className={`px-6 py-4 text-lg font-medium capitalize transition-all duration-300 border-b border-gray-50 last:border-b-0 hover:bg-gray-50 hover:pl-8
                ${
                  pathname === link.path
                    ? "text-white font-semibold bg-[#123f35] border-l-4 border-l-[#D89B2D] pl-8"
                    : "text-[#010302] hover:text-[#D89B2D]"
                }
              `}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="mt-auto p-6 border-t border-gray-100 bg-gray-50">
          <p className="text-sm text-gray-600 text-center">
            © 2026 Prince Jagun
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
