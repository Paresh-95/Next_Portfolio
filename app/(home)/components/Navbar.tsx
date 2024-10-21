
import Link from "next/link";
import React from "react";
import { SiGithub } from "react-icons/si";
import { SiX } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";


export default function Navbar() {
  const socials = [
    {
      link: "https://github.com/Paresh-95",
      label: "Github",
      Icon: <SiGithub size={20}/>,
    },
    {
      link: "https://www.linkedin.com/in/paresh-bhamare-a312b0167/",
      label: "Linkedin",
      Icon: <SiLinkedin size={20}/>,
    },
    {
      link: "https://x.com/Paresh94905183",
      label: "X",
      Icon: <SiX size={20}/>,
    },
  ];

  return (
    <nav className="py-10 animate-move-down flex justify-between items-center">
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2 hover:scale-125 transition-all ">Paresh 🧑🏽‍💻</h1>
      <div className="flex items-center gap-5 ">
        {
            socials.map((social,index)=>{
              return <Link href={social.link} key={index} aria-label={social.label}>
                  <div className="w-8 h-5 hover:scale-125 transition-all">{social.Icon}</div>
              </Link>
            })
        }
      </div>
    </nav>
  );
}
