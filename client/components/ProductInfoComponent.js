import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Product from './reusable/ProductComponent';
import Slider from './reusable/SliderComponent';

class ProductInfoComponent extends Component {

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
         <h1>Product Title</h1>
          <div className="row product-info">
            <div className="col-md-6 info-image">
              <img src="https://keddr.com/wp-content/uploads/2014/08/main.png" alt=""/>
            </div>
            <div className="col-md-6 general-info">
              <div className="general-info-container">
                <div>
                  <div>Price</div>
                  <div>2</div>
                </div>
                <div>
                  <div>Delivery</div>
                  <div>2</div>
                </div>
                <div>
                  <div>Quantity</div>
                  <div>2</div>
                </div>
                <div>
                  <div>Total price</div>
                  <div>2</div>
                </div>
              </div>
            </div>
          </div>
          <h1>Recomended</h1>
          <div className="row">
            <Slider content={''} size="small"/>
          </div>
      </main>

    );
  }
}

ProductInfoComponent.propTypes = {
  children: PropTypes.element,

};

export default ProductInfoComponent;
