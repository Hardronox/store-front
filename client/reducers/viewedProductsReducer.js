import {
    DELETE_VIEWED_PRODUCT_FULFILLED,
    TOGGLE_PRODUCT_LIKE_FULFILLED,
    TOGGLE_PRODUCT_LIKE_REJECTED
} from '../constants/actionTypes';

const products = [
    {
        src: 'http://cdn1-www.dogtime.com/assets/uploads/gallery/cardigan-welsh-corgi/olderderp-6_680-453.jpg',
        title: "Apple MacBook Pro 15 (2016) i7-6920HQ/16GB/512G SSD/Touch Bar/Radeon Pro 460 4GB",
        price: 2199,
        rating: 3.5,
        comments: 2342,
        discount: 50,
        liked: false,
        id: 1
    },
    {
        src: 'http://cdn1-www.dogtime.com/assets/uploads/gallery/cardigan-welsh-corgi/olderderp-6_680-453.jpg',
        title: "Apple MacBook Pro 15 (2016) i7-6920HQ/16GB/512G SSD/Touch Bar/Radeon Pro 460 4GB",
        price: 2199,
        rating: 3.5,
        comments: 2342,
        discount: 0,
        liked: false,
        id: 2
    },
    {
        src: 'http://cdn1-www.dogtime.com/assets/uploads/gallery/cardigan-welsh-corgi/olderderp-6_680-453.jpg',
        title: "Apple MacBook Pro 15 (2016) i7-6920HQ/16GB/512G SSD/Touch Bar/Radeon Pro 460 4GB",
        price: 2199,
        rating: 3.5,
        comments: 2342,
        discount: 15,
        liked: true,
        id: 3
    },
    {
        src: 'http://cdn1-www.dogtime.com/assets/uploads/gallery/cardigan-welsh-corgi/olderderp-6_680-453.jpg',
        title: "Apple MacBook Pro 15 (2016) i7-6920HQ/16GB/512G SSD/Touch Bar/Radeon Pro 460 4GB",
        price: 2199,
        rating: 3.5,
        comments: 2342,
        discount: 0,
        liked: true,
        id: 4
    },
    {
        src: 'http://cdn1-www.dogtime.com/assets/uploads/gallery/cardigan-welsh-corgi/olderderp-6_680-453.jpg',
        title: "Apple MacBook Pro 15 (2016) i7-6920HQ/16GB/512G SSD/Touch Bar/Radeon Pro 460 4GB",
        price: 2199,
        rating: 3.5,
        comments: 2342,
        discount: 0,
        liked: false,
        id: 5
    },
    {
        src: 'http://cdn1-www.dogtime.com/assets/uploads/gallery/cardigan-welsh-corgi/olderderp-6_680-453.jpg',
        title: "Apple MacBook Pro 15 (2016) i7-6920HQ/16GB/512G SSD/Touch Bar/Radeon Pro 460 4GB",
        price: 2199,
        rating: 3.5,
        comments: 2342,
        discount: 0,
        liked: false,
        id: 6
    },
    {
        src: 'http://cdn1-www.dogtime.com/assets/uploads/gallery/cardigan-welsh-corgi/olderderp-6_680-453.jpg',
        title: "Apple MacBook Pro 15 (2016) i7-6920HQ/16GB/512G SSD/Touch Bar/Radeon Pro 460 4GB",
        price: 2199,
        rating: 3.5,
        comments: 2342,
        discount: 0,
        liked: false,
        id: 7
    },
    {
        src: 'http://cdn1-www.dogtime.com/assets/uploads/gallery/cardigan-welsh-corgi/olderderp-6_680-453.jpg',
        title: "Apple MacBook Pro 15 (2016) i7-6920HQ/16GB/512G SSD/Touch Bar/Radeon Pro 460 4GB",
        price: 2199,
        rating: 3.5,
        comments: 2342,
        discount: 0,
        liked: false,
        id: 8
    },
];

const categories = {
    cameras: 12,
    laptops: 133,
    microphones: 13243252352,
    cats: 12,
    dogs: 133,
    zsdc: 13243252352,
    czsdczscds: 12,
    lapszdczsdctops: 133,
    microscszdcphones: 13243252352,
    camezsdczscras: 12,
    laptozsdcsdps: 133,
    mqwdicrophones: 13243252352,
    camzsdczseras: 12,
    laptzscdascdzcops: 133,
    micddrophones: 13243252352,
    camacfszseras: 12,
    lapsdczstops: 133,
    micrwdwaophones: 13243252352,
    cameasdfcascasras: 12,
    laptoasdaps: 133,
    microasfcaphones: 13243252352,
    camerasfcawas: 12,
    laptascaops: 133,
    microascdawdphones: 13243252352
};

const INITIAL_STATE = {
    viewedProducts: products,
    viewedCategories: categories
}

const viewedProductsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case TOGGLE_PRODUCT_LIKE_FULFILLED: {
            return {
                ...state,
                viewedProducts: state.viewedProducts.map(product => {
                    return product.id === action.id ? {...product, liked: !product.liked} : product;
                })
            };
        }
        case TOGGLE_PRODUCT_LIKE_REJECTED: {
            return {
                ...state,
                error: action.error
            }
        }
        case DELETE_VIEWED_PRODUCT_FULFILLED: {
            let newViewedProducts = state.viewedProducts.filter((product) => {
                if (product.id !== action.id) {
                    return product;
                }
            });
            return {
                ...state,
                viewedProducts: newViewedProducts
            }
        }
        default:
            return state;
    }
}

export default viewedProductsReducer;