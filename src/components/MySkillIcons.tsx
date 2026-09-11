import PythonOriginal from "devicons-react/icons/PythonOriginal";
import ReactOriginal from "devicons-react/icons/ReactOriginal";
import ScikitlearnOriginal from "devicons-react/icons/ScikitlearnOriginal";
import AmazonWebServices from "devicons-react/icons/AmazonwebservicesOriginalWordmark";
import DockerOriginal from "devicons-react/icons/DockerOriginal";
import FastapiOriginal from "devicons-react/icons/FastapiOriginal";
import Git from "devicons-react/icons/GitOriginal";
import LinuxOriginal from "devicons-react/icons/LinuxOriginal";
import NextjsOriginal from "devicons-react/icons/NextjsOriginal";
import PandasOriginal from "devicons-react/icons/PandasOriginal";
import PostgresqlOriginal from "devicons-react/icons/PostgresqlOriginal";
import TypescriptOriginal from "devicons-react/icons/TypescriptOriginal";

const size = 40;

const skills = [
  { label: "Python", icon: <PythonOriginal size={size} /> },
  { label: "TypeScript", icon: <TypescriptOriginal size={size} /> },
  { label: "React", icon: <ReactOriginal size={size} /> },
  { label: "Next.js", icon: <NextjsOriginal size={size} /> },
  { label: "FastAPI", icon: <FastapiOriginal size={size} /> },
  { label: "scikit-learn", icon: <ScikitlearnOriginal size={size} /> },
  { label: "Pandas", icon: <PandasOriginal size={size} /> },
  { label: "PostgreSQL", icon: <PostgresqlOriginal size={size} /> },
  { label: "Docker", icon: <DockerOriginal size={size} /> },
  { label: "AWS", icon: <AmazonWebServices size={size} /> },
  { label: "Linux", icon: <LinuxOriginal size={size} /> },
  { label: "Git", icon: <Git size={size} /> },
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
