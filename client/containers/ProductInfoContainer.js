import {connect} from 'react-redux';

import ProductInfoComponent from '../components/ProductInfoComponent';
import {incr, addItemToCart} from '../actions/actions';

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
    addItemToCart: (id) => {
      dispatch(addItemToCart(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductInfoComponent);