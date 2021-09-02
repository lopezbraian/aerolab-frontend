import { render, screen } from "Utils/test-util";
import HeaderSection from "components/BarProducts/HeaderSection";

describe("Header Section", () => {
  const props = {
    page: 0,
    cantProducts: 32,
    nextPage: () => {
      props.page = props.page + 1;
    },
    prevPage: () => {
      props.page = props.page - 1;
    },
    cantProdutPerPage: 16,
  };

  it("should render", () => {
    render(<HeaderSection {...props}></HeaderSection>);

    expect(
      screen.getByText(
        `${props.cantProdutPerPage} of ${props.cantProducts} products`
      )
    ).toBeInTheDocument();
  });

  it("should render button prev when press button next", () => {
    const props = {
      page: 1,
      cantProducts: 32,
      nextPage: () => {
        props.page = props.page + 1;
      },
      prevPage: () => {
        props.page = props.page - 1;
      },
      cant_page: 16,
    };
    render(<HeaderSection {...props}></HeaderSection>);

    //Cant of buttons with button prev is 4
    const buttonsCant = screen.getAllByRole("button").length - 1;
    expect(buttonsCant).toEqual(4);
  });
});
