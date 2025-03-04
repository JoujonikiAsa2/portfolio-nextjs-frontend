import React from "react";
import formal from "@/assets/formal-3.png";
import Image from "next/image";
import { useAppSelector } from "@/lib/hook";
import { TypeAnimation } from "react-type-animation";
import { DownloadIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Banner = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  return (
    <div
      className={`relative  w-full h-full md:h-screen flex items-center justify-center px-2 py-28 md:py-6 lg:py-0 md:px-4 lg:px-0 ${
        theme === "dark" ? "bg-[#0F0715] text-white" : "bg-white"
      }`}
    >
      <div className="flex flex-col md:flex-row gap-6 items-center justify-center container lg:mx-[10vw] 2xl:mx-[16vw] h-full">
        <div className="w-full text-center md:text-left md:w-1/2">
          <div className="space-y-4 w-full">
            <h3 className="text-xl font-bold uppercase text-[#8750F7]">Hi</h3>
            <h5 className="text-xl font-bold uppercase">
              I&apos;m Joujoniki Asa Roy
            </h5>
            <p>Passionate</p>
            <div className={`text-sm sm:text-2xl md:text-3xl lg:text-5xl font-bold uppercase inline-block text-transparent bg-clip-text  flex items-center ${theme === "dark" ? "bg-gradient-to-r from-[#8750F7] to-[#DCCCFD]" : "bg-gradient-to-r from-[#8750F7] to-[#0F0715]"}`}>
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
            <p>
              A personal portfolio is a collection of your work, achievements,
              and skills that highlights your abilities and professional growth.
              It serves as
            </p>
            <div className="pt-4">
              <Button className={`bg-transparent border-2 border-[#8750F7] w-fit sm:w-56 ${theme==="dark" ? "text-white" : "text-black"}`}>Download Resume <span className="hidden sm:block"><DownloadIcon/></span></Button>
            </div>
          </div>
        </div>
        <div className=" relative w-full md:flex-1 flex items-center justify-center">
          <div className="w-full flex items-end justify-center md:justify-end z-10 dark:drop-shadow-2xl">
            <Image
              src={formal}
              alt="Formal Pic"
              width={300}
              height={300}
              className="rounded-2xl border-4 border-[#341B66]"
            />
          </div>
          <div
            style={{
              maxWidth: 340,
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
        <div
          style={{
            width: 200,
            height: 200,
            position: "absolute",
            opacity: 0.2,
            bottom : 0,
             left:0,
          }}
          className="rounded-bl-full bg-[#8750F7] blur-3xl"
        ></div>
        <div
          style={{
            width: 200,
            height: 200,
            position: "absolute",
            opacity: 0.2,
            top:300,
            left:800
          }}
          className="hidden lg:block rounded-full bg-[#8750F7] blur-3xl"
        ></div>
      </div>
    </div>
  );
};

export default Banner;
