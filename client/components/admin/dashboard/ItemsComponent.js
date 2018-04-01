import React from 'react';
import {
  NavLink, Link
} from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Modal from '../../reusable/ModalComponent';

class ItemsComponent extends React.Component {

  constructor(props) {
    super(props);
  }


  componentWillMount() {
    // console.log('taib');
    // console.log(document.getElementById('kek'));
    // console.log(this.props.children);
    // return ReactDOM.createPortal(
    //   <div style={{height: "1400px",width: "1400px",backgroundColor:'gray'}}>KEEEEEEEEEEEEEK</div>,
    //   document.getElementById('modal')
    // );
  }

  search() {
    console.log(this.refs.search.value);
  }

  renderItems = () => {
    const arr = [1,2,3,4,5];

    return arr.map(() => {
      return (
        <li className="item">
          <div className="item-row">
            <div className="item-col fixed item-col-img xs">
              <a href="">
                <div className="item-img xs rounded"
                     style={{backgroundImage: 'url(https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg)'}}/>
              </a>
            </div>
            <div className="item-col item-col-title no-overflow">
              <div>
                <a href="" className="">
                  <h4 className="item-title no-wrap"> 12 Myths Uncovered About IT &amp; Software </h4>
                </a>
              </div>
            </div>
            <div className="item-col item-col-sales">
              <div className="item-heading">Sales</div>
              <div> 4958 </div>
            </div>
            <div className="item-col item-col-stats">
              <div className="item-heading">Stats</div>
              <div className="no-overflow">
                <div className="item-stats sparkline" data-type="bar">
                  Stats
                </div>
              </div>
            </div>
            <div className="item-col item-col-date">
              <div className="item-heading">Published</div>
              <div> 21 SEP 10:45 </div>
            </div>
          </div>
        </li>
      )
    })
  };


  render () {

    return (
      <div className="card sameheight-item items" data-exclude="xs,sm,lg" style={{height: "400px"}}>
        <div className="card-header bordered">
          <div className="header-block">
            <h3 className="title"> Items </h3>
            <Link to="/admin/create-item" className="btn btn-primary btn-sm" > Add new </Link>
          </div>
          <div className="header-block pull-right">
            <label className="search">
              <input className="search-input" placeholder="search..."/>
              <i className="fa fa-search search-icon"/>
            </label>
            <div className="pagination">
              <button className="btn btn-primary btn-sm">
                <i className="fa fa-angle-up"/>
              </button>
              <button className="btn btn-primary btn-sm">
                <i className="fa fa-angle-down"/>
              </button>
            </div>
          </div>
        </div>
        <ul className="item-list striped">
          <li className="item item-list-header">
            <div className="item-row">
              <div className="item-col item-col-header fixed item-col-img xs"/>
              <div className="item-col item-col-header item-col-title">
                <div>
                  <span>Name</span>
                </div>
              </div>
              <div className="item-col item-col-header item-col-sales">
                <div>
                  <span>Sales</span>
                </div>
              </div>
              <div className="item-col item-col-header item-col-stats">
                <div className="no-overflow">
                  <span>Stats</span>
                </div>
              </div>
              <div className="item-col item-col-header item-col-date">
                <div>
                  <span>Published</span>
                </div>
              </div>
            </div>
          </li>
          {this.renderItems()}
        </ul>
      </div>
    );
  }
}

ItemsComponent.propTypes = {
  children: PropTypes.element,
  routing: PropTypes.object,
};

export default ItemsComponent;