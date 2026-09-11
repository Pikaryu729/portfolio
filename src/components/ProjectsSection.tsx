import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/Project/ProjectCard";
import { projects } from "@/lib/projects";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-16 border-t border-border/60"
    >
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Reveal className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-brand">
            Portfolio
          </p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Featured projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A selection of things I&apos;ve built — from developer tooling to
            full-stack apps.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
