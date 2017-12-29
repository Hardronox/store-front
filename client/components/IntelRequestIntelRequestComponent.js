import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class IntelRequestIntelRequestComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <div className="container">
          <div className="row" >
            <h2>int req</h2>
          </div>
        </div>
      </div>
    );
  }
}

IntelRequestIntelRequestComponent.propTypes = {
  children: PropTypes.element,

};

export default IntelRequestIntelRequestComponent;
