import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="my-[50px]">
      <h1 className="font-medium text-[28px]">Contact Details</h1>
      <p className="text-[18px] font-normal mt-[21px]">
        You can contact me in any of these platform!
      </p>
      <ul
        className="flex text-[28px] gap-[20px] mt-[20px]"
        id="social-icons-list"
      >
        <li id="linkedin" className="social-icon ">
          <a href="https://www.linkedin.com/in/wilma-a-0b6576220/">
            <Image
              src={"/static/images/social/linkedin.svg"}
              alt="linkedin-icon"
              width={30}
              height={30}
            />
          </a>
        </li>
        <li id="email" className="social-icon ">
          <a href="#">
            <CopyToClipboard
              text={"https://www.linkedin.com/in/wilma-a-0b6576220/"}
            >
              <Image
                src={"/static/images/social/discord.svg"}
                alt="discord-icon"
                width={30}
                height={30}
              />
            </CopyToClipboard>
          </a>
        </li>
        <li id="discord" className="social-icon ">
          <a href="#">
            <CopyToClipboard text={"Naark#7945"}>
              <Image
                src={"/static/images/social/email.svg"}
                alt="email-icon"
                width={30}
                height={30}
              />
            </CopyToClipboard>
          </a>
        </li>
        <li id="whatsapp" className="social-icon ">
          <a href="#">
            <Image
              src={"/static/images/social/whatsapp.svg"}
              alt="whatsapp-icon"
              width={30}
              height={30}
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
