import { createGlobalStyle } from "styled-components";

const GlobalsStyles = createGlobalStyle`

@font-face {
  font-family: "roboto";
  src: url("/fonts/roboto/roboto-regular-webfont.eot");
  src: url("/fonts/roboto/roboto-regular-webfont.eot?#iefix") format("embedded-opentype"),
      url("/fonts/roboto/roboto-regular-webfont.woff2") format("woff2"),
      url("/fonts/roboto/roboto-regular-webfont.woff") format("woff"),
      url("/fonts/roboto/roboto-regular-webfont.ttf") format("truetype"),
      url("/fonts/roboto/roboto-regular-webfont.svg#robotoregular") format("svg");
  font-weight: 400;
  font-style: normal;
}

@font-face {
    font-family: "roboto";
    src: url("/fonts/roboto/roboto-medium-webfont.eot");
    src: url("/fonts/roboto/roboto-medium-webfont.eot?#iefix") format("embedded-opentype"),
        url("/fonts/roboto/roboto-medium-webfont.woff2") format("woff2"),
        url("/fonts/roboto/roboto-medium-webfont.woff") format("woff"),
        url("/fonts/roboto/roboto-medium-webfont.ttf") format("truetype"),
        url("/fonts/roboto/roboto-medium-webfont.svg#robotomedium") format("svg");
    font-weight: 500;
    font-style: normal;
}

:root {
  --primary-color: #303032;
  --secondary-color: #FFF200;
  --color-white: #FFF;
  --color-black: #000;
  --color-transparent: rgba(0,0,0,0);

  --primary-font: "roboto";

  --primary-weight: 400;
  --secondary-weight: 500;
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
  font-family: var(--primary-font);
  font-weight: var(--primary-weight);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1 {
  font-size: 60px;
  line-height: 1.2;
}

h2 {
  font-size: 48px;
  line-height: 1.2;
}

h1,
h2 {
  color: var(--secondary-color);
  font-weight: var(--secondary-weight);
}

p {
  line-height: 1.5;
  margin: 0;
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