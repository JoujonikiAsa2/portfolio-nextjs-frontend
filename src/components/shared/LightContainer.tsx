"use client";
import React from "react";
import { useAppSelector } from "@/lib/hook";
const LightContainer = ({ children }: { children: React.ReactElement }) => {
  const theme = useAppSelector((state) => state.theme.theme);
  return (
    <div className={`h-full py-24 px-2 lg:px-0 w-full flex gap-6 items-center justify-center ${
        theme === "dark"
          ? "bg-[#050709] text-white"
          : "bg-[#F6F3FC] text-black"
      }`}>
      <div
        className={`h-full py-24 px-2 lg:px-0 w-full flex gap-6 items-center justify-center ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        <div className="lg:mx-[10vw] 2xl:mx-[16vw] container h-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default LightContainer;
