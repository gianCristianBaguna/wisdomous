import Image from "next/image";
import { HeroPage } from "./pages/hero-page";
import Navbar from "@/app/components/navbar";
import ContactForm from "@/app/components/ContactUs";
import {AboutUs} from "@/app/components/aboutUs";


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroPage />
      <section
          id="about">    
            <AboutUs />
      </section>
    </>
  );
}
