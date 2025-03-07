"use client";
import React from "react";
import { useAppSelector } from "@/lib/hook";
const DarkContainer = ({ children }: { children: React.ReactElement }) => {
  const theme = useAppSelector((state) => state.theme.theme);
  return (
    <div className={`h-full w-full flex gap-6 items-center justify-center ${
        theme === "dark" ? "bg-[#0F0715] text-white" : "bg-white text-black"
      }`}>
      <div
        className={`h-full w-full flex gap-6 items-center justify-center ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        <div className="w-full sm:w-[40rem] md:w-[48rem] lg:w-[64rem] xl:w-[80rem] mx-auto h-full px-4 lg:px-0 gap-4 h-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DarkContainer;
