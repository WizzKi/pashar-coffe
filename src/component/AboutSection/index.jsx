"use client";

import AboutText from "./AboutText";
import AboutImage from "./AboutImage";

const AboutSection = () => {
  return (
    <div className="relative w-screen h-screen bg-amber-300 grid grid-cols-1 md:grid-cols-2 overflow-hidden">
      <div className="flex justify-center items-start my-15 p-12 w-full h-full">
        <AboutText />
      </div>

      <div className="hidden relative sm:flex justify-end items-start pt-5 w-full h-full max-w-1/1 bg-white">
        <AboutImage />
      </div>
    </div>
  );
};

export default AboutSection;
