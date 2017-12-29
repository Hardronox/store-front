import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class SysConfigComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <div className="container">
          <div className="row" >
            <h2>sys conf</h2>
          </div>
        </div>
      </div>
    );
  }
}

SysConfigComponent.propTypes = {
  children: PropTypes.element,

};

export default SysConfigComponent;
