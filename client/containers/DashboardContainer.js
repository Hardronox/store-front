import {connect} from 'react-redux';

import DashboardComponent from '../components/DashboardComponent';
import {getProducts} from '../actions/actions';

const mapStateToProps = state => {
  return {
    searchResult: state.productsReducer.searchResult
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProducts: (searchValue) => {
      dispatch(getProducts(searchValue));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);