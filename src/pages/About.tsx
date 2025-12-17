import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Zap, Eye, Code, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SEO } from "@/components/SEO";

export const About = () => {
  const handleRequestFeature = () => {
    const element = document.getElementById("request");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        const event = new CustomEvent("show-request-form");
        window.dispatchEvent(event);
      }, 500);
    } else {
      // If not on home page, navigate to home with hash
      window.location.href = "/#request";
    }
  };

  return (
    <>
      <SEO
        title="About Us - Privacy-First Online Tools"
        description="Learn about NimbleKit - a collection of fast, privacy-focused online utilities. All tools run in your browser with no data collection. Built with React, TypeScript, and Tailwind CSS."
        keywords="about nimblekit, privacy tools, browser-based tools, open source utilities"
      />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-4">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back
            </Button>
          </Link>
        </div>

        <div className="prose prose-lg text-text max-w-none">
          <h1 className="text-3xl font-bold mb-3">About NimbleKit</h1>

          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            NimbleKit is your all-in-one destination for simple, fast, and
            privacy-focused utilities. A clean, lightweight toolkit built for
            the things you do every day. Try our{" "}
            <Link
              to="/tool/calculator"
              className="text-primary hover:text-secondary font-medium"
            >
              free calculator
            </Link>
            ,{" "}
            <Link
              to="/tool/unit-converter"
              className="text-primary hover:text-secondary font-medium"
            >
              unit converter
            </Link>
            , or{" "}
            <Link
              to="/tool/qr-generator"
              className="text-primary hover:text-secondary font-medium"
            >
              QR code generator
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold mb-4">Why NimbleKit?</h2>
          <ul className="space-y-3 mb-8 list-none pl-0">
            <li className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">
                <strong>Privacy first</strong> - Most tools run entirely in your
                browser, no data leaves your device
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Zap className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">
                <strong>Lightning fast</strong> - No page reloads, instant
                results, optimized performance
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Eye className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">
                <strong>Accessible</strong> - WCAG 2.1 AA compliant, keyboard
                navigation, screen reader friendly
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Code className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">
                <strong>Open source</strong> - Built with modern web
                technologies, transparent and community-driven
              </span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
          <ul className="space-y-2 mb-8 list-none pl-0">
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">
                <strong>React 18</strong> - Modern UI framework
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">
                <strong>TypeScript</strong> - Type-safe development
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">
                <strong>Tailwind CSS</strong> - Utility-first styling
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">
                <strong>Vite</strong> - Lightning-fast build tool
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">
                <strong>Netlify</strong> - Seamless deployment and hosting
              </span>
            </li>
          </ul>

          <div className="bg-surface/60 p-6 rounded-xl border-2 border-gray-200 text-center mt-8">
            <p className="text-gray-600 mb-4">
              Have an idea for a new tool? We'd love to hear from you!
            </p>
            <Button size="lg" onClick={handleRequestFeature}>
              Request a Feature
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
