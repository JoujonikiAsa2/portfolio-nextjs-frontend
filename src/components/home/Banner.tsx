"use client";
import React, { useState } from "react";
import formal from "@/assets/formal-3.png";
import Image from "next/image";
import { useAppSelector } from "@/lib/hook";
import { TypeAnimation } from "react-type-animation";
import { DownloadIcon } from "lucide-react";
import { roboto } from "@/app/font";
import Particle from "@/components/home/Particle";
import useFetch from "@/hooks/useFetch";
import { downloadResume, getProfile } from "@/services/profile";
type cornerStyle = {
  style: Record<string, unknown>;
  side: string;
};

const Banner = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  const [loading, setLoading] = useState(true);
  const { response } = useFetch(getProfile);
  const profile = response?.data?.resume;
  const driveId = profile
    ? profile.split("/")[5]
    : "1NU54qUGNNl8ddNr3DLTwlMfTWPWfbK9T";

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


  const resumeDownloadHandler = async () => {
    console.log("resume dowloaded...");
    const link = document.createElement("a");
    link.href = `https://drive.google.com/uc?export=download&id=${driveId}`;
    link.download = "Joujoniki Asa Roy.pdf";
    const res = await downloadResume(response?.data?._id);
    console.log(res);
    link.click()
    setLoading(false);
  };

  return (
    <div
      className={`relative  w-full  h-[900px] xs:h-[800px] md:h-[600px] lg:h-[600px] xl:h-[800px] 2xl:h-[900px] 
        ${theme === "dark" ? "dark-background" : "light-background"}
      }`}
    >
      <div className="absolute right-0 top-0 h-full z-0 pointer-events-none">
        <Particle />
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full sm:w-[40rem] md:w-[48rem] lg:w-[64rem] xl:w-[80rem] mx-auto h-full px-4 lg:px-0 gap-4 z-50">
        <div className="space-y-4 h-[250px] w-full md:w-1/2">
          <h5
            className={`text-xl font-bold uppercase ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            I&apos;m Joujoniki Asa Roy
          </h5>
          <p
            className={` ${theme === "dark" ? "text-[#dddddd]" : "text-black"}`}
          >
            Passionate
          </p>
          <div
            className={`text-justify text-sm sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-4xl font-bold uppercase  text-transparent bg-clip-text  flex items-center ${
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
            className={`text-base text-justify ${
              roboto.className
            } font-normal  ${
              theme === "dark" ? "text-[#dddddd]" : "text-black"
            }`}
          >
            Always learning and pushing boundaries, I&apos;m excited to build
            innovative, performance-driven web applications. Let&apos;s create
            something amazing together!
          </p>
          <div className="py-4">
            <button
              className={` relative hover:cursor-pointer hover:bg-[#8750F7]/50 bg-transparent border border-[#8750F7] rounded w-fit sm:w-56 flex gap-2 justify-center items-center p-2 transition-all ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
              onClick={resumeDownloadHandler}
            >
              {loading ? (
                <>
                  {" "}
                  Download Resume
                  <span className="hidden sm:block animation-bounce">
                    <DownloadIcon />
                  </span>{" "}
                </>
              ) : (
                <span>Downloaded</span>
              )}
            </button>
          </div>
        </div>
        <div className="py-12 xs:py-24 relative w-full md:w-1/2 flex justify-center md:justify-end ">
          <div
            className={`absolute w-[15rem] h-[15rem] lg:w-[24rem] lg:h-[24rem] rounded-2xl bg-[#8750F7]/70 transition-all duration-3000 opacity-60 `}
          ></div>
          <Image
            src={response?.data?.thumbnail || formal}
            alt="Formal Pic"
            width={300}
            height={300}
            className=" w-[15rem] h-[15rem] lg:w-[24rem] lg:h-[24rem] object-cover  rounded-2xl -translate-x-6 translate-y-6 md:-translate-x-10 md:translate-y-10"
          />
        </div>
        {corners.map((item, index) => (
          <div
            key={index}
            style={item?.style}
            className={`rounded-${item?.side}-full bg-[#8750F7] blur-3xl`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
