import {connect} from 'react-redux';

import ViewedProductsComponent from '../components/ViewedProductsComponent';
import { toggleProductLike, deleteViewedProduct } from '../actions/actions';

const mapStateToProps = state => {
    return {
        viewedProducts: state.viewedProducts.viewedProducts,
        viewedCategories: state.viewedProducts.viewedCategories
    };
};

const mapDispatchToProps = dispatch => {
    return {
        toggleProductLike: (id) => {
            dispatch(toggleProductLike(id));
        },
        deleteViewedProduct: (id) => {
            dispatch(deleteViewedProduct(id))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewedProductsComponent);
