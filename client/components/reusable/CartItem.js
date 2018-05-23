import React from 'react';
import DescriptionItem from './DescriptionItem';
import NumberFormat from 'react-number-format';

const CartItem = (props) => {
  const {item} = props;

  const renderDescription = () => {
    return Object.entries(item.description).map(([k, v], i) => {
      return <DescriptionItem title={k} value={v} key={i} />;
    });
  };
  return (
    <div className="cart-item flex-col">
      <div className="cart-item-header flex-row space-between">
        <div className="item-seller">
                    Seller:
          <span>
            {` ${item.seller}`}
          </span>

        </div>
        <div className="flex-row centered">
          <div className="item-header-buttons">
            <button className="item-header-button">
                            Pay only this seller
            </button>
            <button className="item-header-button" disabled>
                            Request total from seller
            </button>
          </div>
          <div className="item-header-info">
            <i className="fa fa-info-circle" aria-hidden="true"></i>
          </div>
        </div>

      </div>
      <div className="cart-item-body flex-row">
        <div className="item-image-container flex-col">
          <img src={item.image} alt="item image" className="item-image"/>
        </div>
        <div className="item-description-container flex-col">
          <div className="item-title">
            {item.title}
          </div>
          <div className="item-description flex-col">
            {renderDescription()}
          </div>
        </div>
        <div className="item-price-container flex-col">
          <div className="flex-row">
            <div className="item-quantity">
                            Quantity: {item.quantity}
            </div>
            <div className="item-price">
              <NumberFormat value={item.price} displayType={'text'} thousandSeparator={true} prefix={'US $'} />
            </div>
          </div>

          <div className="flex-row">
            <div className="item-shipping flex-col">
                            Expedited
              <span>Expedited International Shipping</span>
            </div>
            <div className="item-shipping-price">
              <NumberFormat value={item.shippingCharge} displayType={'text'} thousandSeparator={true} prefix={'+US $'} />
            </div>
          </div>

        </div>
      </div>
      <div className="cart-item-footer flex-row">
        <div className="cart-item-buttons">
          <button className="btn btn-link" onClick={() => props.onRemove(item.id)}>Remove</button>
          <button className="btn btn-link">Save for later</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
