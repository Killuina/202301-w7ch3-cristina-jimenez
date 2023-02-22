import { Link } from "react-router-dom";
import NavBarStyled from "./NavBarStyled";

const NavBar = (): JSX.Element => {
  return (
    <NavBarStyled>
      <Link to="/" className="link-button">
        Home
      </Link>
      <Link to="/create" className="link-button">
        Create
      </Link>
    </NavBarStyled>
  );
};

export default NavBar;
