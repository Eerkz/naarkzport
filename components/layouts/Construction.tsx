import React from "react";

import Image from "next/image";
export default function Construction() {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-dark-blue font-[400] text-[20px] leading-[23.2px] mb-[17px] mt-[20px]">
        Site is still under construction. For the meantime,
        <br /> enjoy these random pictures of dogs with jobs!
      </p>
      <button
        type="button"
        className="w-[55px] rounded-[12px] bg-dark-blue h-[55px] text-white flex justify-center items-center"
      >
        <Image
          src={"/static/images/refresh-icon.svg"}
          alt="refresh-icon"
          width={22}
          height={22}
        />
      </button>
    </div>
  );
}
