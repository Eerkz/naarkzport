import React, { useState, useRef } from "react";
import Main from "../components/layouts/Main";
import TechStack from "../components/layouts/TechStack";
import Services from "../components/layouts/Services";
import Contact from "../components/layouts/Contact";
import { useTheme } from "../store/ThemeContext";
import Projects from "../components/layouts/Projects";

export default function Home() {
  const { theme } = useTheme();
  const parentDivRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [visibleSection, setVisibleSection] = useState<
    "projects" | "techstack" | "contacts" | "services"
  >("projects");

  const scrollTo = (ref: any) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleScroll = () => {
    const parentDiv = parentDivRef.current;
    if (parentDiv) {
      const scrollPosition = parentDiv.scrollTop;
      const parentHeight = parentDiv.offsetHeight;
      const scrollableHeight = parentDiv.scrollHeight;

      const isElementVisible = (elementRef: React.RefObject<HTMLElement>) => {
        if (elementRef.current) {
          const elementTop = elementRef.current.offsetTop;
          const elementBottom =
            elementTop + elementRef.current.offsetHeight - 100;
          return elementBottom >= scrollPosition + 140;
        }

        return false;
      };

      const hasReachedBottom =
        scrollPosition + parentHeight >= scrollableHeight - 80;
      if (hasReachedBottom) {
        setVisibleSection("contacts");
      } else if (isElementVisible(projectsRef)) {
        setVisibleSection("projects");
      } else if (isElementVisible(techRef)) {
        setVisibleSection("techstack");
      } else if (isElementVisible(servicesRef)) {
        setVisibleSection("services");
      }
    }
  };

  return (
    <Main>
      <aside className="fixed-container flex flex-col md:w-[40%] w-full md:p-[20px] md:mt-[70px] mt-[180px] md:overflow-scroll lg:mr-[50px]">
        <div className="md:mt-[140px]">
          <div className="mb-[51px]">
            <h1 className="font-bold text-[48px] leading-none">
              Hi, I&apos;m Naarkz.
            </h1>
            <p className={`font-[300] text-lg leading-tight mt-3`}>
              I&apos;m a skilled front-end engineer with 2 years of experience,{" "}
              {/* <br className="nest:block hidden" /> */}
              specializing in building full-stack applications{" "}
              <br className="nest:block hidden" /> using Next.js and Typescript.
            </p>
          </div>
          <ul className="font-[500] text-[18px] leading-[21px] flex flex-col gap-y-[18px] uppercase">
            <li
              className={`flex gap-x-[25px] cursor-pointer ${
                visibleSection === "projects"
                  ? `font-bold ${
                      theme === "dark" ? "text-dark-mode-primary" : ""
                    }`
                  : ""
              }`}
              onClick={() => scrollTo(projectsRef)}
            >
              <span className=" w-[20px] h-auto">01</span>Projects
            </li>
            <li
              className={`flex gap-x-[25px]  cursor-pointer ${
                visibleSection === "techstack"
                  ? `font-bold ${
                      theme === "dark" ? "text-dark-mode-primary" : ""
                    }`
                  : ""
              }`}
              onClick={() => scrollTo(techRef)}
            >
              <span className=" w-[20px] h-auto">02</span>Tech Stack
            </li>
            <li
              className={`flex gap-x-[25px] cursor-pointer ${
                visibleSection === "services"
                  ? `font-bold ${
                      theme === "dark" ? "text-dark-mode-primary" : ""
                    }`
                  : ""
              }`}
              onClick={() => scrollTo(servicesRef)}
            >
              <span className=" w-[20px] h-auto">03</span>Services FAQ
            </li>
            <li
              className={`flex gap-x-[25px]  cursor-pointer ${
                visibleSection === "contacts"
                  ? `font-bold ${
                      theme === "dark" ? "text-dark-mode-primary" : ""
                    }`
                  : ""
              }`}
              onClick={() => scrollTo(contactRef)}
            >
              <span className=" w-[20px] h-auto">04</span>Contact Details
            </li>
          </ul>
        </div>
      </aside>
      <aside
        onScroll={handleScroll}
        ref={parentDivRef}
        className="fixed-container flex flex-col md:w-[60%] w-full md:p-[20px] md:mt-[70px] mt-[50px] md:overflow-scroll lg:mr-[50px]"
      >
        <div
          className="flex flex-col gap-y-[40px] md:pt-[50px]"
          ref={projectsRef}
        >
          <Projects />
        </div>
        <div ref={techRef} className="pt-[60px]">
          <TechStack />
        </div>

        <div ref={servicesRef} className="pt-[60px]">
          <Services />
        </div>

        <div ref={contactRef} className="pt-[80px]">
          <Contact />
        </div>
      </aside>
    </Main>
  );
}
