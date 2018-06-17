import {connect} from 'react-redux';

import ItemsListComponents from '../../components/admin/items/ItemsListComponent';

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

export default connect(mapStateToProps, mapDispatchToProps)(ItemsListComponents);
