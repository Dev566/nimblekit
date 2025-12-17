import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Calculator from "../tools/Calculator";

describe("Calculator", () => {
  it("renders correctly", () => {
    render(<Calculator />);
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("performs addition", () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("+"));
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByText("="));
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("clears display", () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText("5"));
    fireEvent.click(screen.getByText("C"));
    expect(screen.getByText("0")).toBeInTheDocument();
  });
});
