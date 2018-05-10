import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Product from './reusable/ProductComponent';

class NotificationsComponent extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  renderProducts = () => {

    const products = Array.from(Array(10).keys());

    return products.map((item, i) => {
      return <Product key={i} />;
    });
  };


  render() {


    return (
      <main className="main-container" role="main">
        <h1>Notifications</h1>
      </main>

    );
  }
}

NotificationsComponent.propTypes = {
  children: PropTypes.element,

};

export default NotificationsComponent;
