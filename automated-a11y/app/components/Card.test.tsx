import { render } from "@testing-library/react";
import { Card } from "./Card";
const { axe, toHaveNoViolations } = require("jest-axe");

expect.extend(toHaveNoViolations);

it("should not have critical a11y errors", async () => {
  const { container } = render(<Card />);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
