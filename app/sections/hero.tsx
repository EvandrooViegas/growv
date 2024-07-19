"use client";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";

import { forwardRef, LegacyRef } from "react";

export default function Hero() {
  return (
    <Background className="pt-60 pb-24">
      <Container className="h-full p-0 flex flex-col justify-end ">
        <div className="h-full flex flex-col justify-end mb-auto">
          <div className="flex flex-col gap-3 justify-center  items-center text-center grow h-full text-white md:p-0 px-6">
            <span className="font-semibold mb-2 md:text-2xl text-lg">
              Growv Digital: Online Solucions, Real Results
            </span>
            <h4 className="md:text-7xl text-6xl font-bold flex flex-col items-center gap-1.5 ">
              <span>Growing Brands with Strategic</span>{" "}
              <span className="bg-primary px-4 py-2">Marketing Solutions</span>
            </h4>

            <div className="flex items-center gap-4 mt-6">
              <Button cta>Contact Us</Button>
              <a href="#services">
                <Button variant="outline">See our Work</Button>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Background>
  );
}

type Props = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;
const Background = forwardRef<HTMLElement, Props>((props, ref) => {
  const { children, className, ...rest } = props;
  return (
    <div
      className="relative"
     
    >
      <video
        className="absolute z-[-2] w-full h-full object-cover bg-black"
        loop
        autoPlay
        muted={true}
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-[-1] bg-black/75" />
      <div className={`relative z-[1] w-full h-full ${className}`}  ref={ref as LegacyRef<HTMLDivElement> | undefined}>{children}</div>
    </div>
  );
});
Background.displayName = "Background";
