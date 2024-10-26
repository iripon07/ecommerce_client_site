"use client";

import Image from "next/image";
import Banner1 from "@/assets/Banner.jpg"

const Banner = () => {
  return (
    <div>
      
      <div>
        <Image src={Banner1} height={350} className="w-full" alt=""></Image>
      </div>
    </div>
  );
};

export default Banner;
