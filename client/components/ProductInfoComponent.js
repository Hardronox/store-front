import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Product from './reusable/Product';
import Slider from 'react-id-swiper'

class ProductInfoComponent extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  componentDidMount() {
    this.props.getKeks();
  }

  renderProducts = () => {

    const products = Array.from(Array(10).keys());

    return products.map((item, i) => {
      return <Product key={i} />;
    });
  };

  render() {

    return (
      <main role="main">

        <h1>Product Title</h1>
        <div className="row">
          <div className="col-md-6">
            <img src="https://keddr.com/wp-content/uploads/2014/08/main.png" alt=""/>
          </div>
          <div className="col-md-6">
            <span>Price</span>
            <button className="btn btn-success">Add to basket</button>
          </div>
        </div>
        <h1>Recomended</h1>
        <div className="row">
          <div className="col-md-6">
            <img src="https://keddr.com/wp-content/uploads/2014/08/main.png" alt=""/>
          </div>
          <div className="col-md-6">
            <span>Price</span>
            <button className="btn btn-success">Add to basket</button>
          </div>
        </div>

      </main>

    );
  }
}

ProductInfoComponent.propTypes = {
  children: PropTypes.element,

};

export default ProductInfoComponent;
