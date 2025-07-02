import { Button } from "@/components/ui/button";
import MySocialIcons from "./MySocialIcons";
import MySkillIcons from "./MySkillIcons";
import { Download, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const skills = [
    "python",
    "docker",
    "postgresql",
    "tensorflow-original",
    "scikitlearn",
    "pandas",
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Available for opportunities
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Ryushin Wells
              </h1>

              <h2 className="text-2xl lg:text-3xl font-semibold text-blue-600">
                Machine Learning & Software Engineer
              </h2>

              <p className="text-xl leading-relaxed max-w-2xl">
                Passionate about building intelligent systems that solve
                real-world problems. I specialize in deep learning, computer
                vision, and scalable software architecture.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold uppercase tracking-wide">
                Technologies & Skills
              </h3>
              <MySkillIcons />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                View My Projects
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg transition-all duration-300 bg-transparent"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <MySocialIcons iconSize={40} />
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl transform rotate-6 opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl transform -rotate-6 opacity-20"></div>

              {/* Main image container */}
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Alex Chen - ML Engineer"
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
