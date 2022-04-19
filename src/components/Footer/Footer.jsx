import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Phone } from "../../assets/svg/phone.svg";
import { ReactComponent as Logo } from "../../assets/svg/Logo.svg";
import { ReactComponent as Maestro } from "../../assets/svg/maestro.svg";
import { ReactComponent as Visa } from "../../assets/svg/visa.svg";
import { ReactComponent as Instagram } from "../../assets/svg/instagram.svg";
import { ReactComponent as Facebook } from "../../assets/svg/facebook.svg";
import { ReactComponent as PlayMarket } from "../../assets/svg/play_market.svg";
import { ReactComponent as AppStore } from "../../assets/svg/app_store.svg";
import "./Footer.scss"


const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__top'>
                <div className="container">
                    <div className="footer__inner">
                        <div className='footer__left'>
                            <div className="footer__info">
                                <Link className='footer__logo' to={"/"}>
                                    <Logo />
                                </Link>
                                <Link className="footer__info-item" to={"/privacy-policy"}>
                                    Политика конфиденциальности
                                </Link>
                                <Link className="footer__info-item" to={"/privacy-policy"}>
                                    Пользовательское соглашение
                                </Link>
                                <div className="footer__payments">
                                    <Maestro className='maestro' />
                                    <Visa className='visa'/>
                                </div>
                            </div>
                            <div className="footer__nav">
                                <span className="footer__caption">Навигация</span>
                                <ul className="footer__nav-list">
                                    <Link to={"/actions"}>Новости и акции</Link>
                                    <Link to={"/delivery"}>Доставка и оплата</Link>
                                    <Link to={"/"}>Сотрудничество</Link>
                                    <Link to={"/about"}>О нас</Link>
                                </ul>
                            </div>
                        </div>
                        <div className='footer__right'>
                            <div className="footer__contacts">
                                <a href="tel:+380937777927" className="footer__phone">
                                    <Phone />
                                    +380 (93) 777-79-27
                                </a>
                                <p className="footer__worktime">
                                    с 10:00 до 22:00
                                    <span>без выходных</span>
                                </p>
                                <div className="footer__socials">
                                    <a href='/' className="footer__socials-item">
                                        <Instagram />
                                    </a>
                                    <a href='/' className="footer__socials-item">
                                        <Facebook />
                                    </a>
                                </div>
                            </div>
                            <div className="footer__apps">
                                    <a href='/'><AppStore /></a>
                                    <a href='/'><PlayMarket /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom__wrapper">
                <div className="container">
                    <div className='footer__bottom'>
                        <div className="footer__bottom__left">© 2020, Synergy Eats. Все права защищены.</div>
                        <div className="span footer__bottom__right">Development by Maximus</div>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;
