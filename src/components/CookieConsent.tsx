import { useState, useEffect } from "react";
import { Button } from "./ui/Button";
import { X } from "lucide-react";

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small delay to not annoy user immediately
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-4xl mx-auto bg-surface border border-gray-200 shadow-lg rounded-xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-1">We use cookies</h3>
          <p className="text-sm text-gray-600">
            We use cookies to enhance your experience and analyze our traffic.
            By clicking "Accept", you consent to our use of cookies. Read our{" "}
            <a href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 md:flex-none"
            onClick={() => setIsVisible(false)}
          >
            <X className="h-4 w-4 mr-2" />
            Close
          </Button>
          <Button
            size="sm"
            className="flex-1 md:flex-none"
            onClick={handleAccept}
          >
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
};
