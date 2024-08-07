/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const parent = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    //align-content: center;
    align-items: center;
    box-sizing: border-box;
    margin: 50px auto;
    border: 1px solid #dbdbdb;
    padding: 10px;
    width: 800px;
    height: 400px;
`;
const parent2 = css`
    display: flex;
    flex-wrap: nowrap;
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
    &:nth-of-type(1) {
        background-color: pink;
        align-self: flex-start;
    }
    &:nth-of-type(5) {
        background-color: pink;
        align-self: flex-start;
    }

    &:nth-of-type(3) {
        background-color: pink;
        align-self: flex-end;
    }
`;

const child2 = css`
    box-sizing: border-box;
    border: 4px solid blue;
    width: 300px;
    height: 100%;
    flex-shrink: 0;
    &:nth-of-type(1){
        flex-shrink: 1;
        background-color: yellow;
    }
    &:nth-of-type(2){
        //flex-shrink: 1;
        background-color: green;
    }
    &:nth-of-type(3){
        background-color: purple;
    }
`;

const inputBox = css`
    position: relative;
`;
const input = css`
    width: 300px;
    height: 50px;
    padding-right: 70px;
    & + button {
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        right: 10px;
        z-index: 0;
    }
`;

function DandP(props) {
    return (
        <>
            <div css={parent}>
                <label css={child}>1</label>
                <label css={child}>2</label>
                <label css={child}>3</label>
                <label css={child}>4</label>
                <label css={child}>5</label>

                <div css={inputBox}>
                    <input type="text" css={input}/>
                    <button>OK</button>
                </div>
            </div>
            <div css={parent2}>
                <div css={child2}></div>
                <div css={child2}></div>
                <div css={child2}></div>
            </div>
        </>
    );
}

export default DandP;