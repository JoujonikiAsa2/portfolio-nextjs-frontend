"use client";
import { useAppSelector } from "@/lib/hook";
import Link from "next/link";
import React from "react";
import {  FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  return (
    <div
      className={`px-4 lg:px-0 ${
        theme === "dark" ? "bg-[#050709] text-white" : "bg-[#F6F3FC] text-black"
      }`}
    >
      <footer className={`py-10`}>
        <div className="max-w-7xl mx-auto flex  justify-center items-center">
          {/* Footer Top Section */}
          <div className="w-full flex flex-col md:flex-row justify-center mb-8">
            {/* About Section */}
            <div className="mb-6 md:mb-0 md:w-1/3">
              <h4 className="text-lg font-semibold mb-4">Joujoniki Asa Roy</h4>
            </div>

            {/* Quick Links */}
            <div className="mb-6 md:mb-0 md:w-1/3">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:underline">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:underline">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="md:w-1/3">
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/joujonikiasaroy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    theme === "dark"
                      ? "text-gray-200 hover:text-white"
                      : "text-black"
                  }`}
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://github.com/JoujonikiAsa2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    theme === "dark"
                      ? "text-gray-200 hover:text-white"
                      : "text-black"
                  }`}
                >
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className={`flex justify-center items-center h-16 text-xs`}>
        &copy; 2025 Joujoniki Asa Roy. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
