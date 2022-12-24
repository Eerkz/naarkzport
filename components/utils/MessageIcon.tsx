import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";

export default function MessageIcon() {
  const [openForm, setOpenForm] = useState<boolean>(false);
  const defaultValues = {
    name: "",
    subject: "",
    message: "",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(`MESSAGE DATA: `, data);

    reset(defaultValues);
  };

  return (
    <div className="fixed right-[36px] bottom-[40px] z-[1000] flex flex-col ">
      {openForm && (
        <div className="w-[340px] h-auto bg-white rounded-[20px] mr-[54px] border-solid border-[1px] border-black relative">
          <div className="bg-dark-blue w-full h-[89px] rounded-t-[16px] flex flex-col justify-center items-center">
            <h1 className="font-[400] text-[22px] text-white leading-[23px]">
              Shoot me a message!
            </h1>
            <p className="font-[350] text-[14px] text-white">
              I&apos;ll get back to you soon.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="px-[20px] py-[24px]"
          >
            <div className="flex flex-col">
              <label className="font-[500] text-[16px] mb-[10px]">Name</label>
              <input
                className="message-input border-[1px] border-black border-solid h-[35px] px-[10px] text-[14px] focus:outline-0 "
                type="text"
                {...register("name", {
                  required: true,
                })}
              ></input>
              {errors?.name && (
                <p className="mt-[5px] text-[14px] text-red-600">
                  This field is required.
                </p>
              )}
            </div>
            <div className="flex flex-col mt-[11px]">
              <label className="font-[500] text-[16px] mb-[10px]">
                Subject
              </label>
              <input
                className="message-input border-[1px] border-black border-solid h-[35px] px-[10px] text-[14px] focus:outline-0 "
                type="text"
                {...register("subject", {
                  required: true,
                })}
              ></input>
              {errors?.subject && (
                <p className="mt-[5px] text-[14px] text-red-600">
                  This field is required.
                </p>
              )}
            </div>
            <div className="flex flex-col mt-[11px]">
              <label className="font-[500] text-[16px] mb-[10px]">
                Message
              </label>
              <textarea
                className="message-input border-[1px] border-black border-solid px-[10px] text-[14px] focus:outline-0 "
                rows={5}
                {...register("message", {
                  required: true,
                })}
              ></textarea>
              {errors?.message && (
                <p className="mt-[5px] text-[14px] text-red-600">
                  Message is required.
                </p>
              )}
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-dark-blue text-white rounded-[4px] font-[700] text-[14px] px-[20px] py-[10px] mt-[15px]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      )}
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => setOpenForm(!openForm)}
          className="bg-dark-blue w-[54px] h-[54px] text-white  rounded-[50%] flex justify-center items-center "
        >
          {!openForm ? (
            <Image
              src={"/static/images/message-icon.svg"}
              alt="message-icon"
              width={25}
              height={25}
            />
          ) : (
            <Image
              src={"/static/images/close-icon.svg"}
              alt="close-icon"
              width={23}
              height={23}
            />
          )}
        </button>
      </div>
    </div>
  );
}
