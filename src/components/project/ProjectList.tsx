"use client";
import useFetch from "@/hooks/useFetch";
import { getProjects } from "@/services/project";
import { TProject } from "@/types/projects";
import React from "react";
import ProjectCard from "./ProjectCard";
import { useAppSelector } from "@/lib/hook";

const ProjectList = () => {
     const theme = useAppSelector((state) => state.theme.theme);
  const { response } = useFetch(getProjects);
  const projects = response?.data;
  return (
    <div
      className={`relative w-full h-full 2xl:h-screen flex flex-col items-center justify-center px-2 py-28 md:px-4 ${
        theme === "dark" ? "dark-background text-white" : "light-background"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center justify-items-center items-center">
        {projects?.map((project: TProject, index: number) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
