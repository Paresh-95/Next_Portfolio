import React from "react";
import Title from "./Title";
import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";
import Link from "next/link";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { RiNextjsFill } from "react-icons/ri";

export default function Projects() {
  const projects = [
    {
      title: "Ajinkyatara Consultants’ Website",
      tech: [
        <SiReact className="text-blue-500" key="react" />,
        <RiNextjsFill className="text-white" key="next" />,
        <SiMongodb className="text-green-600" key="mongodb" />,
        <SiJavascript className="text-yellow-500" key="javascript" />,
        <SiTypescript className="text-blue-300" key="typescript" />,
        <SiTailwindcss className="text-blue-400" key="tailwind" />,
      ],
      link: "https://ajinkyatara.vercel.app/",
      cover: "/ajinkya.png",
      background: "bg-indigo-500",
    },

    {
      title: "StudyNotion Ed-Tech Platform ",
      tech: [
        <SiReact className="text-blue-500" key="react" />,
        <SiNodedotjs className="text-green-700" key="node" />,
        <SiExpress className="text-gray-600" key="express" />,
        <SiMongodb className="text-green-600" key="mongodb" />,
        <SiJavascript className="text-yellow-500" key="javascript" />,    
        <SiTailwindcss className="text-blue-400" key="tailwind" />,
      ],
      link: "https://study-notion-frontend-ivory-eta.vercel.app/",
      cover: "/StudyNotion.png",
      background: "bg-indigo-500",
    },
    {
      title: "Shortcut - A Bloging Platform",
      tech: [
        <RiNextjsFill className="text-white" key="next" />,
        ,
        <SiNodedotjs className="text-green-700" key="node" />,
        <SiExpress className="text-gray-600" key="express" />,
        <SiMongodb className="text-green-600" key="mongodb" />,
        <SiJavascript className="text-yellow-500" key="javascript" />,
        <SiTypescript className="text-blue-300" key="typescript" />,
        <SiTailwindcss className="text-blue-400" key="tailwind" />,
      ],
      link: "https://blog-app-frontend-attack-capital.vercel.app/",
      cover: "/blog.png",
      background: "bg-green-500",
    },
    {
      title: "Kanban Task Management Tool",
      tech: [
        <SiReact className="text-blue-500" key="react" />,
        <SiNodedotjs className="text-green-700" key="node" />,
        <SiExpress className="text-gray-600" key="express" />,
        <SiMongodb className="text-green-600" key="mongodb" />,
        <SiJavascript className="text-yellow-500" key="javascript" />,
        <SiTailwindcss className="text-blue-400" key="tailwind" />,
      ],
      link: "https://project-management-task-y2np.vercel.app/",
      cover: "/kanban.png",
      background: "bg-green-500",
    },

    {
      title: "News WebApp",
      tech: [
        <SiReact className="text-blue-500" key="react" />,
        <SiNodedotjs className="text-green-700" key="node" />,
        <SiExpress className="text-gray-600" key="express" />,
        <SiMongodb className="text-green-600" key="mongodb" />,
        <SiJavascript className="text-yellow-500" key="javascript" />,
        <SiTailwindcss className="text-blue-400" key="tailwind" />,
      ],
      link: "https://rapid-innovation-react.vercel.app/",
      cover: "/NewsApp.png",
      background: "bg-red-500",
    },
    {
      title: "React Blog Application",
      tech: [
        <SiReact className="text-blue-500" key="react" />,
        <SiJavascript className="text-yellow-500" key="javascript" />,
        <SiTailwindcss className="text-blue-400" key="tailwind" />,
      ],
      link: "https://blog-website-using-react.vercel.app/",
      cover: "/ReactBlog.png",
      background: "bg-green-500",
    },
    {
      title: "Music Academy NextJS",
      tech: [
        <SiReact className="text-blue-500" key="react" />,
        <RiNextjsFill className="text-white" key="next" />,
        <SiJavascript className="text-yellow-500" key="javascript" />,
        <SiTailwindcss className="text-blue-400" key="tailwind" />,
      ],
      link: "https://music-academy-next-js-eosin.vercel.app/",
      cover: "/MusicAcademy.png",
      background: "bg-violet-500",
    },
    {
      title: "E-commerce React",
      tech: [
        <SiReact className="text-blue-500" key="react" />,
        <SiJavascript className="text-yellow-500" key="javascript" />,
        <SiTailwindcss className="text-blue-400" key="tailwind" />,
      ],
      link: "https://e-commerce-react-redux-alpha.vercel.app/",
      cover: "/E-commerce.png",
      background: "bg-red-500",
    },
    {
      title: "Password Generator React",
      tech: [
        <SiReact className="text-blue-500" key="react" />,
        <SiJavascript className="text-yellow-500" key="javascript" />,
        <SiTailwindcss className="text-blue-400" key="tailwind" />,
      ],
      link: "https://react-password-generator-three-iota.vercel.app/",
      cover: "/PasswordGenerator.png",
      background: "bg-green-500",
    },
   
    
  ];

  return (
    <div>
      <Title
        text="Projects 💡"
        className="flex flex-col items-center  justify-center rotate-6"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20">
        {projects.map((project, idx) => {
          return (
            <Link href={project.link} key={idx}>
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    {project.title}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={project.cover}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl text-4xl flex flex-row gap-7 font-normal dark:text-white"
                    >
                      {project.tech}
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
