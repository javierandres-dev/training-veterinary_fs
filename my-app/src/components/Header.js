import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { fontSize } from "./Styles";

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;
const H1 = styled.h1`
  margin: 0;
  font-size: ${fontSize.base};
`;
const Nav = styled.nav``;
const Ul = styled.ul`
  list-style: none;
  margin: 0;
`;
const Li = styled.li`
  font-size: ${fontSize.base};
`;

const Header = () => {
  return (
    <Container>
      <NavLink to="/">
        <H1>Veterinaria</H1>
      </NavLink>
      <Nav>
        <Ul>
          <NavLink to="/">Inicio</NavLink>
          <Li>
            <NavLink to="/login">Portal</NavLink>
          </Li>
        </Ul>
      </Nav>
    </Container>
  );
};
export default Header;
