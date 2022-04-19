import React from 'react';
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart"
import "./Favorites.scss"
import Button from '../../UI/Button/Button';


const Favorites = () => {
    const isEmpty = true

    return (
        <div className='favorites'>
            <div className="container">
                <div className="favorites__inner">
                   <div className="favorites__content">
                        <h1 className="title favorites__title">Избранное</h1>
                        {isEmpty ? <div className="favorites__empty">
                            <p className="favorites__empty__text">
                                Добавляйте товары в список избранного, чтобы любимые блюда были всегда под рукой
                            </p>
                            <Link to={"/"}>
                                <Button>
                                    <div className="favorites-btn-content">Перейти к покупкам</div>
                                </Button>
                            </Link>
                        </div> : <div className="catalog"></div>}
                   </div>
                   <Cart />
                </div>
            </div>
        </div>
        )
};

export default Favorites;