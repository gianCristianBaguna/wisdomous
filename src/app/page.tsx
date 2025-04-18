import Image from "next/image";
import { HeroPage } from "./pages/hero-page";
import Navbar from "@/app/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroPage />
    </>
  );
}
