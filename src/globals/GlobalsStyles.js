import { createGlobalStyle } from "styled-components";

const GlobalsStyles = createGlobalStyle`

:root {
  --primary-color: #303032;
  --secondary-color: #FFF200;
  --color-white: #FFF;
  --color-black: #000;
  --color-transparent: rgba(0,0,0,0)
}

* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}

html {
    font-size: 16px;
}

body {
  color: var(--color-white);
  font-size: inherit;
  line-height: 28px;
  background: var(--primary-color);
  font-family: 'Lato', sans-serif;
}

h1 {
  font-size: 3em;
  line-height: 1.2;
  margin-bottom: 0.5em;
  font-weight: bold;
}

h2 {
  font-size: 2em;
  margin-bottom: 1em;
  margin-bottom: 0.75em;
}

h3 {
  font-size: 1.5em;
  line-height: 1;
  margin-bottom: 1em;
  font-weight: bold;
}

h4 {
  font-size: 1.2em;
  line-height: 1.2;
  margin-bottom: 1.25em;
  font-weight: bold;
  font-weight: bold;
  
}

h5 {
  font-size: 1em;
  margin-bottom: 1.5em;
  font-weight: bold;
  
}
h6 {
  font-size: 1em;
  margin-bottom: 0.5em;
  
}

p {
  line-height: 1.5;
  margin: 0 0 1.5 0;
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
  color: var(--primary-color)
}
`;
export default GlobalsStyles;