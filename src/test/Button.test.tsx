import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Button } from "../components/ui/Button";

describe("Button", () => {
  it("renders correctly", () => {
    render(<Button>Click me</Button>);
    expect(
      screen.getByRole("button", { name: /click me/i })
    ).toBeInTheDocument();
  });

  it("applies variant classes", () => {
    render(<Button variant="danger">Delete</Button>);
    const button = screen.getByRole("button", { name: /delete/i });
    expect(button).toHaveClass("bg-red-500");
  });
});
