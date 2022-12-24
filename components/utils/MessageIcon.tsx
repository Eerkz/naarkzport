import React from "react";
import Image from "next/image";

export default function MessageIcon() {
  return (
    <div className="absolute right-[36px] bottom-[40px] z-[1000] flex flex-col ">
      <div className="w-[300px] h-[361px] bg-white rounded-[20px] mr-[54px] border-solid border-[1px] border-black relative">
        <div className="bg-dark-blue w-full h-[79px] rounded-t-[16px] flex flex-col justify-center items-center">
          <h1 className="font-[400] text-[20px] text-white leading-[23px]">
            Shoot me a message!
          </h1>
          <p className="font-[350] text-[12px] text-white leading-[12px]">
            I&apos;ll get back to you soon.
          </p>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          className="bg-dark-blue w-[54px] h-[54px] text-white  rounded-[50%] flex justify-center items-center "
        >
          <Image
            src={"/static/images/message-icon.svg"}
            alt="message-icon"
            width={25}
            height={25}
          />
        </button>
      </div>
    </div>
  );
}
