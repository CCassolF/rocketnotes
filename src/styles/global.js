import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  ::-webkit-scrollbar {
    width: .6em;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.GRAY_300};
    border-radius: 2.4rem;
  }

  body {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};

    -webkit-font-smoothing: antialiased;
  }

  html, body, input, button, textarea {
    font-family: 'Roboto Slab', serif;
    font-size: 1.6rem;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition:  filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`