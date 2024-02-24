import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Home from "../components/Home/Home";

describe("App component", () => {
  it("renders correct heading for store", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(screen.getByRole("heading").textContent).toMatch(/home/i);
  });
});
