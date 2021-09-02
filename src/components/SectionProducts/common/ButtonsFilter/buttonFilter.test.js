import { render, screen } from "@testing-library/react";
import { FilterContext } from "context/filterContext";
import ButtonFilter from "components/SectionProducts/common/ButtonsFilter";

test("Should Render <ButtonFilter>", async () => {
  render(
    <FilterContext.Provider value={{ filter: "recent" }}>
      <ButtonFilter></ButtonFilter>
    </FilterContext.Provider>
  );
  expect(screen.getByText("Sort by:")).toBeInTheDocument();
  expect(screen.getByText("Lowest price")).toBeInTheDocument();
  expect(screen.getByText("Highest Price")).toBeInTheDocument();
  expect(await screen.findAllByRole("listitem")).toHaveLength(3);
});
