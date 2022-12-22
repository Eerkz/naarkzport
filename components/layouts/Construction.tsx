import React, { useState, useEffect } from "react";

import Image from "next/image";
export default function Construction() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currImage, setCurrImage] = useState<string>("");

  const fetchRandomPicture = async () => {
    setCurrImage("");
    setIsLoading(true);

    const response = await fetch("https://dog.ceo/api/breeds/image/random");

    const data = await response.json();
    if (data.status == "success") {
      setCurrImage(data.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    async function fetchInitialPicture() {
      await fetchRandomPicture();
    }
    fetchInitialPicture();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <div
        id="construction-dog"
        className="w-[280px] flex justify-center items-center relative h-[217px] rounded-[20px] bg-white object-cover bg-no-repeat bg-center border-solid border-[1px] border-black"
      >
        <div
          {...(currImage
            ? { style: { backgroundImage: `url(${currImage})` } }
            : {})}
          className="w-full h-full absolute inset-0 rounded-[20px]"
        ></div>
        <p>Fetching you the goodest boi...</p>
      </div>
      <p className="text-dark-blue font-[400] text-[20px] leading-[23.2px] mb-[17px] mt-[20px]">
        Site is still under construction. For the meantime,
        <br /> enjoy these random pictures of dogs with jobs!
      </p>
      <button
        type="button"
        onClick={fetchRandomPicture}
        className="w-[55px] rounded-[12px] bg-dark-blue h-[55px] text-white flex justify-center items-center"
      >
        <Image
          src={"/static/images/refresh-icon.svg"}
          alt="refresh-icon"
          width={22}
          height={22}
        />
      </button>
    </div>
  );
}
