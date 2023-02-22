import { Outlet } from "react-router";
import HeaderStyled from "../Header/HeaderStyled";

const Layout = (): JSX.Element => {
  return (
    <>
      <HeaderStyled>
        <h1 className="app-title">Pokédex</h1>
      </HeaderStyled>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
