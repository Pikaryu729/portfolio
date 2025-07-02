import {
  NavigationMenu,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuLink asChild>
        <Link className="text-blue-600" href="#projects">
          Projects
        </Link>
      </NavigationMenuLink>
    </NavigationMenu>
  );
}
