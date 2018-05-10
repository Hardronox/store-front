import {connect} from 'react-redux';
import HeaderComponent from '../components/HeaderComponent';

import {search} from '../actions/actions';

const mapStateToProps = state => {
  return {
    routing: state.routing,
    cart: state.cartReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    search: (keyword) => {
      dispatch(search(keyword));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);