import React from "react";
import Link from "next/link";
import Title from "./Title";
import { MovingBorderBtn } from "@/components/ui/moving-border";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const words1 = [
  {
    text: "I'm ",
  },
  {
    text: "Paresh.",
  },
];

function HeroSection() {
  return (
    <div className=" min-h-[60vh] animate-move-up  flex gap-16 flex-col-reverse lg:gap-0 lg:flex-row items-center justify-between">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Nice to meet you 👋 <br />
          <span className="underline underline-offset-8 decoration-green-500">
            <TypewriterEffectSmooth words={words1} />
          </span>
        </h1>
        <p className="md:w-96 text-lg text-gray-300">
          Based in India I&apos;m a FullStack Devloper passionate about building
          a modern web application that user love
        </p>
        <div className="flex flex-row gap-14">
          <Link
            className="inline-block group"
            href={"mailto:bhamareparesh.rcpit@gmail.com"}
          >
            <Title text="Contact Me " />
          </Link>
          <Link
            className="inline-block group"
            href="https://drive.google.com/uc?export=download&id=1Q494GNt2fsPKVFeXZF8gWlDLGNT4d_9j"
          >
            <Title text="Resume" />
          </Link>
        </div>
      </div>
      <div className="relative">
        <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
          <div className="flex gap-3 translate-x-8 ">
            <div className="w-32 h-32 rounded-2xl bg-green-500 hover:scale-125"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-500 hover:scale-125"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-indigo-500 hover:scale-125"></div>
            <div className="w-32 h-32 rounded-full bg-green-500 hover:scale-125"></div>
          </div>

          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
        <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10 hover:scale-125">
          <MovingBorderBtn borderRadius="0.5rem" className="p-3 font-semibold">
            <p>📢 Available for Work</p>
          </MovingBorderBtn>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
