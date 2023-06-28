import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Loading from "./Loading";
import { useTheme } from "../../store/ThemeContext";

export default function MessageIcon() {
  const { theme } = useTheme();
  const [openForm, setOpenForm] = useState<boolean | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"" | "success" | "failed">(
    ""
  );
  const defaultValues = {
    name: "",
    subject: "",
    message: "",
    email: "",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData: any) => {
    try {
      setIsLoading(true);
      // const response = await fetch("/api/contact", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(formData),
      // });

      // const data = await response.json();

      // if (!response.ok) {
      //   throw new Error(data.message);
      // }
      setSubmitStatus("success");
      reset(defaultValues);
    } catch (error: any) {
      setSubmitStatus("failed");
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setSubmitStatus("");
      }, 3000);
    }
  };

  return (
    <div className="fixed right-[36px] bottom-[40px] z-[1200] flex flex-col ">
      <div
        className={`
        ${
          openForm === undefined
            ? ""
            : openForm === true
            ? "pop-up"
            : "pop-down"
        } hidden bg-white rounded-[20px] md:mr-[54px] border-solid md:mb-0 mb-[20px] ${
          theme === "light" ? "border-[1px] border-black" : "dark-shadow"
        }`}
      >
        <div
          className={`${
            theme === "light"
              ? "bg-dark-blue text-white"
              : "bg-dark-mode-primary text-dark-mode-secondary"
          } w-full h-[89px] rounded-t-[16px] flex flex-col justify-center items-center`}
        >
          <h1 className="font-[400] text-[22px] leading-[23px]">
            Shoot me a message!
          </h1>
          <p className="font-[350] text-[14px] ">
            I&apos;ll get back to you soon.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="px-[20px] py-[24px] h-[411px] overflow-y-auto"
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
            <label className="font-[500] text-[16px] mb-[10px]">Email</label>
            <input
              className="message-input border-[1px] border-black border-solid h-[35px] px-[10px] text-[14px] focus:outline-0 "
              type="text"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email format",
                },
              })}
            />
            {errors?.email?.message && (
              <p className="mt-[5px] text-[14px] text-red-600">
                {errors.email.message as string}
              </p>
            )}
          </div>
          <div className="flex flex-col mt-[11px]">
            <label className="font-[500] text-[16px] mb-[10px]">Subject</label>
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
            <label className="font-[500] text-[16px] mb-[10px]">Message</label>
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
          <div className="w-full text-center my-2">
            {submitStatus && (
              <p
                className={
                  submitStatus === "success"
                    ? "text-emerald-500"
                    : "text-red-500"
                }
              >
                {submitStatus === "success"
                  ? "Thanks! I'll reach out to you soon :)"
                  : "An error occured. Please try again later."}
              </p>
            )}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className={`bg-dark-blue text-white rounded-[4px] font-[700] flex items-center justify-center text-[14px] px-[20px] py-[10px] ${
                submitStatus ? "mt-2" : "mt-3"
              }`}
            >
              {isLoading && (
                <span className="flex items-center justify-center mr-2">
                  <Loading size="w-4" />
                </span>
              )}
              Send Message
            </button>
          </div>
        </form>
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => setOpenForm(!openForm)}
          className={`${
            theme === "light" ? "bg-dark-blue" : "bg-dark-mode-secondary-light"
          } w-[54px] h-[54px] rounded-[50%] flex justify-center items-center dark-shadow`}
        >
          {!openForm ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM4 7H16V9H4V7ZM12 12H4V10H12V12ZM16 6H4V4H16V6Z"
                fill={"white"}
              />
            </svg>
          ) : (
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 1.71214L15.2879 0L8.5 6.78786L1.71214 0L0 1.71214L6.78786 8.5L0 15.2879L1.71214 17L8.5 10.2121L15.2879 17L17 15.2879L10.2121 8.5L17 1.71214Z"
                fill={"white"}
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
