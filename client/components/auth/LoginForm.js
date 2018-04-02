import React from 'react';
import {
  NavLink, Link
} from 'react-router-dom';
import PropTypes from 'prop-types';
import 'react-select/dist/react-select.css';
import { Field, reduxForm } from 'redux-form'
import authField from '../reusable/authField'

class LoginForm extends React.Component {

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

        <div className="form-group ">
          <button type="submit" className="btn btn-primary btn-lg btn-block login-button">Register</button>
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  children: PropTypes.element,
  routing: PropTypes.object,
};


LoginForm = reduxForm({
  // a unique name for the form
  form: 'LoginForm'
})(LoginForm);

export default LoginForm;
