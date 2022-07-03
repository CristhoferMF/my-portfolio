import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


  body {
      margin: 0;
      font-family: "FuturaPT",-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
          sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background: ${({ theme }) => theme.body};
      color: ${({ theme }) => theme.text};
      letter-spacing: 0.05em;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`;
