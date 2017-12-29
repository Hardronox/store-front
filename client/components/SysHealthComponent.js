import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class SysHealthComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <div className="container">
          <div className="row" >
            <h2>sys hea</h2>
          </div>
        </div>
      </div>
    );
  }
}

SysHealthComponent.propTypes = {
  children: PropTypes.element,

};

export default SysHealthComponent;
