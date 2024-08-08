import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { useRecoilState } from 'recoil';
import { registerModalAtom } from '../../atoms/modalAtoms';
import RegisterTodo from '../RegisterTodo/RegisterTodo';

function RegisterModal({ containerRef }) {
    const [ isOpen, setOpen ] = useRecoilState(registerModalAtom);
    const [ animation, setAnimation ] = useState("registerModalContentOepn");

    const closeModal = () => {
        setAnimation("registerModalContentClose");
        setTimeout(() => {
            setAnimation("registerModalContentOepn");
            setOpen(false)
        }, 400);
        
    }

    return (
        <ReactModal
            style={{
                overlay: {
                    position: "absolute",
                    backgroundColor: "transparent",
                },
                content: {
                    inset: "auto 0 0",
                    // top: "50%",
                    // left: "50%",
                    // transform: "translate(0%, 15%)",
                    // top: "auto",
                    // left: "0",
                    // riight: "0",
                    // bottom: "0",
                    // transform: "translateY(26%)",
                    boxSizing: "border-box",
                    borderRadius: "10px",
                    padding: "0",
                    // inset: "0",
                    width: "100%",
                    height: "80%",
                    animation: `${animation} 0.6s 1`,
                    animationTimeFunction: "ease-in-out",
                },
            }}
            isOpen={isOpen}
            onRequestClose={closeModal}
            ariaHideApp={false}
            parentSelector={() => containerRef.current}
            >
            <RegisterTodo closeModal={closeModal}/>
        </ReactModal>
    );
}

export default RegisterModal;