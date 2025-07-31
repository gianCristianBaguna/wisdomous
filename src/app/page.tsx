<<<<<<< HEAD
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
=======
import { HeroPage } from "@/components/hero-page";
import Navbar from "@/components/navbar";
import { AboutUs } from "@/components/aboutUs";
import FootNote from "@/components/footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </Head>
      <div className="overflow-hidden">
        <Navbar />
        <HeroPage />
        <section id="about">
          <AboutUs />
        </section>
        <FootNote />
      </div>
    </>
>>>>>>> f4940fcd8c161a0c794b1ae41a96a26c5a02056f
  );
}
