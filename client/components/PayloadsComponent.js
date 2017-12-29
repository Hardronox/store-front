import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class PayloadsComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <div className="container">
          <div className="row" >
            <h2>payloads</h2>
          </div>
        </div>
      </div>
    );
  }
}

PayloadsComponent.propTypes = {
  children: PropTypes.element,

};

export default PayloadsComponent;
