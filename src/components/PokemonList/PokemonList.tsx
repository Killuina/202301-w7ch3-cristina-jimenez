import { Pokemons } from "../../types";
import PokemonCard from "../PokemonCard/PokemonCard";

const PokemonList = (): JSX.Element => {
  const pokemons: Pokemons = [
    {
      id: 1,
      name: "pikachu",
      image: "",
    },
    {
      id: 2,
      name: "ditto",
      image: "",
    },
  ];

  return (
    <ul>
      {pokemons.map((pokemon) => (
        <li key={pokemon.id}>
          <PokemonCard pokemon={pokemon} />
        </li>
      ))}
    </ul>
  );
};

export default PokemonList;
