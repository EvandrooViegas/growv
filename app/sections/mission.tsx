"use client"
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function Mission() {

  return (
    <Container className="md:grid md:grid-cols-5  flex flex-col gap-20 " id="mission">
      <div className="col-span-2 flex flex-col gap-6">
        <h4 className="sub-title">OUR MISSION</h4>
        <h2 className="title">Your Growth, Our Commitment</h2>
        <p className="text-2xl text-dimmed">
          At Growv, our mission is to empower businesses with innovative,
          data-driven marketing solutions that drive growth and enhance brand
          visibility. We are dedicated to understanding the unique needs of our
          clients and crafting customized strategies that deliver measurable
          results. 
        </p>
        <Button className="w-fit border-primary text-primary" variant="outline" size="default" cta>
          See How
        </Button>
      </div>
      <div className="md:col-span-3 md:h-[600px] h-[400px] w-full md:grid md:grid-cols-2 flex flex-col gap-8">
        <Image
          src="/our_mission/1.jpg"
          width={500}
          height={500}
          alt="Icon"
          className="md:ml-auto hidden md:inline object-cover h-full"
        />
        <Image
          src="/our_mission/3.jpg"
          width={500}
          height={500}
          alt="Icon"
          className="md:ml-auto  object-cover h-full"
        />
      </div>
    </Container>
  );
}
