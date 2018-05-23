import axios from 'axios';
import {baseUrl} from '../config';

export function submitOrderApi (order) {
  // axios({
  //     method: 'post',
  //     url: `${baseUrl}/orders`,
  //     data: order
  // });

  console.log(order);
  return order;
}
