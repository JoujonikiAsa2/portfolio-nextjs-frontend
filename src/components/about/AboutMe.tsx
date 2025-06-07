"use client";
import { useAppSelector } from "@/lib/hook";
import photo from "@/assets/convocation.png";
import Image from "next/image";
import { roboto } from "@/app/font";

const AboutMe = () => {
  const theme = useAppSelector((state) => state.theme.theme);

  return (
    <div
      className={`relative  w-full  h-full 2xl:h-screen flex flex-col items-center justify-center px-2 py-28 md:px-4 lg:px-0 ${theme === "dark" ? "dark-background" : "light-background"}`}
    >
      <div className="py-24 lg:py-0 flex flex-col lg:flex-row items-center justify-center w-full sm:w-[40rem] md:w-[48rem] lg:w-[64rem] xl:w-[80rem] mx-auto px-4 lg:px-0 gap-4 h-full">
        <div className="h-full w-full flex flex-col-reverse items-center md:flex-row justify-between gap-6 ">
          <div className="w-full md:text-left md:w-[60%] ">
            <div className="space-y-6 w-full">
              <h5
                className={`${
                  theme === "dark" ? "text-white" : "text-black"
                } text-3xl lg:text-4xl capitalize`}
              >
                I&apos;m Joujoniki Asa Roy. I live in Lalmanirhat, Rangpur
                Division, Bangladesh.
              </h5>
              <p
                className={`text-justify ${roboto.className} font-normal  ${
                  theme === "dark" ? "text-[#dddddd]" : "text-black"
                }`}
              >
                I&apos;m a Frontend Developer and a Computer Science and
                Engineering graduate from Daffodil International University with
                a passion for building modern, high-performance web
                applications. With expertise in{" "}
                <span className="text-[#1B5CD7]">React.js, Next.js</span>, and{" "}
                <span className="text-[#1B5CD7]">Tailwind CSS</span>, I focus on
                creating seamless user experiences and scalable web solutions.
                My expertise extends to{" "}
                <span className="text-[#1B5CD7]">
                  {" "}
                  TypeScript, Redux, Node.js, Express.js, PostgreSQL, Prisma
                </span>{" "}
                and <span className="text-[#1B5CD7]">MongoDB</span>, and I’m
                always eager to explore new technologies to enhance my skill
                set.🚀
              </p>
              <p
                className={`${
                  theme === "dark" ? "text-[#dddddd]" : "text-black"
                } ${roboto.className} font-normal`}
              >
                Let me know if I can help you. I would love to hear from you
                anytime,{" "}
                <span className="text-[#1B5CD7]">
                  joujonikiasaroy.official@gmail.com
                </span>
              </p>
            </div>

            <div
              className={`py-10 font-normal ${
                theme === "dark" ? "text-[#dddddd]" : "text-black"
              } ${roboto.className}`}
            >
              <div
                className={`bg-clip-text text-transparent uppercase pb-2 ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-[#8750F7] to-[#DCCCFD]"
                    : "bg-gradient-to-r from-[#8750F7] to-[#0F0715]"
                }`}
              >
                <h2 className="text-xl font-bold">Education</h2>
              </div>
              <div className=" w-full">
                <h4>B.Sc in Computer Science and Engineering</h4>
                <small>Dec 2019 - July 2020</small>
                <h3>Daffodil International University</h3>
                <p>CGPA: 3.49</p>
              </div>
              <div></div>
            </div>
          </div>
          <div className=" w-[40%] relative md:flex-1 flex justify-center lg:justify-end">
            <div className="h-[400px] rounded-2xl bg-gray-300 mb-6 lg:mb-0">
              <Image
                src={photo}
                alt="Formal Pic"
                width={300}
                height={300}
                className="h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
