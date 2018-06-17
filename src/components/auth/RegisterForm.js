import React from 'react';
import {
  NavLink, Link
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { Field, reduxForm } from 'redux-form'
import authField from '../reusable/authField'

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


  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
  };

  handleEditorChange(e) {
    console.log(e.target.getContent());
  };



  render () {

    const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value;
    const { handleSubmit } = this.props;

    return (
      <form className="form-horizontal" method="post" onSubmit={handleSubmit}>

        <div className="form-group">
          <label htmlFor="name" className="cols-sm-2 control-label">Your Name</label>
          <div className="cols-sm-10">
            <div className="input-group">
              <Field
                type="text"
                name="name"
                id="name"
                placeholder="Enter your Name"
                component={authField}
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email" className="cols-sm-2 control-label">Your Email</label>
          <div className="cols-sm-10">
            <div className="input-group">
              <Field
                type="text"
                name="email"
                id="email"
                placeholder="Enter your Email"
                component={authField}
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="username" className="cols-sm-2 control-label">Username</label>
          <div className="cols-sm-10">
            <div className="input-group">
              <Field
                type="text"
                name="username"
                id="username"
                placeholder="Enter your Username"
                component={authField}
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="password" className="cols-sm-2 control-label">Password</label>
          <div className="cols-sm-10">
            <div className="input-group">
              <Field
                type="password"
                name="password"
                id="password"
                placeholder="Enter your Password"
                component={authField}
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="confirm" className="cols-sm-2 control-label">Confirm Password</label>
          <div className="cols-sm-10">
            <div className="input-group">
              <Field
                type="text"
                name="confirm"
                id="confirm"
                placeholder="Confirm your Password"
                component={authField}
              />
            </div>
          </div>
        </div>

        <div className="form-group ">
          <button type="submit" className="btn btn-primary btn-lg btn-block login-button">Register</button>
        </div>
      </form>
    );
  }
}

RegisterForm.propTypes = {
  children: PropTypes.element,
  routing: PropTypes.object,
};


RegisterForm = reduxForm({
  // a unique name for the form
  form: 'RegisterForm'
})(RegisterForm);

export default RegisterForm;
