import React, { Component } from 'react';
import CatalogBlock from "../../components/CatalogBlock/CatalogBlock";

/**
 * Страница каталога 
 */

class CatalogPage extends Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-12 title1">Наши Ванны<p>подобрать модель</p></div>
                </div>
                <CatalogBlock/>
            </div>
        );
    }
}

export default CatalogPage;