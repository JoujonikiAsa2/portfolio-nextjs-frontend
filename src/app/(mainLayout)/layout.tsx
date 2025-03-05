import Drawer from "@/components/Drawer";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";


const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full h-full">
      <Navbar />
      <Drawer/>
      <div>{children}</div>
      <div className="w-full bg-[#060606]">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
