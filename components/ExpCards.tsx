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
    timeline: "Jan 2024 — Present",
    currentPosition: "Software Engineer",
    place: "Aetna",
    description:
      "Identifying and rectifying accessibility defects reported by customers, ensuring compliance with WCAG Level AA standards and the latest web accessibility guidelines. Contributing to the development of new components and features in Typescript and React.js, meticulously crafted to adhere to accessibility standards. Developed enhancements for Aetna’s member portal search, including provider recommendations and search filter options; ensured robust API integration and performance.",
    skills: [
      "Typescript",
      "ReactJS",
      "Playwright",
      "React Testing Library",
      "Accessibility",
      "CSS"
    ],
  },
  {
    timeline: "Sep 2023 — Jan 2024",
    currentPosition: "Software Engineer (Contract)",
    place: "Moonhub",
    description:
      "Contributed several UI and architectural improvements for Moonhub’s Chatbot and email sequence scheduling front-end application, leveraging React, Redux, and Typescript for robust development. Utilized Material UI and testing frameworks like React Testing Library and Jest to ensure high-quality, maintainable code. Conducted thorough code reviews, offering constructive feedback and mentorship to contractors, fostering a collaborative and efficient work environment.",
    skills: [
      "React",
      "Redux",
      "Typescript",
      "Material UI",
      "React Testing Library",
      "Jest"
    ],
  },
  {
    timeline: "Feb 2020 — Jan 2023",
    currentPosition: "Software Engineer",
    place: "GoFundMe",
    description:
      "Maintained and developed multiple iterations of GoFundMe’s campaign create flow; Implemented with React.js, Typescript, and Next.js, front-end using functional components, SASS CSS preprocessor, and Redux.js for managing persistent centralized state. When needed, made backend contributions to the legacy codebase written in PHP within the Laravel framework. Regularly worked and communicated with the Product and Design team to ensure quality and accessibility.",
    skills: [
      "React.js",
      "Typescript",
      "Next.js",
      "SASS",
      "Redux.js",
      "PHP",
      "Laravel"
    ],
  }
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
              <CardDescription className="py-3 text-muted-foreground">
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
          href="mailto:davidhjkang@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center font-medium leading-tight text-foreground group"
        >
          <span className="border-b border-transparent pb-px transition hover:border-primary motion-reduce:transition-none">
            Reach out for Full Resume
          </span>
          <MoveRight className="ml-1 inline-block h-5 w-5 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
        </a>
      </div>
    </section>
  );
}
