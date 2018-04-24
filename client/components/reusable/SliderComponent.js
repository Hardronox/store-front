import React from 'react';
import {
  NavLink, Link
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Slider from 'react-id-swiper'

class Product extends React.Component {

  constructor(props) {
    super(props);
  }


  componentWillMount() {

  }


  renderSlides() {

    return this.props.slides.map((item, i) => {
      return (
        <div key={i}>
          <div>
            <Link to={`/product/${i}`}>
              <img src={item.image} />
            </Link>
            <div>
              <Link to={`/product/${i}`}>{item.name}</Link>
            </div>
            <div className="slider-price">
              <span>{item.price}$</span>
            </div>
          </div>
        </div>
      );
    });

  }

  render () {
    let sliderClass;

    if (this.props.size === 'big') {
      sliderClass = 'big-slider';
    } else {
      sliderClass = 'small-slider';
    }

    const params = {
      grabCursor: true,
      loop:true,
      slidesPerView: this.props.slidesPerView || 1,
      // autoplay: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      // slideClass: '',
      spaceBetween: 30,
      speed: 500,
      delay: 12000
    };
    return (
      <div className={sliderClass}>
        <Slider {...params}>
          {this.renderSlides()}
        </Slider>
      </div>
    );
  }
}

Product.propTypes = {
  children: PropTypes.element,
  routing: PropTypes.object,
};

export default Product;