import { Link } from "react-router-dom";
import { Tool } from "@/config/tools";

interface RelatedToolsProps {
  currentToolId: string;
  tools: Tool[];
  category?: string;
}

export const RelatedTools = ({
  currentToolId,
  tools,
  category,
}: RelatedToolsProps) => {
  // Get related tools - same category or popular tools
  const relatedTools = tools
    .filter(
      (tool) =>
        tool.id !== currentToolId &&
        tool.status === "live" &&
        (category ? tool.category === category : true)
    )
    .slice(0, 3);

  if (relatedTools.length === 0) return null;

  return (
    <section className="mt-8 pt-8 border-t border-gray-200">
      <h2 className="text-xl font-bold mb-4">Related Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {relatedTools.map((tool) => {
          const Icon = tool.icon;
          return (
            <Link
              key={tool.id}
              to={tool.path}
              className="group p-4 bg-surface rounded-lg border-2 border-gray-200 hover:border-primary hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-sm mb-1 group-hover:text-primary transition-colors line-clamp-1">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-2">
                    {tool.description}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
