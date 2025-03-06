"use client";
import { useAppSelector } from "@/lib/hook";
import photo from "@/assets/convocation.png";
import Image from "next/image";
import { roboto } from "@/app/font";

type cornerStyle = {
  style: Record<string, unknown>;
  side: string;
};
const AboutMe = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  const dots = Array.from({ length: 10 });
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
  const predefinedPositions = [
    "10%",
    "20%",
    "30%",
    "40%",
    "50%",
    "60%",
    "70%",
    "80%",
    "90%",
  ];
  return (
    <div
      className={`relative  w-full  h-full 2xl:h-screen flex flex-col items-center justify-center px-2 py-28 md:py-6 lg:py-0 md:px-4 lg:px-0 ${
        theme === "dark" ? "bg-[#0F0715] text-white" : "bg-white"
      }`}
    >
      <div className="flex flex-col lg:flex-row gap-6 items-center justify-center lg:mx-[10vw] 2xl:mx-[16vw] h-full">
        <div className="h-full w-full flex flex-col-reverse items-center md:flex-row justify-between">
          <div className="w-full text-center md:text-left md:w-[60%] ">
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
                className={`${roboto.className} font-normal  ${
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
                  TypeScript, Redux, Node.js, Express.js
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
          <div className=" w-[40%] relative w-full md:flex-1 flex justify-center lg:justify-end">
            <div className="h-[400px] rounded-2xl bg-gray-300 mb-6 lg:mb-0">
              <Image
                src={photo}
                alt="Formal Pic"
                width={300}
                height={300}
                className="border h-full"
              />
            </div>
          </div>
          {corners.map((item, index) => (
            <div
              key={index}
              style={item?.style}
              className={`rounded-${item?.side}-full bg-[#8750F7] blur-3xl`}
            ></div>
          ))}
          {dots.map((dot, index) => {
            const randomTop =
              predefinedPositions[
                Math.floor(Math.random() * predefinedPositions.length)
              ];
            const randomLeft =
              predefinedPositions[
                Math.floor(Math.random() * predefinedPositions.length)
              ];
            return (
              <div
                key={index}
                style={{
                  width: 10 + Math.floor(Math.random() * 10),
                  aspectRatio: 1,
                  position: "absolute",
                  opacity: 0.2,
                  top: randomTop,
                  left: randomLeft,
                  transition: "all 2s",
                }}
                className="rounded-full bg-[#8750F7]  animate-pulse"
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
