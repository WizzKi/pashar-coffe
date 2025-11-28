"use client";

import React from "react";
import Image from "next/image";

const ProductCard = ({ id, price, imageUrl, colorCard }) => {
  const handleButtonOrder = (event) => {
    const noHp = "6283815652110";
    const textOrder = `Halo%20saya%20ingin%20order%20Coffe%20produk%20${id}%20harga%20${price}`;
    event.preventDefault();
    window.open(`https://wa.me/${noHp}?text=${textOrder}`, "_blank");
  };

  return (
    <div
      style={{ backgroundColor: colorCard }}
      className="flex flex-col items-center p-6 py-4 gap-4 mx-4 rounded-xl shadow-lg w-72 h-90 hover:scale-105 hover:shadow-xl duration-300 ease-in-out transition-all"
    >
      <div className="relative w-70 h-40 mb-4 flex justify-center items-center">
        <Image
          src={imageUrl}
          alt="..."
          width={160}
          height={160}
          className="object-contain w-full"
        />
      </div>

      <p className="text-xl font-bold text-[#6D4C41] mb-3 bg-white rounded-full py-1 px-7">
        {price}
      </p>

      <p className="text-xs text-center text-gray-600 mb-4 px-2">
        Lorem ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>

      <div className="flex w-full justify-start">
        <button
          onClick={handleButtonOrder}
          className="flex py-2 px-6 text-sm font-bold text-[#6D4C41] bg-white cursor-pointer rounded-full hover:bg-[#A37852] hover:text-white transition duration-300"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
