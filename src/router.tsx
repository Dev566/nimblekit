import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { CategoryPage } from "./pages/CategoryPage";
import { ToolPage } from "./pages/ToolPage";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Privacy } from "./pages/Privacy";
import { Terms } from "./pages/Terms";
import { NotFound } from "./pages/NotFound";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="category/:category" element={<CategoryPage />} />
        <Route path="tool/:slug" element={<ToolPage />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
