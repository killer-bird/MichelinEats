import React, { useState } from 'react';
import {ReactComponent as ProflleIcon} from "../../assets/svg/profile.svg"
import { useNavigate } from "react-router-dom"
import Modal from '../../UI/Modal/Modal';
import ModalPhone from '../ModalPhone/ModalPhone';
import ModalSms from "../ModalSms/ModalSms";
import { useDispatch, useSelector } from "react-redux";
import { authStageOne, closeAuth } from "../../redux/authReducer"
import "./Auth.scss"


const AuthButton = () => {
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()
    const { isAuth } = useSelector( state => state.auth )
    const navigate = useNavigate()
    
    const onClick = () => {
        if(isAuth) {
            navigate("/profile/index")
        }else {
            setIsOpen(!isOpen)            
            dispatch(authStageOne())
            document.body.classList.toggle("--no-scroll")
        } 
    }

    
    const closeModal = () => {
        dispatch(closeAuth())
        setIsOpen(!isOpen)
        document.body.classList.toggle("--no-scroll")
    }

    return  <> 
                <div className="header__item auth" onClick={onClick}>
                    <ProflleIcon /> 
                </div>

                <Modal isOpened={isOpen} onClose={closeModal}>
                    <ModalPhone onClose={closeModal} />
                    <ModalSms onClose={closeModal} />
                </Modal>
            </>
};

export default AuthButton;
