"use client";
import React, { useRef } from "react";
import { Form } from "../ui/form";
import CustomInput from "../shared/CustomInput";
import CustomTextArea from "../shared/CustomTextArea";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const ContactForm = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { handleSubmit, reset } = useForm<FormData>();

  const contactSchema = z.object({
    from_name: z.string({ message: "Name is required" }).nonempty(),
    from_phone: z.string().nonempty(),
    from_email: z.string().email(),
    subject: z.string().nonempty(),
    message: z.string().nonempty(),
  });

  type ContactFormValues = z.infer<typeof contactSchema>;
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      from_name: "",
      from_phone: "",
      from_email: "",
      subject: "",
      message: "",
    },
  });

  //   console.log(form);
  console.log(
    process.env.NEXT_PUBLIC_EMAILJSSERVICEID,
    process.env.NEXT_PUBLIC_EMAILJSTEMPLATEID,
    process.env.NEXT_PUBLIC_EMAILJSPUBLICKEY
  );

  const sendEmail = async (data: FieldValues) => {
    setIsLoading(true);
    console.log(data);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJSSERVICEID as string,
        process.env.NEXT_PUBLIC_EMAILJSTEMPLATEID as string,

        formRef.current as HTMLFormElement,
        process.env.NEXT_PUBLIC_EMAILJSPUBLICKEY as string
      )
      .then(
        (result) => {
          if (result.status === 200) {
            toast.success("Message Sent!", {
              style: {
                borderRadius: "8px",
                background: "#333",
                color: "#fff",
              },
            });
            setIsLoading(false);
            reset();
          } else {
            toast.error("Message Failed!", {
              style: {
                borderRadius: "8px",
                background: "#333",
                color: "#fff",
              },
            });
            setIsLoading(false);
            reset();
          }
        },
        (error) => {
          setIsLoading(false);
          toast.error(error);
        }
      );
  };

  return (
    <Form {...form}>
      <form
        ref={formRef}
        onSubmit={handleSubmit(sendEmail)}
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
        <CustomTextArea placeholder="Message" name="message" required={true} />
        <Button type="submit" className="w-full">
          {isLoading === true ? <span>Loading...</span> : <span>Submit</span>}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
