import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ComNetComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <div className="container">
          <div className="row" >
            <h2>Com net</h2>
          </div>
        </div>
      </div>
    );
  }
}

ComNetComponent.propTypes = {
  children: PropTypes.element,

};

export default ComNetComponent;
