import React, { Component } from 'react';
import logo from './header_logo.png';
import { Link } from 'react-router-dom';
import ic1 from './i1.png';
import ic3 from './i3.png';

import './TopMenu.css';

/**
 * Основная навигация
 */

class TopMenu extends Component {

    render() {
        const activeLink = window.location.pathname;
        return (
            <div className="row top-line">
                <div className="logo-top col-1">
                    <img src={logo} alt="aqua-city"/>
                </div>
                <div className="main-menu col-4">
                    <Link className={`header-link${activeLink === '/' ? ' header-active' : ''}`}  to="/">главная</Link>
                    <Link className={`header-link${activeLink === '/catalog' ? ' header-active' : ''}`} to="/catalog" >каталог</Link>
                    <Link className={`header-link${activeLink === '/about' ? ' header-active' : ''}`} to="/about">о нас</Link>
                </div>

                <div className="top-info col-5">
                    <img src={ic3} height="14px" width="12px" alt="icon3"/><span>(097) 162-52-10</span>
                    <img src={ic1} height="10px" width="16px" alt="icon1"/><span> info.aquacity@gmail.com</span>
                </div>
            </div>
        );
    }
}

export default TopMenu;