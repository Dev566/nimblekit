import { Link } from "react-router-dom";
import { ArrowLeft, FileText } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SEO } from "@/components/SEO";

export const Terms = () => {
  return (
    <>
      <SEO
        title="Terms of Service - NimbleKit"
        description="Terms of Service for NimbleKit. Read our terms and conditions for using our free online tools."
        keywords="terms of service, terms and conditions, user agreement"
      />
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back
            </Button>
          </Link>
          <div className="flex items-center gap-3 mt-4">
            <FileText className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">Terms of Service</h1>
          </div>
          <p className="text-gray-500 mt-2">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-lg text-text max-w-none space-y-6">
          <section>
            <h2 className="text-xl font-bold mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using NimbleKit, you accept and agree to be bound
              by the terms and provision of this agreement. In addition, when
              using these particular services, you shall be subject to any
              posted guidelines or rules applicable to such services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">2. Use of Services</h2>
            <p>
              NimbleKit provides various online tools and utilities. You agree
              to use these services only for lawful purposes. You are prohibited
              from using our services to:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Violate any applicable local, state, national, or international
                law.
              </li>
              <li>Infringe upon the rights of others.</li>
              <li>
                Distribute viruses or any other technologies that may harm
                NimbleKit or the interests of its users.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">
              3. Disclaimer of Warranties
            </h2>
            <p>
              The services are provided on an "as is" and "as available" basis.
              NimbleKit makes no representations or warranties of any kind,
              express or implied, as to the operation of their services, or the
              information, content, or materials included therein. You expressly
              agree that your use of these services is at your sole risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">
              4. Limitation of Liability
            </h2>
            <p>
              NimbleKit shall not be liable for any damages of any kind arising
              from the use of these services, including, but not limited to
              direct, indirect, incidental, punitive, and consequential damages.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">5. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms from time to time at
              our sole discretion. Therefore, you should review these page
              periodically. Your continued use of the Website or our service
              after any such change constitutes your acceptance of the new
              Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">6. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at
              dave_w566@proton.me.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};
