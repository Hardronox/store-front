import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class PlatformsComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <div className="container">
          <div className="row" >
            <h2>Platf</h2>
          </div>
        </div>
      </div>
    );
  }
}

PlatformsComponent.propTypes = {
  children: PropTypes.element,

};

export default PlatformsComponent;
