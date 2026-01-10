"use client";

import { navlinks } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";

;

const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col p-4 ">
        <div className="mt-32 mb-40 text-2xl text-center">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <h1 className="text-4xl font-semibold">
              Emerie <span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-9">
          {navlinks.map((link, idx) => {
            return (
              <Link
                href={link.path}
                key={idx}
                onClick={() => setIsOpen(false)}
                className={`${pathname === link.path && "text-accent border-b-2 border-accent"} capitalize text-xl font-medium hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
