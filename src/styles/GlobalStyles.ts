import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root {
    background-color: ${props => props.theme?.colors.background};
    color: ${props => props.theme?.colors.title};
    height: 100vh;
  }

  body, input, button, textarea {
    font-size: 16px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
    transition: filter 0.2s;

    :not(:disabled):hover {
      filter: brightness(0.9);
    }
  }
`;

export default GlobalStyles;
