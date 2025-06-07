"use client";
import React, { useState } from "react";
import BlogCard from "./BlogCard";
import useFetch from "@/hooks/useFetch";
import { getBlogs } from "@/services/blog";
import { TBlog } from "@/types/blog";
import { useAppSelector } from "@/lib/hook";
import SecondaryBanner from "../shared/SecondaryBanner";
import { Button } from "../ui/button";
import BlogCardSkeleton from "./BlogCardSkeleton";

const BlogList = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  const [dataCount, setDataCount] = useState<number>(6);

  const { response } = useFetch(getBlogs);
  const blogs = response?.data;

  return (
    <div
      className={`relative  w-full  min-h-screen flex flex-col items-center justify-center px-2 py-28 md:px-4 lg:px-0 ${
        theme === "dark" ? "dark-background" : "light-background"
      }`}
    >
      <SecondaryBanner
        title="Blogs"
        subTitle="You can explore all blogs here."
        theme={theme}
      />

      <div className="md:py-24 lg:py-0 w-full sm:w-[40rem] md:w-[48rem] lg:w-[64rem] xl:w-[80rem] mx-auto px-4 lg:px-0 gap-4 h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center justify-items-center items-center gap-6">
          {blogs?.length > 0 ? (
            blogs
              ?.slice(0, dataCount)
              ?.map((blog: TBlog, index: number) => (
                <BlogCard key={index} blog={blog} />
              ))
          ) : (
            <>
              <BlogCardSkeleton />
              <BlogCardSkeleton />
              <BlogCardSkeleton />
              <BlogCardSkeleton />
              <BlogCardSkeleton />
              <BlogCardSkeleton />
            </>
          )}
        </div>
      </div>
      <div
        className={`mt-12  ${
          response?.data?.length === 0 || response?.data?.length > dataCount
            ? "flex justify-center items-center"
            : "hidden "
        }`}
      >
        <Button onClick={() => setDataCount(dataCount + 6)}>Load More</Button>
      </div>
    </div>
  );
};

export default BlogList;
