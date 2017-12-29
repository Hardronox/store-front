import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Switch, Route, NavLink } from 'react-router-dom';

import IntelRequestContainer from '../containers/IntelRequestContainer';
import OperatingPictureContainer from '../containers/OperatingPictureContainer';
import CurrentIntelContainer from '../containers/CurrentIntelContainer';
import NatlImageryContainer from '../containers/NatlImageryContainer';
import ResourcesContainer from '../containers/ResourcesContainer';
import TaskingOrderContainer from '../containers/TaskingOrderContainer';

class IntelRequestComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  renderMenuItems() {

    const {translations: {translations}, match} = this.props;

    const menuItems = [
      {title: 'intel request', url: `${match.url}/intel-request`},
      {title: 'operating picture', url: `${match.url}/operating-picture`},
      {title: 'current intel', url: `${match.url}/current-intel`},
      {title: 'nat\'l imagery', url: `${match.url}/natl-imagery`},
      {title: 'resources', url: `${match.url}/resources`},
      {title: 'tasking order', url: `${match.url}/tasking-order`},
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
          <Route path={`${match.url}/intel-request`} component={IntelRequestContainer} />
          <Route path={`${match.url}/operating-picture`} component={OperatingPictureContainer} />
          <Route path={`${match.url}/current-intel`} component={CurrentIntelContainer} />
          <Route path={`${match.url}/natl-imagery`} component={NatlImageryContainer} />
          <Route path={`${match.url}/resources`} component={ResourcesContainer} />
          <Route path={`${match.url}/tasking-order`} component={TaskingOrderContainer} />
        </Switch>
      </div>
    );
  }
}

IntelRequestComponent.propTypes = {
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

export default connect(mapStateToProps)(IntelRequestComponent);