/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useAppSelector } from "@/lib/hook";
import photo from "@/assets/convocation.png";
import Image from "next/image";
// import { roboto } from "@/app/font";
import CustomForm from "../shared/form/CustomForm";
import CustomInput from "../shared/form/CustomInput";
import { useForm } from "react-hook-form";
import CustomTextArea from "../shared/form/CustomTextArea";
import { Button } from "../ui/button";


type cornerStyle = {
  style: Record<string, unknown>;
  side: string;
};
const ContactMe = () => {
  const form = useForm();
  const theme = useAppSelector((state) => state.theme.theme);
  const dots = Array.from({ length: 10 });
  const corners: cornerStyle[] = [
    {
      style: {
        width: 200,
        height: 200,
        position: "absolute",
        opacity: 0.2,
        bottom: 0,
        left: 0,
      },
      side: "br",
    },
    {
      style: {
        width: 200,
        height: 200,
        position: "absolute",
        opacity: 0.2,
        top: 0,
        right: 0,
      },
      side: "bl",
    },
  ];
  const predefinedPositions = [
    "10%",
    "20%",
    "30%",
    "40%",
    "50%",
    "60%",
    "70%",
    "80%",
    "90%",
  ];

  const handleContactForm = (data: any) => {
    console.log(data)
  }

  return (
    <div
      className={`relative  w-full  h-full 2xl:h-screen flex flex-col items-center justify-center px-2 py-28 lg:py-0 md:px-4 lg:px-0 ${
        theme === "dark" ? "bg-[#0F0715] text-white" : "bg-white"
      }`}
    >
      <div className="flex flex-col lg:flex-row gap-6 items-center justify-center w-full sm:w-[40rem] md:w-[48rem] lg:w-[64rem] xl:w-[80rem] mx-auto h-full">
        <div className="h-full w-full flex flex-col-reverse items-center md:flex-row justify-between">
          <div className={`w-full text-justify md:w-[60%] p-10 rounded-2xl ${
        theme === "dark"
          ? "bg-[#050709] text-white shadow-lg shadow-[#201134]" 
          : "bg-[#F6F3FC] text-black shadow-lg shadow-[#050709]"
      }`}>
            <h5 className="text-3xl lg:text-4xl capitalize pb-8">Contact Me</h5>
            <CustomForm onSubmit={handleContactForm}>
              <CustomInput label="Name" placeholder="Name" name="name" form={form} />
              <CustomInput label="Email" placeholder="Email" name="email" form={form} />
              <CustomInput label="Subject" placeholder="Subject" name="subject" form={form} />
              <CustomTextArea label="Message" placeholder="Message" name="message" form={form} /> 
              <Button className="w-full rounded-lg">Send Message</Button>
            </CustomForm>
          </div>
          <div className=" w-[40%] relative w-full md:flex-1 flex justify-center lg:justify-end">
            <div className="h-[400px] rounded-2xl bg-gray-300 mb-6 lg:mb-0">
              <Image
                src={photo}
                alt="Formal Pic"
                width={300}
                height={300}
                className="border h-full"
              />
            </div>
          </div>
          {corners.map((item, index) => (
            <div
              key={index}
              style={item?.style}
              className={`rounded-${item?.side}-full bg-[#8750F7] blur-3xl`}
            ></div>
          ))}
          {dots.map((dot, index) => {
            const randomTop =
              predefinedPositions[
                Math.floor(Math.random() * predefinedPositions.length)
              ];
            const randomLeft =
              predefinedPositions[
                Math.floor(Math.random() * predefinedPositions.length)
              ];
            return (
              <div
                key={index}
                style={{
                  width: 10 + Math.floor(Math.random() * 10),
                  aspectRatio: 1,
                  position: "absolute",
                  opacity: 0.2,
                  top: randomTop,
                  left: randomLeft,
                  transition: "all 2s",
                }}
                className="rounded-full bg-[#8750F7]  animate-pulse"
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
