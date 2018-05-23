import {connect} from 'react-redux';

import RegisterModalComponent from '../components/auth/RegisterModalComponent';
import {getUsers, registerUser} from '../actions/actions';

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
    register: (user) => {
      dispatch(registerUser(user));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterModalComponent);
