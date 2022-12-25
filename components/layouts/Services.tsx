import React from "react";
import Accordion from "../utils/Accordion";

export default function Services() {
  return (
    <div className="mb-[50px]">
      {" "}
      <h1 className="font-medium text-[28px]">Services</h1>
      <p className="text-[18px] font-normal mt-[21px]">
        No matter what you need, I work to find the{" "}
        <span className="underline">best and most affordable</span> solution for
        you, and you will get a website that is ready to launch.
      </p>
      <div className="mt-[30px]">
        <Accordion title="What services do i offer?">
          <ul className="list-disc pl-4">
            <li>
              <span className="font-bold">UI Development</span>
              <p>
                Build the website&apos; UI using a variety of editing tools such
                as Figma and Photoshop.
              </p>
            </li>
            <li>
              <span className="font-bold">Frontend Development</span>
              <p>Implementation of graphic design and UI elements</p>
            </li>
            <li>
              <span className="font-bold">Headless Content Management</span>
              <p>
                Accessible and editable content via an API for display on any
                device
              </p>
            </li>
            <li>
              <span className="font-bold">Backend Development</span>
              <p>Server-side logic, database and API development.</p>
            </li>
            <li>
              <span className="font-bold">Testing and Automation</span>
              <p>Continuous scripted quality assurance.</p>
            </li>
          </ul>
        </Accordion>
        <Accordion title="How long does a project take?">
          Each project is different, it can take up to 1 week to months
          depending on the complexity of the project. A static site could take
          1-2 weeks depending on the design while complex web apps and ecommerce
          sites could take months.
        </Accordion>
        <Accordion title="Will the website be responsive?">
          Yes, it&apos; standard for all website to be mobile responsive
          nowaways :)
        </Accordion>
        <Accordion title="Who pays for hosting, domain, etc.?">
          <p>
            This will depend on you. Most clients would prefer that these costs
            would be included as operations cost (with additional maintenance
            cost!) that I will charge to you. However, if you prefer to manage
            your own hosting and domain, then we can surely arrange that :)
          </p>
        </Accordion>
        <Accordion title="Can I change the content once finished?">
          <p>
            If you want to change the content, then we can arrange a headless
            CMS system. We can use any popular CMS such as Wordpress, Strapi,
            Sanity, etc. However, this could come with an additional cost which
            would vary on each CMS.
          </p>
        </Accordion>
        <Accordion title="How often do I update?">
          <p>I will be regularly updating you weekly. </p>
        </Accordion>
        <Accordion title="How does the payment work? What's the rate?">
          <p>
            Rate will depend on the project&apos; complexity. My rate usually
            goes for $8-$10/hr. However, a one time payment could also be
            arranged. A single page for a static site would cost $150-$200
            depending on the complexity of the page. Additionally, a 40%
            downpayment is required if one time payment. If the hourly rate is
            chosen, 40% payment of the estimated time of completion will be
            required. The rest of the payment will be paid weekly.
          </p>
          <p>
            {" "}
            Available payment methods include Paypal, Gcash, and Direct Bank
            Transfer.
          </p>
        </Accordion>
      </div>
    </div>
  );
}
