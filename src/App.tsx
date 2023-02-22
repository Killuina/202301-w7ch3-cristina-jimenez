import PokemonCard from "./components/PokemonCard/PokemonCard";

const App = (): JSX.Element => {
  return (
    <div className="app">
      <PokemonCard
        pokemon={{
          name: "Pikachu",
          image: "",
        }}
      />
    </div>
  );
};

export default App;
