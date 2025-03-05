import CustomBanner from "@/components/shared/CustomBanner";
import CustomContainer from "@/components/shared/CustomContainer";
// import { useAppSelector } from "@/lib/hook";
import React from "react";

const About = () => {
  return (
      <div>
        <CustomBanner
          title="About"
          subTitle="Hi, I'm Joujoniki Asa Roy, a passionate frontend developer focused on creating clean, responsive, and engaging user experiences. With expertise in HTML, CSS, JavaScript, and frameworks like React and Next.js, I bring designs to life with a keen eye for detail. My backend skills in Node.js and databases enable me to deliver full-stack solutions, ensuring seamless functionality from front to back"
        />
       <CustomContainer>
       <div className="w-full flex gap-[10%]">
          <div className="bg-red-400 w-[45%]">hh</div>
          <div className="bg-red-400 w-[45%]">hh</div>
        </div>
       </CustomContainer>
      </div>
  );
};

export default About;
