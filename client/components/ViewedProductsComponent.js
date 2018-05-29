import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import NumberFormat from 'react-number-format';

class MyComponent extends Component {

    renderCategories() {
        console.log(32434);
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

        return Object.entries(categories).map(([key, value]) => {
            return (
              <div className="viewed-products-category" key={key}>
                  {key}<span className="category-number">({value})</span>
              </div>
            )
        });
    }

    renderProducts() {
        const products = [
            {
                src: 'http://cdn1-www.dogtime.com/assets/uploads/gallery/cardigan-welsh-corgi/olderderp-6_680-453.jpg',
                title: "Apple MacBook Pro 15 (2016) i7-6920HQ/16GB/512G SSD/Touch Bar/Radeon Pro 460 4GB",
                price: 2199,
                rating: 3.5,
                comments: 2342,
                discount: 50,
                liked: false
            },
            {
                src: 'http://cdn1-www.dogtime.com/assets/uploads/gallery/cardigan-welsh-corgi/olderderp-6_680-453.jpg',
                title: "Apple MacBook Pro 15 (2016) i7-6920HQ/16GB/512G SSD/Touch Bar/Radeon Pro 460 4GB",
                price: 2199,
                rating: 3.5,
                comments: 2342,
                discount: 0,
                liked: false
            },
            {
                src: 'http://cdn1-www.dogtime.com/assets/uploads/gallery/cardigan-welsh-corgi/olderderp-6_680-453.jpg',
                title: "Apple MacBook Pro 15 (2016) i7-6920HQ/16GB/512G SSD/Touch Bar/Radeon Pro 460 4GB",
                price: 2199,
                rating: 3.5,
                comments: 2342,
                discount: 15,
                liked: false
            },
            {
                src: 'http://cdn1-www.dogtime.com/assets/uploads/gallery/cardigan-welsh-corgi/olderderp-6_680-453.jpg',
                title: "Apple MacBook Pro 15 (2016) i7-6920HQ/16GB/512G SSD/Touch Bar/Radeon Pro 460 4GB",
                price: 2199,
                rating: 3.5,
                comments: 2342,
                discount: 0,
                liked: false
            },
            {
                src: 'http://cdn1-www.dogtime.com/assets/uploads/gallery/cardigan-welsh-corgi/olderderp-6_680-453.jpg',
                title: "Apple MacBook Pro 15 (2016) i7-6920HQ/16GB/512G SSD/Touch Bar/Radeon Pro 460 4GB",
                price: 2199,
                rating: 3.5,
                comments: 2342,
                discount: 0,
                liked: false
            },
            {
                src: 'http://cdn1-www.dogtime.com/assets/uploads/gallery/cardigan-welsh-corgi/olderderp-6_680-453.jpg',
                title: "Apple MacBook Pro 15 (2016) i7-6920HQ/16GB/512G SSD/Touch Bar/Radeon Pro 460 4GB",
                price: 2199,
                rating: 3.5,
                comments: 2342,
                discount: 0,
                liked: false
            },
            {
                src: 'http://cdn1-www.dogtime.com/assets/uploads/gallery/cardigan-welsh-corgi/olderderp-6_680-453.jpg',
                title: "Apple MacBook Pro 15 (2016) i7-6920HQ/16GB/512G SSD/Touch Bar/Radeon Pro 460 4GB",
                price: 2199,
                rating: 3.5,
                comments: 2342,
                discount: 0,
                liked: false
            },
            {
                src: 'http://cdn1-www.dogtime.com/assets/uploads/gallery/cardigan-welsh-corgi/olderderp-6_680-453.jpg',
                title: "Apple MacBook Pro 15 (2016) i7-6920HQ/16GB/512G SSD/Touch Bar/Radeon Pro 460 4GB",
                price: 2199,
                rating: 3.5,
                comments: 2342,
                discount: 0,
                liked: false
            },
        ];

        return products.map((product, i) => {
            const ratingConfig = {
                count: 5,
                half: true,
                value: product.rating,
                color: '#ffd700',
                edit: false
            };
            return (
              <div className="viewed-product flex-col" key={i}>
                  <button className="viewed-product-delete-button"></button>
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
                      <div className="viewed-product-like">
                          {product.liked}
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
                <div className="viewed-products flex-row">
                    {this.renderProducts()}
                </div>
            </div>
        );
    }
}

MyComponent.propTypes = {};

export default MyComponent;
