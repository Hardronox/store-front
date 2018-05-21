import {connect} from 'react-redux';
import CartComponent from '../components/CartComponent';

const mapStateToProps = state => {
    return {
        routing: state.routing,
        cart: state.cartReducer
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getTranslations: (lang) => {
            // dispatch(getTranslations(lang));
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(CartComponent);
