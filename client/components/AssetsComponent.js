import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class AssetsComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <div className="container">
          <div className="row" >
            <h2>assets</h2>
          </div>
        </div>
      </div>
    );
  }
}

AssetsComponent.propTypes = {
  children: PropTypes.element,

};

export default AssetsComponent;
