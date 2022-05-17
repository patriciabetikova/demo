import { createGlobalStyle } from "styled-components/macro"
import { normalize } from "styled-normalize"

export const GlobalStyle = createGlobalStyle`
 

  ${normalize};
  
  html { 
    font-size: 62.5%; 
  }

  body {
    font-size: 16px;
    font-size: 1.6rem;
    margin: 0;
    
  }

  html, body, #root {
    height: 100%;
    width:100%;
  }

  * {
  box-sizing: border-box;
  }

  h2 {
    margin: 0;
  }

  h3 {
    margin: 0;
  }
  
  h4 {
    margin: 0;
  }
  
  p {
    margin: 0;
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: unset;
  }

  
`
