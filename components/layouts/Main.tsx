import React from "react";
import Image from "next/image";
import MessageIcon from "../utils/MessageIcon";
import Nav from "../navigation/Nav";

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-[100vh] overflow-hidden relative">
      <Nav />
      <Image
        src={"/static/images/top-right-wave.svg"}
        alt="top-right-wave"
        width={643}
        height={369}
        className="absolute top-[-86px] right-0 z-[1]"
      />
      <main className="relative z-[1000] flex justify-center items-center h-full w-full">
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
