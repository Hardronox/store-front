import React, { Component, Fragment }  from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Product from './reusable/ProductComponent';
import Slider from './reusable/SliderComponent';
import { Helmet } from 'react-helmet';
import UserOrder from "./reusable/UserOrder";

class MyOrdersComponent extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  renderOrders() {
      const { userOrders, toggleSelect } = this.props;
      return userOrders.map(order => {
          return <UserOrder order={order}
                            key={order.number}
                            toggleSelect={() => toggleSelect(order.number)}
          />
      });
  }


  render() {
    return (
        <div className="col-md-7 user-orders-container">
          <h2 className="user-orders-title">
            My Orders
          </h2>
          <div className="user-orders">
              {this.renderOrders()}
          </div>
        </div>
    );
  }
}

MyOrdersComponent.propTypes = {
  children: PropTypes.element,

};

export default MyOrdersComponent;
