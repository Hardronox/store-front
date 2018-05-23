import {connect} from 'react-redux';
import CartComponent from '../components/CartComponent';
import {removeItemFromCart} from '../actions/actions';

const mapStateToProps = state => {
  return {
    routing: state.routing,
    cart: state.cartReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeItemFromCart: (id) => {
      dispatch(removeItemFromCart(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartComponent);
