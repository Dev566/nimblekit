import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold mb-4">Page Not Found - NimbleKit</h1>
      <p className="mb-4">Page not found.</p>
      <Link to="/" className="text-primary hover:underline">
        Go Home
      </Link>
    </div>
  );
};
