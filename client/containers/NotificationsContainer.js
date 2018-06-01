import {connect} from 'react-redux';

import NotificationsComponent from '../components/NotificationsComponent';
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

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsComponent);
