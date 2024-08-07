import React from 'react';
import { IoSearchOutline } from "react-icons/io5";
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function Search(props) {
    return (
        <div css={s.searchInputBox}>
            <IoSearchOutline/>
            <input type="text" />
            <button>취소</button>
        </div>
    );
}

export default Search;