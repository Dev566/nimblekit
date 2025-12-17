import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Copy, ExternalLink, Trash2 } from "lucide-react";
import { useToast } from "@/components/ui/Toast";

interface ShortLink {
  slug: string;
  longUrl: string;
  createdAt: number;
}

export default function UrlShortener() {
  const [longUrl, setLongUrl] = useState("");
  const [links, setLinks] = useState<ShortLink[]>([]);
  const { addToast } = useToast();

  useEffect(() => {
    const saved = localStorage.getItem("omnitool-short-links");
    if (saved) {
      setLinks(JSON.parse(saved));
    }
  }, []);

  const saveLinks = (newLinks: ShortLink[]) => {
    setLinks(newLinks);
    localStorage.setItem("omnitool-short-links", JSON.stringify(newLinks));
  };

  const generateSlug = () => {
    return Math.random().toString(36).substring(2, 8);
  };

  const shorten = () => {
    if (!longUrl) return;

    // Basic validation
    let url = longUrl;
    if (!/^https?:\/\//i.test(url)) {
      url = "https://" + url;
    }

    const slug = generateSlug();
    const newLink = { slug, longUrl: url, createdAt: Date.now() };
    const newLinks = [newLink, ...links];
    saveLinks(newLinks);
    setLongUrl("");
    addToast("URL shortened!", "success");
  };

  const deleteLink = (slug: string) => {
    const newLinks = links.filter((l) => l.slug !== slug);
    saveLinks(newLinks);
  };

  const copyLink = (slug: string) => {
    const shortUrl = `${window.location.origin}/?r=${slug}`;
    navigator.clipboard.writeText(shortUrl);
    addToast("Short link copied!", "success");
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="flex gap-4">
        <Input
          placeholder="Enter long URL here..."
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
        />
        <Button onClick={shorten}>Shorten</Button>
      </div>

      <div className="space-y-4">
        <h3 className="font-bold text-lg">Your Short Links</h3>
        {links.length === 0 ? (
          <p className="text-gray-500 text-center py-8">
            No links yet. Create one above!
          </p>
        ) : (
          <div className="space-y-3">
            {links.map((link) => (
              <div
                key={link.slug}
                className="bg-bg border border-gray-200 p-4 rounded-lg flex items-center justify-between animate-in slide-in-from-top-2"
              >
                <div className="overflow-hidden">
                  <div className="flex items-center gap-2 font-bold text-primary">
                    <span>
                      {window.location.host}/?r={link.slug}
                    </span>
                    <a
                      href={`/?r=${link.slug}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 hover:text-primary"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                  <div className="text-sm text-gray-500 truncate max-w-md">
                    {link.longUrl}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyLink(link.slug)}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => deleteLink(link.slug)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-800">
        <strong>Note:</strong> Short links are currently saved only in your
        browser using local storage, so they won’t work on other devices. A
        proper public shortener needs a backend — and we’re building that now.
        Stay tuned!
      </div>
    </div>
  );
}
