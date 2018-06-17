import {connect} from 'react-redux';

import AdminComponent from '../components/admin/AdminComponent';

const mapStateToProps = state => {
  return {
    routing: state.routing
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTranslations: (lang) => {
      // dispatch(getTranslations(lang));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminComponent);
