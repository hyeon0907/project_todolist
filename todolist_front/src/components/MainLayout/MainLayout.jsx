import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { IoCellularSharp } from "react-icons/io5";
import { IoIosWifi, IoIosBatteryFull } from "react-icons/io";
import MainContainer from '../MainContainer/MainContainer';

function MainLayout({children}) {
    const [ clock, setClock ] = useState("0:00");

    // userEffect가 동작을 할때
    // 1. return 값이 웹페이지에 장착되기 전 완료가 되었을때 
    //    useEffect가 실행됨(이걸 마운트 라고 함.)
    // 2. [] 안에 디펜던시 값이 변화된다면 useEffect 실행
    //    ([]가 없으면 랜더링 될때 마다 실행됨.)
    useEffect(() => {
        setInterval(() => { // setInterval은 괄호 안에 함수뒤 1000(1초)가 지나면 함수 실행시켜줌
            const now = new Date(); // 현재 시간: new Date()
            const hours = now.getHours(); // 시간: now.getHours(), 분: now.getMinutes()
            const minutes = (now.getMinutes() < 10 ? "0" : "") + now.getMinutes();
            setClock(`${hours}:${minutes}`);
        }, 1000); 
    }, []);

    return (
        <div css={s.layout}>
            <div css={s.frame}>
                <div css={s.topBar}>
                    <div css={s.clock}>{clock}</div>
                    <div css={s.topBarCenter}></div>
                    <div css={s.rightItems}><IoCellularSharp/><IoIosWifi/><IoIosBatteryFull/></div>
                </div>
                <MainContainer>
                    {children}
                </MainContainer>
            </div>
        </div>
    );
}

export default MainLayout;