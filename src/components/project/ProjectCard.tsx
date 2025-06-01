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
    <div className=" [perspective:1000px]">
      <Card
        className={`group p-4 duration-500 hover:[transform:rotateX(32deg)] relative overflow-hidden rounded-xl ${
          theme === "dark" ? "bg-[#050709] border-[0.5px] border-[#2c2c2c] text-white" : "bg-[#F6F3FC] border-[0.5px] border-[#cecbcb] text-black"
        }  transition-all`}
      >
        <div className="">
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
          <CardContent className="space-y-4 px-0 pt-4">
            <p className="text-muted-foreground line-clamp-3">
              {project.description}
            </p>
            <Link href={`project/${project?._id}`}>
              <div className="pb-4 text-[#8750F7]">Read More</div>
            </Link>
            <div className="flex justify-start items-center relative pb-4">
              {project.techStack.map((tech, index) => (
                <div
                  key={`${tech}-${index}`}
                  className={`mb-2 border border-white/[0.2] rounded-full lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center hover:z-10
        ${index !== 0 ? "-ml-4" : ""} `}
                >
                  <Image
                    src={
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHR_P-7OxbDx2-EpUFbKc24Ee2jKJYms_gUw&s"
                    }
                    alt={"Thumbnail"}
                    width={24}
                    height={24}
                    className="w-full h-full object-cover transition-transform rounded-full p-[1px] border border-[#8757F7]"
                    priority
                  />
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="px-0 flex flex-row-reverse justify-between gap-4">
            <div className="flex flex-wrap gap-2 justify-between">
              {project?.frontendLivelink ? (
                <Link href={project.frontendLivelink} target="_blank">
                  <div
                    className={`flex items-center gap-1 text-sm  font-bold capitalize text-transparent bg-clip-text ${
                      theme === "dark"
                        ? "bg-gradient-to-r from-[#8750F7] to-[#DCCCFD]"
                        : "bg-gradient-to-r from-[#8750F7] to-[#0F0715]"
                    }`}
                  >
                    <p>Live</p>
                    <CiLocationArrow1 className={`${theme === "dark" ? "text-white" : "text-[#8757F7]"}`} />
                  </div>
                </Link>
              ) : null}
              {project?.backendLivelink ? (
                <Link href={project.backendLivelink} target="_blank">
                  <div
                    className={`flex items-center gap-1 text-sm  font-bold capitalize text-transparent bg-clip-text ${
                      theme === "dark"
                        ? "bg-gradient-to-r from-[#8750F7] to-[#DCCCFD]"
                        : "bg-gradient-to-r from-[#8750F7] to-[#0F0715]"
                    }`}
                  >
                    <p>Check live</p>
                    <CiLocationArrow1 className={`${theme === "dark" ? "text-white" : "text-[#8757F7]"}`} />
                  </div>
                </Link>
              ) : null}
            </div>

            <div className="flex-1 flex justify-start gap-1 text-[#8750F7]">
              {project?.githubFrontend ? (
                <Link href={project.githubFrontend} target="_blank">
                  <div className="flex gap-2 items-center border border-[#8758F7]/30 rounded-sm p-2 text-sm">
                    {" "}
                    Web <FiGithub />
                  </div>
                </Link>
              ) : null}

              {project?.githubBackend ? (
                <Link href={project.githubBackend} target="_blank">
                  <div className="flex gap-2 items-center border border-[#8758F7]/30 rounded-sm p-2 text-sm">
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
        </div>
      </Card>
    </div>
  );
};

export default ProjectCard;
