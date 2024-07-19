import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <Container className="flex md:flex-row flex-col gap-5 items-center text-sm  text-neutral-800  justify-between p-4">
        <Image src="/icon-primary.png" width={100} height={100} alt="Icon" />
        <span>Growv Digital © 2024</span>
        <div className="flex items-center gap-4">
          <span className="">All Rights Reserved </span>
          <span>|</span>
          <Link href="/terms" className="underline">
            Terms
          </Link>
        </div>
      </Container>
    </footer>
  );
}
