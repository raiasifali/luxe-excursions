'use client'
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavbarProps {
  theme?: 'light' | 'dark';
  backgroundColor: 'dark' | '';
}

const Navbar = ({ theme = 'dark', backgroundColor }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({ flag: "🇮🇩", code: "IDN", name: "Indonesian" });
  const pathname = usePathname();

  const languages = [
    { flag: "🇮🇩", code: "IDN", name: "Indonesian" },
    { flag: "🇺🇸", code: "ENG", name: "English" },
    { flag: "🇪🇸", code: "ESP", name: "Spanish" },
    { flag: "🇫🇷", code: "FRA", name: "French" },
    { flag: "🇩🇪", code: "DEU", name: "German" },
  ];

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Experiences", path: "/experiences" },
    { name: "Excursions", path: "/excursions" },
    { name: "Events", path: "/events" },
    { name: "Activities", path: "/activities" },
    { name: "Rentals", path: "/rentals" },
    { name: "Private Tours", path: "/private-tours" },
  ];

  const isActive = (path: string) => pathname === path;

  const handleLanguageSelect = (language: typeof selectedLanguage) => {
    setSelectedLanguage(language);
  };

  // Color logic based on theme prop
  const textColor = theme === 'light' ? "text-gray-900" : "text-white";
  const hoverColor = theme === 'light' ? "hover:text-amber-600" : "hover:text-amber-300";
  const activeColor = theme === 'light' ? "text-amber-600" : "text-[#E0C469]";

  return (
    <nav className={`fixed backdrop-blur-md top-0 left-0 w-full z-[100] ${theme === 'dark' ? 'text-white' : 'text-black'} ${backgroundColor === 'dark' ? 'bg-black': 'bg-white/10' }`}>
      <div className="mx-auto px-20">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">
              <img src="/assets/images/Header-2-Logo.svg" alt="alt" />
            </span>
          </Link>

          {/* Center Navigation - Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`font-medium transition-colors ${hoverColor} ${
                  isActive(item.path) ? activeColor : textColor
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side - Language & Register */}
          <div className="hidden md:flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={`flex items-center space-x-1 ${textColor} ${hoverColor} transition-colors p-2`}
                >
                  <span className="text-sm font-medium">
                    {selectedLanguage.flag} {selectedLanguage.code}
                  </span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg rounded-lg z-[60]">
                {languages.map((language) => (
                  <DropdownMenuItem
                    key={language.code}
                    onClick={() => handleLanguageSelect(language)}
                    className="flex items-center space-x-2 p-3 hover:bg-gray-50 cursor-pointer"
                  >
                    <span>{language.flag}</span>
                    <span className="text-sm font-medium">{language.name}</span>
                    <span className="text-xs text-gray-500">({language.code})</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button className="bg-[#E0C469] hover:from-amber-300 text-white">
              <Link href="/register">Register</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className={`${textColor} ${hoverColor}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/80 backdrop-blur-md border-t border-white/20 rounded-b-lg relative">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`block px-3 py-2 text-white text-base font-medium transition-colors hover:text-amber-600 ${
                    isActive(item.path) ? "text-amber-600" : textColor
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2 flex items-center justify-between">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={`flex items-center text-white space-x-1 hover:text-amber-600 transition-colors p-0`}
                    >
                      <span className="text-sm font-medium">
                        {selectedLanguage.flag} {selectedLanguage.code}
                      </span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg rounded-lg z-[200]">
                    {languages.map((language) => (
                      <DropdownMenuItem
                        key={language.code}
                        onClick={() => handleLanguageSelect(language)}
                        className="flex items-center space-x-2 p-3 hover:bg-gray-50 cursor-pointer"
                      >
                        <span>{language.flag}</span>
                        <span className="text-sm font-medium">{language.name}</span>
                        <span className="text-xs text-gray-500">({language.code})</span>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                
                <Button className="bg-[#E0C469] hover:from-amber-300 text-white ml-4">
                  <Link href="/register">Register</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
