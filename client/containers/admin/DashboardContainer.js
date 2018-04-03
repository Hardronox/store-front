import {connect} from 'react-redux';

import DashboardComponent from '../../components/admin/dashboard/DashboardComponent';
import {getUsers} from '../../actions/actions';

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
    getTranslations: (lang) => {
      // dispatch(getTranslations(lang));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);