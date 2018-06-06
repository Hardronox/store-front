import React, {Component, Fragment} from 'react';

class userOrder extends Component {

    renderOrderItems() {
        const items = this.props.order;
        return items.map(item => {
            return (
              <div className="order-item flex-row">
                  <div className="item-image">
                      <img src={item.image} alt=""/>
                  </div>
                  <div className="item-description flex-col">
                      <div className="item-description-header flex-row">
                          <div className="item-title">
                              {item.title}
                          </div>
                          <div className="item-number">
                              {item.number}
                          </div>
                      </div>
                      <div className="item-description-body">
                          <div className="item-price">
                              {item.price}
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
        const { number, date, status, seller, delivery, total, id, items } = this.props.order;
        const selectedId = this.props.selectedOrder.id;
        if(id == selectedId) {
            return (
                <Fragment>
                    <div className="order-left-section flex-col">
                        <div className="order-left-section-header flex-row">
                            <div className="order-details">
                                <div className="order-toggle">
                                    <i className="fa fa-arrow-down"></i>
                                    <div className="order-number">№ {number}</div>
                                </div>
                                <div className="order-date">
                                    {date}
                                </div>
                            </div>
                            <div className="order-summary">
                                summary
                                <i className="fa fa-print"></i>
                            </div>
                        </div>
                        <div className="order-left-section-body flex-col">
                            <div className="order-seller">
                                {seller.name}
                                <img src={seller.image} alt=""/>
                            </div>
                            {this.renderOrderItems()}
                            <div className="order-delivery flex-row">
                                <div className="order-delivery-type">
                                    {delivery.type}
                                </div>
                                <div className="order-delivery-price">
                                    {delivery.price}
                                </div>
                            </div>
                            <div className="order-total flex-row">
                                <div className="order-total">
                                    Total:
                                </div>
                                <div className="order-total-price">
                                    {total}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-right-section flex-col">
                        <div className="order-right-section-header">
                            <div className="order-status">
                                {status}
                            </div>
                            <div className="order-history-toggle">
                                <i className="fa fa-arrow-down"></i>
                                <div className="order-history">№ {number}</div>
                            </div>
                            <div className="order-right-section-body flex-col">
                                <img src="" alt=""/>
                                <div className="">Help us make our service better</div>
                                <button className="order-leave-comment-button">
                                    Leave a comment
                                </button>
                            </div>
                        </div>
                    </div>
                </Fragment>
            );
        }

        return (
            <Fragment>
                <div className="order-left-section flex-col">
                    <div className="order-left-section-header flex-row">
                        <div className="order-details">
                            <div className="order-toggle">
                                <i className="fa fa-arrow-down"></i>
                                <div className="order-number">№ {number}</div>
                            </div>
                            <div className="order-date">
                                {date}
                            </div>
                        </div>
                        <div className="order-summary">
                            summary
                        </div>
                    </div>
                </div>
                <div className="order-right-section flex-col">
                    <div className="order-right-section" className="header">
                        <div className="order-status">
                            {status}
                        </div>
                        <div className="order-history-toggle">
                            <i className="fa fa-arrow-down"></i>
                            <div className="order-history">№ {number}</div>
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

export default userOrder;