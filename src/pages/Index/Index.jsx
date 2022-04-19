import React from 'react'
import { Outlet } from 'react-router-dom'
import {ReactComponent as LogoIcon} from "../../assets/svg/logo_menu.svg"
import {ReactComponent as AppStore} from "../../assets/svg/app_store.svg"
import {ReactComponent as PlayMarket} from "../../assets/svg/play_market.svg"
import Hero from '../../components/Hero/Hero'
import Food from '../../components/Food/Food'
import ActionSlider from '../../components/ActionSlider/ActionSlider'
import "./Index.scss"





const Index = () => {


    return (
        <div className='index'>  
            <Hero />
            
            <div className='index__content'>
                <section>
                    <ActionSlider />
                </section>
                <div className='container'>
                    
                    <section>
                        <div className="index__phone">
                            Мы всегда рады услышать обратную связь по заказам от Вас!
                            Номер горячей линии: +380 66 206 0935
                        </div>
                    </section>
                    <section>
                        <Food />
                    </section>
                    
                </div>
                <section>
                        <div className="index__app">
                            <div className="index__app__left"></div>
                            <div className="index__app__right">
                                <div className='index__app__logo'>
                                    <LogoIcon />
                                </div>
                                <div className="index__app__text">
                                    Скачивайте приложение и подключайтесь к сети
                                </div>
                                <div className="index__app__items">
                                    <AppStore />
                                    <PlayMarket />
                                </div>
                            </div>
                        </div>
                    </section>
            </div>
        </div>

    )
}

export default Index