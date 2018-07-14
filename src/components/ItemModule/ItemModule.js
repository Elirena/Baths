import React, { Component } from 'react';

/**
 * компонент единицы модуля товара (одна ванна)
 */

class ItemModule extends Component {
    constructor(props) {
        super(props);

        this.getItemPic = this.getItemPic.bind(this);
    }

    getItemPic(pic){
        return require("./img/" + pic + ".jpg");
    }

    render() {
        const {
            name,
            brand,
            country,
            make,
            shape,
            material,
            width,
            height,
            price,
            pic
        } = this.props;

        return (
            <div className="item-model btn-5 animated zoomIn">
                <div className="item-pic">
                    <img src={this.getItemPic(pic)} height="130px" width="200px" alt="bath"/>
                    <div className="item-title">{name}</div>
                </div>
                <div className="hide">{make} {shape} {width} {height}</div>
                <div className="item-info"> / {brand} /{country} / {material}</div>
                <div className="item-price"><span>Цена: </span>{price}</div>
            </div>
        )
    }
}

export default ItemModule;