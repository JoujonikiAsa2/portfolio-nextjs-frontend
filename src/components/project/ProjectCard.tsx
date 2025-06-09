import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "@/lib/hook";
import { TProject } from "@/types/projects";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { CiLocationArrow1 } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { Button } from "../ui/button";

const ProjectCard = ({ project }: { project: TProject }) => {
  const theme = useAppSelector((state) => state.theme.theme);
  return (
    <div className=" [perspective:1000px]">
      <Card
        className={`group p-4 duration-500 hover:[transform:rotateX(32deg)] relative overflow-hidden rounded-xl ${
          theme === "dark"
            ? "bg-[#050709] border-[0.5px] border-[#2c2c2c] text-white"
            : "bg-[#F6F3FC] border-[0.5px] border-[#cecbcb] text-black"
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
          <CardTitle className="pt-6">
           <h2 className="text-lg font-bold capitalize">{project?.title}</h2>
          </CardTitle>
          <CardContent className="space-y-4 px-0 pt-4">
            <div
              className="text-muted-foreground line-clamp-3"
              dangerouslySetInnerHTML={{ __html: project?.description || "" }}
            />
            <Link href={`project/${project?._id}`}>
              <div className="pb-4 text-[#8750F7]">Read More</div>
            </Link>
            <div className="flex flex-wrap justify-start items-center relative pb-4">
              {project?.techStack?.slice(0,6)?.map((tech, index) => (
                <div
                  key={`${tech}-${index}`}
                  className={`mb-2  flex justify-center items-center gap-1`}
                >
                  <Button className=" w-fit h-6 mr-1">{tech}</Button>
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
                    <CiLocationArrow1
                      className={`${
                        theme === "dark" ? "text-white" : "text-[#8757F7]"
                      }`}
                    />
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
                    <CiLocationArrow1
                      className={`${
                        theme === "dark" ? "text-white" : "text-[#8757F7]"
                      }`}
                    />
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
