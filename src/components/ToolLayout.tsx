import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Share2 } from "lucide-react";
import { Tool } from "@/config/tools";
import { useAppDispatch } from "@/features/hooks";
import { addRecentTool } from "@/features/recentToolsSlice";
import { Button } from "./ui/Button";
import { useToast } from "./ui/Toast";

interface ToolLayoutProps {
  tool: Tool;
  children: React.ReactNode;
}

export const ToolLayout = ({ tool, children }: ToolLayoutProps) => {
  const dispatch = useAppDispatch();
  const { addToast } = useToast();

  useEffect(() => {
    dispatch(
      addRecentTool({
        id: tool.id,
        name: tool.name,
        path: tool.path,
      })
    );
  }, [tool, dispatch]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    addToast("Link copied to clipboard!", "success");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <tool.icon className="h-6 w-6 text-primary" />
              {tool.name}
            </h1>
            <p className="text-sm text-gray-500">{tool.description}</p>
          </div>
        </div>
        <Button variant="outline" size="sm" onClick={handleShare}>
          <Share2 className="h-4 w-4 mr-2" /> Share
        </Button>
      </div>

      <div className="bg-surface rounded-xl border border-surface shadow-sm p-6 md:p-8">
        {children}
      </div>

      {tool.content && (
        <div className="bg-surface rounded-xl border border-surface shadow-sm p-6 md:p-8 prose prose-gray max-w-none">
          <div dangerouslySetInnerHTML={{ __html: tool.content }} />
        </div>
      )}
    </div>
  );
};
