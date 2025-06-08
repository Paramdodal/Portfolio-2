"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveUpRight } from "lucide-react";

const jobProjects = [
  {
    imagePath: "/Expenso.jpg",
    title: "EXPENSO",
    description:
      "Developed a full-featured expense management system to track monthly and daily workloads. It helps users organize financial tasks efficiently with an intuitive UI and modern tech stack.",
    skills: ["Node.js", "Express", "MongoDB", "React", "Vite", "Shadcn UI"],
    link: "https://github.com/Paramdodal/Expenso", // replace with your link
  },
  {
    imagePath: "/bookmy.png",
    title: "BookMyTicket",
    description:
      "Created a full-stack MERN application replicating movie ticket booking features—browsing movies, viewing showtimes, and booking seats—with responsive design and real-time data flow.",
    skills: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Axios",
      "Mongoose",
      "Dotenv",
      "Nodemon",
    ],
    link: "https://github.com/Paramdodal/Book-My-Show-Clone", // replace with your link
  },
  {
    imagePath: "/Youtube.png",
    title: "Youtube-Clone",
    description:
      "A modern YouTube clone built with React and Tailwind CSS. This project mimics the core functionalities of YouTube, including video playback.",
    skills: [
      "React.js",
      "Tailwind CSS",
      "Axios ",
      "YouTube Data API v3 ",
    ],
    link: "https://github.com/Paramdodal/Youtube-Clone", // replace with your link
  },
  {
    imagePath: "/game1.png",
    title: "Simpsons Prediction Game",
    description:
      "An interactive browser-based game using advanced JavaScript logic and asynchronous programming to create a pattern-matching game that increases in complexity as the user progresses.",
    skills: ["HTML", "CSS", "JavaScript", "Async Programming", "DOM"],
    link: "https://paramdodal.github.io/Simpsons-Prediction-Game/", // replace with deployed or GitHub link
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Projects
        </h2>
      </div>
      <>
        {jobProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer"
          >
            <Card className="group lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200">
              <CardHeader className="h-full w-full lg:w-1/3 mb-4 p-0">
                <Image
                  src={project.imagePath}
                  alt={`Screenshot of ${project.title}`}
                  width={1920}
                  height={1080}
                  priority
                  className="bg-[#141414] mt-2 border border-muted-foreground rounded-[0.5rem]"
                />
              </CardHeader>
              <CardContent className="flex flex-col p-0 w-full lg:w-2/3">
                <p className="text-primary font-bold">
                  {project.title}{" "}
                  <MoveUpRight className="ml-1 inline-block h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
                </p>
                <CardDescription className="py-3 text-muted-foreground">
                  {project.description}
                </CardDescription>
                <CardFooter className="p-0 flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <Badge key={index}>{skill}</Badge>
                  ))}
                </CardFooter>
              </CardContent>
            </Card>
          </a>
        ))}
      </>
    </section>
  );
}
