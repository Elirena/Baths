import React, { Component } from 'react';
import SlideBlock from "../../components/SlideBlock/SlideBlock";
import BoxesBlock from "../../components/BoxesBlock/BoxesBlock";

import './HomePage.css';

class HomePage extends Component {

    render() {
        return (
            <main>
                <SlideBlock/>
                <BoxesBlock/>
            </main>
        );
    }
}

export default HomePage;

