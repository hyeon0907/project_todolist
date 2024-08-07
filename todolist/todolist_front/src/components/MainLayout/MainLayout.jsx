import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { IoCellularSharp } from "react-icons/io5";
import { IoIosWifi, IoIosBatteryFull } from "react-icons/io";
import MainContainer from '../MainContainer/MainContainer';
import RegisterModal from '../RegisterModal/RegisterModal';

function MainLayout({children}) {
    const [ clock, setClock ] = useState("0:00");
    useEffect(() => {
        setInterval(() => {
            const now = new Date();
            const hours = now.getHours();
            const minutes = (Math.floor(now.getMinutes() / 10) === 0 ? "0" : "") + now.getMinutes();
            setClock(`${hours}:${minutes}`);
        }, 1000);
    }, []);

    return (
        <div css={s.layout}>
            <div css={s.fram}>
                <div css={s.topBar}>
                    <div css={s.clock}>{clock}</div>
                    <div css={s.topBarCenter}></div>
                    <div css={s.rightItems}><IoCellularSharp /><IoIosWifi /><IoIosBatteryFull /></div>
                </div>
                <MainContainer>
                    <RegisterModal />
                    {children}
                </MainContainer>
            </div>
        </div>
    );
}

export default MainLayout;