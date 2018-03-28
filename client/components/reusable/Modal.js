import React from 'react';
import {
  NavLink, Link
} from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactDOM from "react-dom";

class Modal extends React.Component {

  constructor(props) {
    super(props);
  }


  componentWillMount() {

  }


  render () {

    return ReactDOM.createPortal(
        <h1>kek</h1>,
        document.getElementById('modal')
      );
  }
}

Modal.propTypes = {
  children: PropTypes.element,
  routing: PropTypes.object,
};

export default Modal;