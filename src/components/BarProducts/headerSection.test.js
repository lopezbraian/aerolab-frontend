import { render, screen } from "@testing-library/react";
import { FilterContext } from "context/filterContext";
import theme from "style/theme";
import { ThemeProvider } from "styled-components";
import HeaderSection from "./HeaderSection";

describe("Header Section", () => {
  let numberofproducts;
  const props = {
    cantProducts: 32,
    page: 0,
    changePage: (page) => {
      props.page += 1;
    },
    cant_page: 2,
  };

  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <FilterContext.Provider value={{ filter: "recent" }}>
          <HeaderSection {...props} />
        </FilterContext.Provider>
      </ThemeProvider>
    );
    numberofproducts = (props.page + 1) * props.cant_page;
  });

  it("should render <HeaderSection/>", () => {
    expect(
      screen.getByText(`${numberofproducts} of ${props.cantProducts} products`)
    ).toBeInTheDocument();
  });
});
