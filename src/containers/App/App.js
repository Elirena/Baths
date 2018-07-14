import React, { Component } from 'react';
import TopMenu from "../../components/TopMenu/TopMenu";
import Footer from "../../components/Footer/Footer";
import HomePage from "../HomePage/HomePage";
import AboutPage from "../AboutPage/AboutPage";
import CatalogPage from "../CatalogPage/CatalogPage";
import {
        BrowserRouter as Router,
        Route,
        Switch
} from 'react-router-dom';

import './App.css';
import './_reset.css';
import './_buttons.css';
import './_animate.css';

class App extends Component {

  render() {
    return (
      <div className="App">
          <Router basename={process.env.PUBLIC_URL}>
              <div>
                  <TopMenu/>
                  <Switch>
                      <Route exact path="/" component={HomePage}/>
                      <Route path="/about" component={AboutPage}/>
                      <Route path="/catalog" component={CatalogPage}/>
                  </Switch>
                  <Footer/>
              </div>
          </Router>
      </div>
    );
  }
}

export default App;
