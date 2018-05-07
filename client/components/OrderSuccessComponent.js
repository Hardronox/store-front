import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class OrderSuccessComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      uncheckedResults: []
    }
  }

  componentDidMount() {

  }


  render() {


    return (
      <main className="main-container" role="main">
        <h1>Your order is proceed successfully!</h1>
      </main>
    );
  }
}

OrderSuccessComponent.propTypes = {
  children: PropTypes.element,

};

export default OrderSuccessComponent;
