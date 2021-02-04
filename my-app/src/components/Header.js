import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { fontFamily, fontWeight, fontSize, color } from "./Constants";

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  font-family: ${fontFamily.base};
  font-weight: ${fontWeight.base};
  background-color: ${color.primary};
  color: ${color.light};
`;
const H1 = styled.h1`
  margin: 0;
  font-size: ${fontSize.base};
  font-weight: ${fontWeight.base};
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
          <Li>
            <NavLink to="/login">Iniciar sesión</NavLink>
          </Li>
        </Ul>
      </Nav>
    </Container>
  );
};
export default Header;
