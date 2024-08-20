/** @jsxImportSource @emotion/react */
import { useCallback, useEffect, useRef, useState } from "react";
import * as s from "./style";

function SubPageContainer({ children }) {
    return (
        <div css={s.container}>
            {children}
        </div>
    );
}

export default SubPageContainer;