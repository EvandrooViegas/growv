import Container from "@/components/Container";
import Image from "next/image";
import React from "react";
import Form from "./form";

export default function Contact() {
  return (
    <Container
    id="contact"
      className="md:grid md:grid-cols-2 flex flex-col  gap-12 items-start"
      bgClassName="bg-secondary"
    >
        <div className="relative w-full aspect-square">
    <Image src="/contact.jpg" fill  alt="Contact" className="rounded-xl" />

        </div>
      <div className="w-full ">
        <Form />
      </div>
    </Container>
  );
}
