import {connect} from 'react-redux';

import SendEmailsComponent from '../../components/admin/users/SendEmailsComponent';

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

export default connect(mapStateToProps, mapDispatchToProps)(SendEmailsComponent);