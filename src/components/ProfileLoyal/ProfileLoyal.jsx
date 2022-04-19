import React from 'react'
import {ReactComponent as LoyalIcon} from "../../assets/svg/profile-loyal.svg"
import "./ProfileLoyal.scss"
import ProfileLoyalStory from '../ProfileLoyalStory/ProfileLoyalStory'


const ProfileLoyal = () => {
  return (
    <>
      <div className="profile-loyal">
        <div className="profile-loyal__left">
          <LoyalIcon />
          0
        </div>
        <div className="profile-loyal__right">
          <div className="profile-loyal__right__title">Ваш процент начисления от баллов заказа</div>
          <div className="profile-loyal__right__value">5%</div>
        </div>
      </div>
      <ProfileLoyalStory />
    </>
  )
}

export default ProfileLoyal