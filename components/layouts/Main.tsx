import React from "react";
import Image from "next/image";
import MessageIcon from "../utils/MessageIcon";
import Nav from "../navigation/Nav";

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full md:h-[100vh] h-auto md:verflow-hidden relative">
      <Nav />
      <Image
        src={"/static/images/top-right-wave.svg"}
        alt="top-right-wave"
        width={643}
        height={369}
        className="absolute top-[-86px] right-0 z-[1]"
      />
      <main className="relative z-[1000] sm:px-[69px] px-[38px] md:pb-0 pb-[100px] flex md:justify-between h-full w-full md:flex-row flex-col">
        {children}
      </main>
      <Image
        src={"/static/images/bottom-left-wave.svg"}
        alt="bottom-left-wave"
        width={508}
        height={256}
        className="absolute bottom-0 left-[-42.5px] z-[1]"
      />
      <MessageIcon />
    </div>
  );
}
