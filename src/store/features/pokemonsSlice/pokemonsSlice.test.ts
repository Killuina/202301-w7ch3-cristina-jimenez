import { Pokemons } from "../../../types";
import { loadPokemonsActionCreator, pokemonsReducer } from "./pokemonsSlice";

describe("Given a pokemonsReducer function", () => {
  describe("When it receives a list of 2 pokemons and an action with type loadPokemons", () => {
    test("Then it should return a list of two pokemons", () => {
      const initialState = [] as Pokemons;
      const expectedPokemons: Pokemons = [
        {
          name: "pikachu",
          image: "",
        },
        {
          name: "ditto",
          image: "",
        },
      ];

      const loadPokemonsAction = loadPokemonsActionCreator(expectedPokemons);

      const newPokemons = pokemonsReducer(initialState, loadPokemonsAction);

      expect(newPokemons).toStrictEqual(expectedPokemons);
    });
  });
});
