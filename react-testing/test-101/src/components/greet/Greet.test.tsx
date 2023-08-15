import { render, screen } from "@testing-library/react";

import { Greet } from "./Greet";

test("renders hello text", () => {
  render(<Greet />);
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});

test("Greet comp renders name from prop", () => {
  render(<Greet name="Raktim" />);
  const textPropElement = screen.getByText(/raktim/i);
  expect(textPropElement).toBeInTheDocument();
});
