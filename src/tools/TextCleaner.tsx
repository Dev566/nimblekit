import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Copy, Trash2, RefreshCw } from "lucide-react";
import { useToast } from "@/components/ui/Toast";

export default function TextCleaner() {
  const [text, setText] = useState("");
  const { addToast } = useToast();

  const [options, setOptions] = useState({
    removeExtraSpaces: true,
    removeLineBreaks: false,
    removeDuplicateLines: false,
    trimLines: true,
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    addToast("Text copied to clipboard", "success");
  };

  const cleanText = () => {
    let newText = text;

    if (options.trimLines) {
      newText = newText
        .split("\n")
        .map((line) => line.trim())
        .join("\n");
    }

    if (options.removeDuplicateLines) {
      newText = Array.from(new Set(newText.split("\n"))).join("\n");
    }

    if (options.removeExtraSpaces) {
      newText = newText.replace(/[ \t]+/g, " ");
    }

    if (options.removeLineBreaks) {
      newText = newText.replace(/[\r\n]+/g, " ");
    }

    setText(newText);
    addToast("Text cleaned!", "success");
  };

  return (
    <div className="space-y-6">
      <div className="bg-surface p-4 rounded-lg border border-gray-200">
        <h3 className="font-medium mb-3">Cleaning Options</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={options.removeExtraSpaces}
              onChange={(e) =>
                setOptions({ ...options, removeExtraSpaces: e.target.checked })
              }
              className="rounded border-gray-300 text-primary focus:ring-primary"
            />
            <span className="text-sm">Remove extra spaces</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={options.removeLineBreaks}
              onChange={(e) =>
                setOptions({ ...options, removeLineBreaks: e.target.checked })
              }
              className="rounded border-gray-300 text-primary focus:ring-primary"
            />
            <span className="text-sm">Remove line breaks</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={options.removeDuplicateLines}
              onChange={(e) =>
                setOptions({
                  ...options,
                  removeDuplicateLines: e.target.checked,
                })
              }
              className="rounded border-gray-300 text-primary focus:ring-primary"
            />
            <span className="text-sm">Remove duplicate lines</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={options.trimLines}
              onChange={(e) =>
                setOptions({ ...options, trimLines: e.target.checked })
              }
              className="rounded border-gray-300 text-primary focus:ring-primary"
            />
            <span className="text-sm">Trim lines</span>
          </label>
        </div>
      </div>

      <div className="relative">
        <textarea
          className="w-full h-64 p-4 rounded-lg border border-gray-300 bg-bg focus:ring-2 focus:ring-primary outline-none resize-y"
          placeholder="Paste text to clean..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <div className="absolute top-2 right-2 flex gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            title="Copy Text"
          >
            <Copy className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setText("")}
            title="Clear Text"
            className="text-red-500 hover:text-red-600"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Button onClick={cleanText} className="w-full md:w-auto">
        <RefreshCw className="h-4 w-4 mr-2" /> Clean Text
      </Button>
    </div>
  );
}
