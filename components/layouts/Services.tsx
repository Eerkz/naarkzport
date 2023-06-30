import React from "react";
import Accordion from "../utils/Accordion";
import parser from "html-react-parser";
import services from "../../data/services.json";

export default function Services() {
  return (
    <div>
      <h1 className="font-medium text-[28px]">Services</h1>
      <p className="text-[18px] font-normal mt-[21px]">
        No matter what you need, I work to find the{" "}
        <span className="underline">best and most affordable</span> solution for
        you.
      </p>
      <div className="mt-[30px] flex flex-col md:justify-center justify-center">
        {services.map((service, idx) => (
          <Accordion key={`accordion_${idx}`} title={service.heading}>
            {parser(service.content)}
          </Accordion>
        ))}
      </div>
    </div>
  );
}
