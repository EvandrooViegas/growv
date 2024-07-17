import Container from "@/components/Container";

import Image from "next/image";
import React from "react";

export default function WorkWithUs() {
  return (
    <Container className="md:grid md:grid-cols-2 md:justify-between items-center flex flex-col-reverse gap-20 ">
      <div className="md:w-[500px] md:h-[500px] w-[350px] h-[350px] relative ">
        <Image
          src="/1.jfif"
          fill
          alt="Icon"
          className=" object-cover rounded-xl  aspect-square"
        />
      </div>
      <div className="flex flex-col gap-6 w-full text-center items-center">
        <h4 className="sub-title">Why Work With Us?</h4>
        <h2 className="title">
          The Growv Advantage: Elevate Your Marketing Success
        </h2>

        <p className="text-2xl text-dimmed">
          At Growv, we deliver tailored, results-driven marketing strategies
          with a focus on transparency, creativity, and comprehensive services.
          Our experienced team is dedicated to understanding your unique goals
          and driving your business’s success. Partner with us to elevate your
          brand and achieve impactful results.
        </p>
      </div>
    </Container>
  );
}
