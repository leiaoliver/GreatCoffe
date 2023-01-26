import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
    background: black;

    ul {
      list-style: none;
      text-decoration: none;
    }

    button {
      text-decoration: none;
      cursor: pointer;
    }
 }
`;
