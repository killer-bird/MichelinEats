import React, { useEffect } from 'react'
import CustomSelect from '../../UI/CustomSelect/CustomSelect'
import { useDispatch } from "react-redux"
import FloatingInput from '../../UI/FloatingInput/FloatingInput'
import Button from '../../UI/Button/Button'
import { useForm, Controller } from 'react-hook-form'
import { getProfile, renew } from '../../redux/authReducer'; 

const ProfileAdress = () => {


  const {register, handleSubmit, control, setValue} = useForm({mode: "onSubmit"})

  const dispatch = useDispatch()


  const onSubmit = (data) => {
    console.log(data)
  }


  return (
    <form action="" className="checkout__form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form__section">
        <Controller control={control} name="city" render={( {field:{onChange,ref}}) =>(
          <CustomSelect placeholder="Город" ref={ref} onChange={onChange} />
        )} />
        <Controller control={control} name="Street" render={( {field:{onChange,ref}})=>(
          <CustomSelect placeholder="Улица" ref={ref} onChange={onChange}/>
        )}/>
          <div className="form__adress">
          <Controller control={control} name="home" render={( {field:{onChange,ref}}) => (
            <FloatingInput placeholder="Дом" ref={ref} onChange={onChange}/>
          )}/>
          <Controller control={control} name="floor" render={( {field:{onChange,ref}}) => (
            <FloatingInput placeholder="Этаж" ref={ref} onChange={onChange}/>
          )}/>
          <Controller control={control} name="appartment" render={( {field:{onChange,ref}}) => (
          <FloatingInput placeholder="Квартира" ref={ref} onChange={onChange}/>
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

export default ProfileAdress