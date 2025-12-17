import { Link, useLocation } from "react-router-dom";
import { Github } from "lucide-react";

export const Footer = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <footer className="bg-surface border-t border-gray-200 mt-12">
      <div className="container mx-auto px-4 py-6">
        {/* Main content - centered on mobile, spread on desktop */}
        <div className="flex flex-col items-center gap-6">
          {/* Branding */}
          <div className="text-center">
            <h3 className="font-bold text-base text-primary mb-1">NimbleKit</h3>
            <p className="text-xs text-gray-500">
              All your everyday tools in one simple, fast hub.
            </p>
          </div>

          {/* Navigation - centered */}
          <div className="flex gap-4 text-xs text-gray-600">
            <Link
              to="/"
              className={`hover:text-primary transition-colors ${
                isActive("/") ? "text-primary font-semibold" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`hover:text-primary transition-colors ${
                isActive("/about") ? "text-primary font-semibold" : ""
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`hover:text-primary transition-colors ${
                isActive("/contact") ? "text-primary font-semibold" : ""
              }`}
            >
              Contact
            </Link>
            <Link
              to="/privacy"
              className={`hover:text-primary transition-colors ${
                isActive("/privacy") ? "text-primary font-semibold" : ""
              }`}
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className={`hover:text-primary transition-colors ${
                isActive("/terms") ? "text-primary font-semibold" : ""
              }`}
            >
              Terms
            </Link>
          </div>

          {/* Social - centered */}
          <div className="flex gap-4">
            <a
              href="https://github.com/Dev566/nimblekit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} NimbleKit. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
