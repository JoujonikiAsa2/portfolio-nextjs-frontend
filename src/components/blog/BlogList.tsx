"use client";
import React from "react";
import BlogCard from "./BlogCard";
import useFetch from "@/hooks/useFetch";
import { getBlogs } from "@/services/blog";
import { TBlog } from "@/types/blog";
import { useAppSelector } from "@/lib/hook";

const BlogList = () => {
     const theme = useAppSelector((state) => state.theme.theme);
  const { response } = useFetch(getBlogs);
  const blogs = response?.data;
  return (
    <div
      className={`relative w-full h-full 2xl:h-screen flex flex-col items-center justify-center px-2 py-28 md:px-4 ${
        theme === "dark" ? "dark-background text-white" : "light-background"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center justify-items-center items-center">
        {blogs?.map((blog: TBlog, index: number) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
