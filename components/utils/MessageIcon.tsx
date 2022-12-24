import React from "react";
import Image from "next/image";
export default function MessageIcon() {
  return (
    <button
      type="button"
      className="bg-dark-blue w-[54px] h-[54px] text-white absolute right-[36px] bottom-[40px] rounded-[50%] flex justify-center items-center z-[1000]"
    >
      <Image
        src={"/static/images/message-icon.svg"}
        alt="message-icon"
        width={25}
        height={25}
      />
    </button>
  );
}
