import React, { Component, Fragment }  from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Product from './reusable/ProductComponent';
import Slider from './reusable/SliderComponent';
import { Helmet } from 'react-helmet';

class MyOrdersComponent extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  renderOrders() {
      const orders = [
          {
              id: 1,
              date: 'date',
              status: 'completed',
              seller: {
                  name: 'Rozetka',
                  image: 'https://images-na.ssl-images-amazon.com/images/I/411XGJr38cL._SX355_.jpg'
              },
              delivery: {
                  type: 'deliveryType',
                  price: 22
              },
              total: 34234,
              items: [
                  {
                    image: 'https://woofdog.org/wp-content/uploads/2017/04/Pomeranian-cost.jpg',
                    number: 34423412431,
                    title: 'Eagle 13 A 2-Way Block Socket Splitter',
                    price: 324,
                    quantity: 2
                  }
              ]
          }
      ];
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
