import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FloatingInput from "../../UI/FloatingInput/FloatingInput"
import { getProfile, renew } from '../../redux/authReducer';
import { useForm, Controller } from "react-hook-form";
import Radio from "../../UI/Radio/Radio"
import Button from "../../UI/Button/Button"
import {ReactComponent as CakeIcon} from "../../assets/svg/cake.svg"  
import { DatePicker } from 'antd';
import 'moment/locale/ru';
import ru_RU from "antd/lib/locale/ru_RU";



const ProfileIndex = () => {

  const {register, handleSubmit, control, setValue} = useForm({mode: "onSubmit"})
  const { isAuth, loading, error, profile } = useSelector(state => state.auth)
  const dispatch = useDispatch()


  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form action="" className="checkout__form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form__section">
      <Controller control={control} name="name"  render={( {field:{onChange, ref} })=>(
        <FloatingInput ref={ref} placeholder={"Имя"} onChange={onChange} value={profile?.firstname ? profile?.firstname : null}/>
       )}/>
      <Controller control={control} name="lastName" render={( {field:{onChange, ref}} )=>(
        <FloatingInput ref={ref} placeholder="Фамилия" onChange={onChange} value={profile?.lastname ? profile?.lastname : null}/>
      )}/>
       <Controller control={control} name="phone"  render={( {field:{onChange, ref} })=>(
        <FloatingInput ref={ref} placeholder={"Номер телефона"} onChange={onChange} value={profile?.phone ? profile?.phone : null}/>
       )}/>
      <Controller control={control} name="email" render={( {field:{onChange, ref}}) =>(
        <FloatingInput placeholder="E-mail" ref={ref} onChange={onChange} value={profile?.email ? profile?.email : null}/>
      )}/>
        {/* <FloatingInput placeholder="Дата рождения"/> */}
        <Controller control={control} name="bd" render={( {field:{onChange, ref}}) =>(
          <DatePicker 
          ref={ref}
          locale={ru_RU}
          className="datepicker form__input" 
          placeholder="Дата рождения"
          format={"DD MMM, YYYY"} 
         
          onChange={e => {
      
            const dateObj = e?._d;
            const month = dateObj.getUTCMonth() + 1; 
            const day = dateObj.getUTCDate();
            const year = dateObj.getUTCFullYear();
            const newdate =  day + "/" + month + "/" +  year;
            onChange(newdate)
            console.log(newdate)
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