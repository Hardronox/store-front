import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Product from './reusable/ProductComponent';
import Slider from './reusable/SliderComponent';
import NumberPicker from './reusable/NumberPicker';

class ProductInfoComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quantityValue: 1
    };
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

  imageHover(key) {

    const images = Array.from(Array(5).keys());
    images.forEach((item, i) => {
      this.refs[`image${i}`].style.border = 'none';
    });

    this.refs[`image${key}`].style.border = '1px solid greenyellow';
  }

  renderImageSet() {
    const products = Array.from(Array(5).keys());

    return products.map((item, i) => {
      return (
        <div key={i} ref={`image${i}`} onMouseOver={() => this.imageHover(i)}>

        </div>
      );
    });
  }

  addToCart = () => {
    this.props.addItemToCart({productId: 12, quantity: this.state.quantityValue});
  };

  updateNumberPicker = (type) => {

    if (type) {
      this.setState({
        quantityValue: this.state.quantityValue + 1
      });
    } else {
      if (this.state.quantityValue > 1) {
        this.setState({
          quantityValue: this.state.quantityValue - 1
        });
      }
    }
  };

  render() {

    const slides = [
      {image:'https://keddr.com/wp-content/uploads/2014/08/main.png', name: 'abir', price: 17000},
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
            <div className="image-set">
              {this.renderImageSet()}
            </div>
            <div className="col-md-6 info-image">
              <img ref="main-image" src={slides[0].image} alt={slides[0].name} />
            </div>
            <div className="col-md-5 general-info">
              <div className="general-info-container">
                <div>
                  <div>Delivery</div>
                  <div>
                    <span>Special proposition:</span><br/>
                    <span>Get this item with 25% off. Ends in 18 hours</span>
                  </div>
                </div>
              </div>
              <div className="general-info-container">
                <div>
                  <div>Price</div>
                  <div>200$</div>
                </div>
                <div>
                  <div>Delivery</div>
                  <div>
                    <span>Free shipping in your country using Local Air Mail</span><br/>
                    <span>Approximate shipping time: 25 days</span>
                  </div>
                </div>
                <div>
                  <div>Quantity</div>
                  <NumberPicker value={this.state.quantityValue} onValueChange={this.updateNumberPicker} />
                </div>
                <div>
                  <div>Total price</div>
                  <div>2</div>
                </div>
                <div className="buy-buttons">
                  <button className="btn btn-primary" onClick={this.addToCart}>
                    <i className="fa fa-cart-arrow-down"/> Add to cart
                  </button>
                  <Link to="/order/12" className="btn btn-success">Buy now</Link>
                </div>
              </div>
            </div>
          </div>
          <h1>Recomended</h1>
          <div className="small-slider-container">
            <Slider slides={slides} size="small" showInfo={true} slidesPerView={5}/>
          </div>
      </main>

    );
  }
}

ProductInfoComponent.propTypes = {
  children: PropTypes.element,

};

export default ProductInfoComponent;
