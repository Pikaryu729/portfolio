import { Project } from "./types";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

type Props = {
  project: Project;
};

function ProjectCard({ project }: Props) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300 group flex flex-col">
      <div className="relative overflow-hidden rounded-t-lg">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={300}
          height={200}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2">
          <Badge variant="secondary">{project.category}</Badge>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-lg">{project.title}</CardTitle>
        <CardDescription className="text-sm line-clamp-2">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 flex-1">
        <div className="flex flex-wrap gap-1">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button size="sm" variant="outline" className="flex-1" asChild>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Image src="github.svg" alt="github logo" width={20} height={20} />
            Code
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
