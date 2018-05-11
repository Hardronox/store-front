import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';

import OrderComponent from '../components/OrderComponent';
import {getUsers, registerUser} from '../actions/actions';

const mapStateToProps = state => {
  return {
    routing: state.routing,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => {
      dispatch(getUsers());
    },
    register: () => {
      dispatch(registerUser());
    }
  };
};


export default reduxForm({
    form: 'order-form'
})(connect(mapStateToProps, mapDispatchToProps)(OrderComponent));