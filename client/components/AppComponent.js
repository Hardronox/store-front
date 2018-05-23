/* eslint-disable import/no-named-as-default */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Routes from '../routes';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import 'bootstrap/dist/css/bootstrap.css';

setAuthorizationToken(localStorage.jwt);

class App extends Component {
  render () {
    return (
      <Routes />
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
