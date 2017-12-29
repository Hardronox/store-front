import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MunitionsComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <div className="container">
          <div className="row" >
            <h2>munit</h2>
          </div>
        </div>
      </div>
    );
  }
}

MunitionsComponent.propTypes = {
  children: PropTypes.element,

};

export default MunitionsComponent;
