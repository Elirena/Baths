import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SlideBlock.css';

/**
 * Слайдер в шапке на главной странице
 */

class SlideBlock extends Component {

    render() {
        return (
            <div className="row top-fon">
                <div className="text-info col-6">
                    <div className="info-title">Изысканная сантехника для жизни</div>
                    <span>Самые выгодные предложения, лучшие товары и бренды </span>
                    <div className="price-btn">
                        <Link  className="btn01 btn-02" to="/catalog" >Подобрать модель</Link>
                    </div>
                </div>
                <div className="col-6 top-slider">
                    <SimpleSlider />
                </div>
            </div>
        )
    }
}

export default SlideBlock;

class SimpleSlider extends React.Component {
    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            fade: true,
            arrows: false,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Slider {...settings}>
                <div className="s2"/>
                <div className="s1"/>
                <div className="s3"/>
                <div className="s4"/>
                <div className="s5"/>
            </Slider>
        );
    }
}