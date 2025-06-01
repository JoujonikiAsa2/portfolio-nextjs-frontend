"use client";
import { useAppSelector } from "@/lib/hook";
import { Mail, MapPinHouse, Phone } from "lucide-react";
import Link from "next/link";
import { TiSocialLinkedin } from "react-icons/ti";
import { FiGithub } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Particle from "../home/Particle";
import ContactForm from "./ContactForm";
import SectionTitle from "../shared/SectionTitle";

type cornerStyle = {
  style: Record<string, unknown>;
  side: string;
};

const ContactMeHome = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  const corners: cornerStyle[] = [
    {
      style: {
        width: 200,
        height: 200,
        position: "absolute",
        opacity: 0.2,
        bottom: 0,
        left: 0,
      },
      side: "br",
    },
    {
      style: {
        width: 200,
        height: 200,
        position: "absolute",
        opacity: 0.2,
        top: 0,
        right: 0,
      },
      side: "bl",
    },
  ];
  return (
    <div
      className={`relative w-full h-full 2xl:h-screen flex flex-col items-center justify-center px-2 pb-24 md:px-4 lg:px-0 bg-transparent`}
    >
      {" "}
      <div className="w-full pb-10 flex justify-start">
        <SectionTitle title="Contact Me" subTitle="" />
      </div>
      <div className={`z-20  flex flex-col lg:flex-row gap-6 items-center justify-center w-full sm:w-[40rem] md:w-[48rem] lg:w-[64rem] xl:w-[80rem] h-fit mx-auto`}>
        <div
          className={`lg:p-10 shadow-lg rounded-xl h-full w-full flex flex-col lg:flex-row justify-between gap-8 ${
            theme === "dark" ? "bg-[#050709] " : "bg-[#F6F3FC]"
          }`}
        >
          <div className="w-full lg:w-[40%] relative lg:flex-1 flex flex-col justify-between p-2">
            <div className="rounded-2xl mb-6 lg:mb-0 flex flex-col gap-4 ">
              <div className="flex items-center space-x-4"></div>
              <div className="flex items-center space-x-4">
                <Button>
                  <Phone />
                </Button>
                <div className="flex flex-col gap-2">
                  <div>Phone</div>
                  <div className="text-gray-500">+8801788084582</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Button>
                  <MapPinHouse />
                </Button>
                <div className="flex flex-col gap-2">
                  <div>Address</div>
                  <div className="text-gray-500">
                    Lalmonirhat, Rangpur Division, Bangladesh
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-2 z-30">
              <Link
                href={"https://www.linkedin.com/in/joujonikiasaroy/"}
                target="_blank"
              >
                <Button
                  className={`bg-white text-black hover:text-black ${
                    theme === "dark" ? "" : "border border-gray-200"
                  }`}
                >
                  <TiSocialLinkedin />
                </Button>
              </Link>
              <Link href={"https://github.com/JoujonikiAsa2"} target="_blank">
                <Button
                  className={`bg-white text-black  hover:text-black ${
                    theme === "dark" ? "" : "border border-gray-200"
                  }`}
                >
                  <FiGithub />
                </Button>
              </Link>
              <Link href="mailto:joujonikiasaroy.official@gmail.com">
                <Button
                  className={`bg-white text-black  hover:text-black ${
                    theme === "dark" ? "" : "border border-gray-200"
                  }`}
                >
                  <Mail />
                </Button>
              </Link>
            </div>
          </div>
          <div
            className={`w-full h-fit text-justify lg:w-[40%] p-4 lg:p-10 md:rounded-2xl flex flex-col gap-6 ${
              theme === "dark" ? "dark-card" : "light-card"
            }`}
          >
            <div className="text-2xl font-bold text-center">
              <h1 className={`text-transparent bg-clip-text bg-[#8750F7]`}>
                Get in Touch
              </h1>
            </div>
            <ContactForm />
          </div>
        </div>
        {corners.map((item, index) => (
          <div
            key={index}
            style={item?.style}
            className={`rounded-${item?.side}-full bg-[#8750F7] blur-3xl`}
          ></div>
        ))}
      </div>
      <div className="absolute right-0 top-0 h-full z-[2]">
        <Particle />
      </div>
    </div>
  );
};

export default ContactMeHome;
