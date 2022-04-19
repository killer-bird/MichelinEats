import React from 'react';
import Portal from '../Portal/Portal';
import { useSelector } from "react-redux"
import "./Overlay.scss"
const Overlay = ({isOpened, children, onClose}) => {
    const authStage = useSelector( state => state.auth.authStage)
    if(authStage === 0) return null;
    
    return <div>
            <Portal>
                <div className="overlay__wrapper" role={"dialog"}>
                    <div className="overlay" role={"button"} tabIndex={0} onClick={onClose}/>
                    {children}
                </div>
            </Portal>
        </div>;
};

export default Overlay;
