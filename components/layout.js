import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {
  colors: {
    primary: "#183153",      // Deep blue
    secondary: "#FFD700",    // Gold
    background: "#f4f4f4",   // Light gray
    text: "#222",
    white: "#fff"
  },
  fonts: {
    main: "'Montserrat', sans-serif"
  }
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${props => props.theme.fonts.main};
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
