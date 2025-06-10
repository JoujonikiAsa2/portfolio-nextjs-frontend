"use client";
import { useAppSelector } from "@/lib/hook";
import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProjectCardSkeleton = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  return (
    <SkeletonTheme
      baseColor={theme === "dark" ? "#050709" : "#EDE9F3"}
      highlightColor={theme === "dark" ? "#321F59" : "#D1C4E9"}
    >
      <div
        className={`h-[480px] w-[290px] p-4 relative overflow-hidden rounded-xl ${
          theme === "dark"
            ? "bg-[#050709] border-[0.5px] border-[#2c2c2c] text-white"
            : "bg-[#F6F3FC] border-[0.5px] border-[#cecbcb] text-black"
        }  transition-all`}
      >
        <div className="pb-4">
          <Skeleton height={150} style={{ borderRadius: "0px" }} />
        </div>
        <Skeleton count={3} />
        <Skeleton width={80} style={{ marginTop: "20px" }} />
        <div className="flex flex-wrap gap-1 mt-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Skeleton
              key={item}
              width={80}
              height={24}
              style={{ borderRadius: "16px" }}
            />
          ))}
        </div>
        <div className="flex gap-2 mt-12">
          <Skeleton width={80} height={24} />
          <Skeleton width={80} height={24} />
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default ProjectCardSkeleton;
