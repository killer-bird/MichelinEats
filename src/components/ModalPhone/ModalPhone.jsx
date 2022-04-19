import React from 'react';
import "./ModalPhone.scss"
import { Link } from "react-router-dom";
import ModalPhoneForm from './ModalPhoneForm';
import {ReactComponent as Close} from "../../assets/svg/close_modal.svg"
import { useSelector } from 'react-redux';






const ModalPhone = ({onClose}) => {

    const authStage = useSelector( state => state.auth.authStage)
    
    if(authStage !==1) return null;
    return (
        <div className="modal-auth">
            <div className='modal__header'>
                <button className="modal__close" onClick={onClose}>
                    <Close />
                </button>
            </div>
            <h4 className="modal__title">Авторизация в системе</h4>
            <div className='modal-auth__content'>
                <ModalPhoneForm />
            </div>
            <p className="modal-auth__bottom">
            Нажимая на кнопку «Заказ подтверждаю», вы соглашаетесь с 
            <Link to={"/privacy-policy"}>Политика конфиденциальности</Link>
            и <Link to={"/terms-of-use"}>Пользовательское соглашение</Link>
            </p>
        </div>
    )
};

export default ModalPhone;
