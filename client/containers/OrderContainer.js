import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';

import OrderComponent from '../components/OrderComponent';
import {getUsers, registerUser, submitOrder} from '../actions/actions';

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
    }
})(connect(mapStateToProps, mapDispatchToProps)(OrderComponent));