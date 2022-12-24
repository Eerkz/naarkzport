import React from "react";

export default function SideNav() {
  return (
    <ul className="font-[500] text-[18px] leading-[21px] flex flex-col gap-y-[23px] uppercase pb-[40px]">
      <li className="flex gap-x-[25px]">
        <span className=" w-[20px] h-auto">01</span>Projects
      </li>
      <li className="flex gap-x-[25px]">
        <span className=" w-[20px] h-auto">02</span>Tech Stack
      </li>
      <li className="flex gap-x-[25px]">
        <span className=" w-[20px] h-auto">03</span>Services FAQ
      </li>
      <li className="flex gap-x-[25px]">
        <span className=" w-[20px] h-auto">04</span>Contact Details
      </li>
    </ul>
  );
}
