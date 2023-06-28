import React, { useState, useRef } from "react";
import Main from "../components/layouts/Main";
import ProjectBox from "../components/utils/ProjectBox";
import TechStack from "../components/layouts/TechStack";
import Services from "../components/layouts/Services";
import Contact from "../components/layouts/Contact";
import { useTheme } from "../store/ThemeContext";

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
              Hi, I&apos;m Name.
            </h1>
            <p className={`font-[300] text-lg leading-tight mt-3`}>
              I&apos;m a skilled front-end engineer with 1 year experience,{" "}
              <br className="xl:block hidden" />
              specializing in building full-stack applications{" "}
              <br className="xl:block hidden" /> using Next.js and Typescript.
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
          <ProjectBox
            link="https://deploy-preview-5--rocketlib-web.netlify.app/"
            stack={["Typescript", "NextJS", "Tailwind", "Firebase", "Redux"]}
            title="RocketLib"
            description="Designed and developed a multi-role platform where users can apply as a learner, volunteer, or sponsor. This includes the creation of various complex forms, specialized dashboards for each user type, and an admin dashboard for managing user applications."
            color={"#81F4D6"}
          />{" "}
          <ProjectBox
            title="NDA"
            stack={[
              "Typescript",
              "NextJS",
              "Wordpress",
              "PHP",
              "MySQL",
              "GSAP",
            ]}
            description="Designed and implemented custom plugins and themes in WordPress and leveraged it as a headless CMS for a Next.js front-end. Extended the Gutenberg editor, built with React.js and Redux, by creating multiple complex forms within the editor. Customized WordPress's default admin dashboard and created several custom admin pages with custom roles and access. Additionally, developed additional protected endpoints in the WordPress API to be used by the Next.js frontend. Integrated Stripe payment in the frontend and WordPress admin to allow users to purchase products and gain additional access to protected resources."
            color={"#96A7FF"}
          />
          <ProjectBox
            title="TechcoPH"
            link="https://deploy-preview-2--sparkling-belekoy-f645ab.netlify.app/"
            description="Built a user-friendly website that lists registered companies in the Philippines with relevant details valuable for job seekers. This dynamic platform has a flexible filtering system allowing users to stack multiple filters to refine their company search. Another feature allows companies to submit their information to be included in the database."
            stack={["Typescript", "NextJS", "Tailwind", "Airtable", "Redis"]}
            color={"#FFBF72"}
          />
          <ProjectBox
            title="TechcoTours"
            link="https://feature-landing--wondrous-treacle-8d6d47.netlify.app/"
            description="Designed and developed a web application that helps job seekers explore different companies and for companies to showcase their workplace to potential candidates. Features include several functional dashboards as follows: (1) Job-seeker dashboard for resume management, company catalog browsing, and event registration; (2) Employer dashboard for company page creation, job listing, and event scheduling; (3) Admin dashboard for data management. "
            stack={[
              "Typescript",
              "NextJS",
              "Tailwind",
              "Firebase",
              "Redis",
              "Redux",
            ]}
            color={"#eaedff"}
          />
          <ProjectBox
            title="reddit-archiver"
            link="https://www.reddit-archiver.xyz/"
            description="an app that allows a reddit user to archive some of their account data, batch saved posts/comments, and batch subscribe to subreddits."
            stack={["Typescript", "NextJS", "Tailwind"]}
            color={"#FF837D"}
          />
          <ProjectBox
            title="jeyocommerce"
            link="https://jeyoecommerce-13lj6lkbz-eerkz.vercel.app/"
            description="built the UI and the store search/filtering functionalities using Zustand for state management."
            stack={["Typescript", "NextJS", "Tailwind", "Zustand"]}
            color={"#ffbf72"}
          />
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
