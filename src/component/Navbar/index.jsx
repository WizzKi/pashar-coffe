"use client";

import { useState } from "react";
import { styleList } from "@/libs/styles";
import Image from "next/image";
import LogoNav from "./LogoNav";
import ListNav from "./ListNav";
import ButtonNav from "./ButtonNav";
import Link from "next/link";

const Navbar = () => {
  const [open, setIsOpen] = useState(false);

  const handleToggle = (value) => {
    setIsOpen(value);
  };

  return (
    <nav className="w-full bg-[#4b2d00] p-6 whitespace-nowrap">
      <div className="grid grid-cols-3 sm:grid-cols-3 items-center">
        <LogoNav />
        <ListNav />
        <ButtonNav onToggle={handleToggle} />
      </div>

      {open && (
        <div className="mt-4 md:hidden flex flex-col gap-4 text-white text-center font-semibold animate-[slideDown_0.10s_ease] transition-all">
          <Link href="#" className={styleList} onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link
            href="#about-id"
            className={styleList}
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="#product-id"
            className={styleList}
            onClick={() => setIsOpen(false)}
          >
            Product
          </Link>
          <Link href="#" className={styleList} onClick={() => setIsOpen(false)}>
            The process
          </Link>
          <Link href="#" className={styleList} onClick={() => setIsOpen(false)}>
            Testimonials
          </Link>

          <button className="border border-white rounded-full py-2 font-bold hover:bg-[#b3702a] transition-all">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
