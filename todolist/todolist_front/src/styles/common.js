import { css } from "@emotion/react";

export const reset = css`
    html, body, #root {
        margin: 0;
        padding: 0;
        height: 100%;
        background-color: #555555;
    }

    h1, h2, h3, ul, p {
        margin: 0;
        padding: 0;
    }

    ul, ol {
        list-style-type: none;
    }

    button {
        border: none;
        padding: 10px 20px;
        background-color: pink;
        cursor: pointer;
    }

    button:hover {
        background-color: #fafafa;
    }

    button:active {
        background-color: #dddddd;
    }
`;