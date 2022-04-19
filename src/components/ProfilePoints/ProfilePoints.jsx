import React from 'react'
import "./ProfilePoints.scss"
import ProfileReferral from '../ProfileReferral/ProfileReferral'
import {ReactComponent as GiftBoxIcon} from "../../assets/svg/giftbox.svg"
const ProfilePoints = () => {
  return (
    <div className="profile-points">
      <GiftBoxIcon />
      <div className="profile-points__content">
        <h1 className="profile-points__title">
          Делитесь радостью и получите 50 баллов
        </h1>
        <ProfileReferral />
      </div>

    </div>
  )
}

export default ProfilePoints