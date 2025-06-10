"use client";
import useFetch from "@/hooks/useFetch";
import { getProjects } from "@/services/project";
import { TProject } from "@/types/projects";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { useAppSelector } from "@/lib/hook";
import { Button } from "../ui/button";
import SecondaryBanner from "../shared/SecondaryBanner";
import ProjectCardSkeleton from "./ProjectCardSkeleton";

const ProjectList = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  const [dataCount, setDataCount] = useState<number>(8);
  const { response } = useFetch(getProjects);
  const projects = response?.data;

  return (
    <div
      className={`relative  w-full min-h-screen flex flex-col items-center justify-center py-28 ${
        theme === "dark" ? "dark-background" : "light-background"
      }`}
    >
      <SecondaryBanner
        title="Projects"
        subTitle="You can explore all projects here."
        theme={theme}
      />
      <div className="w-full sm:w-[40rem] md:w-[48rem] lg:w-[64rem] xl:w-[80rem] px-4 mx-auto gap-4 h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center justify-items-center items-center gap-6">
          {projects?.length > 0 ? (
            projects
              ?.slice(0, dataCount)
              ?.map((project: TProject, index: number) => (
                <ProjectCard key={index} project={project} />
              ))
          ) : (
            <>
              <ProjectCardSkeleton />
              <ProjectCardSkeleton />
              <ProjectCardSkeleton />
              <ProjectCardSkeleton />
              <ProjectCardSkeleton />
              <ProjectCardSkeleton />
              <ProjectCardSkeleton />
              <ProjectCardSkeleton />
            </>
          )}
        </div>
        <div
          className={`mt-12  ${
            response?.data?.length === 0 || response?.data?.length > dataCount
              ? "flex justify-center items-center"
              : "hidden "
          }`}
        >
          <Button onClick={() => setDataCount(dataCount + 8)}>Load More</Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
