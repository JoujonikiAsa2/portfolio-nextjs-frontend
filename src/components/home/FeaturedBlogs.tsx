"use client";
import React from "react";
import SectionTitle from "../shared/SectionTitle";
import Image from "next/image";
import style2 from "@/assets/6.png";
import useFetch from "@/hooks/useFetch";
import { Button } from "../ui/button";
import Link from "next/link";
import BlogCard from "../blog/BlogCard";
import { TBlog } from "@/types/blog";
import { getBlogs } from "@/services/blog";
import BlogCardSkeleton from "../blog/BlogCardSkeleton";

const FeaturedBlogs = () => {
  const { response } = useFetch(getBlogs);
  const blogs = response?.data;
  return (
    <div
      className={`h-full w-full flex flex-col items-center justify-between pt-24`}
    >
      <div className="w-full pb-10 flex justify-start">
        <SectionTitle title="Featured blogs" subTitle="" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center justify-items-center items-center gap-4">
        {blogs?.length > 0 ? (
            blogs
              ?.slice(0, 4)
              ?.map((blog: TBlog, index: number) => (
                <BlogCard key={index} blog={blog} />
              ))
          ) : (
            <>
              <BlogCardSkeleton />
              <BlogCardSkeleton />
              <BlogCardSkeleton />
              <BlogCardSkeleton />
            </>
          )}
      </div>
      <div className="w-full flex justify-center items-center mt-12">
        <Link href={"/blog"}>
          <Button>See All</Button>
        </Link>
      </div>

      <Image
        src={style2}
        alt="style"
        width={100}
        height={200}
        className="absolute right-0 opacity-40 w-[10rem] h-[12rem] lg:w-[18rem] lg:h-[20rem] object-contain"
      />
    </div>
  );
};

export default FeaturedBlogs;
