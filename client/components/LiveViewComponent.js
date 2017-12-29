import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class LiveViewComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <div className="container">
          <div className="row" >
            <h2>Live view</h2>
          </div>
        </div>
      </div>
    );
  }
}

LiveViewComponent.propTypes = {
  children: PropTypes.element,

};

export default LiveViewComponent;
