import React from "react";
import styled from "styled-components";
import { fontSize } from "./Styles";

const Container = styled.footer`
  text-align: center;
  padding: 0.5rem;
  font-size: ${fontSize.small};
`;

const Footer = () => {
  return (
    <Container>
      <p>¿Necesita desarrollo de software?&nbsp; Contácteme</p>
    </Container>
  );
};

export default Footer;
