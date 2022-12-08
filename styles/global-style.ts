import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    :focus {
        outline: none;
        border: none;
    }
    ::-webkit-scrollbar {
        display: none;
    }
    html{
        -webkit-text-size-adjust: none;
        font-family: -apple-system,BlinkMacSystemFont,helvetica,Apple SD Gothic Neo,sans-serif;       
        font-display: fallback;
        font-size: 10px;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    button {
        padding: 0;
        border: 0;
        outline: 0;
        cursor: pointer;
        background: none;
        border: none;
        color:#000;

        &:disabled {
            cursor: default;
            fill: #f2f3f4;
        }
    }

    img {
        max-width: 100%;
        vertical-align: top;
    }
    a:link {
        color: #000;
        text-decoration: none;
    }
    a:visited {
        color: #000;
        text-decoration: none;
    }
    a:hover {
        color: #000;
        text-decoration: none;
    }

    input {
        padding: 0;
        border: 0;
        border-radius: 0;
        background-color: transparent;
        -webkit-box-shadow: none;
        box-shadow: none;
        outline: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }
    input::placeholder {
        color: #000;
    }
    input:-ms-input-placeholder {
        color: #000;
    }
`;
