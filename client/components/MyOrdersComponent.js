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
      const orders = [
          {
              number: 13212312321,
              date: 1528351161765,
              status: {
                  type: 'completed',
                  image: 'https://previews.123rf.com/images/123vector/123vector1406/123vector140600112/29207476-vector-illustration-of-green-completed-stamp-on-white-background.jpg'
              },
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
                      number: 34423412431,
                      image: 'https://woofdog.org/wp-content/uploads/2017/04/Pomeranian-cost.jpg',
                      title: 'Eagle 13 A 2-Way Block Socket Splitter',
                      price: 324,
                      quantity: 2
                  },
                  {
                      number: 341113412431,
                      image: 'https://woofdog.org/wp-content/uploads/2017/04/Pomeranian-cost.jpg',
                      title: 'Eagle 13 A 2-Way Block Socket Splitter',
                      price: 324,
                      quantity: 1
                  },
                  {
                      number: 34422412431,
                      image: 'https://woofdog.org/wp-content/uploads/2017/04/Pomeranian-cost.jpg',
                      title: 'Eagle 13 A 2-Way Block Socket Splitter',
                      price: 324,
                      quantity: 2
                  },
              ]
          },
          {
              number: 132123222321,
              date: 1528351161765,
              status: {
                  type: 'completed',
                  image: 'https://previews.123rf.com/images/123vector/123vector1406/123vector140600112/29207476-vector-illustration-of-green-completed-stamp-on-white-background.jpg'
              },
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
                      number: 34423412431,
                      image: 'https://woofdog.org/wp-content/uploads/2017/04/Pomeranian-cost.jpg',
                      title: 'Eagle 13 A 2-Way Block Socket Splitter',
                      price: 324,
                      quantity: 2
                  },
                  {
                      number: 341113412431,
                      image: 'https://woofdog.org/wp-content/uploads/2017/04/Pomeranian-cost.jpg',
                      title: 'Eagle 13 A 2-Way Block Socket Splitter',
                      price: 324,
                      quantity: 1
                  },
                  {
                      number: 34422412431,
                      image: 'https://woofdog.org/wp-content/uploads/2017/04/Pomeranian-cost.jpg',
                      title: 'Eagle 13 A 2-Way Block Socket Splitter',
                      price: 324,
                      quantity: 2
                  },
              ]
          },
          {
              number: 132122312321,
              date: 1528351161765,
              status: {
                  type: 'completed',
                  image: 'https://previews.123rf.com/images/123vector/123vector1406/123vector140600112/29207476-vector-illustration-of-green-completed-stamp-on-white-background.jpg'
              },
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
                      number: 34423412431,
                      image: 'https://woofdog.org/wp-content/uploads/2017/04/Pomeranian-cost.jpg',
                      title: 'Eagle 13 A 2-Way Block Socket Splitter',
                      price: 324,
                      quantity: 2
                  },
                  {
                      number: 341113412431,
                      image: 'https://woofdog.org/wp-content/uploads/2017/04/Pomeranian-cost.jpg',
                      title: 'Eagle 13 A 2-Way Block Socket Splitter',
                      price: 324,
                      quantity: 1
                  },
                  {
                      number: 34422412431,
                      image: 'https://woofdog.org/wp-content/uploads/2017/04/Pomeranian-cost.jpg',
                      title: 'Eagle 13 A 2-Way Block Socket Splitter',
                      price: 324,
                      quantity: 2
                  },
              ]
          }
      ];

      return orders.map(order => {
          return <UserOrder order={order} key={order.number} selectedOrder={{number: 132122312321}}/>
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
