import React from 'react';
import {
  NavLink, Link
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Modal from './reusable/ModalComponent';
import { withRouter } from "react-router-dom";

class HeaderComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      registerModalVisibility: false,
      loginModalVisibility: false,
      profileDropdownVisibility: false,
      notificationsDropdownVisibility: false,
      searchDropdownVisibility: false,
      searchOpened: false
    };
  }

  componentWillMount() {
    this.props.getTranslations('en');
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location !== this.props.location) {

      for (let key in this.state) {

        if (this.state[key] && key !== 'searchOpened') {

          if (key === 'searchDropdownVisibility') {
            this.setState({
              searchOpened: !this.state.searchOpened
            });
          }
          this.toggleDropdown(key)
        }
      }
    }
  }

  // get search results for dropdown
  // search request fires every time when you write more than 2 symbols but dropdown opens once
  search(e) {
    if (e.target.value.length > 2) {
      this.props.search(e.target.value);

      if (!this.state.searchOpened) {
        this.toggleDropdown('searchDropdownVisibility');

        this.setState({
          searchOpened: !this.state.searchOpened
        });
      }

    } else if (e.target.value.length <= 2 && this.state.searchDropdownVisibility){
      this.toggleDropdown('searchDropdownVisibility');

      this.setState({
        searchOpened: !this.state.searchOpened
      });
    }

  }

  // when enter pressed
  goToSearchResults = (e) => {
    if (e.target.value.length > 0) {
      if (e.keyCode === 13 || e.which === 13) {
        this.props.history.push(`/search?value=${e.target.value}`);
      }
    }
  };

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

  renderNotifications = () => {

    const products = Array.from(Array(4).keys());

    return products.map((item, i) => {
      return (
        <li key={i}>
          <Link to="" className="notification-item">
            <div className="img-col">
              <div className="img" style={{backgroundImage: 'url(/images/logo.png)'}}/>
            </div>
            <div className="body-col">
              <p>
                <span className="accent">Zack Alien</span> pushed new commit:
                <span className="accent">Fix page load performance issue.</span>
              </p>
            </div>
          </Link>
        </li>
      );
    });
  };

  renderSearchDropdown = () => {

    if (this.state.searchDropdownVisibility) {

      const products = Array.from(Array(6).keys());

      return products.map((item, i) => {
        return (
          <li key={i}>
            <Link to={`item.link`} className="notification-item">
              Item name
            </Link>
          </li>
        );
      });
    }
  };

  logout = (e) => {
    e.preventDefault();
    console.log('logging out');
  };

  renderModal(type) {

    if (this.state[`${type}ModalVisibility`]) {
      return <Modal type={type} changeModalVisibility={this.changeModalVisibility}/>;
    }
  }

  changeModalVisibility = (type) => {
    this.setState({
      [`${type}ModalVisibility`]: !this.state[`${type}ModalVisibility`]
    });
  };

  // toggle different dropdowns depends on type
  toggleDropdown(type) {

    if (!this.state[type]) {
      this.refs[type].classList.add('showDropdown');
    } else {
      this.refs[type].classList.remove('showDropdown');
    }

    this.setState({
      [type]: !this.state[type]
    });
  }

  render () {
    const {cart} = this.props;

    return (
      <header className="header">
        <div className="header-block header-block-collapse d-lg-none d-xl-none">
          <button className="collapse-btn" id="sidebar-collapse-btn">
            <i className="fa fa-bars"/>
          </button>
        </div>
        <div className="sidebar-header">
          <Link to="/">
            <div className="brand">
              <div className="logo">
                <span className="l l1"/>
                <span className="l l2"/>
                <span className="l l3"/>
                <span className="l l4"/>
                <span className="l l5"/>
              </div>
              Awesome Store
            </div>
          </Link>
        </div>
        <div className="header-block header-block-search">
          <div className="input-container">
            <i className="fa fa-search"/>
            <input type="search" placeholder="Search" onChange={(e) => this.search(e)} onKeyPress={(e) => this.goToSearchResults(e)}/>
            <div className="underline"/>
          </div>
          <div className="dropdown-menu search-dropdown" ref="searchDropdownVisibility">
            <ul className="search-container">
              {this.renderSearchDropdown()}
            </ul>
          </div>
        </div>
        <div className="header-block header-block-nav">
          <ul>
            <li className="auth" onClick={() => this.changeModalVisibility('login')}>
              Login
            </li>
            <li className="auth" onClick={() => this.changeModalVisibility('register')}>
              Register
            </li>
          </ul>
          <ul className="nav-profile">
            <li className="notifications new">
              <div className="nav-link" data-toggle="dropdown" onClick={() => this.toggleDropdown('notificationsDropdownVisibility')}>
                <i className="fa fa-bell-o"/>
                <sup>
                  <span className="counter">8</span>
                </sup>
              </div>
              <div className="dropdown-menu notifications-dropdown-menu" ref="notificationsDropdownVisibility">
                <ul className="notifications-container">
                  {this.renderNotifications()}
                </ul>
                <footer>
                  <ul>
                    <li>
                      <Link to="/user/12/notifications"> View All </Link>
                    </li>
                  </ul>
                </footer>
              </div>
            </li>
            <li className="cart new">
              <div className="nav-link">
                <Link to="/cart" className="dropdown-item">
                  <i className="fa fa-shopping-cart"/> {(cart.cartProducts.length !== 0) ? cart.cartProducts.length : null}
                </Link>
              </div>
            </li>
            <li className="profile dropdown">
              <div className="nav-link" data-toggle="dropdown" onClick={() => this.toggleDropdown('profileDropdownVisibility')}>
                <div className="img" style={{backgroundImage: 'url(https://avatars3.githubusercontent.com/u/3959008?v=3&amp;s=40)'}}/>
                <span className="name"> John Doe </span>
              </div>
              <div className="dropdown-menu profile-dropdown-menu" aria-labelledby="dropdownMenu1" ref="profileDropdownVisibility">
                <Link className="dropdown-item" to="/user/12/profile">
                  <i className="fa fa-user icon"/> Profile
                </Link>
                <Link className="dropdown-item" to="/user/12/my-orders">
                  <i className="fa fa-list-alt icon"/> My orders
                </Link>
                <Link className="dropdown-item" to="/user/12/settings">
                  <i className="fa fa-gear icon"/> Settings
                </Link>
                <div className="dropdown-divider"/>
                <Link className="dropdown-item" to="/" onClick={(e) => this.logout(e)}>
                  <i className="fa fa-power-off icon"/> Logout
                </Link>
              </div>
            </li>
          </ul>
        </div>
        {this.renderModal('login')}
        {this.renderModal('register')}
      </header>
    );
  }
}

HeaderComponent.propTypes = {
  children: PropTypes.element,
  routing: PropTypes.object,
};

export default withRouter(HeaderComponent);