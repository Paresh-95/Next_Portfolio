import React from 'react'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";




export default function page() {


  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <Avatar className="w-32 h-32 mx-auto mb-4">
          <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Paresh Bhamare" />
          <AvatarFallback>PB</AvatarFallback>
        </Avatar>
        <h1 className="text-3xl font-bold mb-2">Paresh Bhamare</h1>
        <div className="flex justify-center space-x-4 mb-4">
          <Button variant="outline" size="sm">
            <FaEnvelope className="mr-2 h-4 w-4" />
            Email
          </Button>
          <Button variant="outline" size="sm">
            <FaGithub className="mr-2 h-4 w-4" />
            GitHub
          </Button>
          <Button variant="outline" size="sm">
            <FaLinkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </Button>
          <Button variant="outline" size="sm">
            <FaPhone className="mr-2 h-4 w-4" />
            +919284521255
          </Button>
        </div>
        <p className="text-muted-foreground">Shahada, India</p>
      </header>

      <section className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Training And Internship Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-8">
              <h3 className="font-semibold">R3 System India Pvt Ltd</h3>
              <p className="text-sm text-muted-foreground">Java Intern | July 2023 - Aug 2023</p>
              <ul className="list-disc list-inside mt-2">
                <li>Completed internship and training in web application development with grade A+.</li>
                <li>Developed and maintained 3 web applications using Java, JSP, Servlet and SQL technology, improving the performance and Scalability.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Oasis Infobyte</h3>
              <p className="text-sm text-muted-foreground">Web Development Internship | Feb 2023 - Mar 2023</p>
              <ul className="list-disc list-inside mt-2">
                <li>Completed a Full Stack development Bootcamp, mastering essential technologies including HTML, CSS, and JavaScript; built five individual projects that collectively demonstrated a 30% increase in coding efficiency over previous benchmarks.</li>
                <li>Developed 2 web applications enhancing the user experience.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Education</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-8">
              <h3 className="font-semibold">R.C Patel Institute of Technology, Shirpur</h3>
              <p className="text-sm text-muted-foreground">B.Tech Computer Engineering | 2025</p>
              <p>CGPA: 7.2</p>
            </div>
            <div className="mb-8">
              <h3 className="font-semibold">Madhyamik Vidyalaya, Tarhadi</h3>
              <p className="text-sm text-muted-foreground">12th (HSC) IT | 2021</p>
              <p>Percent: 87.2%</p>
            </div>
            <div>
              <h3 className="font-semibold">Kendriya Vidyalaya, Dhule</h3>
              <p className="text-sm text-muted-foreground">10th (CBSE) | 2019</p>
              <p>Percent: 82.2%</p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-12">
              <h3 className="font-semibold">Poshan Abhiyaan WebPortal - Meal Management Scheme</h3>
              <p className="text-sm text-muted-foreground">Web Application (Java)</p>
              <ul className="list-disc list-inside mt-2">
                <li>Enhancing transparency in the Pradhan Mantri Poshan Aahar Yojana by implementing Java, JDBC, Servlets, and JSP for real-time attendance tracking and automated meal allocation, increasing data accuracy by 30%.</li>
                <li>Facilitates seamless monitoring and data exchange between schools, government agencies, and suppliers, reducing chances of corruption.</li>
              </ul>
            </div>
            <div className="mb-12">
              <h3 className="font-semibold">StudyNotion - Online Learning Platform</h3>
              <p className="text-sm text-muted-foreground">Web Application (MERN)</p>
              <ul className="list-disc list-inside mt-2">
                <li>Developed StudyNotion, a fully functional Ed-tech platform using the MERN Stack, supporting 70+ users to create, consume, and rate educational content.</li>
                <li>Designed and implemented a scalable RESTful API with Node.js and Express.js, including endpoints for user authentication, course management, and payment processing, improving API response time by 20%.</li>
                <li>Enhanced platform usability for students and instructors by integrating features such as authentication, course management, payment integration, and cloud media storage.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">JourneyNotes - A Blog Website</h3>
              <p className="text-sm text-muted-foreground">Web Application (MERN)</p>
              <ul className="list-disc list-inside mt-2">
                <li>Implemented secure user registration and authentication using Node.js, Express.js, Ejs, JWT, and email verification, reducing unauthorized access attempts by 40%.</li>
                <li>Designed an intuitive UI for blog management, improving user engagement by 35% with features such as photo attachments, comments, and additional pages.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-8">
              <h3 className="font-semibold mb-1">Languages:</h3>
              <div className="flex flex-wrap gap-2">
                {["Java", "C", "C++", "JavaScript", "DSA"].map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
            <div className="mb-8">
              <h3 className="font-semibold mb-1">Web Development:</h3>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "Tailwind CSS", "Ejs", "MongoDB", "Express.js", "React", "Node.js"].map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
            <div className="mb-8">
              <h3 className="font-semibold mb-1">Databases:</h3>
              <div className="flex flex-wrap gap-2">
                {["MySQL", "MongoDB"].map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
            <div className="mb-8">
              <h3 className="font-semibold mb-1">Tools:</h3>
              <div className="flex flex-wrap gap-2">
                {["Git", "GitHub", "Postman", "VSCode", "Docker"].map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Soft Skills:</h3>
              <div className="flex flex-wrap gap-2">
                {["Problem Solving", "Communication", "Teamwork", "Fast Learner"].map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Certifications & Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li>Java Full Stack Developer: Wipro</li>
              <li>Team Member: Akatsuki Coding Club, RCPIT</li>
              <li>Zensar ESDP: Zensar, RPG Foundation</li>
              <li>Lead Coordinator: E-Builder Social Club, RCPIT</li>
              <li>Introduction to Back-End Development: Meta</li>
              <li>Introduction to Front-End Development: Meta</li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
