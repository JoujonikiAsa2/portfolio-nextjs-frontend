// components/BlogCard.tsx

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TBlog } from "@/types/blog";
import { useAppSelector } from "@/lib/hook";

const BlogCard = ({ blog }: { blog: TBlog }) => {
  const theme = useAppSelector((state) => state.theme.theme);
  const { authorname,category, blogtitle, publicationdate, images } = blog;
  return (
    <div
      className={`rounded-xl shadow-md overflow-hidden p-4 space-y-3 mx-w-[300px] border ${
        theme === "dark"
          ? "dark-card dark-text-color"
          : "light-card light-text-color"
      }`}
    >
      <div>
          <Image
            src={images[0]}
            alt={"thumbnail"}
            width={200}
            height={300}
            className="rounded-md w-full h-36 object-cover"
          />
      </div>
      <div className="space-y-1">
        <p className="text-sm text-purple-400">{category}</p>
        <h2 className="text-lg font-bold">{blogtitle}</h2>
        <p className="text-sm text-gray-400">
          By {authorname} on {publicationdate}
        </p>
        <Link href={`/blog/${blog._id}`}>
          <p className="text-purple-500 hover:underline cursor-pointer">
            Read More
          </p>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
