import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import MySocialIcons from "./MySocialIcons";
import MySkillIcons from "./MySkillIcons";
import DownloadResumeBtn from "./DownloadResumeBtn";
import InteractiveGrid from "./InteractiveGrid";
import { site } from "@/lib/site";

export default function HeroSection() {
  return (
    <section id="home" className="relative scroll-mt-16 overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <InteractiveGrid className="mask-fade-b absolute inset-0 h-full w-full" />
        <div className="absolute -top-32 left-1/2 h-[500px] w-[820px] -translate-x-1/2 rounded-full bg-brand/10 blur-[120px]" />
        <div className="animate-float-slow absolute top-1/3 -left-32 h-72 w-72 rounded-full bg-indigo-400/20 blur-[100px]" />
        <div className="animate-float absolute right-0 bottom-0 h-80 w-80 rounded-full bg-violet-400/20 blur-[110px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 pt-28 pb-20 sm:px-6 lg:px-8 lg:pt-32 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Content */}
          <div className="space-y-8">
            <div className="animate-fade-up space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border bg-background/60 px-3 py-1 text-sm font-medium text-muted-foreground backdrop-blur">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                Available for new opportunities
              </span>

              <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Ryushin Wells
              </h1>

              <h2 className="text-xl font-semibold text-brand sm:text-2xl">
                {site.role}
              </h2>

              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                I build intelligent systems that solve real-world problems —
                specializing in deep learning, computer vision, and scalable
                software architecture.
              </p>
            </div>

            <div
              className="animate-fade-up flex flex-col gap-3 sm:flex-row"
              style={{ animationDelay: "150ms" }}
            >
              <Button size="lg" asChild className="group">
                <a href="#projects">
                  View my projects
                  <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                </a>
              </Button>
              <DownloadResumeBtn />
            </div>

            <div
              className="animate-fade-up"
              style={{ animationDelay: "250ms" }}
            >
              <MySocialIcons iconSize={38} />
            </div>

            <div
              className="animate-fade-up pt-2"
              style={{ animationDelay: "350ms" }}
            >
              <div className="mb-3 flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Sparkles className="size-4 text-brand" />
                Technologies &amp; skills
              </div>
              <MySkillIcons />
            </div>
          </div>

          {/* Portrait */}
          <div
            className="animate-fade-up relative mx-auto w-full max-w-sm lg:max-w-md"
            style={{ animationDelay: "200ms" }}
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-brand/30 via-indigo-400/20 to-violet-400/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border bg-card shadow-2xl">
              <Image
                src="/ryu.webp"
                alt="Ryushin Wells"
                width={640}
                height={640}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="animate-float absolute -bottom-5 -left-4 rounded-xl border bg-background/80 px-4 py-3 shadow-lg backdrop-blur">
              <p className="text-sm font-semibold">Deep Learning</p>
              <p className="text-xs text-muted-foreground">Computer Vision</p>
            </div>
            <div
              className="animate-float-slow absolute -top-4 -right-3 rounded-xl border bg-background/80 px-4 py-3 shadow-lg backdrop-blur"
              style={{ animationDelay: "1s" }}
            >
              <p className="text-sm font-semibold">Software Engineering</p>
              <p className="text-xs text-muted-foreground">Scalable Systems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
