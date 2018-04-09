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

    return (
      <main role="main" className="content">
        <Slider content={''} size="big"/>
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
