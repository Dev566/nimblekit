import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface BreadcrumbsProps {
  items: Array<{
    label: string;
    path?: string;
  }>;
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex items-center gap-2 text-sm text-gray-600">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {index > 0 && <ChevronRight className="h-3 w-3" />}
            {item.path ? (
              <Link
                to={item.path}
                className="hover:text-primary transition-colors capitalize"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-900 font-medium capitalize">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
