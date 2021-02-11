import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { fontSize } from "./Styles";

const Container = styled.header`
  text-align: center;
`;
const H1 = styled.h1`
  font-size: ${fontSize.base};
`;

const Header = () => {
  return (
    <Container>
      <NavLink to="/">
        <H1>Veterinaria</H1>
      </NavLink>
    </Container>
  );
};

export default Header;
