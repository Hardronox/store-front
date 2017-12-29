import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class OrdersComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <div className="container">
          <div className="row" >
            <h2>ord</h2>
          </div>
        </div>
      </div>
    );
  }
}

OrdersComponent.propTypes = {
  children: PropTypes.element,

};

export default OrdersComponent;
