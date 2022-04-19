import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { authPhaseTwo, closeAuth, setAuth } from "../../redux/authReducer"
import Button from '../../UI/Button/Button';
import Timer from "../../UI/Timer/Timer";
import axios from "axios"


const ModalSmsForm = ({token, redirect, close}) => {

    const [smsSended, setSmsSended] = useState(false)

    const dispatch = useDispatch()

    const { register,
        formState: {errors},
        reset, setFocus,  setValue, setError,
        handleSubmit } = useForm()
    const inputs = ["first", "second", "third", "fourth"]
    

    const changeFocus = (e)=>{
        let i = inputs.indexOf(e.target.name)
        if(i === 3) return
        setFocus(inputs[++i]) 
    }
    
    const backFocus = (e)=>{
        if (e.code === 'Backspace') {
            let i = inputs.indexOf(e.target.name)
            e.preventDefault()
            setValue(inputs[i],'')
            if(i === 0){
                setFocus("first")
            } else{
                setFocus(inputs[--i])  
            }
        }
        
    }
    
    const onSubmit = async data => {
        const code = Number(Object.values(data).join(''))
        console.log(token, code)
        axios.post("https://zabqer.net/api/v1/auth/customer/verify", {
            code,
            token
        }).then(res => {
            console.log(res)
            close()
            dispatch(setAuth())
            redirect()
        }).catch(err => {
            console.log(err.response.data)
            if(err.response.data.error === "ERR_VERIFICATION_MISSMATCH"){
                setError('first', {type: 'string', message:"Неверный код"})    
            }
        })
    }

    const setSmsStatus = ()=>{
        setSmsSended(false)
    }

    const repeatSms = async ()=>{
        setSmsSended(true)
        await axios.post("https://zabqer.net/api/v1/auth/customer/resend", {
            token
        })
    }
    const time = new Date()
    time.setSeconds(time.getSeconds() + 60)




    return (
        <form action="" className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form__inputs">
            <input {...register('first',
                        {
                            required: true,
                            onChange:(e)=>{
                            changeFocus(e)
                        }
                            })} maxLength={1} className="form__input" placeholder="_" onKeyDown={backFocus}/>
            <input {...register('second',{
                            required: "Поля обязательны к заполнению",
                            onChange:(e)=>{
                            changeFocus(e)
                        }})} 
                        onKeyDown={backFocus} className="form__input" placeholder="_"  />
            <input {...register('third',{
                            required: "Поля обязательны к заполнению",
                            onChange:(e)=>{
                            changeFocus(e)
                        }})}  maxLength={1}
                        className="form__input" placeholder="_" 
                        onKeyDown={backFocus}/>
            <input  name="fourth" maxLength={1}
                        {...register('fourth',{
                            required: "Поля обязательны к заполнению",
                            onChange:(e)=>{
                            changeFocus(e)
                        }})}
                        className="form__input"  placeholder="_"  
                        onKeyDown={backFocus} />
            </div>
            {(errors?.first || errors?.second || errors?.third || errors?.fourth) && <p className="error">{ errors?.first?.message ||"Все поля обязательны к заполнению"}</p>}
    
        
            {
            smsSended ? <Timer expiryTimestamp={time} callback={setSmsStatus} /> : 
            <button className="form__repeat" 
                type="button" 
                onClick={repeatSms} >
                    Отправить повторно
            </button>
            }

            <Button>
                <div className="modal__btn">Применить</div>
            </Button>
        </form>
    )
}

export default ModalSmsForm