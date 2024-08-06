/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const parent = css`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    margin: 50px auto;
    border: 1px solid #dbdbdb;
    padding: 10px;
    width: 800px;
    height: 400px;
`;

const child = css`
    box-sizing: border-box;
    border: 4px solid red;
    padding: 20px 40px;
    width: 150px;
    height: 50px;
    background-color: white;
`;

function DandP(props) {
    return (
        <div css={parent}>
            <label css={child}>1</label>
            <label css={child}>2</label>
            <label css={child}>3</label>
            <label css={child}>4</label>
            <label css={child}>5</label>  
        </div>
    );
}

export default DandP;