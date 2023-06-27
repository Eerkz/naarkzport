import React from "react";
import TechBox from "../utils/TechBox";

export default function TechStack() {
  return (
    <div className="my-[40px]">
      <h1 className="font-medium text-[28px]">
        What makes my work possible...
      </h1>
      <p className="text-[18px] font-normal mt-[21px]">
        Anything that&apos;s not here, you can bet I can learn quickly as
        needed. That&apos;s what we developers do.
      </p>
      <small className="italic">
        Note: Any grayed out boxes means i&apos;m currently learning them...
      </small>
      <div className="flex flex-wrap gap-[21px] mt-[43px] md:justify-start justify-center">
        <TechBox color="bg-pastel-violet" icon="nextjs.svg" name="Next.js" />
        <TechBox color="bg-dark-gray" icon="mongodb.svg" name="MongoDB" />
        <TechBox
          color="bg-dark-gray"
          icon="aws.svg"
          name="Services: S3, EC2, RDS"
        />

        <TechBox color="bg-pastel-yellow" icon="react.svg" name="React.js" />
        <TechBox
          color="bg-strong-pink"
          icon="redis.svg"
          width={31}
          name="Redis"
        />
        <TechBox color="bg-dark-gray" icon="express.svg" name="Express.js" />
        <TechBox color="bg-pastel-pink" icon="jest.svg" name="Jest" />
        <TechBox color="bg-pastel-orange" icon="redux.svg" name="Redux" />
        <TechBox
          color="bg-pastel-turquoise"
          icon="tailwind.svg"
          name="Tailwind"
        />
        <TechBox color="bg-strong-violet" icon="firebase.svg" name="Firebase" />
        <TechBox color="bg-pastel-turquoise" icon="typescript.svg" name="Typescript"/>
        <TechBox color="bg-dark-gray" icon="docker.svg" name="Docker" />
        <TechBox color="bg-strong-orange" icon="sql.svg" name="SQL" />
        <TechBox color="bg-pastel-violet" icon="git.svg" name="Git"/>
        <TechBox color="bg-pastel-pink" icon="php.svg" name="PHP" />
      </div>
    </div>
  );
}
