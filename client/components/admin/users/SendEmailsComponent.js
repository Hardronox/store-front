import React from 'react';
import {
  NavLink, Link
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Pagination from "react-js-pagination";

class SendEmailsComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activePage: 15
    }
  }


  componentWillMount() {

  }

  handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }

  search() {
    console.log(this.refs.search.value);
  }

  renderItems = () => {
    const arr = [1,2,3,4,5];

    return arr.map((item, i) => {
      return (
        <li className="item" key={i}>
          <div className="item-row">
            <div className="item-col fixed item-col-check">
              <label className="item-check" id="select-all-items">
                <input type="checkbox" className="checkbox"/>
                <span/>
              </label>
            </div>

            <div className="item-col fixed item-col-actions-dropdown">
              <div className="item-actions-dropdown">
                <a className="item-actions-toggle-btn">
                      <span className="inactive">
                          <i className="fa fa-cog"/>
                      </span>
                  <span className="active">
                          <i className="fa fa-chevron-circle-right"/>
                      </span>
                </a>
              </div>
            </div>
          </div>
        </li>
      )
    })
  };


  handlePageClick = (data) => {
    let selected = data.selected;
    let offset = Math.ceil(selected * this.props.perPage);

    this.setState({offset: offset}, () => {
      this.loadCommentsFromServer();
    });
  };

  render () {

    return (
      <article className="content items-list-page">
        <div className="title-search-block">
          <div className="title-block">
            <div className="row">
              <div className="col-md-6">
                <h3 className="title"> Items
                  <Link to="/admin/create-item" className="btn btn-primary btn-sm rounded-s"> Add New </Link>
                  <div className="action dropdown">
                    <button className="btn  btn-sm rounded-s btn-secondary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> More actions... </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
                      <a className="dropdown-item" href="#">
                        <i className="fa fa-pencil-square-o icon"/>Mark as a draft</a>
                      <a className="dropdown-item" href="#" data-toggle="modal" data-target="#confirm-modal">
                        <i className="fa fa-close icon"/>Delete</a>
                    </div>
                  </div>
                </h3>
                <p className="title-description"> List of sample items - e.g. books, movies, events, etc... </p>
              </div>
            </div>
          </div>
          <div className="items-search">
            <form className="form-inline">
              <div className="input-group">
                <input type="text" className="form-control boxed rounded-s" placeholder="Search for..."/>
                  <span className="input-group-btn">
                      <button className="btn btn-secondary rounded-s" type="button">
                          <i className="fa fa-search"/>
                      </button>
                  </span>
              </div>
            </form>
          </div>
        </div>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
          itemClass="page-item"
          activeClass="active"
          linkClass="page-link"
          // activeLinkClass
        />
      </article>
    );
  }
}

SendEmailsComponent.propTypes = {
  children: PropTypes.element,
  routing: PropTypes.object,
};

export default SendEmailsComponent;

