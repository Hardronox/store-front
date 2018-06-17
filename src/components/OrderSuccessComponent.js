import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';

class OrderSuccessComponent extends Component {
  constructor (props) {
    super(props);
    this.state = {
      uncheckedResults: []
    };
  }

  componentDidMount () {

  }

  render () {
    return (
      <Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Order Success</title>
          <meta name="description" content="Order submitted successfully" />
        </Helmet>
        <main className="main-container" role="main">
          <h1>Your order is proceed successfully!</h1>
        </main>
      </Fragment>
    );
  }
}

OrderSuccessComponent.propTypes = {
  children: PropTypes.element

};

export default OrderSuccessComponent;
