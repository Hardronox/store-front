import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import App from './AppComponent';
import history from '../history';
import { Router } from 'react-router-dom';

export default class Root extends Component {
  render () {
    const {store} = this.props;
    return (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
