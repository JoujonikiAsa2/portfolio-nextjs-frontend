import ContactMe from "@/components/contact/ContactMe";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Joujoniki",
  description: "Contact Information",
};

const ContactPage = () => {

  return (
    <ContactMe/>
  );
};

export default ContactPage;
