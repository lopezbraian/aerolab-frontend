import { render, screen } from "@testing-library/react";
import theme from "style/theme";
import { ThemeProvider } from "styled-components";
import Coin from ".";

test("Sloud render <Coin/>", () => {
  let number = 1;
  const { rerender } = render(
    <ThemeProvider theme={theme}>
      <Coin number={number} />
    </ThemeProvider>
  );
  expect(screen.getByText(number)).toBeInTheDocument();
  number = 2;
  rerender(
    <ThemeProvider theme={theme}>
      <Coin number={number} />
    </ThemeProvider>
  );
  expect(screen.getByText(number)).toBeInTheDocument();
});
