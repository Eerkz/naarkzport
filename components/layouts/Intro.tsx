import React from "react";
import SideNav from "../navigation/SideNav";

export default function Intro() {
  return (
    <section className="flex flex-col md:mt-0 sm:mt-[200px] mt-[40%]">
      <div className="mb-[51px]">
        <h1 className="font-bold text-[48px]">Hi, I&apos;m Naarkz.</h1>
        <p className="font-[400] text-[20px] leading-[28px]">
          I&apos;m a full stack developer based <br />
          in the Phillippines.
        </p>
      </div>
      <SideNav />
    </section>
  );
}
