"use client";
import Container from "@/components/Container";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { HiOutlineGlobeAlt, HiOutlineMail } from "react-icons/hi";
import { IoPeopleOutline, IoSearch } from "react-icons/io5";
import { TbBrandVercel, TbSpeakerphone } from "react-icons/tb";

const services = [
  {
    name: "Digital Marketing",
    icon: <TbSpeakerphone />,
    description:
      "Amplify your brand’s voice and connect with your audience on platforms such as Facebook, Instagram, LinkedIn, and Twitter through strategic social media campaigns.",
  },
  {
    name: "Website Creation",
    icon: <HiOutlineGlobeAlt />,
    description:
      "Growv designs visually stunning, user-friendly websites tailored to your brand, ensuring an engaging online presence that drives results and showcases your business's unique identity.",
  },
  {
    name: "Search Ads",
    icon: <IoSearch />,
    description:
      "Growv's Search Ads help you attract more customers by placing your business at the top of search results. We create and manage ads that drive traffic and increase your online visibility.",
  },
  {
    name: "Social Media Management",
    icon: <IoPeopleOutline />,
    description:
      "Growv’s Social Media Management boosts your brand’s online presence by creating and sharing engaging content, interacting with followers, and growing your social media accounts to connect with more customers.",
  },
  {
    name: "Email Marketing",
    icon: <HiOutlineMail />,
    description:
      "Growv’s Email Marketing service helps you connect with your audience through personalized, engaging emails that drive action. We craft messages that nurture relationships and boost your business’s success.",
  },
  {
    name: "Branding",
    icon: <TbBrandVercel />,
    description: "Growv’s Branding service builds your unique identity with compelling visuals and messaging. We help create a memorable brand that resonates with your audience and sets you apart from the competition."
  }
];

export default function Services() {
  return (
    <Container className="flex flex-col gap-20" bgClassName="bg-secondary" id="services">
      <div className="w-full h-full  items-center gap-8 ">
        <div className="flex flex-col items-center gap-2 text-center">
          <h3 className="title">Agency Expertise</h3>
          <span className="sub-title">Our Skills</span>
        </div>
      </div>
      <div className=" md:grid md:grid-cols-3 flex flex-col gap-7 mx-auto">
        {services.map((s) => (
          <div key={s.name} className="space-y-3 text-dimmed border border-neutral-300 p-7 rounded-xl">
            <div
              className="flex items-center gap-3 text-3xl font-semibold text-primary "
              key={s.name}
            >
              <div>{s.icon}</div>
              <div className="text-[20px]">{s.name}</div>
            </div>
            <p className="text-xl">{s.description}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
