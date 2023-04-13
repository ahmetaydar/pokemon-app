import React from "react";
import logo from "../../statics/e.png";
import { Container, MenuItems } from "./style";

const SideNav = () => {
  return (
    <Container>
      <MenuItems href={"/home"}></MenuItems>
      <img height={85} src={logo} />
      <MenuItems href={"/home"}>Home</MenuItems>
    </Container>
  );
};

export default SideNav;
