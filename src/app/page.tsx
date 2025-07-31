import Image from "next/image";
import { HeroSection } from "./pages//home/hero-page";
import { Navbar } from "@/components/navbar";
import {AboutUs} from "@/components/homeSections/aboutUs";
import FootNote from "@/components/footer";



export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <section
          id="about">    
            <AboutUs />
      </section>
      <FootNote />
    </div>
  );
}
