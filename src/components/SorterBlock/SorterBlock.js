import React, { Component } from 'react';
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css";

/**
 * Компонент сортировки каталога
 */

/*** Модуль чекбокса сортировки */
class SorterCbox extends Component {

    render() {
        const {
            boxId,
            value,
            changeFn,
        } = this.props;

        return (
            <label>
                <input type="checkbox" id={boxId} value={value}
                       className="filter" hidden={true}
                       onChange={changeFn}
                />
                <span/><span>{value}</span>
            </label>
        )
    }
}

/*** Фильтры сортировки каталога*/
class SorterBlock extends Component {
    constructor(props) {
        super(props);

        this.filterArr = [];
        this.changeFilter = this.changeFilter.bind(this);
        this.clearFilter = this.clearFilter.bind(this);
        this.changeRange = this.changeRange.bind(this);
        this.searchFilter = this.searchFilter.bind(this);
    }

    /** набор фильтров*/
    changeFilter(event) {
        const checked = event.target.checked;
        const value = event.target.value;

        if (checked && (this.filterArr.indexOf(value)<0)){
            this.filterArr.push(value);
        } else if (!(checked)&&(this.filterArr.indexOf(value))>=0){
            this.filterArr = this.filterArr.filter(val => val !== value);
        }
        this.props.setFilter(this.filterArr);
    }

    /** сброс всех фильтров*/
    clearFilter(){
        this.filterArr = [];
        this.props.setRange({min: 8, max:64});
        this.props.setFilter(this.filterArr);
        this.props.setSearch('');
        this.search.value = '';
        let allBoxes = document.querySelectorAll("input.filter");
        for(let i=0; i<allBoxes.length; i++) {
           allBoxes[i].checked = false;
        }
    }
    /** диапазон цены*/
    changeRange (value){
        this.props.setRange(value);
    }
    /** поиск*/
    searchFilter(value){
        this.props.setSearch(value);
    }

    render() {
        const rangeValue = this.props.rangeValue;
        const range = `от ${rangeValue.min}.000  до ${rangeValue.max}.000`;
        return (
            <div className="col-2 model-nav"><p>Параметры поиска:</p>
                <div className="mod search"><p>Искать</p>
                    <label><input type="text" placeholder="искать" ref={input => this.search = input}
                                  onChange={event => this.searchFilter(event.target.value)}
                    /></label><br/>
                </div>
                <div className="mod" id="brand"><p>Бренд</p>
                    <SorterCbox
                        boxId="cersanit"
                        value="Cersanit"
                        changeFn={this.changeFilter}
                    /><br/>
                    <SorterCbox
                        boxId="koller_pool"
                        value="Koller Pool"
                        changeFn={this.changeFilter}
                    /><br/>
                    <SorterCbox
                        boxId="kolo"
                        value="KOLO"
                        changeFn={this.changeFilter}
                    /><br/>
                    <SorterCbox
                        boxId="ravak"
                        value="Ravak"
                        changeFn={this.changeFilter}
                    />
                </div>
                <div className="mod" id="country"><p>Производство</p>
                    <SorterCbox
                        boxId="avstria"
                        value="Австрия"
                        changeFn={this.changeFilter}
                    /><br/>
                    <SorterCbox
                        boxId="czechia"
                        value="Чехия"
                        changeFn={this.changeFilter}
                    /><br/>
                    <SorterCbox
                        boxId="poland"
                        value="Польша"
                        changeFn={this.changeFilter}
                    />
                </div>
                <div className="mod" id="make"><p>Установка</p>
                    <SorterCbox
                        boxId="freestanding"
                        value="Отдельностоящая"
                        changeFn={this.changeFilter}
                    /><br/>
                    <SorterCbox
                        boxId="wallmounted"
                        value="Пристенная"
                        changeFn={this.changeFilter}
                    /><br/>
                    <SorterCbox
                        boxId="builtin"
                        value="Встраиваемая"
                        changeFn={this.changeFilter}
                    />
                </div>
                <div className="mod" id="shape"><p>Форма</p>
                    <SorterCbox
                        boxId="asymmetric"
                        value="Ассиметричная"
                        changeFn={this.changeFilter}
                    /><br/>
                    <SorterCbox
                        boxId="oval"
                        value="Овальная"
                        changeFn={this.changeFilter}
                    /><br/>
                    <SorterCbox
                        boxId="square"
                        value="Прямоугольная"
                        changeFn={this.changeFilter}
                    /><br/>
                    <SorterCbox
                        boxId="corner"
                        value="Угловая"
                        changeFn={this.changeFilter}
                    />
                </div>
                <div className="mod" id="material"><p>Материал</p>
                    <SorterCbox
                        boxId="acryl"
                        value="Акрил"
                        changeFn={this.changeFilter}
                    /><br/>
                    <SorterCbox
                        boxId="castiron"
                        value="Чугун"
                        changeFn={this.changeFilter}
                    /><br/>
                    <SorterCbox
                        boxId="steel"
                        value="Сталь"
                        changeFn={this.changeFilter}
                    />
                </div>

                <div className="mod rang1">
                    <span>цена </span>
                    <InputRange step={1}
                                maxValue={64}
                                minValue={8}
                                value={rangeValue}
                                onChange={value => this.changeRange(value)} />
                    <input type="text" value={range} size="16" disabled={true}/>
                </div>

                <div className="res-btn" id="res-b" onClick={this.clearFilter}>сбросить</div>
            </div>
        );
    }
}

export default SorterBlock;