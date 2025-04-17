"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
// import Image from "next/image";

const NavigationItems = [
  { name: "Benefits", path: "/benefits" },
  { name: "Features", path: "/features" },
  { name: "Services", path: "/services" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Pricing", path: "/pricing" },
  { name: "FAQ", path: "/faq" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="relative z-50">
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${
          isScrolled ? "dark:bg-black/80 shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            {/* <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-kn1C5CDk5zUaYa4BHkG1FKUQupEsrm.png"
              alt="Crop Studio"
              width={32}
              height={32}
              className="w-8 h-8"
            /> */}
            <span className="font-medium text-black dark:text-white">
              Mendowa
            </span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            {NavigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="text-black hover:text-gray-500 transition-colors dark:text-white dark:hover:text-gray-400"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              onClick={toggleTheme}
              className="border-white/10 bg-white/5 hover:bg-white/10"
            >
              {mounted &&
                (theme === "dark" ? <Sun size={18} /> : <Moon size={18} />)}
            </Button>
          </div>
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile sidebar that slides in from the right */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-black z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } overflow-y-auto`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <X size={24} className="text-white" />
          </button>
        </div>

        <nav className="px-4 py-2">
          {NavigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="block py-3 text-gray-300 hover:text-white border-b border-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <div className="mt-6 space-y-4">
            <Button
              variant="outline"
              onClick={toggleTheme}
              className="w-full border-white/10 bg-white/5 hover:bg-white/10"
            >
              {mounted &&
                (theme === "dark" ? (
                  <span className="flex items-center gap-2">
                    <Sun size={18} /> Light Mode
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Moon size={18} /> Dark Mode
                  </span>
                ))}
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
}
