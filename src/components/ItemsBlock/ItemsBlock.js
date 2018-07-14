import React, { Component } from 'react';
import axios from 'axios';
import ItemModule from "../ItemModule/ItemModule";

/**
 * Каталог товаров (все ванны)
 */

class ItemsBlock extends Component {
    constructor(props) {
        super(props);
        this.userFilter = this.userFilter.bind(this);
        this.sortByPrice = this.sortByPrice.bind(this);
        this.sortByRange = this.sortByRange.bind(this);
        this.search = this.search.bind(this);

        this.state = {
            baths: [],
        };
    }

    /** получаем текущий каталог с сервера*/
    componentDidMount() {
        axios.get(`http://localhost:3000/baths`)
            .then(res => {
                const baths = res.data;
                this.setState({ baths });
            });
    }

    /** фильтрация каталога*/
    userFilter(){
        const filters = this.props.filters;
        const baths = this.state.baths;
        let totalBaths = [];
        if (filters.length !== 0) {
            totalBaths = baths.filter(bath => Object.values(bath).filter(value => filters.indexOf(value)>=0).length);
        }else {
            totalBaths = baths;
        }
        return totalBaths;
    };

    /** фильтрация по цене*/
    sortByPrice(arr) {
        let priceBaths = [].concat(arr);
        const priceFilter = this.props.priceFilter;
        priceFilter === "upPrice" && priceBaths.sort((bathA, bathB) => bathA.price - bathB.price);
        priceFilter === "downPrice" && priceBaths.sort((bathA, bathB) => bathB.price - bathA.price);
        return priceBaths;
    };

    /** фильтрация по диапазону*/
    sortByRange(arr){
        const rangeFilter = this.props.rangeFilter;
        let rangedBaths = [];
        for (let i=0; i<arr.length; i++){
            if(arr[i].price >= rangeFilter.min && arr[i].price <= rangeFilter.max){
                rangedBaths.push(arr[i]);
            }
        }
        return rangedBaths;
    }

    /** фильтрация по строке поиска*/
    search(arr){
        const searchFilter = this.props.searchFilter;
        const searchedBaths = arr.filter((bath)=>{
            const allBathFields = Object.values(bath).filter((bathField)=>{
                return String(bathField).toLowerCase().includes(searchFilter.toLowerCase());
            });
            return allBathFields.length;
        });
        return searchedBaths;
    }


    render() {
        let baths = this.userFilter();
        baths = this.sortByPrice(baths);
        baths = this.sortByRange(baths);
        baths = this.search(baths);
        const bathsCount = baths.length;
        return (
            <div className="col-10 item-model-cont">
                {
                    Object.keys(baths).map((itemKey,key) => (
                        <ItemModule key={`item-${key}`}
                                    name = {baths[itemKey].name}
                                    brand = {baths[itemKey].brand}
                                    country= {baths[itemKey].country}
                                    make= {baths[itemKey].make}
                                    shape= {baths[itemKey].shape}
                                    material= {baths[itemKey].material}
                                    width= {baths[itemKey].width}
                                    height= {baths[itemKey].height}
                                    price= {baths[itemKey].price}
                                    pic= {baths[itemKey].pic}
                        />
                    ))
                }
               <div className="cort-info">найдено позиций: <span className="co-vo">{bathsCount}</span></div>
            </div>
        );
    }
}

export default ItemsBlock;


