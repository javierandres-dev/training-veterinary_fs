import styled from "styled-components";

export const color = {
  primary: "#A61103",
  secondary: "#BF1304",
  light: "#f2f2f2",
  dark: "#1A2526",
};

export const fontSize = {
  base: "1.6rem",
  small: "1.3rem",
  large: "1.9rem",
};

export const fontWeight = {
  light: 300,
  base: 400,
  bold: 700,
};

export const fontFamily = {
  base: "'Oxygen', sans-serif;",
};

export const container = styled.div`
  @media screen and (min-width: 480px) {
    max-width: 420px;
  }
  @media screen and (min-width: 768px) {
    max-width: 720px;
  }
  @media screen and (min-width: 1024px) {
    max-width: 960px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1140px;
  }
`;
