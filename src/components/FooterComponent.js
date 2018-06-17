import React from 'react';
import {
  NavLink, Link
} from 'react-router-dom';
import PropTypes from 'prop-types';

class FooterComponent extends React.Component {

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
      <footer className="main-footer">
        <div className="navbar-left">
          <Link to="">
            About Us
          </Link>
        </div>

        <div className="search">
          <Link to="">
            Contact Us
          </Link>
        </div>

        <div className="navbar-right">
          All rights reserved.
        </div>
      </footer>
    );
  }
}

FooterComponent.propTypes = {
  children: PropTypes.element,
  routing: PropTypes.object,
};

export default FooterComponent;