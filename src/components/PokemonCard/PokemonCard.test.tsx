import { screen } from "@testing-library/react";
import { render } from "@testing-library/react";
import PokemonCard from "./PokemonCard";

describe("Given the PokemonCard component", () => {
  describe("when it receives a pokemon with name 'pikachu'", () => {
    test("Then it should show 'pikachu' on a heading", () => {
      const pokemon = {
        name: "pikachu",
        image: "",
      };
      const expectedName = "pikachu";

      render(<PokemonCard pokemon={pokemon} />);

      const pokemonCardWithNamePikachu = screen.getByRole("heading", {
        name: expectedName,
      });

      expect(pokemonCardWithNamePikachu).toBeInTheDocument();
    });
  });
});
