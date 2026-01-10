"use client";

import { navlinks } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-9 text-black">
      {navlinks.map((link, idx) => {
        return (
          <Link
            href={link.path}
            key={idx}
            className={`${
              pathname === link.path && "text-[#0F3D2E] border-b-2 border-[#0F3D2E]"
            } capitalize text-[14px] font-medium hover:text-[#0F3D2E] transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
