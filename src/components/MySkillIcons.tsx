import PythonOriginal from "devicons-react/icons/PythonOriginal";
import TypescriptOriginal from "devicons-react/icons/TypescriptOriginal";
import GoOriginal from "devicons-react/icons/GoOriginal";
import NodejsOriginal from "devicons-react/icons/NodejsOriginal";
import ReactOriginal from "devicons-react/icons/ReactOriginal";
import NextjsOriginal from "devicons-react/icons/NextjsOriginal";
import FastapiOriginal from "devicons-react/icons/FastapiOriginal";
import PostgresqlOriginal from "devicons-react/icons/PostgresqlOriginal";
import DockerOriginal from "devicons-react/icons/DockerOriginal";
import AmazonWebServices from "devicons-react/icons/AmazonwebservicesOriginalWordmark";
import { ClaudeIcon, OpenAiIcon } from "@/components/icons/AiIcons";

const size = 40;

const skills = [
  { label: "Claude Code", icon: <ClaudeIcon size={size} /> },
  { label: "Codex", icon: <OpenAiIcon size={size} /> },
  { label: "Python", icon: <PythonOriginal size={size} /> },
  { label: "TypeScript", icon: <TypescriptOriginal size={size} /> },
  { label: "Go", icon: <GoOriginal size={size} /> },
  { label: "Node.js", icon: <NodejsOriginal size={size} /> },
  { label: "React", icon: <ReactOriginal size={size} /> },
  { label: "Next.js", icon: <NextjsOriginal size={size} /> },
  { label: "FastAPI", icon: <FastapiOriginal size={size} /> },
  { label: "PostgreSQL", icon: <PostgresqlOriginal size={size} /> },
  { label: "Docker", icon: <DockerOriginal size={size} /> },
  { label: "AWS", icon: <AmazonWebServices size={size} /> },
];

export default function MySkillIcons() {
  return (
    <div className="grid max-w-2xl grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-3 lg:grid-cols-6">
      {skills.map((skill) => (
        <div
          key={skill.label}
          title={skill.label}
          className="group flex aspect-square items-center justify-center rounded-xl border bg-background/50 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-md"
        >
          <span className="opacity-80 transition-opacity duration-300 group-hover:opacity-100">
            {skill.icon}
          </span>
        </div>
      ))}
    </div>
  );
}
