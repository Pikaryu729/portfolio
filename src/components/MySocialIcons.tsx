import { SocialIcon } from "react-social-icons";

type Props = {
  iconSize: number;
};

export default function MySocialIcons({ iconSize }: Props) {
  const socialLinks = [
    "https://x.com/RyushinWells",
    "https://instagram.com/ryu.tsx",
    "https://linkedin.com/in/ryushin-wells-093698302",
    "https://github.com/pikaryu729",
  ];
  return (
    <div className="flex gap-4">
      {socialLinks.map((link) => {
        return (
          <SocialIcon
            style={{ height: iconSize, width: iconSize }}
            borderRadius="25%"
            key={link}
            url={link}
            target="_blank"
          />
        );
      })}
    </div>
  );
}
