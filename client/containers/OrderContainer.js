import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';

import OrderComponent from '../components/OrderComponent';
import {getUsers, registerUser, submitOrder} from '../actions/actions';
//import {validate} from '../components/OrderComponent';

const validate = values => {
    const errors = {}
    if (!values.firstName) {
        errors.firstName = 'Required'
    }
    if (!values.lastName) {
        errors.lastName = 'Required'
    }
    if(!values.streetAddress) {
        errors.streetAddress = 'Required'
    }
    if(!values.city) {
        errors.city = 'Required'
    }
    if(!values.state) {
        errors.state = 'Required'
    }
    if(!values.zipCode) {
        errors.zipCode = 'Required'
    } else if(isNaN(Number(values.zipCode))) {
        errors.zipCode = 'Must be a number'
    }
    if(!values.phone) {
        errors.phone = 'Required'
    } else if (isNaN(Number(values.phone))) {
        errors.phone = 'Must be a number'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.confirmEmail) {
        errors.confirmEmail = 'Please confirm email'
    } else if (values.email !== values.confirmEmail) {
        errors.confirmEmail = 'Emails don\'t match'
    }
    return errors
}

const mapStateToProps = state => {
  return {
    routing: state.routing,
    orderForm: state.form['order-form']
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => {
      dispatch(getUsers());
    },
    register: () => {
      dispatch(registerUser());
    },
    submitOrder: () => {
      dispatch(submitOrder())
    }
  };
};


export default reduxForm({
    form: 'order-form',
    initialValues: {
      orderQuantity: 1
    },
    validate
})(connect(mapStateToProps, mapDispatchToProps)(OrderComponent));