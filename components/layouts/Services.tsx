import React from "react";
import Accordion from "../utils/Accordion";

export default function Services() {
  return (
    <div className="mb-[50px]">
      {" "}
      <h1 className="font-medium text-[28px]">Services</h1>
      <p className="text-[18px] font-normal mt-[21px]">
        No matter what you need, I work to find the{" "}
        <span className="underline">best and most affordable</span> solution for
        you, and you will get a website that is ready to launch.
      </p>
      <div className="mt-[30px]">
        <Accordion title="What services do i offer?">
          <p>Content here</p>
        </Accordion>
        <Accordion title="What services do i offer?">
          <p>Content here</p>
        </Accordion>
      </div>
    </div>
  );
}
