import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "@/lib/hook";
import { TProject } from "@/types/projects";
import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "../ui/button";

const ProjectCard = ({ project }: { project: TProject }) => {
  const theme = useAppSelector((state) => state.theme.theme);
  console.log(project?.frontendLivelink);
  return (
    // <div
    //   className={`relative card h-[500px] p-4 border hover:shadow-lg shadow-gray-500 ${
    //     theme === "dark" ? "dark-card" : "light-card"
    //   }`}
    // >
    //   <Image
    //     src={project?.thumbnails[0] as string | ""}
    //     alt="project1"
    //     width={500}
    //     height={500}
    //     sizes="100vw"
    //     className=" w-full h-72 rounded-2xl opacity-30"
    //   />
    //   <p className="line-clamp-3 elipsis text-gray-500">{project?.description}</p>
    //   <div className="flex gap-2 items-center">
    //     {project?.techStack?.map((techStack, index: number) => (
    //       <div key={index} className="w-fit rounded-full p-1">
    //         {techStack}
    //       </div>
    //     ))}
    //   </div>
    //   <div className="flex justify-center">
    //     <div className="p-1 text-center bg-primary text-secondary rounded ">
    //       {project?.frontendLivelink ? (
    //         <Link href={project.frontendLivelink} target="_blank">
    //           Preview
    //         </Link>
    //       ) : null}

    //       {project?.backendLivelink ? (
    //         <Link href={project.backendLivelink} target="_blank">
    //           Server
    //         </Link>
    //       ) : null}

    //       {project?.githubFrontend ? (
    //         <Link href={project.githubFrontend} target="_blank">
    //           GitHub (Frontend)
    //         </Link>
    //       ) : null}

    //       {project?.githubBackend ? (
    //         <Link href={project.githubBackend} target="_blank">
    //           GitHub (Backend)
    //         </Link>
    //       ) : null}

    //       {project?.githubFullStack ? (
    //         <Link href={project.githubFullStack} target="_blank">
    //           GitHub (Fullstack)
    //         </Link>
    //       ) : null}
    //     </div>
    //   </div>
    //   <div>
    //     <button>View Details</button>
    //   </div>
    // </div>
    <Card
      className={`overflow-hidden transition-all hover:shadow-md ${
        theme === "dark" ? "dark-card" : "light-card"
      }`}
    >
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={project.thumbnails[0] || "/placeholder.svg"}
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
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech}>
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between flex-wrap">
        <div className="flex flex-wrap gap-2 justify-between">
          {project?.frontendLivelink ? (
            <Button size="sm" className="bg-black hover:bg-gray-600  text-xs">
              <Link href={project.frontendLivelink} target="_blank">
                Preview
              </Link>
            </Button>
          ) : null}
          <Button size="sm" className="bg-black hover:bg-gray-600  text-xs">
            <Link href={`/project/${project._id}`} target="_blank">
              View Details
            </Link>
          </Button>
          {project?.backendLivelink ? (
            <Button size="sm" className="bg-black hover:bg-gray-600  text-xs">
              <Link href={project.backendLivelink} target="_blank">
                Preview
              </Link>
            </Button>
          ) : null}
        </div>

        <div className="flex-1 flex flex-wrap justify-end gap-2">
          {project?.githubFrontend ? (
            <Button size="sm" className=" text-xs">
              <Link href={project.githubFrontend} target="_blank">
                Frontend
              </Link>
            </Button>
          ) : null}

          {project?.githubBackend ? (
            <Button size="sm" className=" text-xs dark-background">
              <Link href={project.githubBackend} target="_blank">
                Backend
              </Link>
            </Button>
          ) : null}

          {project?.githubFullStack ? (
            <Button>
              <Link href={project.githubFullStack} target="_blank">
                GitHub (Fullstack)
              </Link>
            </Button>
          ) : null}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
