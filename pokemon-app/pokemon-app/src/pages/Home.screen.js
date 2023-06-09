import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import HomeContainer from "../components/HomeContainer";

const Home = () => {
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then((res) => setPokemon(res.data.results));
  }, []);
  return (
    <HomeContainer>
      {pokemon &&
        pokemon.map((item) => {
          return <Card name={item.name} />;
        })}
    </HomeContainer>
  );
};

export default Home;
