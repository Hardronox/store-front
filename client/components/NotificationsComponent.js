import React, { Component, Fragment }  from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Product from './reusable/ProductComponent';
import { Helmet } from 'react-helmet';

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
        <Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Main Page</title>
                <meta name="description" content="Store main page" />
            </Helmet>
            <main className="main-container" role="main">
              <h1>Notifications</h1>
            </main>
        </Fragment>

    );
  }
}

NotificationsComponent.propTypes = {
  children: PropTypes.element,

};

export default NotificationsComponent;
