import {
  NavigationMenu,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function NavMenu() {
  return (
    <NavigationMenu className="flex gap-4">
      <NavigationMenuLink asChild>
        <Link href="#hero">Ryushin Wells</Link>
      </NavigationMenuLink>
      <NavigationMenuLink asChild>
        <Link href="#about-me">About</Link>
      </NavigationMenuLink>
      <NavigationMenuLink asChild>
        <Link href="#projects">Projects</Link>
      </NavigationMenuLink>
      <NavigationMenuLink asChild>
        <Link href="#skills">Skills</Link>
      </NavigationMenuLink>
      <NavigationMenuLink asChild>
        <Link href="#contact">Contact</Link>
      </NavigationMenuLink>
    </NavigationMenu>
  );
}
