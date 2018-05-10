import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class OrderComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      uncheckedResults: []
    }
  }

  componentDidMount() {

  }


  render() {

    return (
      <main className="main-container" role="main">
        <div>
          Order info
        </div>
      </main>
    );
  }
}

OrderComponent.propTypes = {
  children: PropTypes.element,

};

export default OrderComponent;
