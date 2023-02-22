import PokemonCardList from "../../components/PokemonCardList/PokemonCardList";
import { Pokemons } from "../../types";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
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
    <HomePageStyled className="home-page-content">
      <PokemonCardList pokemons={pokemons} />
    </HomePageStyled>
  );
};

export default HomePage;
