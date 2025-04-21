import { HeroPage } from "@/components/hero-page";
import Navbar from "@/components/navbar";
import {AboutUs} from "@/components/aboutUs";
import FootNote from "@/components/footer";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <HeroPage />
      <section
          id="about">    
            <AboutUs />
      </section>
      <FootNote />
    </div>
  );
}
