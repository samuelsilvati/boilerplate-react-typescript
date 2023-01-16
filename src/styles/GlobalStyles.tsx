import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background: ${(props) => props.theme.colors.backgroundColor};
}

`;

export default GlobalStyles;
