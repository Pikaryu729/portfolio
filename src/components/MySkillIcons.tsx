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
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function MySkillIcons() {
  const size = 50;
  const skills = [
    {
      icon: <PythonOriginal size={size} />,
      name: "Python",
      description:
        "is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built in data structures, combined with dynamic typing and dynamic binding, make it very attractive for Rapid Application Development, as well as for use as a scripting or glue language to connect existing components together. Python's simple, easy to learn syntax emphasizes readability and therefore reduces the cost of program maintenance.",
    },
    {
      icon: <ReactOriginal size={size} />,
      name: "React",
      description:
        "is a JavaScript library for building user interfaces. It enables developers to create large web applications that can update and render efficiently in response to data changes. React is component-based, allowing for reusable code and a unidirectional data flow that makes applications more predictable and easier to debug. It’s maintained by Meta and a community of developers and companies.",
    },
    {
      icon: <ScikitlearnOriginal size={size} />,
      name: "Scikit-learn",
      description:
        "is a powerful Python library for machine learning and data mining. It features simple and efficient tools for data analysis and modeling, including classification, regression, clustering, dimensionality reduction, and model selection. Built on top of NumPy, SciPy, and matplotlib, it is accessible to everyone and reusable in various contexts.",
    },
    {
      icon: <AmazonWebServices size={size} />,
      name: "Amazon Web Services (AWS)",
      description:
        "is a comprehensive cloud platform offering over 200 fully featured services including computing, storage, databases, machine learning, and deployment tools. It provides scalable and cost-effective infrastructure solutions to startups, enterprises, and governments. AWS allows businesses to build and scale applications quickly with pay-as-you-go pricing.",
    },
    {
      icon: <Git size={size} />,
      name: "Git",
      description:
        "is a distributed version control system designed to handle everything from small to very large projects with speed and efficiency. It enables multiple developers to collaborate on code, track changes, revert to previous stages, and create branches for experimentation. Git is the backbone of most modern collaborative software development workflows.",
    },
    {
      icon: <LinuxOriginal size={size} />,
      name: "Linux",
      description:
        "is a family of open-source Unix-like operating systems based on the Linux kernel. Known for its security, stability, and flexibility, Linux powers a wide variety of systems including servers, desktops, embedded systems, and supercomputers. It's the operating system of choice for many developers and system administrators.",
    },
    {
      icon: <NextjsOriginal size={size} />,
      name: "Next.js",
      description:
        "is a React framework for building fast and scalable web applications with server-side rendering, static site generation, and API routes. It simplifies the development of full-stack applications by integrating routing, automatic code splitting, and optimized performance out of the box. It is widely used for production-grade React applications.",
    },
    {
      icon: <PandasOriginal size={size} />,
      name: "Pandas",
      description:
        "is an open-source Python library providing high-performance, easy-to-use data structures and data analysis tools. It is built on top of NumPy and is essential for data cleaning, manipulation, and analysis. Pandas introduces the DataFrame object, enabling powerful tabular data operations similar to spreadsheets or SQL databases.",
    },
    {
      icon: <PostgresqlOriginal size={size} />,
      name: "PostgreSQL",
      description:
        "is a powerful, open-source object-relational database system with a strong reputation for reliability, feature robustness, and performance. It supports advanced data types, full ACID compliance, indexing, transactions, and extensions like PostGIS for geographic data. PostgreSQL is widely used for applications requiring complex queries and data integrity.",
    },
    {
      icon: <TypescriptOriginal size={size} />,
      name: "TypeScript",
      description:
        "is a typed superset of JavaScript that compiles to plain JavaScript. It adds static type definitions to JavaScript, enabling developers to catch errors early and write more maintainable code. TypeScript is widely adopted in large-scale web development, particularly in frameworks like Angular and Next.js.",
    },
    {
      icon: <DockerOriginal size={size} />,
      name: "Docker",
      description:
        "is a platform for developing, shipping, and running applications inside lightweight, portable containers. Containers isolate software and its dependencies, ensuring consistency across different environments. Docker simplifies deployment, improves scalability, and is widely used in DevOps and CI/CD pipelines.",
    },
    {
      icon: <FastapiOriginal size={size} />,
      name: "FastAPI",
      description:
        "is a modern, high-performance web framework for building APIs with Python. Based on standard Python type hints, it offers automatic data validation, interactive API docs, and async support out of the box. It is one of the fastest Python frameworks and is ideal for building robust, production-ready RESTful services.",
    },
  ];
  return (
    <div className="grid grid-cols-4 gap-2">
      {skills.map((skill, index) => {
        return (
          <HoverCard key={index}>
            <HoverCardTrigger asChild>
              <Card className="flex items-center p-4 rounded-lg shadow-md transform hover:scale-105 hover:shadow-xl transition-all duration-500 ease-in-out">
                {" "}
                {skill.icon}
              </Card>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <h2 className="text-blue-600 font-extrabold">{skill.name}</h2>
              <p>{skill.description}</p>
            </HoverCardContent>
          </HoverCard>
        );
      })}
    </div>
  );
}
