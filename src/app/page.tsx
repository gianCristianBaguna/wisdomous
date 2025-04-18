import Image from "next/image";
<<<<<<< HEAD
import { HeroPage } from "./pages/hero-page";
import Navbar from "@/app/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroPage />
    </>
=======
import {HeroPage} from "@/app/components/hero-page"

export default function Home() {
  return (
    <HeroPage/>
>>>>>>> 91c5e1b3c2af5ad7a5bdf4d9f7e0b39d8158b784
  );
}
