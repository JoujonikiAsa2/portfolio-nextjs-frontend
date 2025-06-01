"use client";
import { useAppSelector } from "@/lib/hook";
import { Mail, MapPinHouse, Phone } from "lucide-react";
import Link from "next/link";
import { TiSocialLinkedin } from "react-icons/ti";
import { FiGithub } from "react-icons/fi";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import CustomInput from "@/components/shared/CustomInput";
import CustomTextArea from "@/components/shared/CustomTextArea";
import { Form } from "../ui/form";

type cornerStyle = {
  style: Record<string, unknown>;
  side: string;
};

const contactSchema = z.object({
  name: z.string({ message: "Name is required" }).nonempty(),
  phone: z.string().nonempty(),
  email: z.string().email(),
  subject: z.string().nonempty(),
  message: z.string().nonempty(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactMe = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  console.log(form);
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

  const handleContactForm = (data: ContactFormValues) => {
    console.log(data)
  };

  return (
    <div
      className={`relative w-full h-full 2xl:h-screen flex flex-col items-center justify-center px-2 py-28 md:px-4 lg:px-0 ${
        theme === "dark" ? "bg-[#0F0715] text-white" : "bg-white"
      }`}
    >
      <div className="flex flex-col lg:flex-row gap-6 items-center justify-center w-full sm:w-[40rem] md:w-[48rem] lg:w-[64rem] xl:w-[80rem] mx-auto h-full">
        <div
          className={`p-10 shadow-lg rounded-xl shadow-gray-500 h-full w-full flex flex-col lg:flex-row justify-between gap-8 ${
            theme === "dark" ? "bg-[#050709] " : "bg-[#F6F3FC]"
          }`}
        >
          <div className="lg:w-[40%] relative w-full lg:flex-1 flex flex-col justify-between">
            <div className="text-primary rounded-2xl mb-6 lg:mb-0 flex flex-col gap-4 ">
              <div>
                <p
                  className={`pb-8 text-lg lg:text-2xl font-bold inline-block ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  Let&apos;s discuss on something &nbsp;
                  <span
                    className={`text-transparent bg-clip-text ${
                      theme === "dark"
                        ? "bg-gradient-to-r from-[#8750F7] to-[#DCCCFD]"
                        : "bg-gradient-to-r from-[#8750F7] to-[#0F0715]"
                    }`}
                  >
                    cool
                  </span>{" "}
                  together
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Button>
                  <Mail />
                </Button>
                <div className="flex flex-col gap-2">
                  <div>Email</div>
                  <div className="text-gray-500">
                    joujonikiasaroy.official@gmail.com
                  </div>
                </div>
              </div>
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

            <div className="flex gap-2">
              <Link
                href={"https://www.linkedin.com/in/joujonikiasaroy/"}
                target="_blank"
              >
                <Button
                  className={`bg-gradient-to-r from-[#8750F7] to-[#0F0715] text-white border ${
                    theme === "dark" ? "" : "border border-gray-200"
                  }`}
                >
                  <TiSocialLinkedin />
                </Button>
              </Link>
              <Link href={"https://github.com/JoujonikiAsa2"} target="_blank">
                <Button
                  className={`bg-gradient-to-r from-[#8750F7] to-[#0F0715] text-white border ${
                    theme === "dark" ? "" : "border border-gray-200"
                  }`}
                >
                  <FiGithub />
                </Button>
              </Link>
            </div>
          </div>
          <div
            className={`w-full text-justify lg:w-[40%] h-full p-10 rounded-2xl bg-white flex flex-col gap-6`}
          >
            <div className="text-2xl font-bold text-center">
              <h1
                className={`text-transparent bg-clip-text bg-gradient-to-r from-[#8750F7] to-[#0F0715]`}
              >
                Get in Touch
              </h1>
            </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleContactForm)}
                className="space-y-6 text-black"
              >
                <CustomInput
                  type="text"
                  placeholder="Name"
                  name="from_name"
                  required={true}
                />
                <CustomInput
                  type="text"
                  placeholder="Phone"
                  name="from_phone"
                  required={true}
                />
                <CustomInput
                  type="text"
                  placeholder="Email"
                  name="from_email"
                  required={true}
                />
                <CustomInput
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  required={true}
                />
                <CustomTextArea
                  placeholder="Message"
                  name="message"
                  required={true}
                />
                <Button type="submit" className="w-full">Submit</Button>
              </form>
            </Form>
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
  );
};

export default ContactMe;
