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
      <p>
        ¿Necesita desarrollo de software?&nbsp;
        <a
          href="https://www.javierandresgp.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Contácteme
        </a>
      </p>
    </Container>
  );
};

export default Footer;
