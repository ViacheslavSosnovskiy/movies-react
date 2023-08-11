import React from "react";
import { Nav, NavBarLink } from './NavBar.styled'

const NavBar = () => {
  return (
    <Nav>
      <NavBarLink to="/">Home</NavBarLink>
      <NavBarLink to="/movies">Movies</NavBarLink>
    </Nav>
  );
};

export default NavBar;
