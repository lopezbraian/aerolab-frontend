import { render, screen } from "@testing-library/react";

import Hero from "components/Hero";

describe("Hero", () => {
  it("should render <Hero/>", () => {
    render(<Hero></Hero>);
    expect(screen.getByText("Electronic")).toBeInTheDocument();
  });
});
