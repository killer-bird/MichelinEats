import React from 'react';
import {ReactComponent as Scooter} from "../../assets/svg/scooter.svg"
import {ReactComponent as Packet} from "../../assets/svg/packet.svg"
import {ReactComponent as Door} from "../../assets/svg/door.svg"
import { ReactComponent as Favorites } from "../../assets/svg/favorites.svg";
import "./Delivery.scss"
import Map from '../../components/Map/Map';

const Delivery = () => {
    return <div className="delivery">
                
                <div className="container">
                    <div className="delivery__img"></div>
                    <div className="delivery__inner">
                        
                        <section>
                            <div className='delivery__header'>
                                <div className='delivery__info'>
                                    <h2 className="title">Доставка и оплата</h2>
                                    <p className="delivery__text">
                                        Michelin стали еще ближе к вам! Мы стараемся экономить время наших гостей, именно поэтому, теперь для того, чтобы пообедать любимыми блюдами, не обязательно ехать в рестораны компании, достаточно просто офомирмить корзину на нашем сайте или в приложении Synergy Eats.
                                    </p>
                                    <p className="delivery__text">
                                        На старте нашего проекта, с целью соблюдения качества продукта и его транспортировки, мы определили наиболее оптимальную зону доставки и в дальнейшем мы планируем доставлять блюда, где бы вы ни были.
                                    </p>
                                </div>
                        
                            </div>
                            <div className="delivery__benefits">
                                <div className="delivery__benefits-item">
                                    <Scooter />
                                    <h3 className="delivery__benefit-item__caption">
                                        Экономия времени
                                    </h3>
                                    <p className="delivery__benefit-item__text">
                                        Для того, чтобы ваш заказ был доставлен максимально быстро с момента оформления, для наших менеджеров доставки, в качестве транспорта мы предпочли электроскутеры. Это безопасно и экологично как для человека, так и для продукта.
                                    </p>
                                </div>
                                <div className="delivery__benefits-item">
                                    <Packet />
                                    <h3 className="delivery__benefit-item__caption">Эко-упаковка</h3>
                                    <p className="delivery__benefit-item__text">
                                        Мы ответственно подошли к выбору упаковки для нашего сервиса, выбрав наиболее экологичные в современном мире материалы для ее изготовления, среди которых: бамбуковое сырье, крафт и биоразлагаемый пластик. Вся наша упаковка герметична, сохраняет температуру и подлежит транспортировке.
                                    </p>
                                </div>
                                <div className="delivery__benefits-item">
                                    <Door />
                                    <h3 className="delivery__benefit-item__caption">
                                        Бесконтактная доставка
                                    </h3>
                                    <div className="delivery__benefit-item__text">
                                        В комментариях к оформлению заказа, вы можете запросить бесконтактную доставку, предварительно оплатив заказ через приложение Synergy Eats или на сайте. В таком случае, наш менеджер доставки оставит заказ в указанном безопасном месте и вовремя оповестит вас об этом.
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className="delivery__zone">
                                <h2 className="title">Зона доставки</h2>
                                <div className='delivery__zone__text'>
                                    <p>
                                        Заказ вы можете предварительно оплатить на сайте или в приложении Synergy Eats, а также, наличным и безналичным расчётом по приезду вашего заказа.
                                    </p>
                                    <p>
                                        В настоящее время, мы готовы осуществлять доставку в зоне, выделенной цветом. В будущем, мы планируем расширять зону покрытия нашего сервиса и обязательно станем доступными для всех жителей нашего города.
                                    </p>
                                </div>
                                <div className="delivery__color-zones">
                                    <div className="delivery__color-zones__item">
                                        <div className="delivery__color-zones__caption --green">Зеленая зона</div>
                                        <dl className="delivery__color-zones__list">
                                            <div className="delivery__color-zones__list__item">
                                                <dt className="delivery__color-zones__list__item__title">Минимальный заказ</dt>
                                                <dd className="delivery__color-zones__list__item__value">250 ₴</dd>
                                            </div>
                                            <div className="delivery__color-zones__list__item">
                                                <dt className="delivery__color-zones__list__item__title">Время доставки</dt>
                                                <dd className="delivery__color-zones__list__item__value">от 45 минут</dd>
                                            </div>
                                            <div className="delivery__color-zones__list__item">
                                                <dt className="delivery__color-zones__list__item__title">Бесплатная доставка</dt>
                                                <dd className="delivery__color-zones__list__item__value">от 250 ₴</dd>
                                            </div>
                                            
                                            <div className="delivery__color-zones__list__item">
                                                <dt className="delivery__color-zones__list__item__title">Стоимость доставки</dt>
                                                <dd className="delivery__color-zones__list__item__value">0 ₴</dd>
                                            </div>
                                        </dl>
                                    </div>
                                    <div className="delivery__color-zones__item">
                                        <div className="delivery__color-zones__caption --blue">Синяя зона</div>
                                        <dl className="delivery__color-zones__list">
                                            <div className="delivery__color-zones__list__item">
                                                <dt className="delivery__color-zones__list__item__title">Минимальный заказ</dt>
                                                <dd className="delivery__color-zones__list__item__value">250 ₴</dd>
                                            </div>
                                            <div className="delivery__color-zones__list__item">
                                                <dt className="delivery__color-zones__list__item__title">Время доставки</dt>
                                                <dd className="delivery__color-zones__list__item__value">от 60 минут</dd>
                                            </div>
                                            <div className="delivery__color-zones__list__item">
                                                <dt className="delivery__color-zones__list__item__title">Бесплатная доставка</dt>
                                                <dd className="delivery__color-zones__list__item__value">от 250 ₴</dd>
                                            </div>
                                            
                                            <div className="delivery__color-zones__list__item">
                                                <dt className="delivery__color-zones__list__item__title">Стоимость доставки</dt>
                                                <dd className="delivery__color-zones__list__item__value">0 ₴</dd>
                                            </div>
                                        </dl>
                                    </div>
                                    <div className="delivery__color-zones__item">
                                        <div className="delivery__color-zones__caption --orange">Оранжевая зона</div>
                                        <dl className="delivery__color-zones__list">
                                            <div className="delivery__color-zones__list__item">
                                                <dt className="delivery__color-zones__list__item__title">Минимальный заказ</dt>
                                                <dd className="delivery__color-zones__list__item__value">250 ₴</dd>
                                            </div>
                                            <div className="delivery__color-zones__list__item">
                                                <dt className="delivery__color-zones__list__item__title">Время доставки</dt>
                                                <dd className="delivery__color-zones__list__item__value">от 60 минут</dd>
                                            </div>
                                            <div className="delivery__color-zones__list__item">
                                                <dt className="delivery__color-zones__list__item__title">Бесплатная доставка</dt>
                                                <dd className="delivery__color-zones__list__item__value">от 700 ₴</dd>
                                            </div>
                                                                                        
                                            <div className="delivery__color-zones__list__item">
                                                <dt className="delivery__color-zones__list__item__title">Стоимость доставки</dt>
                                                <dd className="delivery__color-zones__list__item__value">50 ₴</dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <Map/>
            </div>
};

export default Delivery;
