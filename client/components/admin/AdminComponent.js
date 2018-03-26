import React from 'react';
import {
  NavLink, Link,
  Switch, Route
} from 'react-router-dom';

import PropTypes from 'prop-types';

import ItemsListContainer from "../../containers/admin/ItemsListContainer";
import NewItemContainer from "../../containers/admin/NewItemContainer";
import DashboardContainer from "../../containers/admin/DashboardContainer";
import HeaderContainer from "../../containers/HeaderContainer";
import SidebarContainer from "../../containers/admin/SidebarContainer";
import StatisticsContainer from "../../containers/admin/StatisticsContainer";

class AdminComponent extends React.Component {

  constructor(props) {
    super(props);
  }


  componentWillMount() {

  }

  search() {
    console.log(this.refs.search.value);
  }

  renderAuthorization = () => {

    let content = [
      <div key="login">
        <Link to="">Login</Link>
      </div>
    ];

    if (localStorage.getItem('user')) {
      content = [
        <div key="user">
          <Link to="">Hello, user</Link>
        </div>,
        <div key="logout">
          <Link to="">Logout</Link>
        </div>
      ];

    }

    return (
      <div className="authorization">
        {content}
      </div>
    );
  };

  render () {
    const {match} = this.props;

    return (
      <div className="main-wrapper">
        <div className="app" id="app">
          <HeaderContainer />
          <SidebarContainer />
          <div className="sidebar-overlay" id="sidebar-overlay"/>
          <div className="sidebar-mobile-menu-handle" id="sidebar-mobile-menu-handle"/>
          <div className="mobile-menu-handle"/>

          <Switch>
            <Route path={`${match.url}/dashboard`} component={DashboardContainer} />
            <Route path={`${match.url}/create-item`} component={NewItemContainer} />
            <Route path={`${match.url}/items-list`} component={ItemsListContainer} />
            <Route path={`${match.url}/statistics`} component={StatisticsContainer} />
          </Switch>

          <footer className="footer">
            <div className="footer-block buttons">
            </div>
            <div className="footer-block author">
              Your Project
            </div>
          </footer>
        </div>
      </div>

    );
  }
}

AdminComponent.propTypes = {
  children: PropTypes.element,
  routing: PropTypes.object,
};

export default AdminComponent;