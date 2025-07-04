"use client";

import { useState, useRef, useEffect } from "react";
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
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

    useEffect(() => {
    if (!api) {
        return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
        setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const projects: Project[] = [
    {
      title: "Wordle Solver",
      description: "wordle solver command line tool built in python",
      image: "/wordle",
      technologies: ["python", "information theory", "statistics"],
      githubUrl: "https://github.com/Pikaryu729/wordle",
    },
  ];

  return (
    <div
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {projects.map((project, index) => (
          <CarouselItem
            key={index}
            className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
          >
            <div className="p-1">
              <ProjectCard project={project} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default ProjectCarousel;
