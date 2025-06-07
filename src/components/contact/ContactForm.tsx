"use client";
import React, { useRef } from "react";
import { Form } from "../ui/form";
import CustomInput from "../shared/CustomInput";
import CustomTextArea from "../shared/CustomTextArea";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { sendMessage } from "@/services/message";

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

  const sendEmail = async () => {
    const data = form.getValues();
    const messageData = {
      name: data.from_name,
      phone: data.from_phone,
      email: data.from_email,
      subject: data.subject,
      message: data.message,
    };

    setIsLoading(true);
    await sendMessage(messageData);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJSSERVICEID as string,
        process.env.NEXT_PUBLIC_EMAILJSTEMPLATEID as string,

        formRef.current as HTMLFormElement,
        process.env.NEXT_PUBLIC_EMAILJSPUBLICKEY as string
      )
      .then(
        (result) => {
          console.log(result);
          if (result.status === 200) {
            toast.success("Message Sent!", {
              style: {
                background: "#402254",
                color: "#FFFFFF",
              },
            });
            setIsLoading(false);
            reset();
          } else {
            toast.error("Message sent Failed!", {
              style: {
                background: "#632533",
                color: "#FFFFFF",
              },
            });
            setIsLoading(false);
            reset();;
          }
        },
        (error) => {
          console.error(error);
          setIsLoading(false);
          toast.error("Message sent failed", {
            style: {
              background: "#632533",
              color: "#FFFFFF",
            },
          });
          reset();
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
        <CustomInput type="text" placeholder="Name" name="from_name" />
        <CustomInput type="text" placeholder="Phone" name="from_phone" />
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
          {isLoading === true ? <span>Sending...</span> : <span>Send</span>}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
