import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

// const StyledLink = styled(NavLink)`
// color: #212121;

// &.active {
//   color: orangered;
// }
// `;

const Layout = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
