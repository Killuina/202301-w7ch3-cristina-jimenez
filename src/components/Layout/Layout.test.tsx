import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import Layout from "./Layout";
import { screen } from "@testing-library/react";

describe("Given the Layout component", () => {
  describe("When it's rendered", () => {
    test("Then it should show the Header component with the app title: 'Pokédex'", () => {
      render(<Layout />, { wrapper: BrowserRouter });

      const layoutHeader = screen.getByRole("heading", {
        name: "Pokédex",
      });

      expect(layoutHeader).toBeInTheDocument();
    });
  });
});
