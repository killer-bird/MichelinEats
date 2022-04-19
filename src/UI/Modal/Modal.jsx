import React from 'react';
import Overlay from '../Overlay/Overlay';
import "./Modal.scss"

const Modal = ({isOpened, onClose, children}) => {
    
    return (
        <Overlay isOpened={isOpened} onClose={onClose}>
            <div className="modal__wrapper">
                {children}
            </div>
        </Overlay>
    )
};

export default Modal;
