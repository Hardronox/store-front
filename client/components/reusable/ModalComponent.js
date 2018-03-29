import React from 'react';
import {
  NavLink, Link
} from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactDOM from "react-dom";
import LoginModal from "../auth/LoginModalComponent";
import RegisterModal from "../auth/RegisterModalComponent";

class Modal extends React.Component {

  constructor(props) {
    super(props);
  }


  componentWillMount() {

  }


  render () {

    let modal;

    switch (this.props.type) {
      case 'login':
        modal = <LoginModal/>;
        break;
      case 'register':
        modal = <RegisterModal/>;
        break;
    }

    return ReactDOM.createPortal(
        <div className="modal-container">
          {modal}
          <div className="modal-backdrop" onClick={() => this.props.changeModalVisibility(this.props.type)}/>
        </div>,
        document.getElementById('modal')
      );
  }
}

Modal.propTypes = {
  children: PropTypes.element,
  routing: PropTypes.object,
};

export default Modal;