import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { tools } from "@/config/tools";
import { Button } from "@/components/ui/Button";

export const CategoryPage = () => {
  const { category } = useParams();
  const categoryTools = tools.filter(
    (t) => t.category === category && t.status === "live"
  );

  if (!category || categoryTools.length === 0) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div className="flex items-center gap-4">
        <Link to="/">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back
          </Button>
        </Link>
        <h1 className="text-3xl font-bold capitalize">{category} Tools</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryTools.map((tool) => {
          const Icon = tool.icon;
          return (
            <Link
              key={tool.id}
              to={tool.path}
              className="group block p-6 bg-surface rounded-xl border border-surface hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                {tool.name}
              </h3>
              <p className="text-gray-500 text-sm">{tool.description}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
