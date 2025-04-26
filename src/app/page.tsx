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
  );
}
