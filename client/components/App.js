/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import MainPageContainer from '../containers/MainPageContainer';
import ProductInfoContainer from '../containers/ProductInfoContainer';
import HeaderContainer from '../containers/HeaderContainer';
import FooterComponent from '../components/FooterComponent';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

  render() {
    return (
      <div>
        <Route path="/" render={(route) => {
          return route.location.pathname==='/main' ? null : <HeaderContainer/>;
        }} />
        <Switch>
          <Route exact path="/" component={MainPageContainer} />
          <Route exact path="/product/:id" component={ProductInfoContainer} />
        </Switch>
        <Route path="/" render={(route) =>{
          return route.location.pathname==='/main' ? null : <FooterComponent/>;
        }} />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
