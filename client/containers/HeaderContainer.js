import {connect} from 'react-redux';

import HeaderComponent from '../components/admin/HeaderComponent';

const mapStateToProps = state => {
  return {
    routing: state.routing,
    cart: state.cartReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTranslations: (lang) => {
      // dispatch(getTranslations(lang));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);