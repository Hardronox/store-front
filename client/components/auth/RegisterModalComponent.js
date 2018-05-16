import React from 'react';
import {
  NavLink, Link
} from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactDOM from "react-dom";
import RegisterForm from "./RegisterForm";

class RegisterModal extends React.Component {

  constructor(props) {
    super(props);
  }


  componentWillMount() {
    //as dfasd fasdf asd
  }

  submit = user => {
    // print the form values to the console
    this.props.register(user);
  };

  render () {

    return  (
      <div className="show">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-auth">
              <RegisterForm onSubmit={this.submit}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

RegisterModal.propTypes = {
  children: PropTypes.element,
  routing: PropTypes.object,
};

export default RegisterModal;