import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Image from "next/image";
import { useTheme } from "../../store/ThemeContext";
import socials from "../../data/contact.json";

export default function Contact() {
  const { theme } = useTheme();
  const borderStyle = theme === "light" ? "social-icon-drop-light" : "";
  return (
    <div>
      <h1 className="font-medium text-[28px]">Contact Details</h1>
      <p className="text-[18px] font-normal mt-[21px]">
        You can contact me in any of these platform!
      </p>
      <ul
        className="flex text-[28px] gap-[20px] mt-[20px] flex-wrap"
        id="social-icons-list"
      >
        {socials.map((contact) => (
          <li key={contact.name} className={`social-icon ${borderStyle}`}>
            <div className="social-inner">
              <div className="social-content social-front">
                <CopyToClipboard text={contact.copy}>
                  <Image
                    src={contact.icon}
                    alt={`${contact.name}_icon`}
                    width={30}
                    height={30}
                  />
                </CopyToClipboard>
              </div>
              <div className="social-content social-back">
                <CopyToClipboard text={contact.copy}>
                  <Image
                    src={"/static/images/social/copy.svg"}
                    alt="copy-icon"
                    width={25}
                    height={25}
                  />
                </CopyToClipboard>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
