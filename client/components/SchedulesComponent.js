import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class SchedulesComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <div className="container">
          <div className="row" >
            <h2>Schedules</h2>
          </div>
        </div>
      </div>
    );
  }
}

SchedulesComponent.propTypes = {
  children: PropTypes.element,

};

export default SchedulesComponent;
