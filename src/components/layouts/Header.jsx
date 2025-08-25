import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Predictions", href: "/predictions" },
    { label: "History", href: "/history" },
    { label: "About", href: "/about" },
  ];

  return (
    <header className="w-full border-b bg-white shadow-sm dark:bg-gray-900">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 dark:text-blue-400"
        >
          MyWebsite
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink asChild>
                    {/* ✅ Use Link instead of <a> */}
                    <Link
                      to={link.href}
                      className={cn(
                        "text-gray-700 border border-1 border-gray-400 p-1 bg-white inline-flex items-center justify-center gap-3 rounded-md dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      )}
                    >
                      {link.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Button asChild variant="outline">
            <Link to="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link to="/signup">Sign Up</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-4">
              <nav className="flex flex-col space-y-4">
                <div className="mt-4 flex space-x-3">
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button asChild className="w-full">
                    <Link to="/signup">Sign Up</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
