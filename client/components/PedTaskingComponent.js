import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class PedTaskingComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <div className="container">
          <div className="row" >
            <h2>Ped tasking</h2>
          </div>
        </div>
      </div>
    );
  }
}

PedTaskingComponent.propTypes = {
  children: PropTypes.element,

};

export default PedTaskingComponent;
