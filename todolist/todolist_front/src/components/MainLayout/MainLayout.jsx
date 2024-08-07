import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function MainLayout({children}) {
    return (
        <div css={s.layout}>
            <div css={s.fram}>
                <div css={s.topBar}>
                    <div css={s.topBarCenter}></div>
                </div>
                {children}
            </div>
        </div>
    );
}

export default MainLayout;