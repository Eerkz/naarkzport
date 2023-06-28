import React, { useState } from "react";
import { useTheme } from "../../store/ThemeContext";

export default function Accordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const { theme } = useTheme();
  const [expandContent, setExpandContent] = useState<boolean | undefined>(
    false
  );
  return (
    <div
      className={`accordion  flex flex-col sm:px-[32px] fold:px-[22px] px-[16px] ${
        theme === "light"
          ? "border-[1px] border-black text-dark-mode-secondary accordion-shadow"
          : "bg-dark-mode-secondary-light text-white dark-shadow"
      }`}
      onClick={() => setExpandContent(!expandContent)}
    >
      <div className="flex justify-between w-full h-[79px] items-center sm:p-[20px] p-[12px] accordion-title relative cursor-pointer">
        <h1 className="leading-none">{title}</h1>

        <svg
          width="18"
          height="18"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`min-h-[18px] min-w-[18px] ${
            expandContent ? "accordion-plus-expand" : "accordion-plus-collapse"
          }`}
        >
          <path
            d="M13.4389 0.568889H10.7327V11.2977H0.00385595V14.0039H10.7327V24.7327H13.4389V14.0039H24.1677V11.2977H13.4389V0.568889Z"
            fill={theme === "light" ? "#151515" : "#FFDE5B"}
          />
        </svg>
      </div>
      <div
        className={`accordion-content w-full ${
          expandContent
            ? "accordion-content-expand"
            : "accordion-content-collapse"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
