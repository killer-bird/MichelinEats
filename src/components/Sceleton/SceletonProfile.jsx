import React from 'react'

const SceletonProfile = () => {
  return (
    <div className="container">
        <div className="sceleton-profile">
            <div className="sceleton-profile__top"></div>
            <div className="sceleton-profile__main">
                <div className="sceleton__input"></div>
                <div className="sceleton__input"></div>
                <div className="sceleton__input"></div>
                <div className="sceleton__input"></div>
                <div className="sceleton__input"></div>
                <div className="sceleton__input"></div>
                <div className="sceleton__input"></div>
            </div>
        </div>
    </div>
  )
}

export default SceletonProfile