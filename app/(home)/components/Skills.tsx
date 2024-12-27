import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { FaReact, FaNodeJs, FaJs, FaJava, FaDocker } from "react-icons/fa";
import { SiMongodb, SiExpress, SiMysql, } from "react-icons/si"; 
import { RiNextjsFill } from "react-icons/ri";

export const projects = [
  {
    title: "React.js",
    icon: <FaReact size={40} />,
    color: "#61DBFB"
  },
  {
    title: "Next.js",
    icon: <RiNextjsFill size={40} />,
    color: "#2A3335"
  },
  {
    title: "Node.js",
    icon: <FaNodeJs size={50} />,
    color: "#68A063"
  },
  {
    title: "MongoDB",
    icon: <SiMongodb size={50} />,
    color: "#4DB33D"
  },
  {
    title: "Express.js",
    icon: <SiExpress size={50} />,
    color: "#353535"
  },
  {
    title: "JavaScript",
    icon: <FaJs size={50} />,
    color: "#F0DB4F"
  },
  {
    title: "Java",
    icon: <FaJava size={50} />,
    color: "#5382A1"
  },
  {
    title: "MySQL",
    icon: <SiMysql size={50} />,
    color: "#00758F"
  },
  {
    title: "Docker",
    icon: <FaDocker size={50} />,
    color: "#0db7ed"
  }
];


export default function Skills() {
  return (
    <div>
      <Title
        text="Skills </>"
        className="flex flex-col items-center  justify-center -rotate-6"
      />
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
} 
