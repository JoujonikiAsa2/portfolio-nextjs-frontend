"use client";
import React from "react";
import Image from "next/image";
import { TBlog } from "@/types/blog";
import { useAppSelector } from "@/lib/hook";

const BlogDetail = ({ blog }: { blog: TBlog | null }) => {
  const theme = useAppSelector((state) => state.theme.theme);
  return (
    <div
      className={`relative w-full h-full 2xl:h-screen flex flex-col items-center justify-center px-2 py-28 md:px-4 lg:px-0 ${
        theme === "dark" ? "dark-background text-white" : "light-background"
      }`}
    >
      <div className="min-h-screen p-6 light-background light-text-color dark:dark-background dark:dark-text-color">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold">{blog?.blogtitle}</h1>
          <p className="text-sm text-gray-500">
            By {blog?.authorname} | {blog?.publicationdate} | {blog?.category}
          </p>

          {blog?.images.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt="Blog"
              width={800}
              height={400}
              className="w-full rounded-md"
            />
          ))}

          {blog?.content ? (
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
