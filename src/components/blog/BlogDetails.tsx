"use client";
import React from "react";
import Image from "next/image";
import { TBlog } from "@/types/blog";
import { useAppSelector } from "@/lib/hook";

const BlogDetail = ({ blog }: { blog: TBlog | null }) => {
  const theme = useAppSelector((state) => state.theme.theme);
  return (
    <div
      className={`relative  w-full  min-h-screen flex flex-col items-center justify-center px-2 py-28 md:px-4 lg:px-0 ${
        theme === "dark" ? "dark-background" : "light-background"
      }`}
    >
      <div className=" space-y-6 py-24 lg:py-0 w-full sm:w-[40rem] md:w-[48rem] lg:w-[64rem] xl:w-[80rem] mx-auto px-4 lg:px-0 gap-4 h-full">
        
          <h1 className="text-3xl font-bold text-white">{blog?.blogtitle}</h1>
          <p className="text-sm text-gray-500">
            By {blog?.authorname} | {blog?.publicationdate} | {blog?.category}
          </p>

          <Image
            src={
              blog?.thumbnail ||
              "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg"
            }
            alt="Blog"
            width={800}
            height={200}
            className="w-full h-80 rounded-md object-contain bg-[#8757F7]/30"
          />

          {blog?.content ? (
            <div
              className={`prose max-w-none ${
                      theme === "dark" ? "text-[#dddddd]" : "text-black"
                    }`}
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          ) : (
            ""
          )}
        </div>
      </div>
  );
};

export default BlogDetail;
