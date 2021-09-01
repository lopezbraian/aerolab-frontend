import { render, screen } from "@testing-library/react";
import { UserContext } from "context/userContext";
import theme from "style/theme";
import { ThemeProvider } from "styled-components";
import Product from ".";

describe("Producto", () => {
  it("should render <Product/>", async () => {
    const valueContext = {
      user: {
        coins: 4000,
        name: "Braian Lopez",
      },
    };
    const data = {
      cost: 300,
      img: {
        url: "",
      },
      category: "Technology",
    };
    render(
      <ThemeProvider theme={theme}>
        <UserContext.Provider value={valueContext}>
          <Product data={data} />
        </UserContext.Provider>
      </ThemeProvider>
    );

    expect(screen.getByText(data.category)).toBeInTheDocument();
    expect(screen.getAllByRole("img")).toHaveLength(1);
  });
});
