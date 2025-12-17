import { useState, useMemo } from "react";
import { Button } from "@/components/ui/Button";
import { Copy, Trash2 } from "lucide-react";
import { useToast } from "@/components/ui/Toast";

export default function TextTools() {
  const [text, setText] = useState("");
  const { addToast } = useToast();

  const stats = useMemo(() => {
    return {
      chars: text.length,
      words: text.trim() ? text.trim().split(/\s+/).length : 0,
      sentences: text.trim() ? text.split(/[.!?]+/).filter(Boolean).length : 0,
      paragraphs: text.trim()
        ? text.split(/\n\s*\n/).filter(Boolean).length
        : 0,
    };
  }, [text]);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    addToast("Text copied to clipboard", "success");
  };

  const transform = (
    type: "upper" | "lower" | "title" | "sentence" | "reverse"
  ) => {
    let newText = text;
    switch (type) {
      case "upper":
        newText = text.toUpperCase();
        break;
      case "lower":
        newText = text.toLowerCase();
        break;
      case "title":
        newText = text.replace(
          /\w\S*/g,
          (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
        );
        break;
      case "sentence":
        newText = text
          .toLowerCase()
          .replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
        break;
      case "reverse":
        newText = text.split("").reverse().join("");
        break;
    }
    setText(newText);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="bg-bg p-4 rounded-lg border border-gray-200">
          <div className="text-2xl font-bold text-primary">{stats.words}</div>
          <div className="text-xs text-gray-500 uppercase">Words</div>
        </div>
        <div className="bg-bg p-4 rounded-lg border border-gray-200">
          <div className="text-2xl font-bold text-primary">{stats.chars}</div>
          <div className="text-xs text-gray-500 uppercase">Characters</div>
        </div>
        <div className="bg-bg p-4 rounded-lg border border-gray-200">
          <div className="text-2xl font-bold text-primary">
            {stats.sentences}
          </div>
          <div className="text-xs text-gray-500 uppercase">Sentences</div>
        </div>
        <div className="bg-bg p-4 rounded-lg border border-gray-200">
          <div className="text-2xl font-bold text-primary">
            {stats.paragraphs}
          </div>
          <div className="text-xs text-gray-500 uppercase">Paragraphs</div>
        </div>
      </div>

      <div className="relative">
        <textarea
          className="w-full h-64 p-4 rounded-lg border border-gray-300 bg-bg focus:ring-2 focus:ring-primary outline-none resize-y"
          placeholder="Type or paste your text here..."
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

      <div className="flex flex-wrap gap-2">
        <Button variant="outline" size="sm" onClick={() => transform("upper")}>
          UPPERCASE
        </Button>
        <Button variant="outline" size="sm" onClick={() => transform("lower")}>
          lowercase
        </Button>
        <Button variant="outline" size="sm" onClick={() => transform("title")}>
          Title Case
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => transform("sentence")}
        >
          Sentence case
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => transform("reverse")}
        >
          Reverse
        </Button>
      </div>
    </div>
  );
}
