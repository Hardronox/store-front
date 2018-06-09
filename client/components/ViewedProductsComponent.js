import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import NumberFormat from 'react-number-format';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class MyComponent extends Component {

    renderCategories() {
        const { viewedCategories } = this.props;
        return Object.entries(viewedCategories).map(([key, value]) => {
            return (
              <div className="viewed-products-category" key={key}>
                  {key}<span className="category-number">({value})</span>
              </div>
            )
        });
    }

    renderProducts() {
        const { viewedProducts } = this.props;
        return viewedProducts.map((product, i) => {
            const ratingConfig = {
                count: 5,
                half: true,
                value: product.rating,
                color: '#ffd700',
                edit: false,
                size: 15
            };
            return (
              <div className="viewed-product flex-col" key={product.id}>
                  <button
                      className="viewed-product-delete-button"
                      onClick={() => this.deleteViewedProduct(product.id)}
                  ></button>
                  { product.discount > 0 && <div className="viewed-product-discount-alert">On sale</div> }
                  <div className="viewed-product-image-container flex-row">
                      <img className="viewed-product-image" src={product.src} />
                  </div>
                  <div className="viewed-product-title">
                          {product.title}
                  </div>
                  <div className="viewed-product-footer flex-row">
                      {this.renderPrice(product)}
                      <div className="viewed-product-rating">
                          <ReactStars {...ratingConfig} />
                      </div>
                      <div className="viewed-product-comments">
                          {product.comments} comments
                      </div>
                      <div className='viewed-product-like' onClick={() => this.toggleProductLike(product.id)}>
                          <i className={product.liked ? "fa fa-heart" : "fa fa-heart-o"} aria-hidden="true"></i>
                      </div>
                  </div>
              </div>
            );
        })
    }

    renderPrice(product) {
        const pricePrefix = "$";
        if(product.discount > 0) {
            const discountPrice = ((product.price * product.discount) / 100).toFixed(0);
            return (
                <div className="viewed-product-price flex-col">
                    <NumberFormat
                        value={product.price}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={pricePrefix}
                        className="old-price"
                    />
                    <NumberFormat
                        value={discountPrice}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={pricePrefix}
                        className="new-price"
                    />
                </div>
            );
        }
        return (
            <div className="viewed-product-price flex-col">
                <NumberFormat
                    value={product.price}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={pricePrefix}
                    className="price"
                />
            </div>
        );
    }

    toggleProductLike(id) {
        this.props.toggleProductLike(id);
    }
    deleteViewedProduct(id) {
        this.props.deleteViewedProduct(id);
    }
    render() {
        return (
            <div className="viewed-products-container col-md-7">
                <div className="viewed-products-header flex-row">
                    <div className="viewed-products-title">
                        Products you've viewed
                    </div>
                    <div className="viewed-products-clear">
                        <button className="viewed-products-clear-button">
                            Clear all
                        </button>
                    </div>
                </div>
                <div className="viewed-products-categories flex-row">
                    {this.renderCategories()}
                </div>
                <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={700}
                    transitionLeaveTimeout={700}
                    className="viewed-products flex-row">
                    {this.renderProducts()}
                    </ReactCSSTransitionGroup>
            </div>
        );
    }
}

MyComponent.propTypes = {};

export default MyComponent;
