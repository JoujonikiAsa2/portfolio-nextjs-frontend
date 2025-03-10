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
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaBootstrap, FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import LightContainer from "../shared/LightContainer";

const skills = [
  { label: "HTML", icon: <IoLogoHtml5 className="size-12 text-yellow-400" /> },
  {
    label: "JavaScript",
    icon: <IoLogoJavascript className="size-12 text-yellow-400" />,
  },
  {
    label: "TypeScript",
    icon: <IoLogoJavascript className="size-12 text-blue-400" />,
  },
  { label: "React", icon: <IoLogoReact className="size-12 text-blue-400" /> },
  { label: "CSS", icon: <IoLogoCss3 className="size-12 text-yellow-400" /> },
  {
    label: "TailwindCSS",
    icon: <BiLogoTailwindCss className="size-12 text-blue-400" />,
  },
  {
    label: "Bootstrap",
    icon: <FaBootstrap className="size-12 text-purple-700" />,
  },
  { label: "Redux", icon: <IoLogoCss3 className="size-12" /> },
  { label: "GitHub", icon: <IoLogoGithub className="size-12" /> },
  { label: "MongoDB", icon: <SiMongodb className="size-12 text-green-600" /> },
  { label: "Express", icon: <SiExpress className="size-12" /> },
  { label: "NodeJs", icon: <FaNode className="size-12 text-green-600" /> },
  {
    label: "Firebase",
    icon: <IoLogoFirebase className="size-12 text-yellow-500" />,
  },
];

const Skills = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  return (
      <LightContainer>
        <div className="h-full w-full flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-[30%] pb-10 flex justify-center md:justify-start">
            <SectionTitle subTitle="" title="My Skills" />
          </div>
          <div className="w-full md:w-[60%] flex flex-wrap gap-6 justify-center items-center">
            {skills.map((skill, index) => (
              <div className="rounded-xl" key={index}>
                <div
                  className={`w-24 h-24 hover:bg-gradient-to-b from-purple-500 to-gray-900 transition-all flex items-center justify-center rounded-xl ${
                    theme === "dark"
                      ? "bg-[#0F0715] border  border-[#8757F7]"
                      : "bg-[#FFFFFF]"
                  }`}
                >
                  {skill.icon}
                </div>
                <p
                  className={`text-sm text-center pt-2 ${
                    theme === "dark" ? "text-white" : "text-black"
                  } ${theme !== "dark" && index === 8 && "text-black"}`}
                >
                  {skill.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </LightContainer>
  );
};

export default Skills;
