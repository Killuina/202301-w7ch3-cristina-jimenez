import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

describe("Given the HomePage Component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a list of pokemons", () => {
      const expectedListName = "List of Pokemons";
      render(<HomePage />);

      const pokemonCardList = screen.getByRole("list", {
        name: expectedListName,
      });

      expect(pokemonCardList).toBeInTheDocument();
    });
  });
});
