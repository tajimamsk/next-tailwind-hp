import Blog from "@/components/Blog";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Solutions />
      <Testimonials />
      <Blog />
    </>
  );
}
