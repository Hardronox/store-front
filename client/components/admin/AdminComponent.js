import React from 'react';
import {
  NavLink, Link,
  Switch, Route
} from 'react-router-dom';

import PropTypes from 'prop-types';
import MainPageContainer from "../../containers/MainPageContainer";
import ProductInfoContainer from "../../containers/ProductInfoContainer";
import DashboardContainer from "../../containers/DashboardContainer";

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

    return (
      <Switch>
        <Route exact path="/admin" component={DashboardContainer} />
        <Route exact path="/admin" component={DashboardContainer} />
        <Route exact path="/admin" component={DashboardContainer} />
      </Switch>
    );
  }
}

AdminComponent.propTypes = {
  children: PropTypes.element,
  routing: PropTypes.object,
};

export default AdminComponent;