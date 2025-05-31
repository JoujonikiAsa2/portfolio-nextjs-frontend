/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useAppSelector } from "@/lib/hook";
import React from "react";
import SectionTitle from "@/components/shared/SectionTitle";

import Image from "next/image";
import style1 from "@/assets/1.png";
import Lottie from "lottie-react";
import skillsAnimation from "@/assets/skills.json";
import useFetch from "@/hooks/useFetch";
import { getAllSkills } from "@/services/skills";
import { TSkill } from "@/types/skill";

const Skills = () => {
  const theme = useAppSelector((state) => state.theme.theme);

  const { response } = useFetch(getAllSkills);
  const skillData = response?.data;

  const technicalSkills = skillData?.filter(
    (skill: TSkill) => skill.skillType === "TECHNICAL"
  );
  const softSkills = skillData?.filter(
    (skill: TSkill) => skill.skillType === "SOFT"
  );

  return (
    <div className="h-full w-full flex flex-col items-center justify-between">
      <div className="w-full pb-10 flex justify-start">
        <SectionTitle subTitle="" title="My Skills" />
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 rounded-xl">
        <Lottie animationData={skillsAnimation} loop={true} />
        <div className="w-full  col-span-2 flex flex-col gap-6">
          <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8 gap-2 justify-center items-center rounded-xl">
            <div className="col-span-8 mb-4">
              <h3>Technical Skills</h3>
            </div>
            {technicalSkills?.map((skill: TSkill, index: number) => (
              <div
                key={index}
                className={` w-24 h-24 flex flex-col gap-1 items-center justify-center transition-all rounded-xl`}
              >
                <div className={`w-12 h-12 relative rounded-full border ${
        theme === "dark"
          ? "border-[#050709] bg-[#F6F3FC]"
          : "border-[#F6F3FC] bg-[#F6F3FC]"
                }`}>
                  <Image
                    src={skill.thumbnail}
                    alt={skill.name}
                    fill
                    className="rounded-full object-contain p-1"
                  />
                </div>
                <p className="text-sm text-center pt-2">{skill.name}</p>
              </div>
            ))}
          </div>
          <div className="col-span-2 grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8 gap-4 justify-center items-center rounded-xl">
            <div className="col-span-8 mb-4">
              <h3>Soft Skills</h3>
            </div>
            <div className="col-span-8 flex flex-wrap gap-2 ">
              {softSkills?.map((skill: TSkill, index: number) => (
                <div
                  key={index}
                  className="w-fit h-12 bg-[#8750F7] text-white flex items-center justify-center rounded px-4"
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
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
