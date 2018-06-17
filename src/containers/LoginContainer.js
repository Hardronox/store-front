import {connect} from 'react-redux';

import LoginModalComponent from '../components/auth/LoginModalComponent';
import {getUsers, loginUser} from '../actions/actions';

const mapStateToProps = state => {
  return {
    routing: state.routing
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => {
      dispatch(getUsers());
    },
    login: (user) => {
      dispatch(loginUser(user));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginModalComponent);
