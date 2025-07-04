"use client";
import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { Project } from "./types";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselItem,
  CarouselPrevious,
} from "../ui/carousel";

function ProjectCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const projects: Project[] = [
    {
      title: "Wordle Solver",
      description: "wordle solver command line tool built in python",
      image: "/wordle.png",
      technologies: ["Python", "Information Theory", "Statistics"],
      githubUrl: "https://github.com/Pikaryu729/wordle",
      category: "AI",
    },
    {
      title: "Portfolio",
      description: "The portfolio app you are on right now",
      image: "/portfolio.jpg",
      technologies: ["Next.js", "Typescript", "UI/UX"],
      githubUrl: "https://github.com/Pikaryu729/portfolio",
      category: "Front End",
    },
    {
      title: "Titanic Surival App",
      description:
        "Interactive web app that uses machine learning to predict chance of surviving the sinking titanic",
      image: "/titanic-eda.jpg",
      technologies: ["Docker", "Azure", "Machine Learning", "Python", "React"],
      githubUrl: "https://github.com/Pikaryu729/titanic_eda",
      category: "AI/ML + Front End",
    },
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    // Use the actual number of projects instead of scroll snap positions
    setCount(projects.length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api, projects.length]);

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
        <p className="text-muted-foreground">
          Explore my latest coding projects and applications
        </p>
      </div>
      <div className="relative">
        <Carousel
          setApi={setApi}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {projects.map((project) => (
              <CarouselItem
                key={project.title}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <ProjectCard project={project} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>
      {/* Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: api?.scrollSnapList().length || 0 }).map(
          (_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === current - 1 ? "bg-primary" : "bg-muted-foreground/30"
              }`}
              onClick={() => api?.scrollTo(index)}
            />
          )
        )}
      </div>
      {/* Project Counter */}
      <div className="text-center mt-4 text-sm text-muted-foreground">
        {current} of {count} projects
      </div>
    </div>
  );
}

export default ProjectCarousel;
