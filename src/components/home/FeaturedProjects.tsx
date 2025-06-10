"use client";
import React from "react";
import SectionTitle from "../shared/SectionTitle";
import Image from "next/image";
import style2 from "@/assets/6.png";
import useFetch from "@/hooks/useFetch";
import { getProjects } from "@/services/project";
import { TProject } from "@/types/projects";
import ProjectCard from "../project/ProjectCard";
import { Button } from "../ui/button";
import Link from "next/link";
import ProjectCardSkeleton from "../project/ProjectCardSkeleton";

const FeaturedProjects = () => {
  const { response } = useFetch(getProjects);
  const projects = response?.data;
  return (
    <div
      className={`h-full w-full flex flex-col items-center justify-between pt-24`}
    >
      <div className="w-full pb-10 flex justify-start">
        <SectionTitle title="Featured Projects" subTitle="" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center justify-items-center items-center gap-4">
        {projects?.length > 0 ? (
            projects
              ?.slice(0, 4)
              ?.map((project: TProject, index: number) => (
                <ProjectCard key={index} project={project} />
              ))
          ) : (
            <>
              <ProjectCardSkeleton />
              <ProjectCardSkeleton />
              <ProjectCardSkeleton />
              <ProjectCardSkeleton />
            </>
          )}
      </div>
      <div className="w-full flex justify-center items-center mt-12">
        <Link href={"/project"}>
          <Button>See All</Button>
        </Link>
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
