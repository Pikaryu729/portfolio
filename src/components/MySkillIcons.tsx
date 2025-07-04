import React from "react";
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
import { Card } from "@/components/ui/card";

export default function MySkillIcons() {
  const size = 55;
  const skills = [
    {
      icon: <PythonOriginal size={size} />,
      href: "https://python.org",
    },
    {
      icon: <ReactOriginal size={size} />,
      href: "https://react.dev",
    },
    {
      icon: <ScikitlearnOriginal size={size} />,
      href: "https://scikit-learn.org",
    },
    {
      icon: <AmazonWebServices size={size} />,
      href: "https://aws.amazon.com",
    },
    {
      icon: <Git size={size} />,
      href: "https://git-scm.com",
    },
    {
      icon: <LinuxOriginal size={size} />,
      href: "https://linux.org",
    },
    {
      icon: <NextjsOriginal size={size} />,
      href: "https://nextjs.org",
    },
    {
      icon: <PandasOriginal size={size} />,
      href: "https://pandas.pydata.org",
    },
    {
      icon: <PostgresqlOriginal size={size} />,
      href: "https://postgresql.org",
    },
    {
      icon: <TypescriptOriginal size={size} />,
      href: "https://typescriptlang.org",
    },
    {
      icon: <DockerOriginal size={size} />,
      href: "https://docker.com",
    },
    {
      icon: <FastapiOriginal size={size} />,
      href: "https://fastapi.tiangolo.com",
    },
  ];
  return (
    <div className="grid grid-cols-4 gap-2">
      {skills.map((skill) => {
        return (
          <a href={skill.href} target="_blank" key={skill.href}>
            <Card className="flex items-center p-4 rounded-lg shadow-md transform hover:scale-105 hover:shadow-xl transition-all duration-500 ease-in-out">
              {skill.icon}
            </Card>
          </a>
        );
      })}
    </div>
  );
}
