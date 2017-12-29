import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class AllocationComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <div className="container">
          <div className="row" >
            <h2>Alloc</h2>
          </div>
        </div>
      </div>
    );
  }
}

AllocationComponent.propTypes = {
  children: PropTypes.element,

};

export default AllocationComponent;
