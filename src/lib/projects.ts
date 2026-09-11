export type Project = {
  title: string;
  description: string;
  image?: string;
  accent: [string, string];
  monogram: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  liveLabel?: string;
  category: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "pandatrace",
    description:
      "Provenance tracking for pandas pipelines — see what each operation did, which columns it created, and where the nulls came from. Fully typed and published on PyPI.",
    image: "/projects/pandatrace.svg",
    accent: ["#059669", "#0891b2"],
    monogram: "Pt",
    technologies: ["Python", "pandas", "Data Provenance", "PyPI"],
    githubUrl: "https://github.com/Pikaryu729/pandatrace",
    liveUrl: "https://pypi.org/project/pandatrace/",
    liveLabel: "PyPI",
    category: "Data Tooling",
    featured: true,
  },
  {
    title: "sonix",
    description:
      "An async web framework built from scratch on asyncio — including the HTTP/1.1 server, ASGI bridge, WebSocket codec, routing, and dependency injection underneath it.",
    image: "/projects/sonix.svg",
    accent: ["#4f46e5", "#7c3aed"],
    monogram: "Sx",
    technologies: ["Python", "asyncio", "ASGI", "WebSockets"],
    githubUrl: "https://github.com/Pikaryu729/sonix",
    category: "Systems & Web",
    featured: true,
  },
  {
    title: "typesafe",
    description:
      "SSH-accessible typing practice and head-to-head races in a full terminal UI. Connect over SSH and race other typists in real time.",
    image: "/projects/typesafe.svg",
    accent: ["#d97706", "#ea580c"],
    monogram: "Ts",
    technologies: ["Go", "SSH", "Bubble Tea", "WebSockets"],
    githubUrl: "https://github.com/Pikaryu729/typesafe",
    category: "Networking & TUI",
    featured: true,
  },
  {
    title: "openrep",
    description:
      "A local-first strength training tracker. FastAPI + SQLite backend with a React and TanStack frontend — one command to install, and your data never leaves your machine.",
    image: "/projects/openrep.svg",
    accent: ["#e11d48", "#db2777"],
    monogram: "Or",
    technologies: ["TypeScript", "React", "FastAPI", "SQLite"],
    githubUrl: "https://github.com/Pikaryu729/openrep",
    category: "Full Stack",
  },
];
