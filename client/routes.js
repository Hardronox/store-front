/* eslint-disable import/no-named-as-default */
import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPageContainer from './containers/MainPageContainer';
import ProductInfoContainer from './containers/ProductInfoContainer';
import HeaderContainer from './containers/HeaderContainer';
import FooterComponent from './components/FooterComponent';
import AdminContainer from './containers/AdminContainer';

class App extends Component {

  render() {
    return (
      <Fragment>
        <Route path="/" render={(route) => {
        return (route.location.pathname.indexOf('/admin') !== -1)  ? null : <HeaderContainer/>;
        }} />
        <Switch>
          <Route exact path="/" component={MainPageContainer} />
          <Route exact path="/product/:id" component={ProductInfoContainer} />
          <Route path="/admin" component={AdminContainer} />
        </Switch>
        <Route path="/" render={(route) =>{
          return (route.location.pathname.indexOf('/admin') !== -1) ? null : <FooterComponent/>;
        }} />
      </Fragment>
    );
  }
}


export default App;