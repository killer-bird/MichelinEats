import React from "react";
import MenuContainer from "../Menu/MenuContainer";
import CartSidebar from "../CartSidebar/CartSidebar";
import AuthButton from "../Auth/AuthButton";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/svg/Logo.svg";
import { ReactComponent as LogoMobile } from "../../assets/svg/logo_mobile.svg";
import { ReactComponent as DeliveryZone } from "../../assets/svg/delivery_zone.svg";
import { ReactComponent as Phone } from "../../assets/svg/phone.svg";
import { ReactComponent as Favorites } from "../../assets/svg/favorites.svg";
import "./Header.scss";


export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header__left">
          <Link to={"/"} className="header__item logo">
            <div className="header__logo">
              <Logo />
            </div>
            <div className="header__logo-mobile">
              <LogoMobile />
            </div>
          </Link>
            <MenuContainer />
          
          <div className="header__item langs">
            <ul className="header__langs">
              <li className="li header__langs__item">
                <a href="" className="header__langs__link">UA</a>
              </li>
              <li className="li header__langs__item">
                <a href="" className="header__langs__link">RU</a>
              </li>
              <li className="li header__langs__item">
                <a href="" className="header__langs__link">EN</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="header__right">
          <Link  to={"/delivery"} className="header__item header__delivery">
              <DeliveryZone />
              <span>Зоны доставки</span>
          </Link>
          <div className="header__item header__phone" >
            <a href="tel:380937777927" className="header__phone">
              <Phone />
              <span>+380 (93) 777-79-27</span>
            </a>
          </div>
        <AuthButton />
          <Link to={"/favorites"} className="header__item">
            <div >
              <Favorites />
            </div>
          </Link>
          <CartSidebar />
        </div>
      </header>
    </>
  );
}
