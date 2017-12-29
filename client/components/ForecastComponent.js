import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ForecastComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <div className="container">
          <div className="row" >
            <h2>forec</h2>
          </div>
        </div>
      </div>
    );
  }
}

ForecastComponent.propTypes = {
  children: PropTypes.element,

};

export default ForecastComponent;
