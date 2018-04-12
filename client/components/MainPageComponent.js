import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Product from './reusable/ProductComponent';
import Slider from './reusable/SliderComponent';


class MainPageComponent extends Component {

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
      return <Product key={i} product={item}/>;
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
      <main role="main" className="content">
        <Slider slides={slides} size="big"/>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              {this.renderProducts()}
            </div>
          </div>
        </div>
      </main>
      
    );
  }
}

MainPageComponent.propTypes = {
  children: PropTypes.element,

};

export default MainPageComponent;
