import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { server } from "../../mocks/server";
import { Users } from "./Users";

describe("Users", () => {
  test("renders correctly", () => {
    render(<Users />);
    const headingElement = screen.getByText("Users");
    expect(headingElement).toBeInTheDocument();
  });

  test("renders a list of users", async () => {
    render(<Users />);
    const listElements = await screen.findAllByRole("listitem");
    expect(listElements).toHaveLength(3);
  });

  test("renders error", async () => {
    server.use(
      rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    render(<Users />);
    const errorElement = await screen.findByText("Error fetching users");
    expect(errorElement).toBeInTheDocument();
  });
});
