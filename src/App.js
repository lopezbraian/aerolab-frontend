import React from "react";
import Header from "components/Header";
import GlobalStyle from "./global-style";
import "./App.scss";
import Hero from "components/Hero";
import SectionProducts from "components/SectionProducts";

import FilterContextProvider from "appContext";

export default function App() {
  return (
    <FilterContextProvider>
      <GlobalStyle />
      <Header />
      <Hero />
      <div style={{ backgroundColor: "#f9f9f9" }}>
        <SectionProducts />
      </div>
    </FilterContextProvider>
  );
}
