import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Image from "next/image";
import { useTheme } from "../../store/ThemeContext";

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
        <li id="linkedin" className={`social-icon ${borderStyle}`}>
          <div className="social-inner">
            <div className="social-content social-front">
              <Image
                src={"/static/images/social/linkedin.svg"}
                alt="linkedin-icon"
                width={30}
                height={30}
              />
            </div>
            <div className="social-content social-back">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <Image
                  src={"/static/images/social/link.svg"}
                  alt="link-icon"
                  width={25}
                  height={25}
                />
              </a>
            </div>
          </div>
        </li>
        <li id="email" className={`social-icon ${borderStyle}`}>
          <div className="social-inner">
            <div className="social-content social-front">
              <Image
                src={"/static/images/social/discord.svg"}
                alt="discord-icon"
                width={30}
                height={30}
              />
            </div>
            <div className="social-content social-back">
              <Image
                src={"/static/images/social/copy.svg"}
                alt="copy-icon"
                width={25}
                height={25}
              />
            </div>
          </div>
        </li>
        <li id="discord" className={`social-icon ${borderStyle}`}>
          <div className="social-inner">
            <div className="social-content social-front">
              <CopyToClipboard text={"naark.dev@gmail.com"}>
                <Image
                  src={"/static/images/social/email.svg"}
                  alt="email-icon"
                  width={30}
                  height={30}
                />
              </CopyToClipboard>
            </div>
            <div className="social-content social-back">
              <Image
                src={"/static/images/social/copy.svg"}
                alt="copy-icon"
                width={25}
                height={25}
              />
            </div>
          </div>
        </li>
        <li id="whatsapp" className={`social-icon ${borderStyle}`}>
          <div className="social-inner">
            <div className="social-content social-front">
              <Image
                src={"/static/images/social/whatsapp.svg"}
                alt="whatsapp-icon"
                width={30}
                height={30}
              />
            </div>
            <div className="social-content social-back">
              <Image
                src={"/static/images/social/copy.svg"}
                alt="copy-icon"
                width={25}
                height={25}
              />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
