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


  render () {
    const params = {
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      grabCursor: true,
      centeredSlides: true,
      loop:true,
      autoplay: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      spaceBetween: 30
    };
    return (
      <div className="slider">
        <Slider {...params}>
          <div><img src='https://keddr.com/wp-content/uploads/2014/08/main.png' /></div>
          <div><img src='http://www.aimp.ru/forum/index.php?action=dlattach;topic=51447.0;attach=45661' /></div>
          <div><img src='https://i.ytimg.com/vi/C5wBkVrZAbo/maxresdefault.jpg' /></div>
          <div><img src='http://www.atozpromotions.co.uk/wp-content/uploads/2016/05/android-5-lollipop-red-black-abstract-material-design-line-stripes-2560x1600.jpg' /></div>
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