import React from "react";
import "./App.scss";

//Theme
import { ThemeProvider } from "styled-components";
import theme from "style/theme";

//Components
import TopNavbar from "components/TopNavbar";
import GlobalStyle from "./global-style";
import Hero from "components/Hero";
import SectionProducts from "components/SectionProducts";

//Context
import UserContextProvider from "context/userContext";
import FilterContextProvider from "context/filterContext";

export default function App() {
  return (
    <UserContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <TopNavbar />
        <Hero />
        <FilterContextProvider>
          <div style={{ backgroundColor: "#f9f9f9", paddingBottom: "74px" }}>
            <SectionProducts />
          </div>
        </FilterContextProvider>
      </ThemeProvider>
    </UserContextProvider>
  );
}
