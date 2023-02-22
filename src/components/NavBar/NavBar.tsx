import { Link } from "react-router-dom";
import NavBarStyled from "./NavBarStyled";

const NavBar = (): JSX.Element => {
  return (
    <NavBarStyled>
      <ul>
        <li>
          <Link to="/create" className="to-create-button">
            Create
          </Link>
        </li>
      </ul>
    </NavBarStyled>
  );
};

export default NavBar;
