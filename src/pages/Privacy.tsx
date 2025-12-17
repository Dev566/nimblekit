import { Link } from "react-router-dom";
import { ArrowLeft, Shield } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SEO } from "@/components/SEO";

export const Privacy = () => {
  return (
    <>
      <SEO
        title="Privacy Policy - NimbleKit"
        description="Privacy Policy for NimbleKit. Learn how we handle your data, cookies, and third-party services like Google AdSense."
        keywords="privacy policy, data protection, cookies, adsense"
      />
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back
            </Button>
          </Link>
          <div className="flex items-center gap-3 mt-4">
            <Shield className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-gray-500 mt-2">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-lg text-text max-w-none space-y-6">
          <section>
            <h2 className="text-xl font-bold mb-3">1. Introduction</h2>
            <p>
              Welcome to NimbleKit. We respect your privacy and are committed to
              protecting your personal data. This privacy policy will inform you
              as to how we look after your personal data when you visit our
              website and tell you about your privacy rights and how the law
              protects you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">2. Data We Collect</h2>
            <p>
              Most of our tools run entirely client-side in your browser. This
              means that for tools like the Calculator, Unit Converter, and
              others, the data you input does not leave your device and is not
              sent to our servers.
            </p>
            <p>
              However, we may collect certain information automatically when you
              visit our website:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Usage Data:</strong> Information about how you use our
                website, such as pages visited and time spent.
              </li>
              <li>
                <strong>Device Data:</strong> Information about your device,
                such as browser type and operating system.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">
              3. Cookies and Tracking Technologies
            </h2>
            <p>
              We use cookies and similar tracking technologies to track the
              activity on our Service and store certain information. Tracking
              technologies used are beacons, tags, and scripts to collect and
              track information and to improve and analyze our Service.
            </p>
            <p>
              <strong>Google AdSense:</strong> We use Google AdSense to display
              advertisements. Google uses cookies to serve ads based on your
              prior visits to our website or other websites. Google's use of
              advertising cookies enables it and its partners to serve ads to
              you based on your visit to our sites and/or other sites on the
              Internet.
            </p>
            <p>
              You may opt out of personalized advertising by visiting{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Google Ads Settings
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">4. Third-Party Links</h2>
            <p>
              Our Service may contain links to other websites that are not
              operated by us. If you click on a third-party link, you will be
              directed to that third party's site. We strongly advise you to
              review the Privacy Policy of every site you visit.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, you can
              contact us:
            </p>
            <ul className="list-disc pl-5">
              <li>By email: dave_w566@proton.me</li>
              <li>
                By visiting the{" "}
                <Link to="/contact" className="text-primary hover:underline">
                  Contact page
                </Link>{" "}
                on our website.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};
