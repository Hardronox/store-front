import {connect} from 'react-redux';

import StatisticsComponent from '../../components/admin/statistics/StatisticsComponent';

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

export default connect(mapStateToProps, mapDispatchToProps)(StatisticsComponent);