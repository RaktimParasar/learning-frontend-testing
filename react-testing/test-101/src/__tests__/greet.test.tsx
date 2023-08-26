import { render, screen } from "@testing-library/react";

import { Greet } from "../components/greet/Greet";

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });
  describe("Nested", () => {
    test("renders a name", () => {
      render(<Greet name="Raktim" />);
      const textPropElement = screen.getByText(/raktim/i);
      expect(textPropElement).toBeInTheDocument();
    });
  });
});
