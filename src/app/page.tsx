import Image from "next/image";
import { HeroPage } from "./pages/hero-page";
import Navbar from "@/app/components/navbar";
import ContactForm from "@/app/components/ContactUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroPage />
    </>
  );
}
