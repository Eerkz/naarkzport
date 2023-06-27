import React, { useState, useRef } from "react";
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
  const [visibleSection, setVisibleSection] = useState<
    "projects" | "techstack" | "contacts" | "services"
  >("projects");

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
                  visibleSection === "projects" ? "font-bold" : ""
                }`}
                onClick={() => scrollTo(projectsRef)}
              >
                <span className=" w-[20px] h-auto">01</span>Projects
              </li>
              <li
                className={`flex gap-x-[25px]  cursor-pointer ${
                  visibleSection === "techstack" ? "font-bold" : ""
                }`}
                onClick={() => scrollTo(techRef)}
              >
                <span className=" w-[20px] h-auto">02</span>Tech Stack
              </li>
              <li
                className={`flex gap-x-[25px] cursor-pointer ${
                  visibleSection === "services" ? "font-bold" : ""
                }`}
                onClick={() => scrollTo(servicesRef)}
              >
                <span className=" w-[20px] h-auto">03</span>Services FAQ
              </li>
              <li
                className={`flex gap-x-[25px]  cursor-pointer ${
                  visibleSection === "contacts" ? "font-bold" : ""
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
            onChange={(inView) => setVisibleSection("projects")}
          >
            <div className="flex flex-col gap-[40px] md:mt-[50px]">
              <ProjectBox
                link="https://deploy-preview-5--rocketlib-web.netlify.app/"
                stack={["Typescript", "NextJS", "Tailwind", "Firebase", "Redux"]}
                title="RocketLib"
                description="Designed and developed a multi-role platform where users can apply as a learner, volunteer, or sponsor. This includes the creation of various complex forms, specialized dashboards for each user type, and an admin dashboard for managing user applications."
                color={"#81F4D6"}
              />{" "}
              <ProjectBox
                title="NDA"
                stack={["Typescript", "NextJS", "Wordpress", "PHP", "MySQL", "GSAP"]}
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
                stack={["Typescript", "NextJS", "Tailwind", "Firebase", "Redis", "Redux"]}
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
          </InView>
          <div ref={techRef}></div>
          <InView
            as="div"
            threshold={0.8}
            onChange={(inView) => setVisibleSection("techstack")}
          >
            <TechStack />
          </InView>
          <div ref={servicesRef}></div>
          <InView
            as="div"
            threshold={0.6}
            onChange={(inView) => setVisibleSection("services")}
          >
            <Services />
          </InView>

          <InView as="div" onChange={(inView) => setVisibleSection("contacts")}>
            <div ref={contactRef}>
              <Contact />
            </div>
          </InView>
        </div>
      </Main>
    </>
  );
}
