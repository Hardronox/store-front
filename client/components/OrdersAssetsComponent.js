import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Switch, Route, NavLink } from 'react-router-dom';

import AssetsContainer from '../containers/AssetsContainer';
import OrdersContainer from '../containers/OrdersContainer';
import AllocationContainer from '../containers/AllocationContainer';
import ForecastContainer from '../containers/ForecastContainer';

class OrdersAssetsComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  renderMenuItems() {

    const {translations: {translations}, match} = this.props;

    const menuItems = [
      {title: 'orders', url: `${match.url}/orders`},
      {title: 'assets', url: `${match.url}/assets`},
      {title: 'allocation', url: `${match.url}/allocation`},
      {title: 'forecast', url: `${match.url}/forecast`},
    ];

    return menuItems.map((item, i) => {
      let image = '/images/button-line-highlight.png';
      let matchForLink = (this.props.routing.location.pathname.indexOf(item.url) !== -1);

      return (
        <div className="submenu-button" key={i}>
          <NavLink to={item.url} className="submenu" activeClassName="active-submenu-item">
            {item.title}
            {matchForLink ?
              (
                <div className="under-button-line">
                  <img src={image} className="under-button-image pull-right" alt=""/>
                </div>
              )
              : null}
          </NavLink>
        </div>
      );
    });
  }

  render() {
    const {translations: {translations}, match} = this.props;

    return (
      <div>
        <div className="container-fluid sub-buttons">
          <div className="buttons-list">
            {this.renderMenuItems()}
          </div>
        </div>
        <Switch>
          <Route path={`${match.url}/orders`} component={OrdersContainer} />
          <Route path={`${match.url}/assets`} component={AssetsContainer} />
          <Route path={`${match.url}/allocation`} component={AllocationContainer} />
          <Route path={`${match.url}/forecast`} component={ForecastContainer} />
        </Switch>
      </div>
    );
  }
}

OrdersAssetsComponent.propTypes = {
  children: PropTypes.element,
  routing: PropTypes.object,
  translations: PropTypes.object
};

const mapStateToProps = state => {
  return {
    translations: state.translationsReducer,
    routing: state.routing,
  };
};

export default connect(mapStateToProps)(OrdersAssetsComponent);