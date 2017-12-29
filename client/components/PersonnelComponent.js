import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class PersonnelComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <div className="container">
          <div className="row" >
            <h2>Personnel</h2>
          </div>
        </div>
      </div>
    );
  }
}

PersonnelComponent.propTypes = {
  children: PropTypes.element,

};

export default PersonnelComponent;
