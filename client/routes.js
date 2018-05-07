/* eslint-disable import/no-named-as-default */
import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPageContainer from './containers/MainPageContainer';
import ProductInfoContainer from './containers/ProductInfoContainer';
import OrderContainer from './containers/OrderContainer';
import OrderSuccessComponent from './components/OrderSuccessComponent';
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
          <Route exact path="/user/:id/profile" component={ProductInfoContainer} />
          <Route exact path="/user/:id/my-orders" component={ProductInfoContainer} />
          <Route exact path="/user/:id/notifications" component={ProductInfoContainer} />
          <Route exact path="/user/:id/settings" component={ProductInfoContainer} />
          <Route exact path="/order/:id" component={OrderContainer} />
          <Route exact path="/order-success" component={OrderSuccessComponent} />
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
