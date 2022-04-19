import React from 'react'
import ModalSmsForm from './ModalSmsForm';
import "./ModalSms.scss"
import { useNavigate } from "react-router-dom";
import {ReactComponent as Close} from "../../assets/svg/close_modal.svg"
import {ReactComponent as PhoneSms} from "../../assets/svg/phone_sms.svg"
import { useSelector } from 'react-redux';


const ModalSms = ({onClose}) => {

    const authStage = useSelector(state => state.auth.authStage)
    const phoneNumber = useSelector(state => state.auth.phoneNumber)
    const token = useSelector(state => state.auth.token)
    const navigate = useNavigate()

    

    if(authStage !== 2) return null;
    const redirectToProfile = () => {
        navigate("/profile/index")
    }
    return (
        <div className="modal-auth"> 
            <div className="modal__header">
                <button className="modal__close" onClick={onClose}>
                    <Close />
                </button>
            </div>
            <div className="modal-auth__content">
                <div className='modal-auth__icon'>
                    <PhoneSms />
                </div>
                <h3 className="modal-auth__title">Код из SMS</h3>
                <p className="modal-auth__text">
                    На номер <span className="--red">{phoneNumber}</span> отправлено sms с кодом проверки
                </p>
                <ModalSmsForm token={token} close={onClose} redirect={redirectToProfile} />
            </div>
        </div>
    )
}

export default ModalSms