import React from 'react';
import {
  NavLink, Link
} from 'react-router-dom';
import PropTypes from 'prop-types';

class HeaderComponent extends React.Component {

  constructor(props) {
    super(props);
  }


  componentWillMount() {

  }

  search() {
    console.log(this.refs.search.value);
  }

  renderAuthorization = () => {

    let content = [
      <div key="login">
        <Link to="">Login</Link>
      </div>
    ];

    if (localStorage.getItem('user')) {
      content = [
        <div key="user">
          <Link to="">Hello, user</Link>
        </div>,
        <div key="logout">
          <Link to="">Logout</Link>
        </div>
      ];

    }

    return (
      <div className="authorization">
        {content}
      </div>
    );
  };

  render () {

    return (
        <div className="header">
          <div className="navbar-left">
            <Link to="">
              <img className="logo" src="/images/logo.png" alt=""/>
            </Link>
          </div>

          <div className="search">
            <input type="text"/>
            <button className="btn btn-secondary">Search</button>
          </div>

          <div className="navbar-right">
            {this.renderAuthorization()}
            <Link to="">
              <i className="fa fa-shopping-basket" aria-hidden="true"/>Basket
            </Link>
          </div>
        </div>
    );
  }
}

HeaderComponent.propTypes = {
  children: PropTypes.element,
  routing: PropTypes.object,
};

export default HeaderComponent;