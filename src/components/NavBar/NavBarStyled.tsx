import styled from "styled-components";

const NavBarStyled = styled.nav`
  display: flex;
  align-items: center;
  .to-create-button {
    text-decoration: none;
    color: #f06292;
    font-size: 1.2rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    background-color: #ffebee;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #ffcdd2;
    }
  }
`;

export default NavBarStyled;
