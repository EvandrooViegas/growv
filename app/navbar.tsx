"use client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { useHeroIntersectionContext } from "./heroIntersection.context";
import Link from "next/link";
export default function Navbar() {
  const { inView } = useHeroIntersectionContext();
  return (
    <header className={`  w-full  transition-all   px-12  ${inView ? 'bg-transparent text-white py-12' : 'bg-white text-primary shadow-lg py-5'} fixed nav-z `}>
      <nav className="flex flex-row-reverse md:flex-row  items-center justify-between max-screen-width mx-auto">
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <FiMenu className="text-3xl " />
            </SheetTrigger>
            <SheetContent side="left" className="bg-black text-white">
              <ul className="flex flex-col justify-center h-full  items-center  gap-12">
                <li>
                  <Image src="/icon.png" width={170} height={170} alt="Logo" />
                </li>
                {links.map((l) => (
                  <li key={l.href} className="text-3xl font-semibold ">
                    <a href={l.href} className="">
                      {l.text}
                    </a>
                  </li>
                ))}
                <Button
                  cta
                  variant="outline"
                  size="lg"
                  className="rounded-full"
                >
                  Contact Us
                </Button>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
        <Link href="/" className="md:w-[150px] md:h-[70px] w-[100px] h-[60px] relative">
          {inView ? (
            <Image src="/icon.png" fill alt="Logo" className="object-contain" />
          ) : (
            <Image src="/icon-primary.png" fill alt="Logo" className="object-contain" />
          )}
        </Link>
        <ul className="md:flex hidden  items-center gap-6  ">
          {links.map((l) => (
            <li
              key={l.href}
              className="transition-all border-b-0  hover:border-b-2"
            >
              <a href={l.href}>{l.text}</a>
            </li>
          ))}
        </ul>
        <div className="hidden md:inline">
          <Button cta variant="outline" className={`transition-all ${inView ? 'text-input border-input' : 'border-primary text-primary'}`}>
            Contact Us
          </Button>
        </div>
      </nav>
    </header>
  );
}

const links = [
  { text: "HOME", href: "/#home" },
  { text: "OUR MISSION", href: "/#mission" },
  { text: "SERVICES", href: "/#services" },
  { text: "CONTACT", href: "/#contact" },
];
