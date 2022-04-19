import React from 'react'
import Sceleton from './Sceleton'


const SceletonFoodPage = () => {
  return (
    <div className='food-page__wrapper'>
        <div className='container'>
            <div className="sceleton-page">
                <div className="sceleton-page__header"></div>
                <div className="sceleton-page__content">
                    <div className="sceleton-page__img"></div>
                    <div className="sceleton-page__description">
                        <div className="sceleton-page__title"></div>
                        <div className="sceleton-page__composition"></div>
                        <div className="sceleton-page__btns"></div>
                    </div>
                    <div className="sceleton-page__cart"></div>
                </div>
            </div>
            
            <div className="sceleton-page__cards">
                <div className="sceleton-page__title"></div>
                {[...Array(5).keys()].map((id, index) => <Sceleton key={index} />)}
            </div>
        </div>
    </div>
  )
}

export default SceletonFoodPage