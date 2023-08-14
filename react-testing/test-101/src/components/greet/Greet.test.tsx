import { render, screen } from "@testing-library/react";

import { Greet } from "./Greet";

test("renders hello test text", () => {
  render(<Greet />);
  const textElement = screen.getByText(/hello test/i);
  expect(textElement).toBeInTheDocument();
});
