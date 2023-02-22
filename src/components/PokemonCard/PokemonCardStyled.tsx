import styled from "styled-components";

const PokemonCardStyled = styled.article`
  text-transform: capitalize;
  background-color: #f7dc6f;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 16px;
  width: 200px;
  height: 300px;

  h2 {
    color: #34495e;
    font-size: 24px;
    margin-bottom: 8px;
  }
`;

export default PokemonCardStyled;
