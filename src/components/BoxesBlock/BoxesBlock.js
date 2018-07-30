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
            hidClass,
        } = this.props;

        return (
            <div className={`col-3 box ${boxClass}`}>
                <div className="bath-info">{description}</div>
                <div className={`btn btn-2 ${hidClass}`}>каталог</div>
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
                    hidClass = "hidden"
                />
                <BoxItem
                    boxClass="b3"
                    description="Готовые модели от классических ванн до ванн с гидромассажем"
                />
                <BoxItem
                    boxClass="b4"
                    hidClass = "hidden"
                />
                <BoxItem
                    boxClass="b2"
                    hidClass = "hidden"
                />
                <BoxItem
                    boxClass="b6"
                    description="Нестандартные решения  коллекций для хорошего самочувствия и релаксации"

                />
                <BoxItem
                    boxClass="b7"
                    hidClass = "hidden"
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