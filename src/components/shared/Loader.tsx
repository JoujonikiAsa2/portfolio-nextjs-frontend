import React from "react";
import "../../app/globals.css";
import { useAppSelector } from "@/lib/hook";
const Loader = () => {
  const theme = useAppSelector((state) => state.theme.theme)
  return (
    <div className="flex flex-col gap-6 items-center justify-center h-screen bg-white">
      <div className="loader"></div>
      <div className={`loader-text text-3xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
      </div>
    </div>
  );
};

export default Loader;
