import React, { useState } from "react";
import Image from "next/image";

export default function Accordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [expandContent, setExpandContent] = useState<boolean | undefined>(
    false
  );
  return (
    <div
      className={`accordion flex flex-col`}
      onClick={() => setExpandContent(!expandContent)}
    >
      <div className="flex justify-between w-full h-[79px] items-center">
        <h1 className="">{title}</h1>
        <Image
          src={"/static/images/plus.svg"}
          className={`${
            expandContent ? "accordion-plus-expand" : "accordion-plus-collapse"
          }`}
          width={18}
          height={18}
          alt="accordion-tile"
        />
      </div>
      <div
        className={`accordion-content ${
          expandContent ? "accordion-content-expand" : "accordion-content-collapse"
        }`}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at
          viverra elit, et dignissim diam. Vivamus tincidunt euismod accumsan.
          Mauris scelerisque condimentum velit a dapibus. Curabitur pulvinar
          nisi vel arcu mollis euismod.
        </p>
      </div>
    </div>
  );
}
