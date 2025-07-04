"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import DarkModeToggle from "./DarkModeToggle";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link
            href="/"
            className="text-xl font-bold hover:text-blue-600 transition-colors"
          >
            Ryushin Wells
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <NavigationMenu>
                {navLinks.map((link) => (
                  <NavigationMenuLink asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md"
                    >
                      {link.label}
                    </Link>
                  </NavigationMenuLink>
                ))}
              </NavigationMenu>
              <DarkModeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <DarkModeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="hover:text-blue-600"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden border-t bg-background/95 backdrop-blur-sm`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
