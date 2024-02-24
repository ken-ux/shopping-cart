import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Shop from "../components/Shop/Shop";

describe("App component", () => {
  it("renders correct heading for home", () => {
    render(<Shop />);
    expect(screen.getByRole("heading").textContent).toMatch(/store/i);
  });
});
