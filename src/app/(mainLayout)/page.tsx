"use client"
import Banner from "@/components/Banner";
import Loader from "@/components/shared/Loader";
import Skills from "@/components/Skills";
import { useState } from "react";

export default function Home() {
  const [loading, isLoading] = useState<boolean>(true);
  if(loading){
    isLoading(false)
    return <Loader/>
  }
  return (
    <div className="">
      <Banner/>
      <Skills/>
    </div>
  );
}
