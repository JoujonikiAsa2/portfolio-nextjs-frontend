import Drawer from "@/components/shared/Drawer";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";
import StoreProvider from '../storeProvider'


const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
    <div className="relative w-full h-full">
      <Navbar />
      <Drawer/>
      <div>{children}</div>
      <div className="w-full bg-[#060606]">
        <Footer />
      </div>
    </div>
    </StoreProvider>
  );
};

export default MainLayout;
