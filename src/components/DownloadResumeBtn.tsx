import { Download } from "lucide-react";
import { Button } from "./ui/button";

export default function DownloadResumeBtn() {
  return (
    <Button variant="outline" size="lg" asChild>
      <a href="/resume.pdf" download>
        <Download />
        Download resume
      </a>
    </Button>
  );
}
