"use client";
import { LogIn, LucideLightbulb, Menu, Moon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { setTheme } from "@/lib/theme/themeSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { TiSocialLinkedin } from "react-icons/ti";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.theme);
  console.log(theme);
  const screenWidth = window.outerWidth;

  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      setIsScrolled(scroll >= 64);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(screenWidth);
  return (
    <div
      className={`w-full z-50 px-2 md:px-0 ${
        isScrolled ? "fixed w-full mx-auto bg-[#0F0715]" : "absolute"
      } ${screenWidth <= 300 ? "hidden" : "block"} ${
        theme == "dark" ? "text-white" : "text-black  bg-[#FFFFFF]"
      }`}
    >
      <div className="navbar max-w-7xl">
        <h2>Joujoniki</h2>
        <div>
          <ul className="navbar-links">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex md:gap-8">
          <div className="navbar-contact-icons">
            <Link href={"https://www.linkedin.com/in/joujonikiasaroy/"} target="_blank">
              <Button
                className={`${
                  theme === "dark" ? "bg-white text-black hover:text-white" : ""
                }`}
              >
                <TiSocialLinkedin />
              </Button>
            </Link>
            <Link href={"https://github.com/JoujonikiAsa2"} target="_blank">
            <Button
              className={`${
                theme === "dark" ? "bg-white text-black hover:text-white" : ""
              }`}
            >
              <FiGithub />
            </Button>
            </Link>
          </div>

          <div className="navbar-menu md:ml-6 flex gap-2">
            <div>
              <Button>
                <Menu />
              </Button>
            </div>
            <div className="">
              {theme === "dark" ? (
                <Button
                  onClick={() => {
                    dispatch(setTheme("light"));
                  }}
                >
                  <Moon />
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    dispatch(setTheme("dark"));
                  }}
                  className="bg-white text-orange-400 border hover:text-white"
                >
                  <LucideLightbulb />
                </Button>
              )}
            </div>
            <div className="login-button">
              <Button>
                Login <LogIn />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
