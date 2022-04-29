import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FloatingInput from "../../UI/FloatingInput/FloatingInput"
import { getProfile, editProfile } from '../../redux/authReducer';
import { useForm, Controller } from "react-hook-form";
import Radio from "../../UI/Radio/Radio"
import Button from "../../UI/Button/Button"
import {ReactComponent as CakeIcon} from "../../assets/svg/cake.svg"  
import { DatePicker } from 'antd';
import locale from 'antd/es/date-picker/locale/ru_RU'


const ProfileIndex = () => {

  const {register, handleSubmit, control, setValue, formState: {errors}} = useForm({mode: "onBlur"})
  const { isAuth, loading, error, profile } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  console.log(errors)
  const onSubmit = (data) => {
    console.log(data, errors)
    dispatch(editProfile(data))
    
    
  }

  return (
    <form action="" className="checkout__form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form__section">
      
      <Controller control={control} name="firstname"
      rules={ { pattern: {
        value: /(\d+)/,
        message: "Введите коректное имя"
      } }}
      render={( {field:{onChange, ref} })=>(
        <FloatingInput ref={ref} placeholder={"Имя"} onChange={onChange} value={profile?.firstname ? profile?.firstname : null}/>
       )}/>
      {errors?.firstname && <p className="error">{ errors?.firstname?.message || "Error"}</p>}
      
      <Controller control={control} name="lastName" 
      rules={ { pattern: {
        value: /(\d+)/,
        message: "Введите коректную фамилию"
      } } }  
      render={( {field:{onChange, ref}} )=>(
        <FloatingInput ref={ref} placeholder="Фамилия" onChange={onChange} value={profile?.lastname ? profile?.lastname : null}/>
      )}/>
       {errors?.lastName && <p className="error">{ errors?.lastName?.message || "Error"}</p>} 
      <Controller control={control} name="phone"  render={( {field:{onChange, ref} })=>(
        <FloatingInput ref={ref} placeholder={"Номер телефона"} onChange={onChange} value={profile?.phone ? profile?.phone : null}/>
       )}/>

       
      <Controller control={control} name="email" 
      rules={ { pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Введите коректный email"
      }}} 
      render={( {field:{onChange, ref}}) =>(
        <FloatingInput placeholder="E-mail" ref={ref} onChange={onChange} value={profile?.email ? profile?.email : null}/>
      )}/>
      {errors?.email && <p className="error">{ errors?.email?.message || "Error"}</p>} 
        
      <Controller control={control} name="birth" render={( {field:{onChange, ref}}) =>(
        <DatePicker 
        ref={ref}
        locale={locale}
        className="datepicker form__input" 
        placeholder="Дата рождения"
        format={"DD MMM, YYYY"} 
        
        onChange={e => {
          const dateObj = e?._d;
          onChange(dateObj)
        }} 
        style={{
          "border": "none",
          "fontSize": "16px"
        }}
        />
      )}/>
        
      </div>
      <div className="form__section">
        <div className="birthday">
          <CakeIcon />
          Мы любим делать друзьям подарки
        </div>
      </div>
      <div className="form__section">
        <h3 className="checkout__title">Ваш пол</h3>
        <div className="form__radios">
          <Controller control={control} name="sex" render={( {field:{onChange,  ref} })=>(
            <Radio  text="Мужской" value="man" ref={ref} onChange={onChange}/>
          )}/>
          <Controller control={control} name="sex" render={( {field:{onChange,  ref}}) =>(
            <Radio  text="Женский" value="woman" ref={ref} onChange={onChange}/>
          )}/>
          <Controller control={control} name="sex" render={( {field:{onChange,  ref}}) =>(
            <Radio  text="Не важно" value="null" ref={ref} onChange={onChange}/>
          )}/>
        </div>
      </div>
      <div className="profile__btn__wrapper">
        <Button type={"submit"}>
          <div className="profile__btn">
            Сохранить
          </div>
        </Button>
      </div>
    </form>
  )
}

export default ProfileIndex