import React from 'react';
import {
  NavLink, Link
} from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactDOM from "react-dom";
import LoginForm from "./LoginForm";

class LoginModal extends React.Component {

  constructor(props) {
    super(props);
  }


  componentWillMount() {

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
              <LoginForm  onSubmit={this.submit}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LoginModal.propTypes = {
  children: PropTypes.element,
  routing: PropTypes.object,
};

export default LoginModal;