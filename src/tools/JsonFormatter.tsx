import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Copy, Trash2, CheckCircle, AlertTriangle } from "lucide-react";
import { useToast } from "@/components/ui/Toast";

export default function JsonFormatter() {
  const [input, setInput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { addToast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(input);
    addToast("JSON copied to clipboard", "success");
  };

  const format = () => {
    try {
      const parsed = JSON.parse(input);
      setInput(JSON.stringify(parsed, null, 2));
      setError(null);
      addToast("JSON formatted", "success");
    } catch (e) {
      setError((e as Error).message);
    }
  };

  const minify = () => {
    try {
      const parsed = JSON.parse(input);
      setInput(JSON.stringify(parsed));
      setError(null);
      addToast("JSON minified", "success");
    } catch (e) {
      setError((e as Error).message);
    }
  };

  const validate = () => {
    try {
      JSON.parse(input);
      setError(null);
      addToast("Valid JSON!", "success");
    } catch (e) {
      setError((e as Error).message);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        <Button onClick={format}>Prettify</Button>
        <Button onClick={minify} variant="outline">
          Minify
        </Button>
        <Button onClick={validate} variant="outline">
          Validate
        </Button>
        <div className="flex-1"></div>
        <Button variant="ghost" size="sm" onClick={handleCopy} title="Copy">
          <Copy className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            setInput("");
            setError(null);
          }}
          title="Clear"
          className="text-red-500 hover:text-red-600"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>

      <div className="relative">
        <textarea
          className={`w-full h-96 p-4 rounded-lg border font-mono text-sm bg-bg focus:ring-2 focus:ring-primary outline-none resize-y ${
            error ? "border-red-500 focus:ring-red-500" : "border-gray-300"
          }`}
          placeholder="Paste JSON here..."
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setError(null);
          }}
          spellCheck={false}
        ></textarea>
        {error && (
          <div className="absolute bottom-4 left-4 right-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md flex items-start gap-2 text-sm animate-in slide-in-from-bottom-2">
            <AlertTriangle className="h-5 w-5 shrink-0" />
            <span className="font-mono break-all">{error}</span>
          </div>
        )}
        {!error && input && (
          <div
            className="absolute bottom-4 right-4 text-green-600 bg-green-50 px-2 py-1 rounded text-xs flex items-center gap-1 pointer-events-none opacity-0 transition-opacity duration-300"
            style={{ opacity: error === null ? 0 : 1 }}
          >
            <CheckCircle className="h-3 w-3" /> Valid
          </div>
        )}
      </div>
    </div>
  );
}
