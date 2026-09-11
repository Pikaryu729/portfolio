import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/projects";

type Props = {
  project: Project;
};

function ProjectCover({ project }: { project: Project }) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    );
  }

  return (
    <div
      className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
      style={{
        backgroundImage: `linear-gradient(135deg, ${project.accent[0]}, ${project.accent[1]})`,
      }}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.10) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />
      <div className="absolute -right-10 -bottom-12 size-48 rounded-full bg-white/15 blur-3xl" />
      <span className="absolute left-6 top-2 select-none text-7xl font-bold tracking-tight text-white/20">
        {project.monogram}
      </span>
    </div>
  );
}

export default function ProjectCard({ project }: Props) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl">
      <div className="relative aspect-[3/2] overflow-hidden">
        <ProjectCover project={project} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
        <Badge
          variant="secondary"
          className="absolute right-3 top-3 backdrop-blur"
        >
          {project.category}
        </Badge>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold tracking-tight">
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs font-normal">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-2 pt-2">
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "flex-1"
            )}
          >
            <Github />
            Code
          </Link>
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "sm" }), "flex-1")}
            >
              {project.liveLabel ?? "Live"}
              <ArrowUpRight />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
