import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ToastProvider } from "./ui/Toast";
import { CookieConsent } from "./CookieConsent";

export const Layout = () => {
  return (
    <ToastProvider>
      <div className="min-h-screen flex flex-col bg-bg text-text transition-colors duration-300 font-sans">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Outlet />
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </ToastProvider>
  );
};
