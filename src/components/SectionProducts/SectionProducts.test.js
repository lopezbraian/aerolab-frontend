import { render, screen } from "@testing-library/react";

//Components
import SectionProducts from "components/SectionProducts";
import { FilterContext } from "context/filterContext";
import useGetProduct from "components/hooks/useGetProduct";
import { UserContext } from "context/userContext";
import { ThemeProvider } from "styled-components";
import theme from "style/theme";

jest.mock("components/hooks/useGetProduct");

describe("Section Products", () => {
  const dataWithProducts = [
    [
      {
        img: {
          url: "https://coding-challenge-api.aerolab.co/images/iPhone8-x1.png",
          hdUrl:
            "https://coding-challenge-api.aerolab.co/images/iPhone8-x2.png",
        },
        _id: "5a0b35c1734d1d08bf7084c3",
        name: "iPhone 8",
        cost: 800,
        category: "Phones",
      },
      {
        img: {
          url: "https://coding-challenge-api.aerolab.co/images/Switch-x1.png",
          hdUrl: "https://coding-challenge-api.aerolab.co/images/Switch-x2.png",
        },
        _id: "5a0b35d7734d1d08bf7084c9",
        name: "Nintendo Switch 32GB",
        cost: 300,
        category: "Gaming",
      },
    ],
    true,
  ];
  const wrapper = ({ children }) => (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={{ user: "Jhon", coins: "22000" }}>
        <FilterContext.Provider value={{ filter: "recent" }}>
          {children}
        </FilterContext.Provider>
      </UserContext.Provider>
    </ThemeProvider>
  );

  it("should render <SectionProduct/> with products", async () => {
    useGetProduct.mockImplementation(() => dataWithProducts);
    render(<SectionProducts />, { wrapper });

    expect(await screen.findAllByRole("listitem")).toHaveLength(3);
    expect(screen.getByText("iPhone 8")).toBeInTheDocument();
    expect(screen.getByText("Nintendo Switch 32GB")).toBeInTheDocument();
  });

  it("should render products without products", async () => {
    const data = [[], false];
    useGetProduct.mockImplementation(() => data);
    render(<SectionProducts />, { wrapper });
    expect(await screen.findAllByRole("listitem")).toHaveLength(3);
  });
});
