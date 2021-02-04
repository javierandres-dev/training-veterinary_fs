import React from "react";
import styled from "styled-components";
import { fontFamily, fontWeight, fontSize } from "./Constants";

const Container = styled.footer`
  text-align: center;
  font-family: ${fontFamily.base};
  font-weight: ${fontWeight.base};
  font-size: ${fontSize.small};
  padding: 0.5rem;
`;
const Par = styled.p`
  margin: 0;
`;

const Footer = () => {
  return (
    <Container>
      <Par>
        ¿Necesita un desarrollo de software?{" "}
        <a
          href="https://www.javierandresgp.com"
          rel="noreferrer"
          target="_blank"
        >
          Contacteme
        </a>
      </Par>
    </Container>
  );
};

export default Footer;
