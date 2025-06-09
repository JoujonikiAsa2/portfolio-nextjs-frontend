// components/BlogCard.tsx

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TBlog } from "@/types/blog";
import { useAppSelector } from "@/lib/hook";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

const BlogCard = ({ blog }: { blog: TBlog }) => {
  const theme = useAppSelector((state) => state.theme.theme);
  const { authorname,category, blogtitle, publicationdate, thumbnail } = blog;
  return (
    <div className=" [perspective:1000px]">
    <Card
      className={`hover:scale-105 rounded-xl overflow-hidden p-4 space-y-3 mx-w-[300px] transition-all duration-300 h-96 ${
          theme === "dark" ? "bg-[#050709] border-[0.5px] border-[#2c2c2c] text-white" : "bg-[#F6F3FC] border-[0.5px] border-[#cecbcb] text-black"
        }`}
    >
      <div>
          <Image
            src={thumbnail || "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg"}
            alt={"thumbnail"}
            width={200}
            height={300}
            className="w-full h-36 object-cover"
          />
      </div>
      <CardContent className="space-y-1">
        <Badge className="text-sm">{category}</Badge>
        <h2 className="text-lg font-bold capitalize">{blogtitle}</h2>
        <p className="text-sm text-gray-400">
          By {authorname} on {publicationdate}
        </p>
        <Link href={`/blog/${blog._id}`}>
          <p className="text-purple-500 hover:underline cursor-pointer">
            Read More
          </p>
        </Link>
      </CardContent>
    </Card>
    </div>
  );
};

export default BlogCard;
