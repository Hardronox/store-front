import {connect} from 'react-redux';
import HeaderComponent from '../components/HeaderComponent';

import {search, getTranslations} from '../actions/actions';

const mapStateToProps = state => {
  return {
    routing: state.routing,
    cart: state.cartReducer,
    translations: state.locationReducer

  };
};

const mapDispatchToProps = dispatch => {
  return {
    search: (keyword) => {
      dispatch(search(keyword));
    },
    getTranslations: (lang) => {
      dispatch(getTranslations(lang));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);