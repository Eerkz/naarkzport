import React, { useState, useEffect, useRef } from "react";
import { InView } from "react-intersection-observer";
import Main from "../components/layouts/Main";
import ProjectBox from "../components/utils/ProjectBox";
import TechStack from "../components/layouts/TechStack";
import Services from "../components/layouts/Services";
import Contact from "../components/layouts/Contact";

export default function Home() {
  const projectsRef = useRef() as React.Ref<HTMLDivElement>;
  const techRef = useRef() as React.Ref<HTMLDivElement>;
  const servicesRef = useRef() as React.Ref<HTMLDivElement>;
  const contactRef = useRef() as React.Ref<HTMLDivElement>;

  const [isProjectsVisible, setIsProjectsVisible] = useState(true);
  const [isTechVisible, setIsTechVisible] = useState(false);
  const [isServicesVisible, setIsServicesVisible] = useState(false);
  const [isContactsVisible, setIsContactsVisible] = useState(false);

  const scrollTo = (ref: any) => {
    if (ref && ref.current /* + other conditions */) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Main>
        <section className="flex flex-col justify-center md:mt-[0] mt-[180px]  md:pl-[50px] pl-[12px] md:w-[40%] w-full">
          <div>
            <div className="mb-[51px]">
              <h1 className="font-bold text-[48px]">Hi, I&apos;m Naarkz.</h1>
              <p className="font-[400] text-[20px] leading-[28px]">
                I&apos;m a full stack developer based <br />
                in the Phillippines.
              </p>
            </div>
            <ul className="font-[500] text-[18px] leading-[21px] flex flex-col gap-y-[23px] uppercase pb-[40px]">
              <li
                className={`flex gap-x-[25px] cursor-pointer ${
                  isProjectsVisible ? "font-bold" : ""
                }`}
                onClick={() => scrollTo(projectsRef)}
              >
                <span className=" w-[20px] h-auto">01</span>Projects
              </li>
              <li
                className={`flex gap-x-[25px]  cursor-pointer ${
                  isTechVisible ? "font-bold" : ""
                }`}
                onClick={() => scrollTo(techRef)}
              >
                <span className=" w-[20px] h-auto">02</span>Tech Stack
              </li>
              <li
                className={`flex gap-x-[25px] cursor-pointer ${
                  isServicesVisible ? "font-bold" : ""
                }`}
                onClick={() => scrollTo(servicesRef)}
              >
                <span className=" w-[20px] h-auto">03</span>Services FAQ
              </li>
              <li
                className={`flex gap-x-[25px]  cursor-pointer ${
                  isContactsVisible ? "font-bold" : ""
                }`}
                onClick={() => scrollTo(contactRef)}
              >
                <span className=" w-[20px] h-auto">04</span>Contact Details
              </li>
            </ul>
          </div>
        </section>
        <div
          id="projects-container"
          className="flex flex-col gap-[40px] md:w-[60%] w-full md:p-[20px] md:mt-[70px] mt-[50px] md:overflow-scroll lg:mr-[50px]"
        >
          <div ref={projectsRef}></div>
          <InView
            as="div"
            initialInView={true}
            threshold={0.4}
            onChange={(inView) => setIsProjectsVisible(inView)}
          >
            <div className="flex flex-col gap-[40px] md:mt-[80px]">
              <ProjectBox
                stack={["Typescript", "NextJS", "Tailwind"]}
                color={"#81F4D6"}
              />{" "}
              <ProjectBox
                stack={["Typescript", "NextJS", "Tailwind"]}
                color={"#96A7FF"}
              />
              <ProjectBox
                stack={["Typescript", "NextJS", "Tailwind"]}
                color={"#FFBF72"}
              />
              <ProjectBox
                stack={["Typescript", "NextJS", "Tailwind"]}
                color={"#FF837D"}
              />
            </div>
          </InView>
          <div ref={techRef}></div>
          <InView
            as="div"
            threshold={0.8}
            onChange={(inView) => setIsTechVisible(inView)}
          >
            <TechStack />
          </InView>
          <div ref={servicesRef}></div>
          <InView
            as="div"
            threshold={0.5}
            onChange={(inView) => setIsServicesVisible(inView)}
          >
            <Services />
          </InView>

          <InView as="div" onChange={(inView) => setIsContactsVisible(inView)}>
            <div ref={contactRef}>
              <Contact />
            </div>
          </InView>
        </div>
      </Main>
    </>
  );
}
