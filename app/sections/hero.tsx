"use client";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";

import { useHeroIntersectionContext } from "../heroIntersection.context";
import { forwardRef, LegacyRef, MutableRefObject } from "react";

export default function Hero() {
  const { ref } = useHeroIntersectionContext();
  return (
    <Background ref={ref}>
      <Container className="h-full p-0 flex flex-col justify-end ">
        <div className="h-full flex flex-col justify-end mb-auto">
          <div className="flex flex-col gap-3 justify-center mt-20 items-center text-center grow h-full text-white md:p-0 pb-12 px-6">
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
  const { children, ...rest } = props;
  return (
    <div
      className="relative"
      ref={ref as LegacyRef<HTMLDivElement> | undefined}
    >
      <video
        className="relative z-[-2] w-full h-[700px] object-cover bg-black"
        loop
        autoPlay
        muted={true}
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-[-1] bg-black/75" />
      <div className="absolute inset-0 z-[1] w-full h-full">{children}</div>
    </div>
  );
});
Background.displayName = "Background";
