import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    box-sizing: border-box;
    
}

body{
    margin: 0;
    padding: 0;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', 'sans-serif','Noto Serif Display', serif;
    font-size:112.5% ;
    background-color: black;
    color: white;
    width: 100vw;
}



input, label, textarea{
    font-size: 1em;
}
p, article {
    font-size: small;
}

`;
