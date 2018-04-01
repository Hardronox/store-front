import React from 'react';
import {
  NavLink, Link
} from 'react-router-dom';
import PropTypes from 'prop-types';
import TinyMCE from 'react-tinymce';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { Field, reduxForm } from 'redux-form'

class RegisterForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedOption: '',
    };
  }


  componentWillMount() {

  }

  search() {
    console.log(this.refs.search.value);
  }

  renderAuthorization = () => {

    let content = [
      <div key="login">
        <Link to="">Login</Link>
      </div>
    ];

    if (localStorage.getItem('user')) {
      content = [
        <div key="user">
          <Link to="">Hello, user</Link>
        </div>,
        <div key="logout">
          <Link to="">Logout</Link>
        </div>
      ];

    }

    return (
      <div className="authorization">
        {content}
      </div>
    );
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
  }

  handleEditorChange(e) {
    console.log(e.target.getContent());
  };

  render () {

    const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value;

    return (
      <form className="form-horizontal" method="post" action="#">

        <div className="form-group">
          <label htmlFor="name" className="cols-sm-2 control-label">Your Name</label>
          <div className="cols-sm-10">
            <div className="input-group">
              <span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"/></span>
              <input type="text" className="form-control" name="name" id="name"  placeholder="Enter your Name"/>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email" className="cols-sm-2 control-label">Your Email</label>
          <div className="cols-sm-10">
            <div className="input-group">
              <span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"/></span>
              <input type="text" className="form-control" name="email" id="email"  placeholder="Enter your Email"/>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="username" className="cols-sm-2 control-label">Username</label>
          <div className="cols-sm-10">
            <div className="input-group">
              <span className="input-group-addon"><i className="fa fa-users fa" aria-hidden="true"/></span>
              <input type="text" className="form-control" name="username" id="username"  placeholder="Enter your Username"/>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="password" className="cols-sm-2 control-label">Password</label>
          <div className="cols-sm-10">
            <div className="input-group">
              <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"/></span>
              <input type="password" className="form-control" name="password" id="password"  placeholder="Enter your Password"/>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="confirm" className="cols-sm-2 control-label">Confirm Password</label>
          <div className="cols-sm-10">
            <div className="input-group">
              <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"/></span>
              <input type="password" className="form-control" name="confirm" id="confirm"  placeholder="Confirm your Password"/>
            </div>
          </div>
        </div>

        <div className="form-group ">
          <button type="button" className="btn btn-primary btn-lg btn-block login-button">Register</button>
        </div>
        <div className="login-register">
          <a href="index.php">Login</a>
          <button type="submit">Register</button>
        </div>
      </form>
    );
  }
}

RegisterForm.propTypes = {
  children: PropTypes.element,
  routing: PropTypes.object,
};

export default RegisterForm;

RegisterForm = reduxForm({
  // a unique name for the form
  form: 'RegisterForm'
})(RegisterForm);