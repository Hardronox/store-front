import { TOGGLE_SELECT } from '../constants/actionTypes';

const orders = [
    {
        number: 13212312321,
        date: 1528351161765,
        status: {
            type: 'completed',
            image: 'https://previews.123rf.com/images/123vector/123vector1406/123vector140600112/29207476-vector-illustration-of-green-completed-stamp-on-white-background.jpg'
        },
        seller: {
            name: 'Rozetka',
            image: 'https://images-na.ssl-images-amazon.com/images/I/411XGJr38cL._SX355_.jpg'
        },
        delivery: {
            type: 'deliveryType',
            price: 22
        },
        total: 34234,
        open: false,
        items: [
            {
                number: 34423412431,
                image: 'https://woofdog.org/wp-content/uploads/2017/04/Pomeranian-cost.jpg',
                title: 'Eagle 13 A 2-Way Block Socket Splitter',
                price: 324,
                quantity: 2
            },
            {
                number: 341113412431,
                image: 'https://woofdog.org/wp-content/uploads/2017/04/Pomeranian-cost.jpg',
                title: 'Eagle 13 A 2-Way Block Socket Splitter',
                price: 324,
                quantity: 1
            },
            {
                number: 34422412431,
                image: 'https://woofdog.org/wp-content/uploads/2017/04/Pomeranian-cost.jpg',
                title: 'Eagle 13 A 2-Way Block Socket Splitter',
                price: 324,
                quantity: 2
            },
        ]
    },
    {
        number: 132123222321,
        date: 1528351161765,
        status: {
            type: 'completed',
            image: 'https://previews.123rf.com/images/123vector/123vector1406/123vector140600112/29207476-vector-illustration-of-green-completed-stamp-on-white-background.jpg'
        },
        seller: {
            name: 'Rozetka',
            image: 'https://images-na.ssl-images-amazon.com/images/I/411XGJr38cL._SX355_.jpg'
        },
        delivery: {
            type: 'deliveryType',
            price: 22
        },
        total: 34234,
        open: false,
        items: [
            {
                number: 34423412431,
                image: 'https://woofdog.org/wp-content/uploads/2017/04/Pomeranian-cost.jpg',
                title: 'Eagle 13 A 2-Way Block Socket Splitter',
                price: 324,
                quantity: 2
            },
            {
                number: 341113412431,
                image: 'https://woofdog.org/wp-content/uploads/2017/04/Pomeranian-cost.jpg',
                title: 'Eagle 13 A 2-Way Block Socket Splitter',
                price: 324,
                quantity: 1
            },
            {
                number: 34422412431,
                image: 'https://woofdog.org/wp-content/uploads/2017/04/Pomeranian-cost.jpg',
                title: 'Eagle 13 A 2-Way Block Socket Splitter',
                price: 324,
                quantity: 2
            },
        ]
    },
    {
        number: 132122312321,
        date: 1528351161765,
        status: {
            type: 'completed',
            image: 'https://previews.123rf.com/images/123vector/123vector1406/123vector140600112/29207476-vector-illustration-of-green-completed-stamp-on-white-background.jpg'
        },
        seller: {
            name: 'Rozetka',
            image: 'https://images-na.ssl-images-amazon.com/images/I/411XGJr38cL._SX355_.jpg'
        },
        delivery: {
            type: 'deliveryType',
            price: 22
        },
        total: 34234,
        open: false,
        items: [
            {
                number: 34423412431,
                image: 'https://woofdog.org/wp-content/uploads/2017/04/Pomeranian-cost.jpg',
                title: 'Eagle 13 A 2-Way Block Socket Splitter',
                price: 324,
                quantity: 2
            },
            {
                number: 341113412431,
                image: 'https://woofdog.org/wp-content/uploads/2017/04/Pomeranian-cost.jpg',
                title: 'Eagle 13 A 2-Way Block Socket Splitter',
                price: 324,
                quantity: 1
            },
            {
                number: 34422412431,
                image: 'https://woofdog.org/wp-content/uploads/2017/04/Pomeranian-cost.jpg',
                title: 'Eagle 13 A 2-Way Block Socket Splitter',
                price: 324,
                quantity: 2
            },
        ]
    }
];

const INITIAL_STATE = {
    orders: orders
}

const userOrdersReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case TOGGLE_SELECT:
            const newOrders = state.orders.map(order => {
                return order.number == action.payload ? { ...order, open: !order.open } : order;
            });
            return {
                ...state,
                orders: newOrders
            }
        default:
            return state;
    }
}

export default userOrdersReducer;