import {connect} from 'react-redux';

import UsersListComponents from '../../components/admin/users/UsersListComponent';

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersListComponents);
