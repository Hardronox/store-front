import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class OrderComponent extends React.Component {

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
        <h1>Product Title</h1>
        <div className="row product-info">

          <div className="col-md-5 general-info">

          </div>
        </div>
      </main>
    );
  }
}

OrderComponent.propTypes = {
  children: PropTypes.element,

};

export default OrderComponent;
