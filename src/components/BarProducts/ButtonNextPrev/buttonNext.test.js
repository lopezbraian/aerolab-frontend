import { render, screen } from "@testing-library/react";
import ButtonNextPrev from "components/BarProducts/ButtonNextPrev";

test("Should Render <ButtonNextPrev/>", async () => {
  render(<ButtonNextPrev />);
  expect(await screen.findByRole("button")).toBeInTheDocument();
});
