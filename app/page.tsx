import About from "./sections/mission";
import Hero from "./sections/hero";
import Services from "./sections/services";
import WorkWithUs from "./sections/workWithUs";
import Process from "./sections/process";
import Banner from "./sections/banner";
import Contact from "./sections/contact";

export default function Home() {
  return (
    <>
    <Hero />
    <About />
    <Services />
    <Banner />
    <Process />
    <WorkWithUs />
    <Contact />
    </>
  );
}

