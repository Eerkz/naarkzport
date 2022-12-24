import React from "react";
import TechBox from "../utils/TechBox";

export default function TechStack() {
  return (
    <div className="my-[50px]">
      <h1 className="font-medium text-[28px]">
        What makes my work possible...
      </h1>
      <p className="text-[18px] font-normal mt-[21px]">
        Anything that&apos;s not here, you can bet I can learn quickly as
        needed. That&apos;s what we developers do :)
      </p>
      <div className="flex flex-wrap gap-[21px] mt-[43px]">
        <TechBox color="bg-pastel-violet" icon="nextjs.svg" name="Next.js" />
        <TechBox color="bg-dark-gray" />
        <TechBox color="bg-dark-gray" />

        <TechBox color="bg-pastel-yellow" icon="react.svg" name="React.js" />
        <TechBox
          color="bg-strong-pink"
          icon="flutter.svg"
          width={31}
          name="Flutter"
        />
        <TechBox color="bg-pastel-blue" icon="shopify.svg" name="Shopify" />
        <TechBox color="bg-dark-gray" />
        <TechBox color="bg-pastel-orange" icon="redux.svg" name="Redux" />
        <TechBox
          color="bg-pastel-turquoise"
          icon="tailwind.svg"
          name="Tailwind"
        />
        <TechBox color="bg-strong-violet" icon="firebase.svg" name="Firebase" />
        <TechBox color="bg-dark-gray" />
        <TechBox
          color="bg-strong-turquoise"
          icon="graphql.svg"
          name="Graphql"
        />
        <TechBox color="bg-strong-orange" icon="sql.svg" name="SQL" />
        <TechBox color="bg-dark-gray" />
        <TechBox color="bg-pastel-pink" icon="php.svg" name="PHP" />
      </div>
    </div>
  );
}
