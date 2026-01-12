import Image from "next/image";
import Link from "next/link";
import React from "react";
import Nav from "./nav";
import MobileNav from "./mobileNav";
// import Nav from "./nav";

const Header = () => {
  return (
    <header className="py-4 lg:py-1  p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" prefetch={false}>
          <Image
            priority
            quality={100}
            width={70}
            height={10}
            alt="emerie"
            className="object-contain"
            src="/images/logo.jpg"
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
