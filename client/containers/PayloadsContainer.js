import {connect} from 'react-redux';

import PayloadsComponent from '../components/PayloadsComponent';
import {getTranslations} from '../actions/actions';

const mapStateToProps = state => {
  return {
    translations: state.translationsReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTranslations: (lang) => {
      dispatch(getTranslations(lang));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PayloadsComponent);