/* eslint-disable import/no-named-as-default */
import React, {Component, Fragment} from 'react';
import {Switch, Route} from 'react-router-dom';
import MainPageContainer from './containers/MainPageContainer';
import ProductInfoContainer from './containers/ProductInfoContainer';
import OrderContainer from './containers/OrderContainer';
import MyOrdersContainer from './containers/MyOrdersContainer';
import NotificationsContainer from './containers/NotificationsContainer';
import ProfileContainer from './containers/ProfileContainer';
import SettingsContainer from './containers/SettingsContainer';
import CartContainer from './containers/CartContainer';
import OrderSuccessComponent from './components/OrderSuccessComponent';
import HeaderContainer from './containers/HeaderContainer';
import FooterComponent from './components/FooterComponent';
import AdminContainer from './containers/AdminContainer';

class App extends Component {
  render () {
    return (
      <Fragment>
        <main className="main-content">
          <HeaderContainer/>
          <Switch>
            <Route exact path="/" component={MainPageContainer} />
            <Route exact path="/product/:id" component={ProductInfoContainer} />
            <Route path="/user/:id/profile" component={ProfileContainer} />
            <Route exact path="/user/:id/my-orders" component={MyOrdersContainer} />
            <Route exact path="/user/:id/notifications" component={NotificationsContainer} />
            <Route exact path="/user/:id/settings" component={SettingsContainer} />
            <Route exact path="/order/:id" component={OrderContainer} />
            <Route exact path="/order-success" component={OrderSuccessComponent} />
            <Route exact path="/cart" component={CartContainer} />
            <Route path="/admin" component={AdminContainer} />
          </Switch>
        </main>
        <Route path="/" render={(route) => {
          return (route.location.pathname.indexOf('/admin') !== -1) ? null : <FooterComponent/>;
        }} />
      </Fragment>
    );
  }
}

export default App;
