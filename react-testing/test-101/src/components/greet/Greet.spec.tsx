import { render, screen } from "@testing-library/react";

import { Greet } from "./Greet";

describe("Greet", () => {
  fit("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });
});

describe("Nested", () => {
  xit("renders a name", () => {
    render(<Greet name="Raktim" />);
    const textPropElement = screen.getByText(/raktim/i);
    expect(textPropElement).toBeInTheDocument();
  });
});

// fit - test.only
// xit - test.skip
