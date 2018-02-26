import {connect} from 'react-redux';

import DashboardComponent from '../components/DashboardComponent';
import {incr, storeKek, getKeks} from '../actions/actions';

const mapStateToProps = state => {
  return {
    keks: state.keksReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    incr: () => {
      dispatch(incr());
    },
    storeKek: (kek) => {
      dispatch(storeKek(kek));
    },
    getKeks: () => {
      dispatch(getKeks());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);