"use client";
import { useAppSelector } from "@/lib/hook";
import React from "react";
import SectionTitle from "@/components/shared/SectionTitle";

import {
  IoLogoCss3,
  IoLogoFirebase,
  IoLogoGithub,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoReact,
} from "react-icons/io5";
import { BiLogoTailwindCss, BiLogoRedux } from "react-icons/bi";
import { FaBootstrap, FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { ArrowUpRightFromCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import style1 from "@/assets/1.png";
import Lottie from "lottie-react";
import skillsAnimation from "@/assets/skills.json";

const Skills = () => {
  const theme = useAppSelector((state) => state.theme.theme);

  const skills = [
    {
      label: "HTML",
      icon: <IoLogoHtml5 className="size-10 text-yellow-400" />,
    },
    {
      label: "JavaScript",
      icon: <IoLogoJavascript className="size-10 text-yellow-400" />,
    },
    {
      label: "TypeScript",
      icon: <IoLogoJavascript className="size-10 text-blue-400" />,
    },
    { label: "React", icon: <IoLogoReact className="size-10 text-blue-400" /> },
    { label: "CSS", icon: <IoLogoCss3 className="size-10 text-yellow-400" /> },
    {
      label: "TailwindCSS",
      icon: <BiLogoTailwindCss className="size-10 text-blue-400" />,
    },
    {
      label: "Bootstrap",
      icon: <FaBootstrap className="size-10 text-purple-700" />,
    },
    {
      label: "Redux",
      icon: (
        <BiLogoRedux
          className={`size-10 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        />
      ),
    },
    {
      label: "GitHub",
      icon: (
        <IoLogoGithub
          className={`size-10 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        />
      ),
    },
    {
      label: "MongoDB",
      icon: <SiMongodb className="size-10 text-green-600" />,
    },
    {
      label: "Express",
      icon: (
        <SiExpress
          className={`size-10 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        />
      ),
    },
    { label: "NodeJs", icon: <FaNode className="size-10 text-green-600" /> },
    {
      label: "Firebase",
      icon: <IoLogoFirebase className="size-10 text-yellow-500" />,
    },
  ];

  return (
    <div className="h-full w-full flex flex-col items-center justify-between">
      <div className="w-full pb-10 flex justify-start">
        <SectionTitle subTitle="" title="My Skills" />
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 rounded-xl">
        <Lottie animationData={skillsAnimation} loop={true}/>
        <div className="col-span-2 grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8 gap-2 justify-center items-center rounded-xl">
          {skills.map((skill, index) => (
            <div
              key={index}
            >
              <div
                className={`w-20 h-20 hover:bg-gradient-to-b from-purple-500/50 to-gray-900 transition-all flex items-center justify-center rounded-full ${
                  theme === "dark" ? "dark-card" : "light-card"
                }`}
              >
                {skill.icon}
              </div>
            </div>
          ))}
          <Link href="/skills">
            <div
              className={`w-24 h-24 flex flex-col gap-1 transition-all flex items-center justify-center rounded-xl ${
                theme === "dark" ? "dark-card" : "light-card"
              }`}
            >
              <ArrowUpRightFromCircle />
              <p className={`text-sm text-center pt-2 text-purple-500`}>
                See All
              </p>
            </div>
          </Link>
        </div>
      </div>
      <Image
        src={style1}
        alt="Style"
        width={100}
        height={200}
        className="absolute top-0 left-0 opacity-40 w-[10rem] h-[12rem] lg:w-[18rem] lg:h-[20rem] object-contain"
      />
    </div>
  );
};

export default Skills;
