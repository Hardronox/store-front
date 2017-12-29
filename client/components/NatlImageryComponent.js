import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class NatlImageryComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <div className="container">
          <div className="row" >
            <h2>natl</h2>
          </div>
        </div>
      </div>
    );
  }
}

NatlImageryComponent.propTypes = {
  children: PropTypes.element,

};

export default NatlImageryComponent;
