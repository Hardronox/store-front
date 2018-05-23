import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import NumberFormat from 'react-number-format';
import { Link } from 'react-router-dom';

import CartItem from './reusable/CartItem';


class CartComponent extends Component {
    componentDidMount() {

    }
    state = {
        openListItem: -1,
    }

    renderItems() {
      return this.props.cart.cartProducts.map(item => {
          return <CartItem
                        item={item}
                        key={item.id}
                        onRemove={this.props.removeItemFromCart}/>
      })
    }

    renderCart() {
        if(this.props.cart.cartProducts.length === 0) {
            return (
                <div className="cart-empty-container">
                    Your shopping cart is empty, but it doesn't have to be.
                    There are lots of great deals and one-of-a-kind items just waiting for you.
                    Start shopping, and look for the "Add to cart" button.
                    You can add several items to your cart from different sellers and pay for them all at once.
                    <ul>
                        <li><a href="#">Start shopping and search for great deals</a></li>
                        <li><a href="#">Go to My eBay and see items that you're watchings</a></li>
                    </ul>
                </div>
            );
        }

        return (
            <div className="cart-items-container">
                {this.renderItems()}
            </div>
        );
    }

    renderAboutListItems() {
        const aboutListItems = [
            {
                title: "Are items in my cart reserved for me?",
                description: "Fixed-price items in your cart will be available to other buyers until you pay for them. Many items on eBay are available in limited quantities, so an item may sell out before you checkout. However, items that you won either by auction or best offer are reserved for you.",
            },
            {
                title: " Why are auction or best offer items in my cart?",
                description: "Some items will appear in your cart because you've committed to buy them, such as items won by auction or because the seller accepted your best offer. These items will be saved in your cart until you pay for them."
            },
            {
                title: "Where can I see the items I'm bidding on?",
                description: "You can see your active auctions at any time in <a href='#'>My eBay</a>. Only auctions that you\'ve won will show up in your cart.",
            },
            {
                title: "If I buy from different sellers, will I need to pay separately?",
                description: "You can pay for purchases with a single payment if each seller accepts your selected payment method. However, if you're purchasing items from sellers who have different payment requirements, you may need to check out more than once."
            },
            {
                title: "Can I pay for items from more than one seller or different types of transactions in one payment?",
                description: "If items from different sellers in your Shopping Cart all accept PayPal, you can pay for all the items in the eBay Shopping Cart with a single payment. You can also pay for different types of transactions (won Auction-style listings, Fixed Price and Best Offer items) all at the same time."
            }
        ];
        return aboutListItems.map((item, i) => {
            return (
                <div
                    className="about-list-item flex-row"
                    onClick={(e) => this.toggleListItem(i)}
                    key={i}
                >
                    <i className={this.getIconClassName(i)} aria-hidden="true"></i>
                    <div className="flex-col">
                        <div className={this.getListItemClassName(i)}>
                            <div>
                                {item.title}
                            </div>
                            <div className="about-description" dangerouslySetInnerHTML={{__html: item.description}}>
                            </div>
                        </div>
                    </div>
                </div>
            );
        })

    }

    toggleListItem(num) {
      if(num === this.state.openListItem) {
          this.setState({openListItem: -1});
      } else {
          this.setState({openListItem: num});
      }
    }

    getListItemClassName(num) {
        return num === this.state.openListItem ? 'open-list-item' : 'closed-list-item';
    }

    getIconClassName(num) {
        return num === this.state.openListItem ? 'fa fa-caret-down' : 'fa fa-caret-right';
    }

    renderItemsNumber() {
        const { cartProducts } = this.props.cart;
        if(cartProducts.length === 1) {
            return `${cartProducts.length} item`;
        } else {
            return `${cartProducts.length} items`;
        }
    }

    render() {
        const { cartProducts } = this.props.cart;
        const totalPrice = cartProducts.reduce((total, item) => {
            return total + item.price
        }, 0) + cartProducts.reduce((total, item) => {
            return total + item.shippingCharge
        }, 0);
        return (
            <Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Notifications Page</title>
                    <meta name="description" content="Your notifications" />
                </Helmet>
                <main className="main-container" role="main">
                    <div className="cart-container flex-col">
                        <div className="cart-header">
                            Your Shopping Cart
                        </div>
                        <div className="cart flex-row">
                            <div className="left-section flex-col">
                                {this.renderCart()}
                            </div>
                            <div className="right-section flex-col">
                                <div className="cart-summary">
                                    <div className="cart-summary-header">
                                        Cart Summary
                                        <sub>({this.renderItemsNumber()})</sub>
                                    </div>
                                    <div className="cart-summary-body flex-col">
                                        <div className="cart-summary-total">
                                            Total:
                                            <NumberFormat
                                                value={totalPrice.toFixed(2)}
                                                displayType={'text'}
                                                thousandSeparator={true}
                                                prefix={' US $'}
                                            />
                                        </div>
                                        <div className="cart-summary-button-container flex-row">
                                            <Link to={`order/12`}>
                                                <button className="cart-summary-button">Proceed To Checkout</button>
                                            </Link>
                                        </div>

                                    </div>
                                    <div className="cart-guarantee">
                                        Covers your purchase price plus original shipping on virtually all items.
                                        Get the item you ordered or get your money back. <a href="#">Learn more</a>
                                    </div>
                                    <div className="cart-about flex-col">
                                        <div className="cart-about-header">
                                            About your cart
                                        </div>
                                        {this.renderAboutListItems()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </Fragment>
        );
    }
}

export default CartComponent;


