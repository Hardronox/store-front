import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Switch, Route, NavLink } from 'react-router-dom';

import PersonnelContainer from '../containers/PersonnelContainer';
import PlatformsContainer from '../containers/PlatformsContainer';
import PayloadsContainer from '../containers/PayloadsContainer';
import MunitionsContainer from '../containers/MunitionsContainer';
import LocationContainer from '../containers/LocationContainer';
import OrgBuilderContainer from '../containers/OrgBuilderContainer';
import ComNetContainer from '../containers/ComNetContainer';
import SysHealthContainer from '../containers/SysHealthContainer';
import SysConfigContainer from '../containers/SysConfigContainer';

class AdminComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  renderMenuItems() {

    const {translations: {translations}, match} = this.props;

    const menuItems = [
      {title: 'personnel', url: `${match.url}/personnel`},
      {title: 'platforms', url: `${match.url}/platforms`},
      {title: 'payloads', url: `${match.url}/payloads`},
      {title: 'munitions', url: `${match.url}/munitions`},
      {title: 'location', url: `${match.url}/location`},
      {title: 'org builder', url: `${match.url}/org-builder`},
      {title: 'com/net', url: `${match.url}/com-net`},
      {title: 'sys. health', url: `${match.url}/sys-health`},
      {title: 'sys. config', url: `${match.url}/sys-config`},
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
              ):
              null}
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
          <Route path={`${match.url}/personnel`} component={PersonnelContainer} />
          <Route path={`${match.url}/platforms`} component={PlatformsContainer} />
          <Route path={`${match.url}/payloads`} component={PayloadsContainer} />
          <Route path={`${match.url}/munitions`} component={MunitionsContainer} />
          <Route path={`${match.url}/location`} component={LocationContainer} />
          <Route path={`${match.url}/org-builder`} component={OrgBuilderContainer} />
          <Route path={`${match.url}/com-net`} component={ComNetContainer} />
          <Route path={`${match.url}/sys-health`} component={SysHealthContainer} />
          <Route path={`${match.url}/sys-config`} component={SysConfigContainer} />
        </Switch>
      </div>
    );
  }
}

AdminComponent.propTypes = {
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

export default connect(mapStateToProps)(AdminComponent);