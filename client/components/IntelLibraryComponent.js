import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class IntelLibraryComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <div className="container">
          <div className="row" >
            <h2>intel library</h2>
          </div>
        </div>
      </div>
    );
  }
}

IntelLibraryComponent.propTypes = {
  children: PropTypes.element,
};

export default IntelLibraryComponent;
