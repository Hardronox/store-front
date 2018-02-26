import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Product from './reusable/Product';
import Slider from 'react-id-swiper'

class DashboardComponent extends Component {

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
      <main role="main">

        <div className="slider">
          <Slider {...params}>
            <div><img src='https://keddr.com/wp-content/uploads/2014/08/main.png' /></div>
            <div><img src='http://www.aimp.ru/forum/index.php?action=dlattach;topic=51447.0;attach=45661' /></div>
            <div><img src='https://i.ytimg.com/vi/C5wBkVrZAbo/maxresdefault.jpg' /></div>
            <div><img src='http://www.atozpromotions.co.uk/wp-content/uploads/2016/05/android-5-lollipop-red-black-abstract-material-design-line-stripes-2560x1600.jpg' /></div>
          </Slider>
        </div>

        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              {this.renderProducts()}
            </div>
          </div>
        </div>
        <div>
          <div className="container">
            <div className="row" >
              <h2>Dashboard</h2>
              <button onClick={() => this.props.incr()}>incr</button>
              <button onClick={() => this.props.storeKek({name:'kek', woah: 123})}>Store kek</button>
            </div>
          </div>
        </div>
      </main>
      
    );
  }
}

DashboardComponent.propTypes = {
  children: PropTypes.element,

};

export default DashboardComponent;
