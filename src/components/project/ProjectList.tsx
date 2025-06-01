"use client";
import useFetch from "@/hooks/useFetch";
import { getProjects } from "@/services/project";
import { TProject } from "@/types/projects";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { useAppSelector } from "@/lib/hook";
import { Button } from "../ui/button";
import Loader from "../shared/Loader";
import SecondaryBanner from "../shared/SecondaryBanner";

const ProjectList = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  const [dataCount, setDataCount] = useState<number>(8);
  const { response } = useFetch(getProjects);
  const projects = response?.data;
  if(projects?.length === 0 || projects?.length === undefined){
    return <Loader/>
  }
  return (
    <div
      className={`relative  w-full  h-full 2xl:h-screen flex flex-col items-center justify-center px-2 py-28 md:px-4 lg:px-0 ${
        theme === "dark" ? "dark-background" : "light-background"
      }`}
    >
      <SecondaryBanner title="Projects" subTitle="You can explore all projects here." theme={theme}/>
      <div className="md:py-24 lg:py-0 w-full sm:w-[40rem] md:w-[48rem] lg:w-[64rem] xl:w-[80rem] mx-auto px-4 lg:px-0 gap-4 h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center justify-items-center items-center gap-4">
          {projects
            ?.slice(0, dataCount)
            ?.map((project: TProject, index: number) => (
              <ProjectCard key={index} project={project} />
            ))}
        </div>
        <div className={`mt-12 flex justify-center items-center ${projects?.length === 0 || projects?.length < 9 && "hidden"}`}>
          <Button onClick={() => setDataCount(dataCount + 8)}>Load More</Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
