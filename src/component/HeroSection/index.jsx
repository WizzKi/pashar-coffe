"use client";

import { stylePrimary, styleSecondary } from "@/libs/styles";
import Image from "next/image";
import ImageCoffe from "./ImageCoffe";

const heroSection = () => {
  const handleButtonOrder = (event) => {
    const noHp = "6283815652110";
    const textOrder = "Halo%20saya%20ingin%20order%20Coffe";
    event.preventDefault();
    window.open(`https://wa.me/${noHp}?text=${textOrder}`, "_blank");
  };
  const handleButtonProduct = (event) => {
    event.preventDefault;
    let element = document.getElementById("product-id");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-screen h-screen text-center p-4 mt-20">
      <div className="relative z-10 w-full flex flex-col justify-center items-center text-center">
        <div className="text-5xl font-extrabold">
          <h1>Coffee That Feels</h1>
          <h1>Like Home</h1>
        </div>
        <div>
          <p className="max-w-[600px] mx-auto mt-10 mb-10 font-semibold text-[#e5d6b8] text-[1.1rem] leading[1.5]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
            dignissimos tempore doloremque placeat laudantium odit sunt
            blanditiis saepe quae nemo.
          </p>
        </div>
        <div className="flex justify-center gap-8 w-full">
          <button onClick={handleButtonOrder} className={stylePrimary}>
            Order Now
          </button>
          <button onClick={handleButtonProduct} className={styleSecondary}>
            Product
          </button>
        </div>
      </div>
      <ImageCoffe />
    </div>
  );
};

export default heroSection;
