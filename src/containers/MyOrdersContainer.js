import {connect} from 'react-redux';

import MyOrdersComponent from '../components/MyOrdersComponent';
import { toggleSelect } from '../actions/actions';

const mapStateToProps = state => {
  return {
    userOrders: state.userOrders.orders
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleSelect: (orderNumber) => {
      dispatch(toggleSelect(orderNumber));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyOrdersComponent);
