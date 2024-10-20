import React from "react";
import Title from "./Title";
import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJavascript,
} from "react-icons/si";
import Link from "next/link";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { RiNextjsFill } from "react-icons/ri";

export default function Projects() {
  const projects = [
    {
      title: "StudyNotion Ed-Tech Platform ",
      tech: [
        <SiReact />,
        <SiNodedotjs />,
        <SiExpress />,
        <SiMongodb />,
        <SiJavascript />,
        <SiTailwindcss />,
      ],
      link: "http:localhost:3000/",
      cover: "/StudyNotion.png",
      background: "bg-indigo-500",
    },
    {
      title: "React Blog Application",
      tech: [<SiReact />, <SiJavascript />, <SiTailwindcss />],
      link: "https://blog-website-using-react.vercel.app/?vercelToolbarCode=ZJ_ljfSSjb5WUUs",
      cover: "/ReactBlog.png",
      background: "bg-green-500",
    },
    {
      title: "Music Academy NextJS",
      tech: [
        <SiReact />,
        <RiNextjsFill />,
        <SiJavascript />,
        <SiTailwindcss />,
      ],
      link: "https://music-academy-next-n82lf2e1i-paresh-95s-projects.vercel.app/?vercelToolbarCode=l-kj3teO_vGulIn",
      cover: "/MusicAcademy.png",
      background: "bg-violet-500",
    },
    {
      title: "Password Generator React",
      tech: [<SiReact />, <SiJavascript />, <SiTailwindcss />],
      link: "https://react-password-generator-k57323mi4-paresh-95s-projects.vercel.app/",
      cover: "/PasswordGenerator.png",
      background: "bg-green-500",
    },
    {
      title: "E-commerce React",
      tech: [<SiReact />, <SiJavascript />, <SiTailwindcss />],
      link: "https://e-commerce-react-redux-deym7iy2m-paresh-95s-projects.vercel.app/?vercelToolbarCode=xwze5-hytzK7cbX",
      cover: "/E-commerce.png",
      background: "bg-red-500",
    },
  ];

  return (
    <div>
      <Title
        text="Projects 💡"
        className="flex flex-col items-center justify-center rotate-6"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20">
        {projects.map((project,idx) => {
          return (
            <Link href={project.link} key={idx}>
            <CardContainer className="inter-var" >
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-1 border  ">
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
              </CardBody>
            </CardContainer>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
