"use client"
import CustomBanner from "@/components/shared/CustomBanner";
import CustomContainer from "@/components/shared/CustomContainer";
import Image from "next/image";
import diuImage from '@/assets/diu.jpeg'
import React from "react";
import SectionTitle from "@/components/shared/SectionTitle";
import { useAppSelector } from "@/lib/hook";

const About = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  return (
    <div className="">
      <CustomBanner
        title="About"
        subTitle="Hi, I'm Joujoniki Asa Roy, a passionate frontend developer focused on creating clean, responsive, and engaging user experiences. With expertise in HTML, CSS, JavaScript, and frameworks like React and Next.js, I bring designs to life with a keen eye for detail. My backend skills in Node.js and databases enable me to deliver full-stack solutions, ensuring seamless functionality from front to back"
      />
      <div className={`py-24  ${ theme === "dark" ? "bg-[#050709]" : "bg-[#F6F3FC]"}`}>
        <div className=""><SectionTitle title="Education"/></div>
        <CustomContainer>
          <div className="w-full flex flex-col md:flex-row gap-6 justify-center">
            <div className={`${ theme === "dark" ? "bg-[#0F0715]" : "bg-white"} w-full md:w-1/2 h-[400px] p-10 rounded-xl`}>
              <div className=" w-full space-y-2">
                <h2 className="">B.SC. in Computer Engineering</h2>
                <small className={` ${ theme === "dark" ? "text-[#dddddd]" : "text-black"}`}>
                  ( Jan 2020 - July 2024 )
                </small>
                <p className={`pt-2  ${ theme === "dark" ? "text-[#dddddd]" : "text-black"}`}>Daffodil International University</p>
                <p className={` ${ theme === "dark" ? "text-[#dddddd]" : "text-black"}`}>CGPA: 3.49</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex items-center">
                <Image src={diuImage} alt="DIU" width={600} height={600} className="h-full w-full rounded-xl"/>
            </div>
          </div>
        </CustomContainer>
      </div>
    </div>
  );
};

export default About;
