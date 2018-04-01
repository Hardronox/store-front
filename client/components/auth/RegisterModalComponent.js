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

  submit = values => {
    // print the form values to the console
    console.log(values)
  };

  render () {

    return  (
      <div className="show" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="main-login main-center">
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