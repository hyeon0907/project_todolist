import React, { useCallback, useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import ReactModal from 'react-modal';

function MainContainer({children}) {
    const [ scroll, setScroll ] = useState({
        startY: 0,
        isDown: false
    });
    const containerRef = useRef();

    useEffect(() => {
        ReactModal.setAppElement(containerRef.current);
    })

    const handleDown = useCallback((e) => setScroll({
        startY: e.clicktY,
        isDown: true,
    }), []);
    const handleup = useCallback((e) => setScroll({
        startY: 0,
        isDown: false,
    }), []);
    const handleMove = (e) => {
        if(scroll.isDown){
            // const MAX_TOP = containerRef.current.scrollHeight - containerRef.current.offsetHeight;
            // const MIN_TOP = 0;
            let moveY = e.clientY - scroll.startY;
            //console.log({s: containerRef.current});
            const scrollTop = containerRef.current.scrollTop;
            containerRef.current.scrollTop = scrollTop + (moveY * -1);
        }
    }
    return (
        <div id={"container"} css={s.continaer}
            onMouseMove={handleMove}
            onMouseDown={handleDown}
            onMouseUp={handleup}
            ref={containerRef}>
            {children}
        </div>
    );
}

export default MainContainer;