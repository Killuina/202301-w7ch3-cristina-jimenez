export interface PokemonStructure {
  id: number;
  name: string;
  image: string;
}

export interface PokemonInfoStructure {
  name: string;
  sprites: {
    versions: {
      "generation-v": {
        "black-white": {
          animated: {
            front_default: string;
          };
        };
      };
    };
  };
}

export type Pokemons = PokemonStructure[];
