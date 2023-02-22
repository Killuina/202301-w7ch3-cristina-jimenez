import PokemonCardList from "../../components/PokemonCardList/PokemonCardList";
import { Pokemons } from "../../types";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  const pokemons: Pokemons = [
    {
      id: 1,
      name: "pikachu",
      image:
        "https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Pikachu.png",
    },
    {
      id: 2,
      name: "ditto",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png",
    },
  ];

  return (
    <HomePageStyled className="home-page-content">
      <PokemonCardList pokemons={pokemons} />
    </HomePageStyled>
  );
};

export default HomePage;
