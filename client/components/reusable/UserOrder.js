import React, {Component, Fragment} from 'react';

class UserOrder extends Component {

    renderOrderItems() {
        const { items } = this.props.order;
        return items.map(item => {
            return (
              <div className="order-item flex-row" key={item.number}>
                  <div className="item-image-container">
                      <img src={item.image} alt="" className="item-image"/>
                  </div>
                  <div className="item-description flex-col">
                      <div className="item-description-header flex-row">
                          <div className="item-title">
                              {item.title}
                          </div>
                          <div className="item-number">
                              № {item.number}
                          </div>
                      </div>
                      <div className="item-description-body">
                          <div className="item-price">
                              $ {item.price}
                          </div>
                      </div>
                  </div>
                  <div className="item-quantity">
                      {item.quantity}
                  </div>
                  <div className="item-total">
                      {item.price * item.quantity}
                  </div>
              </div>
            );
        })
    }
    renderOrder() {
        const { number, date, status, seller, delivery, total, items } = this.props.order;
        const selectedNumber = this.props.selectedOrder.number;
        if(number == selectedNumber) {
            return (
                <Fragment>
                    <div className="user-order-left-section flex-col">
                        <div className="user-order-left-section-header flex-row">
                            <div className="user-order-details flex-row">
                                <div className="user-order-toggle flex-row">
                                    <i className="fa fa-arrow-down"></i>
                                    <div className="user-order-number">№ {number}</div>
                                </div>
                                <div className="user-order-date">
                                    {new Date(date).toLocaleString()}
                                </div>
                            </div>
                            <div className="user-order-summary flex-row">
                                <div className="user-order-full">
                                    See full history
                                    <i className="fa fa-caret-down"></i>
                                </div>
                                <i className="fa fa-print"></i>
                            </div>
                        </div>
                        <div className="user-order-left-section-body flex-col">
                            <div className="user-order-seller flex-row">
                                <div className="user-order-seller-name">
                                    {seller.name}
                                </div>
                                <img src={seller.image} alt="" className="user-order-seller-image"/>
                            </div>
                            {this.renderOrderItems()}
                            <div className="user-order-delivery flex-row">
                                <div className="user-order-delivery-type">
                                    {delivery.type}
                                </div>
                                <div className="user-order-delivery-price">
                                    {delivery.price}
                                </div>
                            </div>
                            <div className="user-order-total flex-row">
                                    Total:
                                <div className="user-order-total-price">
                                    {total}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="user-order-right-section flex-col">
                        <div className="user-order-right-section-header flex-row">
                            <div className="user-order-status">
                                {status.type}
                            </div>
                            <div className="user-order-history-toggle flex-row">
                                <i className="fa fa-arrow-down"></i>
                                <div className="user-order-history">History</div>
                            </div>
                        </div>
                        <div className="user-order-right-section-body flex-col">
                            <img src={status.image} className="user-order-status-image" alt="order status"/>
                            <div className="user-order-status-message">Help us make our service better</div>
                            <button className="user-order-leave-comment-button">
                                Leave a comment
                            </button>
                        </div>
                    </div>
                </Fragment>
            );
        }

        return (
            <Fragment>
                <div className="user-order-left-section flex-col">
                    <div className="user-order-left-section-header flex-row">
                        <div className="user-order-details flex-row">
                            <div className="user-order-toggle flex-row">
                                <i className="fa fa-arrow-down"></i>
                                <div className="user-order-number">№ {number}</div>
                            </div>
                            <div className="user-order-date">
                                {new Date(date).toLocaleString()}
                            </div>
                            <div className="user-order-images flex-row">
                                <img src={items[0].image} className="user-order-image"/>
                                <img src={items[1].image} className="user-order-image" />
                            </div>
                        </div>
                        <div className="user-order-summary flex-col">
                            {items.length + 1} items, {total} total
                        </div>
                    </div>
                </div>
                <div className="user-order-right-section flex-col">
                    <div className="user-order-right-section-header flex-row">
                        <div className="user-order-status">
                            {status.type}
                        </div>
                        <div className="user-order-history-toggle flex-row">
                            <i className="fa fa-arrow-down"></i>
                            <div className="user-order-history">History</div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
    render() {
        return (
          <div className="user-order flex-row">
              {this.renderOrder()}
          </div>
        );
    }
}

export default UserOrder;