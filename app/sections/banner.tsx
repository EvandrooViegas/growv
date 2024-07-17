import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <Container className="md:grid md:grid-cols-2 justify-between">
    
      <div className='p-8 flex flex-col gap-8 justify-center items-center text-center'>
             <span className='block sub-title'>GROWV DIGITAL</span>
             <div className="title flex flex-col gap-1 items-center">
             <span>The stairs that your brand needs to step up</span> <span className=" bg-primary text-white px-3 py-3 ">above  the rest</span>
             </div>
        </div>
        <div className="relative w-full h-[400px]">
        <Image
          alt="Banner"
          fill
          src="/banner.jpg"
          className="relative z-[-2] object-cover rounded-xl"
        />
      </div>
    </Container>
  );
}

function Background({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="relative">
      <div className=" w-full h-[400px]">
        <Image
          alt="Banner"
          fill
          src="/banner.jpg"
          className="relative z-[-2] object-cover rounded-xl"
        />
      </div>
      <div className="absolute inset-0 z-[-1] bg-black/65 rounded-xl" />
      <div className={`absolute inset-0 z-[1] w-full h-full ${className}`}>
        {children}
      </div>
    </div>
  );
}
