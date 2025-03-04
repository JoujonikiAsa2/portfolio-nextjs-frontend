import React from "react";
import formal from "@/assets/formal-3.png";
import Image from "next/image";
import { useAppSelector } from "@/lib/hook";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  return (
    <div
      className={`w-full h-full md:h-screen flex items-center px-2 pt-28 md:pt-0 md:px-0 ${
        theme === "dark" ? "bg-[#0F0715] text-white" : "bg-[#FFFFFF]"
      }`}
    >
      <div className="flex flex-col md:flex-row gap-6 items-center justify-start max-w-7xl  mx-auto h-full">
        <div className="w-full md:w-1/2">
          <div className="space-y-4">
            <h3 className="text-xl font-bold uppercase text-[#8750F7]">Hi</h3>
            <h5 className="text-xl font-bold uppercase">
              I&apos;m Joujoniki Asa Roy
            </h5>
            <p>Passionate</p>
            <div className={` text-2xl md:text-4xl font-bold uppercase inline-block text-transparent bg-clip-text h-40 flex items-center ${theme === "dark" ? "bg-gradient-to-r from-[#8750F7] to-[#DCCCFD]" : "bg-gradient-to-r from-[#8750F7] to-[#0F0715]"}`}>
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
                style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
              />
            </div>
            <p>
              A personal portfolio is a collection of your work, achievements,
              and skills that highlights your abilities and professional growth.
              It serves as
            </p>
          </div>
        </div>
        <div className=" relative w-full md:flex-1 flex items-center justify-center">
          <div className="w-full flex items-end justify-end z-10 dark:drop-shadow-2xl">
            <Image
              src={formal}
              alt="Formal Pic"
              width={400}
              height={400}
              className="rounded-2xl border-4 border-[#341B66]"
            />
          </div>
          <div
            style={{
              width: 340,
              height: 320,
              position: "absolute",
              opacity: 0.1,
            }}
            className="bg-[#8750F7] blur-3xl"
          ></div>
        </div>
        <div
          style={{
            width: 200,
            height: 200,
            position: "absolute",
            opacity: 0.2,
            top: 0,
            right: 0,
          }}
          className="rounded-br-full bg-[#8750F7] blur-3xl"
        ></div>
      </div>
    </div>
  );
};

export default Banner;
