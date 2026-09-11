import { ArrowUpRight } from "lucide-react";
import { site, navLinks } from "@/lib/site";
import BadAppleEasterEgg from "./BadAppleEasterEgg";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-3">
            <a
              href="#home"
              className="text-lg font-semibold tracking-tight transition-colors hover:text-brand"
            >
              {site.name}
            </a>
            <p className="max-w-xs text-sm text-muted-foreground">
              {site.role} — building products end to end, AI-first.
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:gap-16">
            <div>
              <h3 className="mb-3 text-sm font-medium text-muted-foreground">
                Navigate
              </h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors hover:text-brand"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-medium text-muted-foreground">
                Connect
              </h3>
              <ul className="space-y-2">
                {site.socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1 text-sm transition-colors hover:text-brand"
                    >
                      {social.label}
                      <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
            <BadAppleEasterEgg />
            <p>Built with Next.js &amp; Tailwind CSS.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
