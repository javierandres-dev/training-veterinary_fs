import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;
const H1 = styled.h1`
  margin: 0;
`;
const Nav = styled.nav``;
const Ul = styled.ul`
  list-style: none;
  margin: 0;
`;
const Li = styled.li``;

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
