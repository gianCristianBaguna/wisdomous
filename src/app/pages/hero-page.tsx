import Image from "next/image";
import heroImg from "@/app/img/hero.png";

export const HeroPage = () => {
  console.log("This is the hero page");

  return (
    <div className="min-h-screen flex flex-col justify-center px-6 sm:px-20">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="flex flex-col items-start gap-6  ml-20 animate-flowInRight max-w-xl">
          <h1 className="font-montserrat text-[#00a7e0] text-5xl font-black tracking-widest">
            CUSTOM SOLUTIONS
          </h1>
          <h5 className="font-montserrat text-white leading-relaxed">
            We craft tailored software solutions designed to fit your unique
            business needs. From lightweight{" "}
            <span className="text-[#00a7e0] font-semibold">web apps</span> to
            <span className="text-[#00a7e0] font-semibold">
              {" "}
              internal tools
            </span>
            , we focus on clean code, scalability, and a seamless user
            experience. Our agile approach ensures your vision is built
            efficiently—with flexibility and precision.
          </h5>
        </div>

        <div className="animate-flowInLeft">
          <Image
            src={heroImg}
            alt="Hero"
            width={1000}
            height={850}
            className="rounded-2xl -mt-100 mr-50 object-contain"
          />
        </div>
      </div>
    </div>
  );
};
