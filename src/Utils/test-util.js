import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "style/theme";
import UserContextProvider from "context/userContext";
import FilterContextProvider from "context/filterContext";

const AllTheProviders = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <UserContextProvider>
        <FilterContextProvider>{children}</FilterContextProvider>
      </UserContextProvider>
    </ThemeProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
