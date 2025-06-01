import Drawer from "@/components/shared/Drawer";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full h-full">
      <Navbar />
      <Drawer />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
