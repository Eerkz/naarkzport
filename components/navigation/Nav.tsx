import React from "react";
import Image from "next/image";

export default function Nav() {
  return (
    <div className="w-full sm:px-[69px] px-[38px] top-[50px] flex justify-center z-[1100] absolute">
      <nav
        id="top-nav"
        className="w-full h-[64px] bg-white pl-[33px] pr-[12px] rounded-[20px] border-solid border-[1px] border-black flex justify-between items-center"
      >
        <div className="flex">
          <Image
            src={"/static/images/logo-small.svg"}
            alt="naarkz-logo-small"
            width={33}
            height={21}
          />
          <span className="font-bold text-[20px] ml-[11px]">naark.dev</span>
        </div>
        <button
          type="button"
          className="font-[400] h-[48px] cursor-pointer hover:bg-pastel-blue bg-dark-blue w-[135px] text-white rounded-[12px] flex justify-center items-center"
        >
          Contact Me
        </button>
      </nav>
    </div>
  );
}
