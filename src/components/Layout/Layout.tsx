import { Outlet } from "react-router";
import HeaderStyled from "../Header/HeaderStyled";
import NavBar from "../NavBar/NavBar";

const Layout = (): JSX.Element => {
  return (
    <>
      <HeaderStyled>
        <h1 className="app-title">Pokédex</h1>
        <NavBar />
      </HeaderStyled>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
