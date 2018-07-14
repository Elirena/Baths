import React, { Component } from 'react';
import './BoxesBlock.css';

/**
 * Компонент с боксами
 */

/*** модуль типового бокса*/
class BoxItem extends Component {

    render() {
        const {
            boxClass,
            description,
        } = this.props;

        return (
            <div className={`col-3 box ${boxClass}`}>
                <div className="bath-info">{description}</div>
                <div className="btn btn-2">каталог</div>
            </div>
        )
    }
}

/*** сборка всех боксов*/
class BoxesBlock extends Component {

    render() {
        return (
            <div className="row boxes">
                <BoxItem
                    boxClass="b1"
                    description="Типовой дизайн для поклонников классики"
                />
                <BoxItem
                    boxClass="b5"
                />
                <BoxItem
                    boxClass="b3"
                    description="Готовые модели от классических ванн до ванн с гидромассажем"
                />
                <BoxItem
                    boxClass="b4"
                />
                <BoxItem
                    boxClass="b2"
                />
                <BoxItem
                    boxClass="b6"
                    description="Нестандартные решения  коллекций для хорошего самочувствия и релаксации"
                />
                <BoxItem
                    boxClass="b7"
                />
                <BoxItem
                    boxClass="b8"
                    description="Коллекции создающие идеальное пространство для отдыха"
                />
            </div>
        )
    }
}

export default BoxesBlock;