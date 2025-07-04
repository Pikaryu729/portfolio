import { SocialIcon } from "react-social-icons";
import { Project } from "./types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type Props = {
  project: Project;
};

function ProjectCard({ project }: Props) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
      <div className="relative overflow-hidden rounded-t-lg">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={300}
          height={200}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-lg">{project.title}</CardTitle>
        <CardDescription className="text-sm line-clamp-2">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-1">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            className="flex-1 bg-transparent"
            asChild
          >
            <SocialIcon
              style={{ height: "100%", width: "100%" }}
              borderRadius="25%"
              url={project.githubUrl}
              target="_blank"
            />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
