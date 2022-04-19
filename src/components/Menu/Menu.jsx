import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReactComponent as MenuIcon } from "../../assets/svg/menu.svg";
import { ReactComponent as Close } from "../../assets/svg/closeMenu.svg";
import { ReactComponent as Logo } from "../../assets/svg/logo_menu.svg";
import { ReactComponent as PlayMarket } from "../../assets/svg/play_market.svg";
import { ReactComponent as AppStore } from "../../assets/svg/app_store.svg";
// import Сooperation from "../Сooperation/Сooperation.jsx"
import "./Menu.scss";

const Menu = (props) => {
    
    return(
        <>
            <button className="header__item menu-button" onClick={props.showMenu}>
                <div className="menu-button__icon"><MenuIcon /></div>
                <div className="menu-button__text"> Меню</div>
            </button>
            <div className={props.activeMenu ? "menu__wrapper --active": "menu__wrapper"} onClick={props.showMenu}>
                <aside className="menu" onClick={(e)=> e.stopPropagation()}>
                    <div className="menu__header">
                        <div className="menu__logo">
                            <Logo />
                        </div>
                        <button className="menu__close" onClick={props.showMenu}>
                            <Close />
                        </button>
                    </div>
                    <div className="menu__categories">
                        <nav>
                            {Object.keys(props.categories).map( el =>  <Link key={props.categories[el].id} to={`category/${props.categories[el].id}`}  className="menu__main__item menu__category" onClick={props.showMenu}>{props.categories[el].name}</Link>)}
                        </nav>
                    </div>
                    <div className="menu__main">
                        <nav>
                            <Link to={"/actions"}  className="menu__main__item" onClick={props.showMenu} >Новости и акции</Link>
                            <Link to={"/delivery"} className="menu__main__item" onClick={props.showMenu} >Доставка и оплата</Link>
                            {/* <Сooperation/> */}
                            <Link to={"/about"} className="menu__main__item" onClick={props.showMenu}>О нас</Link>
                        </nav>
                    </div>
                    <div className="menu__bottom">
                        <a href="tel:+380937777927" className="menu__phone">+380 (93) 777-79-27</a>
                        <span className="menu__worktime">с 10:00 до 22:00</span>
                        <span className="menu__worktime">без выходных</span>
                    </div>
                    <div className="menu__apps">
                        <PlayMarket />
                        <AppStore />
                    </div>
                </aside>
            </div>
        </>
    )
}

export default Menu;