import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

    :root {
        --color-primary: #00a884;
        --color-background: #111b21;
        --color-card: #f9f9fa;
    }

    * {
        margin: 0;
        padding: 0;
    }

    html, body, #root {
        height: 100vh;
    }

    body, button, input {
        font-family: 'Inter', sans-serif;
    }

`;