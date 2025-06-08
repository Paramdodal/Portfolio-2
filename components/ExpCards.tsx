"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveRight } from "lucide-react";

const jobPositions = [
  {
    timeline: "March 2025 — Present",
    currentPosition: "Product Engineer Intern",
    place: "HuntYourTribe (Remote)",
    previousPositions: [],
    description: `Contributing to core product development as part of the founding team in a fast-paced startup.
Assisting in building and optimizing full-stack solutions, resolving technical challenges, and improving performance.
Collaborating across teams and participating in strategic discussions shaping the tech roadmap and product vision.`,
    skills: [
      "Full-Stack Development",
      "Debugging",
      "Product Development",
      "Startup Experience",
      "Cross-functional Collaboration",
      "Tech Roadmapping",
    ],
  },
  {
    timeline: "December 2024",
    currentPosition: "Python Trainee",
    place: "KITS Inspire Engineering Company",
    previousPositions: [],
    description: "Focused on core Python programming fundamentals during a dedicated short-term training.",
    skills: ["Python Programming", "Scripting", "Problem Solving"],
  },
  {
    timeline: "November 2024",
    currentPosition: "Employability Skill Development Program",
    place: "Zensar",
    previousPositions: [],
    description: `Completed AWS Educate Cloud Computing Fundamentals.
    Earned AWS digital badges.
    Gained practical experience with AWS tools.`,
    skills: ["AWS Cloud", "Cloud Fundamentals", "Credly Badges", "Hands-on AWS"],
  },
];

export default function ExpCard() {
  return (
    <section id="experience" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Experience
        </h2>
      </div>
      <>
        {jobPositions.map((job, index) => (
          <Card
            key={index}
            className="lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200"
          >
            <CardHeader className="h-full w-full p-0">
              <CardTitle className="text-base text-slate-400 whitespace-nowrap">
                {job.timeline}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col p-0">
              <p className="text-foreground font-bold">
                {job.currentPosition} • {job.place}
              </p>
              {job.previousPositions.map((position, index) => (
                <p key={index} className="text-slate-400 text-sm font-bold">
                  {position}
                </p>
              ))}
              <CardDescription className="py-3 text-muted-foreground whitespace-pre-line">
                {job.description}
              </CardDescription>
              <CardFooter className="p-0 flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <Badge key={index}>{skill}</Badge>
                ))}
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </>
      <div className="lg:px-12 mt-12">
  <a
    href="https://drive.google.com/file/d/your-file-id/view?usp=sharing" // replace with your actual Drive link
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center font-medium leading-tight text-foreground group"
  >
    <span className="border-b border-transparent pb-px transition hover:border-primary motion-reduce:transition-none">
      View Full Resume
    </span>
    <MoveRight className="ml-1 inline-block h-5 w-5 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
  </a>
</div>
    </section>
  );
}
