import axios from 'axios';
import {base_url} from '../config';

export function submitOrderApi(order) {
    axios({
        method: 'post',
        url: `${base_url}/orders`,
        data: order
    });
}
