import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Product from './reusable/ProductComponent';
import Slider from './reusable/SliderComponent';
import NumberPicker from './reusable/NumberPicker';
import Comment from './reusable/Comment';
import DescriptionItem from './reusable/DescriptionItem';

class ProductInfoComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quantityValue: 1,
        selectedTab: 1
    };
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  renderProducts = () => {

    const products = Array.from(Array(10).keys());

    return products.map((item, i) => {
      return <Product key={i} />;
    });
  };

  imageHover(key) {
    console.log(key);
    const images = Array.from(Array(5).keys());
    images.forEach((item, i) => {
      this.refs[`image${i}`].style.border = 'none';
    });

    this.refs[`image${key}`].style.border = '1px solid greenyellow';
  }

  renderImageSet() {
    const products = Array.from(Array(5).keys());

    return products.map((item, i) => {
      return (
        <div key={i} ref={`image${i}`} onMouseOver={() => this.imageHover(i)}>

        </div>
      );
    });
  }

  addToCart = () => {
    this.props.addItemToCart({productId: 12, quantity: this.state.quantityValue});
  };

  updateNumberPicker = (type) => {

    if (type) {
      this.setState({
        quantityValue: this.state.quantityValue + 1
      });
    } else {
      if (this.state.quantityValue > 1) {
        this.setState({
          quantityValue: this.state.quantityValue - 1
        });
      }
    }
  };

  selectTab = (tabSelector) => {
      const tab = document.getElementsByClassName(tabSelector)[0];
      if(tab.classList.contains('selected')) {
          console.log('immediattwe');
          return;
      }
      const general = document.getElementsByClassName('product-description-general')[0];
      const complete = document.getElementsByClassName('product-description-complete')[0];
      const generalButton  = document.getElementsByClassName('select-general-button')[0];
      const completeButton  = document.getElementsByClassName('select-complete-button')[0];
      if(tab === general) {
          complete.classList.remove('selected');
          completeButton.classList.remove('active');
          general.classList.add('selected');
          generalButton.classList.add('active');
      } else {
          general.classList.remove('selected');
          generalButton.classList.remove('active');
          complete.classList.add('selected');
          completeButton.classList.add('active');
      }
  }

  renderComments() {
    const comments = [
        {   author: 'author',
            rating: 3,
            date: 'today',
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
            pros: 'b illo inventore veritatis et quasi a',
            cons: 'b illo inventore veritatis et quasi a',
            replies: [
                {
                    author: 'author',
                    date: 'yesterday',
                    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'
                },
                {
                    author: 'author',
                    date: 'yesterday',
                    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'
                },
                {
                    author: 'author',
                    date: 'yesterday',
                    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'
                },
            ]
        },
        {   author: 'author',
            rating: 5,
            date: 'today',
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
            pros: 'b illo inventore veritatis et quasi a',
            cons: 'b illo inventore veritatis et quasi a'
        },
        {   author: 'dedsed',
            rating: 4.5,
            date: 'today',
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
            pros: 'b illo inventore veritatis et quasi a',
            cons: 'b illo inventore veritatis et quasi a',
            replies: [
                {
                    author: 'author',
                    date: 'yesterday',
                    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'
                },
                {
                    author: 'author',
                    date: 'yesterday',
                    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'
                },
            ]
        },
        {   author: 'author',
            rating: 1,
            date: 'today',
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
            pros: 'b illo inventore veritatis et quasi a',
            cons: 'b illo inventore veritatis et quasi a'
        },
        {   author: 'author',
            rating: 5,
            date: 'today',
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
            pros: 'b illo inventore veritatis et quasi a',
            cons: 'b illo inventore veritatis et quasi a'
        }
    ];
    return comments.map((comment, i) => {
      return <Comment comment={comment} key={i} />
        }
      );
  }

  renderDescriptionItem() {
      const itemDescritpion = {
              "Memory": "dddd",
              "Screen": "dddw3dewds",
              "3G": "yes",
              "bla": "blabla"
          };

      return Object.entries(itemDescritpion).map(([k, v], i) => {
          return <DescriptionItem title={k} value={v} key={i} />
      });

  }

  render() {

    const slides = [
      {image:'https://keddr.com/wp-content/uploads/2014/08/main.png', name: 'abir', price: 17000},
      {image:'http://www.aimp.ru/forum/index.php?action=dlattach;topic=51447.0;attach=45661', name: 'tabi pizda', price: 7520},
      {image:'https://i.ytimg.com/vi/C5wBkVrZAbo/maxresdefault.jpg', name: 'woah woah', price: 2000},
      {image:'https://i.ytimg.com/vi/C5wBkVrZAbo/maxresdefault.jpg', name: 'woah woah', price: 2000},
      {image:'http://www.aimp.ru/forum/index.php?action=dlattach;topic=51447.0;attach=45661', name: 'tabi pizda', price: 7500},
      {image:'http://www.atozpromotions.co.uk/wp-content/uploads/2016/05/android-5-lollipop-red-black-abstract-material-design-line-stripes-2560x1600.jpg', name: 'Holy Guacamole', price: 10000},
    ];


    const descriptionComplete = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et nulla eros. Donec ultrices tellus lectus,
     eget congue mauris maximus sit amet. Duis et enim ut lacus scelerisque viverra. Sed vehicula commodo neque, et bibendum odio fringilla sit amet. 
     Vivamus sed odio commodo, vehicula mi ac, elementum metus. Nam sit amet tincidunt mi, a porta elit. Mauris accumsan dictum nisl at mollis.
     Pellentesque vitae dignissim elit. Praesent ut eros euismod, pellentesque purus nec, iaculis justo. Suspendisse in mauris nec quam rhoncus
      volutpat. Duis tristique mi quis bibendum bibendum. Sed aliquet convallis ipsum, eget eleifend quam pharetra sit amet. Donec in diam dui. 
      Sed mollis dapibus elit eu semper. Mauris a sapien id elit gravida mattis quis sed eros. Ut et est aliquet sem pulvinar sodales. 
      Integer auctor ultrices porttitor.`

    return (
      <main className="main-container" role="main">
         <h1>Product Title</h1>
          <div className="row product-info">
            <div className="image-set">
              {this.renderImageSet()}
            </div>
            <div className="col-md-6 info-image">
              <img ref="main-image" src={slides[0].image} alt={slides[0].name} />
            </div>
            <div className="col-md-5 general-info">
              <div className="general-info-container">
                <div>
                  <div>Delivery</div>
                  <div>
                    <span>Special proposition:</span><br/>
                    <span>Get this item with 25% off. Ends in 18 hours</span>
                  </div>
                </div>
              </div>
              <div className="general-info-container">
                <div>
                  <div>Price</div>
                  <div>200$</div>
                </div>
                <div>
                  <div>Delivery</div>
                  <div>
                    <span>Free shipping in your country using Local Air Mail</span><br/>
                    <span>Approximate shipping time: 25 days</span>
                  </div>
                </div>
                <div>
                  <div>Quantity</div>
                  <NumberPicker value={this.state.quantityValue} onValueChange={this.updateNumberPicker} />
                </div>
                <div>
                  <div>Total price</div>
                  <div>2</div>
                </div>
                <div className="buy-buttons">
                  <button className="btn btn-primary" onClick={this.addToCart}>
                    <i className="fa fa-cart-arrow-down"/> Add to cart
                  </button>
                  <Link to="/order/12" className="btn btn-success">Buy now</Link>
                </div>
              </div>
            </div>
          </div>
          <h1>Recomended</h1>
          <div className="small-slider-container">
            <Slider slides={slides} size="small" showInfo={true} slidesPerView={5}/>
          </div>
        <div className="flex-row space-between">
          <div className="product-description-container flex-col">
            <div className="product-description-header flex-col">
                <div className="product-description-title">
                    Technical Characteristics:
                </div>
                <div className="product-description-buttons flex-row">
                  <button
                      onClick={() => this.selectTab('product-description-general')}
                      className="select-general-button active">
                      General
                  </button>
                  <button
                      onClick={() => this.selectTab('product-description-complete')}
                      className="select-complete-button"
                  >All characteristics</button>
                </div>
            </div>
            <div className="product-description flex-col">
              <div className="product-description-general selected flex-col"
                >
                  {this.renderDescriptionItem()}
              </div>
              <div className="product-description-complete"
              >
                  {descriptionComplete}
              </div>
            </div>
          </div>
          <div className="comments-container flex-col">
              <div className="comments-header"></div>
              <div>{this.renderComments()}</div>
          </div>
        </div>
      </main>

    );
  }
}

ProductInfoComponent.propTypes = {
  children: PropTypes.element,

};

export default ProductInfoComponent;
