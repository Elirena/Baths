import React, { Component } from 'react';
import footerLogo from './logo.png';
import ic1 from './i1.png';
import ic2 from './i2.png';
import ic3 from './i3.png';

import './Footer.css';

/**
 * Блок футера
 */

/*** модуль ссылки*/
class FooterLinks extends Component {

    render() {
        const {
            links,
        } = this.props;
        return (
            <div className="footer-menu col-3">
                <ul>
                {
                    links.map((links, index) => <li key={'footer'+index}><a href="">{links.name}</a></li>)
                }
                </ul>
            </div>
        )
    }
}

/*** весь футер*/
class Footer extends Component {

    render() {
        const footerLinks = {
            mainLinks: [
                {name:'Нестандартные решения'},
                {name:'Типовые модели'},
                {name:'Готовый дизайн'},
                {name:'Контакты'}],

            aboutLinks: [
                {name:'О нас'},
                {name:'Доставка и оплата'},
                {name:'Гарантия и возврат'},
                {name:'Бренды'}
            ]
        };
        return (
            <footer>
                <div className="row footer-row">
                    <div className="contacts1 col-3">
                        <div className="footer-logo"><img src={footerLogo} alt="logo"/></div>
                        <div className="ic"><img src={ic3} height="15px" width="12px" alt="icon3"/>Телефон </div>
                        <span>(097) 162-52-10</span>
                        <div className="ic"><img src={ic1} height="10px" width="16px" alt="icon1"/>Email</div>
                        <span>info.aquacity@gmail.com</span>
                    </div>
                    <FooterLinks
                        links={footerLinks.mainLinks}
                    />
                    <FooterLinks
                        links={footerLinks.aboutLinks}
                    />
                    <div className="contacts2 col-3">
                        <div className="ic"><img src={ic2} height="12px" width="14px" alt="icon2"/>Адреса</div>
                        <p>Офис: СПб, Ленинский проспект 114,<br/> 8:00 - 18:00<br/>
                            Комплекс «Ланской»: Студенческая 10, <br/>модуль А39Б, 1этаж
                        </p>
                    </div>

                </div>
            </footer>
        );
    }
}

export default Footer;