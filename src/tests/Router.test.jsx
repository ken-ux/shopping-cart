import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Router from "../Router";

describe("App component", () => {
  it("renders correct heading for home", () => {
    render(<Router />);
    expect(screen.getByRole("heading").textContent).toMatch(/home/i);
  });
});
