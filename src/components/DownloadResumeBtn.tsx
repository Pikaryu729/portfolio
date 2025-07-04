import React from "react";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

function DownloadResumeBtn() {
  return (
    <div>
      <Button
        variant="outline"
        size="lg"
        className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg transition-all duration-300 bg-transparent"
        asChild
      >
        <a href="/resume.pdf" download>
          <Download className="mr-2 h-4 w-4" />
          Download Resume
        </a>
      </Button>
    </div>
  );
}

export default DownloadResumeBtn;
