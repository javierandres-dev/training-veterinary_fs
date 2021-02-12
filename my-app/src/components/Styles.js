import styled, { createGlobalStyle } from "styled-components";

/* BASE
  ============================= */
export const GlobalStyle = createGlobalStyle`
:root {
  --primary: #A61103;
  --secondary: #BF1304;
  --light: #f2f2f2;
  --dark: #1A2526;
}
html {
  font-size: 62.5%;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
  body {
    font-family: 'Oxygen', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    color: var(--dark);
  }
img {
  max-width: 100%;
  height: auto;
}
a {
  color: var(--light);
}
a:link {
  text-decoration: none;
}
a:visited {
  font-style: italic;
}
a:hover {
  text-decoration: underline;
}
a:active {
  font-style: italic;
  text-decoration: underline;
}
`;

/* LINK
  ============================= */

/* TYPOGRAPHY
  ============================= */
export const fontFamily = {
  base: "'Oxygen', sans-serif",
};

export const fontWeight = {
  light: 300,
  base: 400,
  bold: 700,
};

export const fontSize = {
  base: "1.6rem",
  small: "1.3rem",
  large: "1.9rem",
};

export const color = {
  primary: "#A61103",
  secondary: "#BF1304",
  light: "#f2f2f2",
  dark: "#1A2526",
};

/* CONTAINERS
  ============================= */
export const Main = styled.main`
  width: 96%;
  margin: auto;
`;

export const Card = styled.section`
  max-width: 30rem;
  margin: auto;
`;

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: var(--primary);
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  color: var(--primary);
`;

export const Par = styled.p`
  padding: 0.5rem;
`;
/* FORMS
  ============================= */
export const Form = styled.form`
  max-width: 30rem;
  margin: auto;
`;
export const Fieldset = styled.fieldset`
  border-radius: 1rem;
`;
export const Legend = styled.legend`
  margin-left: 2rem;
  padding: 0 1rem;
`;
export const Label = styled.label`
  display: block;
`;
export const Input = styled.input`
  display: inline-block;
  width: 100%;
  margin: 0.5rem auto 1rem;
  border: none;
  border-bottom: thin solid var(--primary);
`;
export const Button = styled.button`
  display: block;
  width: 20rem;
  margin: 1rem auto;
  border: thin solid var(--secondary);
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: var(--secondary);
  color: var(--light);
  cursor: pointer;
  &:hover {
    background-color: var(--primary);
  }
`;

/* MEDIA QUERIES
  ============================= */
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
