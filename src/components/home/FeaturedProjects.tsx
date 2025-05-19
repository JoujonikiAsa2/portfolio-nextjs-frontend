"use client";
import React from "react";
import SectionTitle from "../shared/SectionTitle";
import project1 from "@/assets/grid-bg.png";
import Image from "next/image";
import Link from "next/link";
import style2 from "@/assets/6.png";
import { useAppSelector } from "@/lib/hook";

const FeaturedProjects = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  const projects = Array.from({ length: 3 });

  return (
    <div
      className={`h-[500px] w-full flex flex-col items-center justify-between py-24`}
    >
      <div className="w-full pb-10 flex justify-start">
        <SectionTitle title="Featured Projects" subTitle="" />
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-between">
        {projects.map((project, index) => (
          <div key={index} className={`relative w-full p-4 border ${theme === "dark" ? "dark-card" : "light-card"}`}>
            <Image
              src={project1}
              alt="project1"
              width={500}
              height={500}
              sizes="100vw"
              className=" w-full h-72 rounded-2xl opacity-30"
            />
            <p>description</p>
            <ul>
              <li>Tech Stack</li>
            </ul>
            <div className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-around">
              <div className="p-1 text-center bg-primary text-secondary rounded preview ">
                <Link href="/project-livelink" target="new">
                  Preview
                </Link>
                <Link href="/project-livelink" target="new">
                  Preview
                </Link>
                <Link href="/project-livelink" target="new">
                  Preview
                </Link>
              </div>
            </div>
            <div>
              <button>View Details</button>
            </div>
          </div>
        ))}
      </div>

      <Image
        src={style2}
        alt="style"
        width={100}
        height={200}
        className="absolute right-0 opacity-40 w-[10rem] h-[12rem] lg:w-[18rem] lg:h-[20rem] object-contain"
      />
    </div>
  );
};

export default FeaturedProjects;
