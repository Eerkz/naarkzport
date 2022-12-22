import React from "react";
import Image from "next/image";
export default function MessageIcon() {
  return (
    <button
      type="button"
      className="bg-dark-blue w-[49px] h-[49px] text-white absolute right-[36px] bottom-[40px] rounded-[50%] flex justify-center items-center"
    >
      <Image
        src={"/static/images/message-icon.svg"}
        alt="message-icon"
        width={20}
        height={20}
      />
    </button>
  );
}
