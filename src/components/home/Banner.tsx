"use client";
import React from "react";
import formal from "@/assets/formal-3.png";
import Image from "next/image";
import { useAppSelector } from "@/lib/hook";
import { TypeAnimation } from "react-type-animation";
import { DownloadIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { roboto } from "@/app/font";
import Link from "next/link";

type cornerStyle = {
  style: Record<string, unknown>;
  side: string;
};

const Banner = () => {
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
  return (
    <div
      className={`relative  w-full  h-[800px] md:h-[600px] lg:h-[600px] xl:h-[800px] 2xl:h-[900px] ${
        theme === "dark" ? "bg-[#0F0715] text-white" : "bg-white"
      }`}
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full sm:w-[40rem] md:w-[48rem] lg:w-[64rem] xl:w-[80rem] mx-auto h-full px-4 lg:px-0 gap-4">
        <div className="space-y-4 h-[250px] w-full md:w-1/2">
          <h5 className="text-xl font-bold uppercase">
            I&apos;m Joujoniki Asa Roy
          </h5>
          <p
            className={` ${theme === "dark" ? "text-[#dddddd]" : "text-black"}`}
          >
            Passionate
          </p>
          <div
            className={`text-justify text-sm sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-4xl font-bold uppercase inline-block text-transparent bg-clip-text  flex items-center ${
              theme === "dark"
                ? "bg-gradient-to-r from-[#8750F7] to-[#DCCCFD]"
                : "bg-gradient-to-r from-[#8750F7] to-[#0F0715]"
            }`}
          >
            <TypeAnimation
              sequence={[
                "Web developer",
                2000,
                "Frontend Developer",
                2000,
                "Software Engineer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <p
            className={`text-justify ${roboto.className} font-normal  ${
              theme === "dark" ? "text-[#dddddd]" : "text-black"
            }`}
          >
            Always learning and pushing boundaries, I&apos;m excited to build
            innovative, performance-driven web applications. Let&apos;s create
            something amazing together!
          </p>
          <div className="py-4">
            <Link href="/resume.pdf" rel="noopener noreferrer">
              <Button
                className={`bg-transparent border-2 border-[#8750F7] w-fit sm:w-56 ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                Download Resume{" "}
                <span className="hidden sm:block">
                  <DownloadIcon />
                </span>
              </Button>
            </Link>
          </div>
        </div>
        <div className="py-24 relative w-full md:w-1/2 flex justify-center md:justify-end">
        <div
            className="absolute w-[15rem] h-[15rem] lg:w-[24rem] lg:h-[24rem] rounded-2xl bg-gradient-to-r from-purple-500 to-[#864FF4] border-4 border-[#8750F7] transition-all duration-3000 opacity-60"></div>
          <Image
            src={formal}
            alt="Formal Pic"
            width={300}
            height={300}
            className=" w-[15rem] h-[15rem] lg:w-[24rem] lg:h-[24rem] object-cover rounded-2xl border-4 border-[#8750F7] -translate-x-6 translate-y-6 md:-translate-x-10 md:translate-y-10"
          />
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
  );
};

export default Banner;
