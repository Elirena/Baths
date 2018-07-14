import React, { Component } from 'react';
import SorterBlock from "../../components/SorterBlock/SorterBlock";
import ItemsBlock from "../../components/ItemsBlock/ItemsBlock";

/**
 * Блок каталога
 */

class CatalogBlock extends Component {
    constructor(props) {
        super(props);
        this.updateFilters = this.updateFilters.bind(this);
        this.handleSortSelect = this.handleSortSelect.bind(this);
        this.updateRange = this.updateRange.bind(this);
        this.updateSearch = this.updateSearch.bind(this);

        this.state = {
            searchWord: '',
            filters: [],
            priceFilter: "upPrice",
            range: {
                min: 8,
                max: 64
            }
        }
    }

    updateFilters(arr){
        this.setState({filters: arr});
    }
    updateRange(obj){
        this.setState({range: obj});
    }
    handleSortSelect(event){
        this.setState({priceFilter: event.target.value});
    }
    updateSearch(str){
        this.setState({searchWord: str});
    }

    render() {
        const {
            filters,
            priceFilter,
            searchWord,
            range
        } = this.state;
        return (
            <div>
                <div className="sort-inf">цена по
                    <select id="sort-price"
                            value={priceFilter}
                            onChange={this.handleSortSelect}>
                        <option value="downPrice">убыванию</option>
                        <option value="upPrice">возрастанию</option>
                    </select>
                </div>

                <div className="row models">
                    <SorterBlock setFilter={this.updateFilters}
                                 setRange={this.updateRange}
                                 setSearch = {this.updateSearch}
                                 rangeValue={range}
                    />
                    <ItemsBlock  filters={filters}
                                 priceFilter={priceFilter}
                                 rangeFilter={range}
                                 searchFilter={searchWord}
                    />
                </div>
            </div>
        );
    }
}

export default CatalogBlock;