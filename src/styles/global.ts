import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #121212;

        --white: #FFFF;
        --white-400: #ededed;

        --dark-300: #DADADA54;
        --dark-400: #27272A;
        --dark-500: #3E3E41;
    
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }



`;