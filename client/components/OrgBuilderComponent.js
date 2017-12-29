import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class OrgBuilderComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <div className="container">
          <div className="row" >
            <h2>Org build</h2>
          </div>
        </div>
      </div>
    );
  }
}

OrgBuilderComponent.propTypes = {
  children: PropTypes.element,

};

export default OrgBuilderComponent;
