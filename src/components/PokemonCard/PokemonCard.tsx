import React from "react";
import { PokemonStructure } from "../../types";
import PokemonCardStyled from "./PokemonCardStyled";

interface PokemonCardProps {
  pokemon: PokemonStructure;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <PokemonCardStyled className="pokemon-card">
      <h2 className="pokemon-card__name">{pokemon.name}</h2>
      <img
        width="180"
        height="180"
        className="pokemon-card__image"
        src={pokemon.image}
        alt={pokemon.name}
      />
    </PokemonCardStyled>
  );
};

export default PokemonCard;
