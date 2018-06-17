import {connect} from 'react-redux';

import ProductInfoComponent from '../components/ProductInfoComponent';
import {addItemToCart} from '../actions/actions';

const mapStateToProps = state => {
  return {
    comments: state.commentsReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: (id) => {
      dispatch(addItemToCart(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductInfoComponent);
