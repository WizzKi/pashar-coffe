"use client";

import { StarIcon } from "@phosphor-icons/react";

const AboutText = () => {
  return (
    <div className="flex flex-col gap-1">
      <h5 className="text-xl text-amber-60 font-bold">ABOUT US</h5>
      <h3 className="text-6xl text-amber-950 font-bold leading-tight text-wrap sm:text-nowrap">
        Get to Know Us
      </h3>
      <div className="w-53 h-1 bg-black my-2"></div>
      <p className="text-wrap text-black">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non natus
        vitae, inventore facilis consequatur et vel, illum quo beatae eum nisi
        sit dolorum doloremque voluptatem quis corporis. Porro, vitae natus
        officiis, cum perspiciatis ipsum consectetur inventore molestias
        quisquam deserunt, impedit atque nemo. Voluptatem iure culpa fuga saepe,
        cum sed. Repellendus?
      </p>
      <div className="flex gap-8">
        <div className="flex flex-col gap-1 mt-5">
          <h5 className="text-xl text-green-500 font-semibold">Total Sales</h5>
          <h5 className="text-2xl text-black font-bold">+100</h5>
        </div>
        <div className="flex flex-col gap-1 mt-5">
          <h5 className="text-xl text-green-500 font-bold">Rating Client</h5>
          <h5 className="flex items-center gap-1 text-2xl text-black font-bold">
            <StarIcon size={30} /> 8.2
          </h5>
        </div>
      </div>
    </div>
  );
};

export default AboutText;
