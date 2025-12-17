import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SEO } from "@/components/SEO";

export const Contact = () => {
  return (
    <>
      <SEO
        title="Contact Us - Get in Touch"
        description="Contact NimbleKit for questions, feedback, or suggestions. We'd love to hear from you about new tool ideas or improvements. Email: dave_w566@proton.me"
        keywords="contact nimblekit, feedback, support, email"
      />
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back
            </Button>
          </Link>
          <h1 className="text-3xl font-bold mt-4">Contact Us</h1>
        </div>

        <div className="prose prose-lg text-text space-y-6">
          <div className="bg-surface p-6 rounded-xl border-2 border-gray-200">
            <div className="flex items-start gap-4 mb-4">
              <Users className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold mb-2">About NimbleKit</h2>
                <p className="text-gray-600 leading-relaxed">
                  NimbleKit is a passion project built by developers who believe
                  in creating simple, fast, and accessible tools for everyday
                  tasks. We're committed to privacy-first design and open-source
                  principles, ensuring that your data stays yours.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-surface p-6 rounded-xl border-2 border-gray-200">
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold mb-2">Get in Touch</h2>
                <p className="text-gray-600 mb-3">
                  We'd love to hear from you! Whether you have questions,
                  feedback, or suggestions for new tools, feel free to reach
                  out.
                </p>
                <a
                  href="mailto:dave_w566@proton.me"
                  className="inline-flex items-center gap-2 text-primary hover:text-secondary font-medium transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  dave_w566@proton.me
                </a>
              </div>
            </div>
          </div>

          <div className="bg-surface p-6 rounded-xl border-2 border-gray-200">
            <div className="flex items-start gap-4">
              <Heart className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold mb-2">Support the Project</h2>
                <p className="text-gray-600 mb-3">
                  NimbleKit is free and open-source. If you find it useful,
                  consider:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Sharing it with friends and colleagues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Requesting features that would help you</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Reporting bugs or suggesting improvements</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center pt-4">
            <p className="text-gray-500 text-sm mb-3">
              Have an idea for a new tool? Request a feature below.
            </p>
            <Link to="/#request">
              <Button size="lg">Request a Feature</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
