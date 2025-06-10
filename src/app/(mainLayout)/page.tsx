import type { Metadata } from "next";
import dynamic from 'next/dynamic';
import BaseContainer from "@/components/shared/BaseContainer";
import ContactMeHome from "@/components/contact/ContactMeHome";
const Banner = dynamic(() => import("@/components/home/Banner"), { ssr: true });
const Skills = dynamic(() => import("@/components/home/Skills"), { ssr: true });
const FeaturedProjects = dynamic(() => import("@/components/home/FeaturedProjects"), { ssr: true });
const FeaturedBlogs = dynamic(() => import("@/components/home/FeaturedBlogs"), { ssr: true });

export const metadata: Metadata = {
  title: "Home | Joujoniki",
  description: "Personal Portfolio Website",
};


export default function Home() {
  return (
      <div className="">
        <div className="w-full">
          <Banner />
          <BaseContainer>
            <>
              <Skills />
              <FeaturedProjects />
              <FeaturedBlogs/>
              <ContactMeHome/>
            </>
          </BaseContainer>
        </div>
       
      </div>
  );
}