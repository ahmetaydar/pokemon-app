import React from "react";
import { CardContainer, Title, PokemonImage } from "./style";
import { capitalizer } from "../../utlis/util.functions";
const Card = (props) => {
  return (
    <CardContainer>
      <PokemonImage
        src={`https://img.pokemondb.net/artwork/large/${props.name}.jpg`}
      />
      <Title>{capitalizer(props.name)}</Title>
    </CardContainer>
  );
};

export default Card;
