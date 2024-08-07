import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    align-items: center;


    & > svg {
        margin-right: 10px;
    }

    & > span {
        font-size: 16px;
        font-weight: 600;
    }
`;