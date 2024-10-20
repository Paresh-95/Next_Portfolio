import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { FaReact, FaNodeJs, FaDatabase, FaJs, FaJava, FaDocker } from "react-icons/fa";
import { SiMongodb, SiExpress, SiMysql, SiCplusplus } from "react-icons/si"; // Import specific icons

export const projects = [
  {
    title: "React.js",
    icon: <FaReact size={40} />,
    color: "#61DBFB"
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
    title: "C++",
    icon: <SiCplusplus size={50} />,
    color: "#00599C"
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
        className="flex flex-col items-center justify-center -rotate-6"
      />
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
} 
