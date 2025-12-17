import { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Clock, Star, ChevronDown, ChevronUp } from "lucide-react";
import { tools } from "@/config/tools";
import { useAppSelector } from "@/features/hooks";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";
import { SEO } from "@/components/SEO";
import { AdSidebar } from "@/components/AdSidebar";

export const Home = () => {
  const navigate = useNavigate();
  const { addToast } = useToast();
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const recentTools = useAppSelector((state) => state.recentTools.tools);
  const liveTools = tools.filter((t) => t.status === "live");
  const comingSoonTools = tools.filter((t) => t.status === "coming-soon");

  // Group tools by category
  const categories = Array.from(new Set(liveTools.map((t) => t.category)));

  // Filter tools based on selected filter
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q")?.toLowerCase() || "";

  // Filter tools based on selected filter and search query
  const filteredTools = liveTools.filter((t) => {
    const matchesCategory =
      selectedFilter === "all" || t.category === selectedFilter;
    const matchesSearch =
      !searchQuery ||
      t.name.toLowerCase().includes(searchQuery) ||
      t.description.toLowerCase().includes(searchQuery) ||
      t.category.toLowerCase().includes(searchQuery);

    return matchesCategory && matchesSearch;
  });

  // Listen for custom event to show request form
  useEffect(() => {
    const handleShowForm = () => setShowRequestForm(true);
    window.addEventListener("show-request-form", handleShowForm);
    return () =>
      window.removeEventListener("show-request-form", handleShowForm);
  }, []);

  // Handle form submission
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      // Show success toast
      addToast(
        "Thank you for helping us improve! Our development team is thrilled to hear from you. We'll review your feedback and get back to you soon.",
        "success"
      );

      // Reset form and close
      form.reset();
      setShowRequestForm(false);
    } catch (error) {
      addToast(
        "Oops! Something went wrong. Please try again or contact us directly.",
        "error"
      );
    }
  };

  return (
    <>
      <SEO
        title="Free Online Utility Tools - Calculator, Converter & More"
        description="Access 11 free online tools including calculator, unit converter, QR code generator, JSON formatter, BMI calculator, and more. Fast, private, no signup required."
        keywords="online calculator, unit converter, QR code generator, JSON formatter, BMI calculator, free tools, web utilities"
      />
      <div className="space-y-6 animate-in fade-in duration-500">
        {/* Hero Section - Compact */}
        <section className="text-center py-6 md:py-8 space-y-3">
          <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            NimbleKit
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            All your everyday tools in one simple, fast hub.
          </p>
          <div className="flex justify-center gap-3">
            <Button
              size="lg"
              onClick={() =>
                document
                  .getElementById("tools")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Tools
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => navigate("/about")}
            >
              Learn More
            </Button>
          </div>
        </section>

        {/* Sticky Filter Bar - Enhanced */}
        <section className="sticky top-16 z-30 bg-bg/98 backdrop-blur-md border-b border-gray-300 shadow-sm -mx-4 px-4 py-2.5">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
            <button
              onClick={() => setSelectedFilter("all")}
              className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                selectedFilter === "all"
                  ? "bg-primary text-white shadow-md"
                  : "bg-surface hover:bg-gray-100 text-gray-700 border border-gray-300"
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold capitalize whitespace-nowrap transition-all ${
                  selectedFilter === cat
                    ? "bg-primary text-white shadow-md"
                    : "bg-surface hover:bg-gray-100 text-gray-700 border border-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        <div className="flex items-start gap-6">
          <div className="flex-1 min-w-0 space-y-6">
            {/* Recently Used - Compact */}
            {recentTools.length > 0 && (
              <section className="space-y-2">
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <Clock className="h-4 w-4" />
                  <h2 className="text-lg">Recently Used</h2>
                </div>
                <div className="flex gap-2.5 overflow-x-auto scrollbar-hide pb-1">
                  {recentTools.slice(0, 4).map((tool) => {
                    const toolConfig = tools.find((t) => t.id === tool.id);
                    if (!toolConfig) return null;
                    const Icon = toolConfig.icon;
                    return (
                      <Link
                        key={tool.id}
                        to={tool.path}
                        className="group flex-shrink-0 w-44 p-2.5 bg-surface rounded-lg border border-gray-200 hover:border-primary hover:shadow-md transition-all flex items-center gap-2.5"
                      >
                        <div className="p-1.5 bg-primary/10 rounded-md text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-xs truncate">
                            {toolConfig.name}
                          </h3>
                          <p className="text-[10px] text-gray-500">Recent</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </section>
            )}

            {/* All Tools Grid - Improved */}
            <section id="tools" className="space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">All Tools</h2>
                <span className="text-xs text-gray-500">
                  {filteredTools.length} tools
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {filteredTools.map((tool, index) => {
                  const Icon = tool.icon;
                  return (
                    <Link
                      key={tool.id}
                      to={tool.path}
                      style={{ animationDelay: `${index * 30}ms` }}
                      className="group block p-4 bg-surface rounded-xl border-2 border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-200 min-h-[180px] flex flex-col animate-in fade-in slide-in-from-bottom-4"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                          <Icon className="h-6 w-6" />
                        </div>
                      </div>
                      <h3 className="text-base font-bold mb-1.5 group-hover:text-primary transition-colors line-clamp-1">
                        {tool.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 flex-1 line-clamp-2 leading-snug">
                        {tool.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] px-2 py-0.5 rounded-full capitalize bg-gray-100 text-gray-600 font-medium">
                          {tool.category}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          </div>
          <AdSidebar />
        </div>

        {/* Why Choose NimbleKit - Content for AdSense */}
        <section className="bg-surface rounded-xl border border-gray-200 p-6 md:p-8 space-y-4">
          <h2 className="text-2xl font-bold">Why Choose NimbleKit?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900 text-base">
                Privacy-First Architecture
              </h3>
              <p>
                All our tools run directly in your browser. We don't store your
                data or track your usage. Your financial calculations, sensitive
                texts, and conversion data never leave your device.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900 text-base">
                Free & Accessible
              </h3>
              <p>
                NimbleKit is completely free to use. No subscriptions, no hidden
                fees, and no sign-up required. Access premium-quality utilities
                instantly without any barriers or paywalls.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900 text-base">
                Universal Compatibility
              </h3>
              <p>
                Designed with a mobile-first approach. Whether you're on a
                desktop, tablet, or smartphone, our responsive interface ensures
                a smooth, app-like experience on every device.
              </p>
            </div>
          </div>
        </section>

        {/* Coming Soon - Slim Banner */}
        <section className="bg-surface/60 rounded-lg p-3 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 flex-shrink-0" />
              <div>
                <h2 className="font-bold text-base">Coming Soon</h2>
                <p className="text-xs text-gray-500">
                  {comingSoonTools.length} new tools in development
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Request Feature - Minimal */}
        <section
          id="request"
          className="max-w-2xl mx-auto bg-surface/60 p-3 rounded-lg border border-gray-200 shadow-sm"
        >
          <button
            onClick={() => setShowRequestForm(!showRequestForm)}
            className="w-full flex items-center justify-between text-left"
          >
            <div>
              <h2 className="text-base font-bold">Request a Feature</h2>
              <p className="text-gray-500 text-xs">
                Missing a tool? Let us know!
              </p>
            </div>
            {showRequestForm ? (
              <ChevronUp className="h-4 w-4 text-gray-400 flex-shrink-0" />
            ) : (
              <ChevronDown className="h-4 w-4 text-gray-400 flex-shrink-0" />
            )}
          </button>

          {showRequestForm && (
            <form
              name="feature-request"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleFormSubmit}
              className="space-y-2.5 mt-3 animate-in slide-in-from-top-2"
            >
              <input type="hidden" name="form-name" value="feature-request" />

              {/* Honeypot field - hidden from users */}
              <div className="hidden">
                <label>
                  Don't fill this out if you're human:{" "}
                  <input name="bot-field" />
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-xs font-medium">
                    Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full rounded-md border-2 border-gray-300 bg-bg px-3 py-1.5 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="text-xs font-medium">
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full rounded-md border-2 border-gray-300 bg-bg px-3 py-1.5 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label htmlFor="message" className="text-xs font-medium">
                  Feature Request / Feedback *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={3}
                  className="w-full rounded-md border-2 border-gray-300 bg-bg px-3 py-1.5 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none resize-none transition-all"
                ></textarea>
              </div>
              <Button type="submit" size="sm" className="w-full">
                Submit Request
              </Button>
            </form>
          )}
          {/* SEO Category Links - Hidden from main visual flow but accessible */}
          <div className="pt-8 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-gray-500 mb-3">
              Explore Categories
            </h3>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              {categories.map((cat) => (
                <Link
                  key={cat}
                  to={`/category/${cat}`}
                  className="hover:text-primary capitalize transition-colors"
                >
                  {cat} Tools
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* About Section - Rich Content for SEO */}
        <section className="bg-surface rounded-xl border border-gray-200 p-6 md:p-8 space-y-4">
          <h2 className="text-2xl font-bold">About NimbleKit</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Welcome to <strong>NimbleKit</strong>, your designated{" "}
              <strong>everyday online tools hub</strong>. We noticed that simple
              web utilities were often buried under ads, pop-ups, and
              slow-loading pages. Our mission is to declutter the web by
              providing a clean, reliable, and privacy-focused alternative.
            </p>
            <p>
              Whether you are a student needing a quick calculator, a developer
              formatting JSON, a writer checking word counts, or a business
              professional managing finances, NimbleKit is designed to save you
              time and effort. We offer a suite of free, fast, and secure tools
              that work directly in your browser without sending your data to
              any server.
            </p>
            <p>
              Simplicity is our core value. We believe that you shouldn't have
              to download heavy software or register for an account just to
              perform a basic daily task. With NimbleKit, you get instant access
              to the utilities you need, optimized for performance on any
              device—mobile, tablet, or desktop.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};
