import {connect} from 'react-redux';

import LiveViewComponent from '../components/LiveViewComponent';
import {getCampaigns} from '../actions/actions';

const mapStateToProps = state => {
  return {
    translations: state.translationsReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCampaigns: () => {
      dispatch(getCampaigns());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LiveViewComponent);