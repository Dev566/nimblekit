import { Suspense } from "react";
import { useParams, Navigate } from "react-router-dom";
import { tools } from "@/config/tools";
import { toolComponents } from "@/tools";
import { ToolLayout } from "@/components/ToolLayout";
import { Loader2 } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedTools } from "@/components/RelatedTools";

export const ToolPage = () => {
  const { slug } = useParams();
  const tool = tools.find((t) => t.path === `/tool/${slug}`);

  if (!tool || !slug) {
    return <Navigate to="/404" replace />;
  }

  const ToolComponent = toolComponents[tool.id];

  if (!ToolComponent) {
    return (
      <ToolLayout tool={tool}>
        <div className="text-center py-10 text-gray-500">
          Tool implementation not found.
        </div>
      </ToolLayout>
    );
  }

  return (
    <ToolLayout tool={tool}>
      <div className="mb-6">
        <Breadcrumbs
          items={[
            { label: "Home", path: "/" },
            {
              label: `${tool.category} Tools`,
              path: `/category/${tool.category}`,
            },
            { label: tool.name },
          ]}
        />
      </div>

      <Suspense
        fallback={
          <div className="flex justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        }
      >
        <ToolComponent />
      </Suspense>

      <RelatedTools
        currentToolId={tool.id}
        tools={tools}
        category={tool.category}
      />
    </ToolLayout>
  );
};
