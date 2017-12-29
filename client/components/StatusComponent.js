import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class StatusComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <div className="container">
          <div className="row" >
            <h2>Status</h2>
          </div>
        </div>
      </div>
    );
  }
}

StatusComponent.propTypes = {
  children: PropTypes.element,

};

export default StatusComponent;
