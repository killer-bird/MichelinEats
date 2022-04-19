import React from 'react'
import "./ProfileLoyalStory.scss"


const ProfileLoyalStory = () => {
  return (
    <div className="profile-loyal-story">
        <h3 className="profile-loyal-story__title">
            История транзакции баллов:
        </h3>
        <div className="profile-loyal-story__empty">
            Нет истории транзакции
        </div>
    </div>
  )
}

export default ProfileLoyalStory