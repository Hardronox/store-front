import {connect} from 'react-redux';

import DashboardComponent from '../components/admin/dashboard/DashboardComponent';

const mapStateToProps = state => {
  return {
    routing: state.routing,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTranslations: (lang) => {
      // dispatch(getTranslations(lang));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);