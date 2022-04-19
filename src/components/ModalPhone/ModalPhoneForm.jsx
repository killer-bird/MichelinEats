import React from 'react';
import InputMask from 'react-input-mask';
import Button from '../../UI/Button/Button';
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { authStageTwo, setPhone, setToken } from '../../redux/authReducer';
import axios from 'axios';

const ModalPhoneForm = () => {
    const { 
        control,  handleSubmit, 
        formState: {errors},
    } = useForm({
        mode: "onSubmit"
    })
    const dispatch = useDispatch()
    const onSubmit = async data =>{
        const phone = data.phone.replace(/[\s()_]/g,'')
        axios.post("https://zabqer.net/api/v1/auth/customer", {
           phone
       }).then(
        res => {
            console.log(res.data.token)
            dispatch(setToken(res.data.token))
        },
        ).catch(
           err => {console.log(err)}
        )
        
        dispatch(authStageTwo())
        dispatch(setPhone(data.phone))
        
    }
    return (
        <form className="modal__form" onSubmit={handleSubmit(onSubmit)} >
            <Controller control={control} name="phone" rules={{required:"Введите номер телефона",
            validate: v  =>{return v.replace(/[\s()_+]/g,'').length === 11 || "Неправильно введен номер"},
            }} render={ ({
                field: { onChange, ref }})=>(
                <InputMask className="form__input" type="tel" inputRef={ref}  onChange={onChange}  mask="+7\(999) 999 99 99"  placeholder="Номер телефона"/>
            ) }/>
            {errors?.phone && <p className="error">{errors?.phone?.message || "Error"}</p>}
            <Button>
                <div className="modal__btn">Авторизоваться</div>
            </Button>
        </form>
    )
};

export default ModalPhoneForm;
