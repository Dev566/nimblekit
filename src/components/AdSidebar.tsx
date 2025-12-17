import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export const AdSidebar = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  return (
    <aside className="hidden lg:block w-[300px] flex-shrink-0 pl-6">
      <div className="sticky top-24 space-y-6">
        <div className="bg-surface rounded-lg border border-gray-200 p-4 shadow-sm min-h-[600px] flex items-center justify-center text-gray-400 text-sm">
          {/* Vertical Ad Unit */}
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-8288678459926319"
            data-ad-slot="auto" // You might want to replace this with a specific slot ID if you have one
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <span className="absolute pointer-events-none">Advertisement</span>
        </div>
      </div>
    </aside>
  );
};
