import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CurrentIntelComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <div className="container">
          <div className="row" >
            <h2>Current int</h2>
          </div>
        </div>
      </div>
    );
  }
}

CurrentIntelComponent.propTypes = {
  children: PropTypes.element,

};

export default CurrentIntelComponent;
