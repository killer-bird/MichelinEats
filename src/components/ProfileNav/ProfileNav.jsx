import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import ProfileNavItem from "../ProfileNavItem/ProfileNavItem"
import {ReactComponent as ProfileIcon} from "../../assets/svg/profile.svg"
import {ReactComponent as GeoIcon} from "../../assets/svg/delivery_zone.svg"
import {ReactComponent as CartIcon} from "../../assets/svg/cart.svg"
import {ReactComponent as LoyalIcon} from "../../assets/svg/profile-loyal.svg"
import {ReactComponent as BallIcon} from "../../assets/svg/profile-ball.svg"

import "./ProfileNav.scss"

const ProfileNav = () => {

    return (
        <div className='profile-nav__wrapper'>
            <Swiper className='profile-nav' slidesPerView={"auto"}        
               
            >
                <SwiperSlide>
                    <ProfileNavItem  link={"index"} name="Профиль">
                        <ProfileIcon />
                    </ProfileNavItem>
                </SwiperSlide>
                <SwiperSlide>
                    <ProfileNavItem link="adress" name="Адрес">
                        <GeoIcon />
                    </ProfileNavItem>
                </SwiperSlide>
                <SwiperSlide>
                    <ProfileNavItem link="orders" name="Заказы">
                        <CartIcon />
                    </ProfileNavItem>
                </SwiperSlide>
                <SwiperSlide>
                    <ProfileNavItem link="loyal" name="Программа лояльности">
                        <LoyalIcon />
                    </ProfileNavItem>
                </SwiperSlide>
                <SwiperSlide>
                    <ProfileNavItem link="balls" name="Зарабатывайте баллы">
                        <BallIcon />
                    </ProfileNavItem>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default ProfileNav