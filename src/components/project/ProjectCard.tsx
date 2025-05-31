import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "@/lib/hook";
import { TProject } from "@/types/projects";
// import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CiLocationArrow1 } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";

const ProjectCard = ({ project }: { project: TProject }) => {
  const theme = useAppSelector((state) => state.theme.theme);
  console.log(project?.frontendLivelink);
  return (
    <Card
      className={`relative border-none overflow-hidden transition-all border ${
        theme === "dark" ? "bg-[#050709] text-white" : "bg-[#F6F3FC] text-black"
      }`}
    >
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={
            project?.thumbnail ||
            "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg"
          }
          alt={"Thumbnail"}
          fill
          className="object-cover transition-transform hover:scale-105"
          priority
        />
      </div>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground line-clamp-3">
          {project.description}
        </p>
        <div className="flex justify-start items-center relative">
          {project.techStack.map((tech, index) => (
            <div
              key={`${tech}-${index}`}
              className={`border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center hover:z-10
        ${index !== 0 ? "-ml-4" : ""} z-${index + 10}`}
            >
              <Image
                src={
                  project?.thumbnail ||
                  "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg"
                }
                alt={"Thumbnail"}
                width={24}
                height={24}
                className="w-full h-full object-cover transition-transform rounded-full"
                priority
              />
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between flex-wrap gap-4">
        <div className="flex flex-wrap gap-2 justify-between">
          {project?.frontendLivelink ? (
            <Link href={project.frontendLivelink} target="_blank">
              <div
                className={`flex items-center gap-2 text-sm  font-bold capitalize text-transparent bg-clip-text ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-[#8750F7] to-[#DCCCFD]"
                    : "bg-gradient-to-r from-[#8750F7] to-[#0F0715]"
                }`}
              >
                <p>Check live</p>
                <CiLocationArrow1 className="text-white" />
              </div>
            </Link>
          ) : null}
          {project?.backendLivelink ? (
            <Link href={project.backendLivelink} target="_blank">
              <div
                className={`flex items-center gap-2 text-sm  font-bold capitalize text-transparent bg-clip-text ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-[#8750F7] to-[#DCCCFD]"
                    : "bg-gradient-to-r from-[#8750F7] to-[#0F0715]"
                }`}
              >
                <p>Check live</p>
                <CiLocationArrow1 className="text-white" />
              </div>
            </Link>
          ) : null}
        </div>

        <div className="flex-1 flex flex-wrap justify-end gap-2 text-white">
          {project?.githubFrontend ? (
            <Link href={project.githubFrontend} target="_blank">
              <div className="flex gap-2 items-center border rounded-xl px-2 text-sm">
                {" "}
                Web <FiGithub />
              </div>
            </Link>
          ) : null}

          {project?.githubBackend ? (
            <Link href={project.githubBackend} target="_blank">
              <div className="flex gap-2 items-center border rounded-xl px-2 text-sm">
                {" "}
                Server <FiGithub />
              </div>
            </Link>
          ) : null}

          {project?.githubFullStack ? (
            <Link href={project.githubFullStack} target="_blank">
              <div className="flex gap-2 items-center border rounded-xl px-2 text-sm">
                {" "}
                Fullstack <FiGithub />
              </div>
            </Link>
          ) : null}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
