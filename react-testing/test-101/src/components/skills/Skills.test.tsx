import { render, screen } from "@testing-library/react";

import { Skills } from "./Skills";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "Javascript"];

  test("renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renders a list of skills", () => {
    render(<Skills skills={skills} />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(skills.length);
  });

  test("renders login button", () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
  });

  test("Start learning button is not rendered", () => {
    render(<Skills skills={skills} />);
    const startLearningButton = screen.queryByRole("button", { name: "Start learning" });
    expect(startLearningButton).not.toBeInTheDocument();
  });
});

// getBy.. is for what is present in the DOM and queryBy.. is to check whats not present
