"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Globe, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TProject } from "@/types/projects";
import { useAppSelector } from "@/lib/hook";
import { FiGithub } from "react-icons/fi";

const ProjectDetails = ({ project }: { project: TProject | null }) => {
  const theme = useAppSelector((state) => state.theme.theme);

  return (
    <div
      className={`relative w-full min-h-screen  flex flex-col items-center justify-center px-2 py-28 md:px-4 lg:px-0 ${
        theme === "dark" ? "dark-background text-white" : "light-background"
      }`}
    >
      <div className="w-full sm:w-[40rem] md:w-[48rem] lg:w-[64rem] xl:w-[80rem] mx-auto px-4 lg:px-0 gap-4">
        <div className="container mx-auto max-w-7xl">
          <div
            className={`border-b ${
              theme === "dark" ? "border-[#8757F7]" : "border-[#8750F7]"
            }`}
          >
            <div className="container mx-auto px-4 py-6">
              <Link
                href="/"
                className={`inline-flex items-center gap-2 text-sm ${
                  theme === "dark"
                    ? "text-gray-400 hover:text-gray-200"
                    : "text-muted-foreground hover:text-foreground"
                } mb-4`}
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Portfolio
              </Link>
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                    {project?.title}
                  </h1>
                  <div
                    className={`text-base text-justify leading-6 ${
                      theme === "dark" ? "text-[#dddddd]" : "text-black"
                    } mb-6 max-w-3xl`}
                    dangerouslySetInnerHTML={{
                      __html: project?.description || "",
                    }}
                  />
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project?.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        className={theme === "dark" ? "" : "secondary"}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Button asChild>
                      <Link
                        href={
                          project?.frontendLivelink ||
                          (project?.backendLivelink as string)
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Globe className="w-4 h-4 mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                    <div className="flex-1 flex justify-start gap-1 text-[#8750F7]">
                      {project?.githubFrontend ? (
                        <Link href={project.githubFrontend} target="_blank">
                          <div className="flex gap-2 items-center border border-[#8757F7] rounded-sm p-2 text-sm">
                            {" "}
                            Web <FiGithub />
                          </div>
                        </Link>
                      ) : null}

                      {project?.githubBackend ? (
                        <Link href={project.githubBackend} target="_blank">
                          <div className="flex gap-2 items-center border border-[#8757F7] rounded-sm p-2 text-sm">
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
                  </div>
                </div>
                <Card
                  className={`lg:w-80 bg-[#8750F7]/30 border-none
                  }`}
                >
                  <CardContent className="p-6">
                    <h3
                      className={`font-semibold mb-4 ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      Project Info
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar
                          className={`w-4 h-4 ${
                            theme === "dark"
                              ? "text-gray-400"
                              : "text-muted-foreground"
                          }`}
                        />
                        <span
                          className={
                            theme === "dark"
                              ? "text-gray-400"
                              : "text-muted-foreground"
                          }
                        >
                          Duration: {project?.duration}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users
                          className={`w-4 h-4 ${
                            theme === "dark"
                              ? "text-gray-400"
                              : "text-muted-foreground"
                          }`}
                        />
                        <span
                          className={
                            theme === "dark"
                              ? "text-gray-400"
                              : "text-muted-foreground"
                          }
                        >
                          Team: {project?.team}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span
                          className={`w-4 h-4 ${
                            theme === "dark"
                              ? "text-gray-400"
                              : "text-muted-foreground"
                          }`}
                        >
                          📂
                        </span>
                        <span
                          className={
                            theme === "dark"
                              ? "text-gray-400"
                              : "text-muted-foreground"
                          }
                        >
                          Category: {project?.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-4 h-4 ${
                            theme === "dark"
                              ? "text-gray-400"
                              : "text-muted-foreground"
                          }`}
                        >
                          ✅
                        </span>
                        <span
                          className={
                            theme === "dark"
                              ? "text-gray-400"
                              : "text-muted-foreground"
                          }
                        >
                          Status:
                        </span>
                        <Badge
                          variant="outline"
                          className="text-green-600 border-green-600"
                        >
                          {project?.status}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 py-8">
            <div className="mb-12">
              <Image
                src={project?.thumbnail || "/placeholder.svg"}
                alt={project?.title?.charAt(1) as string}
                width={800}
                height={400}
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {project?.features && project.features.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                    <div className="grid gap-3 text-[#dddddd]">
                      {project.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <span
                            className={`w-2 h-2 ${
                              theme === "dark" ? "bg-purple-500" : "bg-primary"
                            } rounded-full mt-2 flex-shrink-0`}
                          />
                          <span className="text-base">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {project?.challenges && project.challenges.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      Challenges & Solutions
                    </h2>
                    <div className="grid gap-3 text-[#dddddd]">
                      {project.challenges.map((challenge, index) => (
                        <div key={index}>
                          <span
                            className={`w-2 h-2 ${
                              theme === "dark" ? "bg-purple-500" : "bg-primary"
                            } rounded-full mt-2 flex-shrink-0`}
                          />
                          <span className="text-base">{challenge}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {project?.gallery && project.gallery.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Gallery</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {project.gallery.map((image, index) => (
                        <Image
                          key={index}
                          src={image || "/placeholder.svg"}
                          alt={`${
                            project.title?.charAt(1) || "Project"
                          } screenshot ${index + 1}`}
                          width={500}
                          height={300}
                          className={`w-full h-48 object-cover rounded-lg ${
                            theme === "dark" ? "border-[#8757F7]" : "border"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Technologies */}
                <Card className="bg-[#8750F7]/30 border-none">
                  <CardContent className="p-6">
                    <h3
                      className={`font-semibold mb-4 ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project?.techStack?.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className={
                            theme === "dark"
                              ? "border-gray-600 text-gray-300"
                              : ""
                          }
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Contact CTA */}
                <Card className="bg-[#8750F7]/30 border-none">
                  <CardContent className="p-6">
                    <h3
                      className={`font-semibold mb-2 ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      Interested in this project?
                    </h3>
                    <p
                      className={`text-sm ${
                        theme === "dark"
                          ? "text-gray-400"
                          : "text-muted-foreground"
                      } mb-4`}
                    >
                      {"Let's discuss how I can help with your next project."}
                    </p>
                    <Link href="/contact">
                      <Button>Get In Touch</Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
