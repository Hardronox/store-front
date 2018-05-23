import {connect} from 'react-redux';

import ProfileComponent from '../components/ProfileComponent';
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
    register: () => {
      dispatch(registerUser());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileComponent);
