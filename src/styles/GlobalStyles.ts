import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --background: #f8f8f8;
    --details: #FEFEFE;
    --title: #29292e;

    --gray-dark: #737380;
    --gray-medium: #A8A8B3;
    --gray-light: #DBDCDD;

    --pink-dark: #E559F9;
    --pink-light: #D67EE2;

    --purple: #6F4BD8;
    --danger: #D73754;
    --red: #ea4335;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,body,#root {
    height: 100%;
  }

  body {
    background: var(--background);
    color: var(--title);
  }

  body, input, button, textarea {
    font-size: 16px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
    transition: all 0.2s;

    :not(:disabled):hover {
      filter: brightness(0.9);
    }
  }
`;

export default GlobalStyles;
