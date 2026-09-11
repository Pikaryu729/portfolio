import { SocialIcon } from "react-social-icons";
import { site } from "@/lib/site";

type Props = {
  iconSize?: number;
};

export default function MySocialIcons({ iconSize = 40 }: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      {site.socials.map((social) => (
        <div
          key={social.url}
          className="transition-transform duration-300 hover:scale-110"
        >
          <SocialIcon
            url={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            style={{ height: iconSize, width: iconSize }}
          />
        </div>
      ))}
    </div>
  );
}
