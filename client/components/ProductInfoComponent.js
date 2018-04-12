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

    const slides = [
      {image:'https://keddr.com/wp-content/uploads/2014/08/main.png', name: 'lol kek phaha akterskay igra', price: 17000},
      {image:'http://www.aimp.ru/forum/index.php?action=dlattach;topic=51447.0;attach=45661', name: 'tabi pizda', price: 7520},
      {image:'https://i.ytimg.com/vi/C5wBkVrZAbo/maxresdefault.jpg', name: 'woah woah', price: 2000},
      {image:'https://i.ytimg.com/vi/C5wBkVrZAbo/maxresdefault.jpg', name: 'woah woah', price: 2000},
      {image:'http://www.aimp.ru/forum/index.php?action=dlattach;topic=51447.0;attach=45661', name: 'tabi pizda', price: 7500},
      {image:'http://www.atozpromotions.co.uk/wp-content/uploads/2016/05/android-5-lollipop-red-black-abstract-material-design-line-stripes-2560x1600.jpg', name: 'Holy Guacamole', price: 10000},
    ];

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
          <div className="small-slider-container">
            <Slider slides={slides} size="small" slidesPerView={5}/>
          </div>
      </main>

    );
  }
}

ProductInfoComponent.propTypes = {
  children: PropTypes.element,

};

export default ProductInfoComponent;
