"use client";
import React from "react";
import { useAppSelector } from "@/lib/hook";
const BaseContainer = ({ children }: { children: React.ReactElement }) => {
  const theme = useAppSelector((state) => state.theme.theme);
  return (
    <div className={`h-fit py-10 w-full flex gap-6 items-center justify-center relative ${theme === "dark" ? "dark-background" : "light-background"}`}>
      <div
        className={` w-full flex gap-6 items-center justify-center ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        <div className="w-full sm:w-[40rem] md:w-[48rem] lg:w-[64rem] xl:w-[80rem] mx-auto px-4 sm:px-8 lg:px-12 gap-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default BaseContainer;
