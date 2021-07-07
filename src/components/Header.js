import React from "react";
import styled from "styled-components";
import { Title } from "./Styles";

const Container = styled.header`
  text-align: center;
`;

const Header = () => {
  return (
    <Container>
      <Title>Veterinaria</Title>
    </Container>
  );
};

export default Header;
