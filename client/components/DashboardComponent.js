import React from 'react';
import PropTypes from 'prop-types';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class DashboardComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      productsProfileArray: []
    };
  }

  search = () => {
    this.props.getProducts(this.refs.search.value || 'hello');
  };

  addProduct = (key) => {
    let {productsProfileArray} = this.state;

    productsProfileArray.push(this.props.searchResult[key]);

    this.setState({
      ...this.state,
      productsProfileArray: productsProfileArray
    })
  };

  removeProduct = (key) => {
    let {productsProfileArray} = this.state;

    productsProfileArray.splice(key, 1);

    this.setState({
      ...this.state,
      productsProfileArray: productsProfileArray
    })
  };

  renderProducts = () => {

    let result;
    if (this.props.searchResult.length !== 0 && !this.props.searchResult[0].hasOwnProperty('Error')) {

      result = this.props.searchResult.map((item, index) => {
        return (
          <div className="result" key={index}>
            <div className="col-md-3 product-image">
              <img src={(item && item.SmallImage && item.SmallImage[0].URL[0]) || 'https://www.tm-town.com/assets/default_male300x300-aae6ae0235b6cd78cee8df7ae19f6085.png'} alt=""
                   className="image"/>
            </div>
            <div className="col-md-7 product-text">
              {item && item.ItemAttributes[0].Title[0].substr(0,30)+'...'  || 'https://www.tm-town.com/assets/default_male300x300-aae6ae0235b6cd78cee8df7ae19f6085.png'}
            </div>
            <div className="col-md-2 product-add" onClick={() => this.addProduct(index)}>
              +
            </div>
          </div>
        );
      });
    } else {
      result = 'No items in the search list :(';
    }

    return result;
  };

  renderProfileProducts = () => {

    let result;
    if (this.props.searchResult.length !== 0 && !this.props.searchResult[0].hasOwnProperty('Error')) {

      result = this.state.productsProfileArray.map((item, index) => {
        return (
          <div className="product" key={index}>
            <div className="col-md-3 product-image">
              <img src={(item && item.SmallImage && item.SmallImage[0].URL[0]) || 'https://www.tm-town.com/assets/default_male300x300-aae6ae0235b6cd78cee8df7ae19f6085.png'} alt=""
                   className="image"/>
            </div>
            <div className="col-md-7 product-text">
              {item && item.ItemAttributes[0].Title[0].substr(0,30)+'...'  || 'https://www.tm-town.com/assets/default_male300x300-aae6ae0235b6cd78cee8df7ae19f6085.png'}
            </div>
            <div className="col-md-2 product-remove" onClick={() => this.removeProduct(index)}>
              -
            </div>
          </div>
        );
      });
    } else {
      result = 'No items in the profile list :(';
    }

    return result;
  };

  render() {

    const style = {
      position: 'relative',
      top: '28px',
      left: '-28px'
    };

    return (
      <MuiThemeProvider>

        <div className="container">
          <div className="row" >
            <div className="whole-container">
              <FloatingActionButton secondary={true} style={style}>
                <span className="round-button-span">B</span>
              </FloatingActionButton>

              <div className="main-block">
                <div className="header">
                  <div className="text-block">
                    <span className="text-1">Create your product profile</span>
                    <br/>
                    <span className="text-2">Search for products you own so your beautystreamer knows what you have</span>
                  </div>
                  <div className="button pull-right">
                    <RaisedButton label="Save and Continue" primary={true} />
                  </div>
                </div>
                <div className="content">
                  <div className="col-md-6 search">
                    <div className="search-block">
                      <div className="search-input" >
                        <input type="text" ref="search"/>
                      </div>
                      <div className="search-glyphicon" onClick={this.search}>
                        <span className="glyphicon glyphicon-search search-glyph"/>
                      </div>
                    </div>
                    <div className="search-results">
                      {this.renderProducts()}
                    </div>
                  </div>
                  <div className="col-md-5 col-md-offset-1 profile">

                    <div className="profile-header">
                      Your product profile:
                    </div>
                    <div className="product-list">
                      {this.renderProfileProducts()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

DashboardComponent.propTypes = {
  children: PropTypes.element,
};

export default DashboardComponent;
