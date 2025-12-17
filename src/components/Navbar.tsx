import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Search, Sun, Moon } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/features/hooks"; // Need to create hooks
import { toggleTheme } from "@/features/themeSlice";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.current);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // For MVP, just redirect to home with search param or filter logic
      // We'll implement a proper search later or just filter on home
      navigate(`/?q=${encodeURIComponent(searchQuery)}`);
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-40 w-full bg-bg/95 backdrop-blur-md border-b-2 border-gray-300 shadow-sm">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 font-bold text-xl text-primary shrink-0"
        >
          <img src="/logo.svg" alt="NimbleKit Logo" className="w-8 h-8" />
          <span className="hidden sm:inline">NimbleKit</span>
        </Link>

        <div className="hidden md:flex flex-1 max-w-md mx-4">
          <form onSubmit={handleSearch} className="w-full relative">
            <Input
              placeholder="Search tools by name or category..."
              className="pl-10 border-2 border-gray-300 shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          </form>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => dispatch(toggleTheme())}
            aria-label="Toggle theme"
          >
            {theme === "ocean" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
          <Button
            variant="primary"
            size="sm"
            className="h-9"
            onClick={() => {
              const element = document.getElementById("request");
              element?.scrollIntoView({ behavior: "smooth" });
              // Trigger form expansion after scroll
              setTimeout(() => {
                const event = new CustomEvent("show-request-form");
                window.dispatchEvent(event);
              }, 500);
            }}
          >
            Request Feature
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-surface bg-bg p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          <form onSubmit={handleSearch} className="relative">
            <Input
              placeholder="Search tools..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          </form>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Theme</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => dispatch(toggleTheme())}
            >
              {theme === "ocean" ? (
                <span className="flex items-center gap-2">
                  <Moon className="h-4 w-4" /> Sunset
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Sun className="h-4 w-4" /> Ocean
                </span>
              )}
            </Button>
          </div>
          <Button
            variant="primary"
            className="w-full"
            onClick={() => {
              const element = document.getElementById("request");
              element?.scrollIntoView({ behavior: "smooth" });
              setTimeout(() => {
                const event = new CustomEvent("show-request-form");
                window.dispatchEvent(event);
              }, 500);
              setIsMenuOpen(false);
            }}
          >
            Request Feature
          </Button>
        </div>
      )}
    </nav>
  );
};
