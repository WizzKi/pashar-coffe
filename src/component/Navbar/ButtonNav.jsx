"use client";

import { useState } from "react";

const ButtonNav = ({ onToggle }) => {
  const [open, setIsOpen] = useState(false);

  const handleClick = () => {
    const newstate = !open;
    setIsOpen(newstate);
    onToggle(newstate);
  };

  return (
    <>
      <div className="hidden md:flex justify-end">
        <button className="rounded-full border border-white py-2 px-4 font-bold text-white hover:bg-[#b3702a] transition-all">
          Contact Us
        </button>
      </div>

      <button
        onClick={handleClick}
        className="md:hidden text-white text-3xl hover:text-[#b3702a] justify-self-end transition-all"
      >
        ☰
      </button>
    </>
  );
};

export default ButtonNav;
