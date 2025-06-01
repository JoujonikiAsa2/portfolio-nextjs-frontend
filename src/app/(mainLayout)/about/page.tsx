import AboutMe from "@/components/about/AboutMe";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "About | Joujoniki",
  description: "About Joujoniki Asa Roy",
};

const AboutPage = () => {
  return (
    <AboutMe/>
  );
};

export default AboutPage;
