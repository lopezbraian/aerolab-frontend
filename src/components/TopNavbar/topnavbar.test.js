import { render, screen } from "@testing-library/react";
import { UserContext } from "context/userContext";
import TopNavBar from "components/TopNavbar";
import { ThemeProvider } from "styled-components";
import theme from "style/theme";

describe("TopNavBar", () => {
  it("should render TopNavBar", () => {
    const user = {
      name: "Jhon",
    };
    render(
      <ThemeProvider theme={theme}>
        <UserContext.Provider value={{ user }}>
          <TopNavBar />
        </UserContext.Provider>
      </ThemeProvider>
    );
    expect(screen.getByText(user.name)).toBeInTheDocument();
  });
});
