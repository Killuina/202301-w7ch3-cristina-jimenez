import { Pokemons } from "../../types";
import PokemonCard from "../PokemonCard/PokemonCard";

interface PokemonCardListProps {
  pokemons: Pokemons;
}

const PokemonCardList = ({ pokemons }: PokemonCardListProps): JSX.Element => {
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

export default PokemonCardList;
