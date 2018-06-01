import {connect} from 'react-redux';

import NewItemComponent from '../../components/admin/items/NewItemComponent';

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

export default connect(mapStateToProps, mapDispatchToProps)(NewItemComponent);
