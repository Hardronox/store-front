import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class IsrSyncComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <div className="container">
          <div className="row" >
            <h2>Sync</h2>
          </div>
        </div>
      </div>
    );
  }
}

IsrSyncComponent.propTypes = {
  children: PropTypes.element,

};

export default IsrSyncComponent;
