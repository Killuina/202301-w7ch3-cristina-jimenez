import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pokemons } from "../../../types";

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState: [] as Pokemons,
  reducers: {
    loadPokemons: (
      currentPokemons: Pokemons,
      action: PayloadAction<Pokemons>
    ) => [...action.payload],
  },
});

export const pokemonsReducer = pokemonsSlice.reducer;

export const { loadPokemons: loadPokemonsActionCreator } =
  pokemonsSlice.actions;
