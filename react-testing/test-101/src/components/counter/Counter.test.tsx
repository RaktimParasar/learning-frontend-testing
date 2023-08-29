import { screen, render, act } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Counter } from "./Counter";

describe("counter", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();

    const counterButton = screen.getByRole("button", { name: "Increment" });
    expect(counterButton).toBeInTheDocument();
  });

  test("renders a count of 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  test("renders a count of 1 after clicking the increment button", async () => {
    user.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    const countElement = screen.getByRole("heading");
    for (let i = 1; i < 3; i++) {
      await act(async () => await user.click(incrementButton));
      expect(countElement).toHaveTextContent(i.toString());
    }
  });
});

/**
 *  ------ Pointer Interactions ------
 *
 * Convenience APIs - internally calls pointer APIs
 * click()
 * dblClick()
 * tripleClick()
 * hover()
 * unhover()
 *
 * Pointer APIs
 * pointer({keys: "[MouseLeft]"})
 * pointer({keys: "[MouseLeft][Mouseright]"})
 * pointer("[MouseLeft][Mouseright]")
 * pointer("[MouseLeft>]")
 * pointer("[/MouseLeft]")
 */
