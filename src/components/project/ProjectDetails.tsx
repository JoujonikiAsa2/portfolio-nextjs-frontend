"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TProject } from "@/types/projects";
import { useAppSelector } from "@/lib/hook";

const ProjectDetails = ({ project }: { project: TProject | null }) => {
  const theme = useAppSelector((state) => state.theme.theme);
  const title = project?.description.split(".")[0];

  return (
    <div
      className={`relative w-full h-full 2xl:h-screen flex flex-col items-center justify-center px-2 py-28 md:px-4 lg:px-0 ${
        theme === "dark" ? "dark-background text-white" : "light-background"
      }`}
    >
      <div className="m-6">
        <div>
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/projects">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {project?.techStack.map((tech: string) => (
              <Badge key={tech} variant="secondary" className="text-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Project Links */}
        <div className="flex flex-wrap gap-4 mb-12 text-black">
          {project?.frontendLivelink && (
            <Button asChild>
              <Link href={project?.frontendLivelink} target="_blank">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Link>
            </Button>
          )}

          {project?.backendLivelink && (
            <Button asChild variant="outline">
              <Link href={project?.backendLivelink} target="_blank">
                <ExternalLink className="mr-2 h-4 w-4" />
                API Endpoint
              </Link>
            </Button>
          )}

          {project?.githubFrontend && (
            <Button asChild variant="outline">
              <Link href={project?.githubFrontend} target="_blank">
                <Github className="mr-2 h-4 w-4" />
                Frontend Code
              </Link>
            </Button>
          )}

          {project?.githubBackend && (
            <Button asChild variant="outline">
              <Link href={project?.githubBackend} target="_blank">
                <Github className="mr-2 h-4 w-4" />
                Backend Code
              </Link>
            </Button>
          )}

          {project?.githubFullStack && (
            <Button asChild variant="outline">
              <Link href={project?.githubFullStack} target="_blank">
                <Github className="mr-2 h-4 w-4" />
                Full Stack Code
              </Link>
            </Button>
          )}
        </div>
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={project?.thumbnails[0] || "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg"}
          alt={"Thumbnail"}
          fill
          className="object-cover transition-transform hover:scale-105"
          priority
        />
      </div>
        <div className="m-6">
          <h2 className="text-2xl font-semibold mb-4">Project Description</h2>
          <p className="text-lg leading-relaxed">{project?.description}</p>
        </div>

        <div className="m-6">
          <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {project?.techStack.map((tech) => (
              <Card key={tech} className="p-4 flex items-center justify-center">
                <span className="text-lg font-medium">{tech}</span>
              </Card>
            ))}
          </div>
        </div>
        <div className="m-6">
          <h2 className="text-2xl font-semibold mb-4">Problems Faced</h2>
          <p className="text-lg leading-relaxed">{project?.problemFaced}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
