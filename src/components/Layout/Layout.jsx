import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

// const StyledLink = styled(NavLink)`
// color: #212121;

// &.active {
//   color: orangered;
// }
// `;

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
