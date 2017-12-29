import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MessagesComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <div className="container">
          <div className="row" >
            <h2>Messages</h2>
          </div>
        </div>
      </div>
    );
  }
}

MessagesComponent.propTypes = {
  children: PropTypes.element,

};

export default MessagesComponent;
