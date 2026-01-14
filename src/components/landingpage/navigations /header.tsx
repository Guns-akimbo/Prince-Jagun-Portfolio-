import Image from "next/image";
import Link from "next/link";
import React from "react";
import Nav from "./nav";
import MobileNav from "./mobileNav";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 lg:py-1 p-4  h-20 flex items-center justify-center bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" prefetch={false}>
          <Image
            priority
            quality={100}
            width={70}
            height={10}
            alt="emerie"
            className="object-contain "
            src="/Logo.png"
          />
        </Link>
        <div className="hidden lg:flex items-center gap-8">
          <Nav />
        </div>

        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
