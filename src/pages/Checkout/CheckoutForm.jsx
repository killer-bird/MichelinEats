import React, { useState } from 'react'
import FloatingInput from "../../UI/FloatingInput/FloatingInput"
import InputMask from 'react-input-mask';
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import CustomSelect from '../../UI/CustomSelect/CustomSelect';
import Button from "../../UI/Button/Button"
import Radio from "../../UI/Radio/Radio"
import RadioIcon from '../../UI/RadioIcon/RadioIcon';
import {ReactComponent as PaymentOnlineIcon} from "../../assets/svg/payment_online.svg"
import {ReactComponent as PaymentCashIcon} from "../../assets/svg/payment_cash.svg"
import {ReactComponent as PaymentTerminalIcon} from "../../assets/svg/payment_terminal.svg"
import { Link } from 'react-router-dom';
import { DatePicker } from 'antd';
import 'moment/locale/ru';
import ru_RU from "antd/lib/locale/ru_RU";
const CheckoutForm = (props) => {

    const { 
        control,  handleSubmit, 
        formState: {errors},
    } = useForm({
        mode: "onSubmit"
    })

    const [showDeliveryTime, setShowDeliveryTime] = useState(false)

   

    return (

    <form className="checkout__form" onSubmit={handleSubmit(props.submit)}>

        <div className='form__section'>

            <h3 className="checkout__title">
                Личные данные
            </h3>

            <Controller control={control} name="name" render={( {field:{onChange, name, ref} })=>(
                <FloatingInput ref={ref} placeholder={"Имя"} onChange={onChange}/>
            )}/>
            
            <Controller control={control} name="phone"  render={({
                    field: { onChange, ref }})=>(
                    <InputMask className="form__input --border-none" type="tel" inputRef={ref}  onChange={onChange}  mask="+7\(999) 999 99 99"  placeholder="Номер телефона"/>
                )}
            />
            {/* {errors?.phone && <p className="error">{errors?.phone?.message || "Error"}</p>}   */}
        </div>

        <div className='form__section' >

            <h3 className="checkout__title">
                Доставка
            </h3>

            <Controller control={control} name="city" render={( {field:{onChange, name, ref} })=>(
                <CustomSelect ref={ref} onChange={onChange} placeholder="Город"/>
            )}/>

            <Controller control={control} name="street" render={( {field:{onChange, name, ref} })=>(
            <CustomSelect ref={ref} onChange={onChange} placeholder="Улица"/>
            )}/>


            <div className="form__adress">
                <Controller control={control} name="home" render={( {field:{onChange, name, ref} })=>(
                    <FloatingInput ref={ref} placeholder={"Дом"} onChange={onChange}/>
                )}/>
                
                <Controller control={control} name="floor" render={( {field:{onChange, name, ref} })=>(
                    <FloatingInput ref={ref} placeholder={"Этаж"} onChange={onChange}/>
                )}/>

                <Controller control={control} name="apartment" render={( {field:{onChange, name, ref} })=>(
                    <FloatingInput ref={ref} placeholder={"Квартира"} onChange={onChange}/>
                )}/>
            </div>
        </div>

        <div className="form__section">
            <h3 className="checkout__title">
                Время доставки
            </h3>
            <div className="form__radios">
                <Controller control={control} name="deliveryTime" render={( {field:{onChange, name, ref} })=>(
                     <Radio name="deliveryTime" text="Как можно скорее" value="default" ref={ref} onChange={e => {
                            if(e.target.checked) {
                                setShowDeliveryTime(false)
                            }
                            onChange()
                         }
                    }/>
                )}/>
                <Controller control={control} name="deliveryTime" render={( {field:{onChange, name, ref} })=>(
                     <Radio name="deliveryTime" text="Дата и время" value="custom" ref={ref} onChange={e => {
                        if(e.target.checked) {
                            setShowDeliveryTime(true)
                        } 
                        onChange()
                     }}/>
                )}/>         
            </div>
            {
            showDeliveryTime ? 
            <Controller control={control} name="bd" render={( {field:{onChange, ref}}) =>(
                <DatePicker 
                ref={ref}
                locale={ru_RU}
                showTime={{ format: 'HH:mm' }}
                className="datepicker form__input" 
                placeholder="Желаемое время доставки"
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
                )}/> : null
            }
            
            {/* <FloatingInput placeholder="Дата и время"/> */}
            
        </div>

        <div className="form__section">

            <h3 className="checkout__form__title">
                Тип оплаты
            </h3>

            <div className="form__radio-icons">
                <Controller control={control} name="payment" render={( { field:{onChange, name, ref} })=>(
                    <RadioIcon name="payment" text="Оплатить сейчас" value="payment-now" onChange={onChange}>
                        <PaymentOnlineIcon />
                    </RadioIcon>    
                )}/>
                <Controller control={control} name="payment" render={( { field:{onChange, name, ref} })=>(
                    <RadioIcon name="payment" text="Оплатить наличными при получении" value="pay-cash-upon-receipt" onChange={onChange}>
                       <PaymentCashIcon />
                    </RadioIcon>    
                )}/>
                <Controller control={control} name="payment" render={( { field:{onChange, name, ref} })=>(
                    <RadioIcon name="payment" text="Оплатить картой при получении" value="pay-cart-upon-receipt" onChange={onChange}>
                        <PaymentTerminalIcon />
                    </RadioIcon>
                )}/> 
            </div>

            <div className="form__input-counter">
                <span className='form__input-counter__text'>Количество персон</span>
                <div className="form__input-counter__field">
                <Controller control={control} name="persons-count" render={( { field:{onChange, name, ref} })=>(
                    <input type="number" className="form__input --border-none" onChange={onChange} />
                )}/>
                </div>
            </div>

            <Controller control={control} name="comment" render={( { field:{onChange, name, ref} })=>(
                <textarea ref={ref} onChange={onChange} className="form__textarea form__input --border-none"  placeholder="Комментарий к заказу"></textarea>
            )}/>

            <div className="radio__wrapper">
                <Controller control={control} name="order-warning" render={( { field:{onChange, name, ref} })=>(
                    <Radio  text="Мне можно не звонить для подтверждения заказа" onChange={onChange} ref={ref} value="now-warning" />
                )}/>   
            </div>

            <div className="form__input-counter">
                <span className='form__input-counter__text'>Ввести промокод</span>
                <div className="form__input-counter__field">
                <Controller control={control} name="promo" render={( { field:{onChange, name, ref} })=>(
                    <input type="number" className="form__input --border-none" ref={ref} onChange={onChange}/>
                )}/>
                </div>
            </div>

        </div>

        <div className="checkout__btn__wrapper">
            <Button type="sumbit">
                <div className='checkout__btn'>
                    Заказ подтверждаю
                </div>
            </Button>
        </div>
        <p className="privacy-convince">
            Нажимая на кнопку «Заказ подтверждаю», вы соглашаетесь с 
            <Link to={"/privacy-policy"}>Политика конфиденциальности</Link> и <Link to={"/terms-of-use"}>Пользовательское соглашение</Link>
        </p>
    </form>
    )
}

export default CheckoutForm