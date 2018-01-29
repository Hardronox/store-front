/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import DashboardContainer from '../containers/DashboardContainer';


class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={DashboardContainer} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
