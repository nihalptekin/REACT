import React, { useState } from "react";
import { Hamburger, Logo, MenuLink, Nav, Menu } from "./NavbarStyles";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [acik, setAcik]=useState(false)
  return (
    <Nav>
      <Logo to="/home"   onClick={()=> setAcik(false) }>
        <i>{"<Clarusway>"}</i>
        {/* taglere özel < isaretlerini string gibi kullanmak istersek üstteki gibi syntaxla yazariz. */}
        <span>Recipe</span>
      </Logo>
      <Hamburger onClick={()=> setAcik(!acik) } >
        <GiHamburgerMenu  />
      </Hamburger>

      <Menu osman={acik}  onClick={()=> setAcik(!acik) }>
        <MenuLink to="/about">About</MenuLink>
        <a href="https://githup.com">Github</a>
        <MenuLink to="/">Logout</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
