import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class DashboardComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <div className="container">
          <div className="row" >
            <h2>Dashboard</h2>
          </div>
        </div>
      </div>
    );
  }
}

DashboardComponent.propTypes = {
  children: PropTypes.element,

};

export default DashboardComponent;
