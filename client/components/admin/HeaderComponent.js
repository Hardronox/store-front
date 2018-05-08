import React from 'react';
import {
  NavLink, Link
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Modal from '../reusable/ModalComponent';

class HeaderComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      registerModalVisibility: false,
      loginModalVisibility: false,
      profileDropdownVisibility: false,
      notificationsDropdownVisibility: false,
    };
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
                <span className="accent">Fix page load performance issue</span>. </p>
            </div>
          </Link>
        </li>
      );
    });
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
    console.log(this.state);
    this.setState({
      [`${type}ModalVisibility`]: !this.state[`${type}ModalVisibility`]
    });
  };

  toggleDropdown(type) {

    if (!this.state[`${type}DropdownVisibility`]) {
      this.refs[type].classList.add('showDropdown');
    } else {
      this.refs[type].classList.remove('showDropdown');
    }

    this.setState({
      [`${type}DropdownVisibility`]: !this.state[`${type}DropdownVisibility`]
    });
  }

  render () {

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
          <form role="search">
            <div className="input-container">
              <i className="fa fa-search"/>
              <input type="search" placeholder="Search"/>
              <div className="underline"/>
            </div>
          </form>
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
              <div className="nav-link" data-toggle="dropdown" onClick={() => this.toggleDropdown('notifications')}>
                <i className="fa fa-bell-o"/>
                <sup>
                  <span className="counter">8</span>
                </sup>
              </div>
              <div className="dropdown-menu notifications-dropdown-menu" ref="notifications">
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
            <li className="notifications new">
              <div className="nav-link" data-toggle="dropdown">
                <i className="fa fa-shopping-cart"/> {(this.props.cart.cartProducts.length !== 0) ? this.props.cart.cartProducts.length : null}
              </div>
            </li>
            <li className="profile dropdown">
              <div className="nav-link" data-toggle="dropdown" onClick={() => this.toggleDropdown('profile')}>
                <div className="img" style={{backgroundImage: 'url(https://avatars3.githubusercontent.com/u/3959008?v=3&amp;s=40)'}}> </div>
                <span className="name"> John Doe </span>
              </div>
              <div className="dropdown-menu profile-dropdown-menu" aria-labelledby="dropdownMenu1" ref="profile">
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

export default HeaderComponent;