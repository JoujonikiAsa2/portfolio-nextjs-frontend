"use client";
import { useAppSelector } from "@/lib/hook";
import { Mail, MapPinHouse, Phone } from "lucide-react";
import Link from "next/link";
import { TiSocialLinkedin } from "react-icons/ti";
import { FiGithub } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import ContactForm from "./ContactForm";
import style3 from "@/assets/3.png";
import Image from "next/image";

const ContactMe = () => {
  const theme = useAppSelector((state) => state.theme.theme);

  return (
    <div
      className={`w-full h-full 2xl:h-screen flex flex-col items-center justify-center py-28 px-4 ${
        theme === "dark" ? "dark-background text-white" : "light-background"
      }`}
    >
      <div className="relative z-20  flex flex-col lg:flex-row gap-6 items-center justify-center w-full sm:w-[40rem] md:w-[44rem] lg:w-[60rem] xl:w-[75rem] mx-auto h-full">
        <div
          className={`p-4 lg:p-10 shadow-lg rounded-xl h-full w-full flex flex-col lg:flex-row justify-between gap-8 ${
            theme === "dark" ? "bg-[#050709] " : "bg-[#F6F3FC]"
          }`}
        >
          <div className="lg:w-[40%] relative w-full lg:flex-1 flex flex-col justify-between">
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
            className={`w-full text-justify lg:w-[40%] h-full p-4 lg:p-10 md:rounded-2xl flex flex-col gap-6 ${
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
        <Image
          src={style3}
          alt="style"
          width={100}
          height={200}
          className="absolute left-0 opacity-70 w-[10rem] h-[12rem] lg:w-[25rem] lg:h-[15rem] object-contain"
        />
      </div>
    </div>
  );
};

export default ContactMe;
