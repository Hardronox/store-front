import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Product from './reusable/ProductComponent';
import Slider from './reusable/SliderComponent';

class ProfileComponent extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  renderMenu = () => {

    const links = [
      {title: "My profile", to: "/user/12/profile"},
      {title: "Wishlist", to: "/user/12/profile"},
      {title: "Cart", to: "/user/12/profile"},
      {title: "My orders", to: "/user/12/profile"},
      {title: "My reviews/comments", to: "/user/12/profile"},
      {title: "Products that I viewed", to: "/user/12/profile"},
      {title: "Mailing", to: "/user/12/profile"},
    ];

    return links.map((item, i) => {
      return (
        <li key={i} className="profile-menu-item">
          <Link to={item.to} className="novisited profile-m-link">
            <span className="profile-menu-item-title">{item.title}</span>
          </Link>
        </li>
      );
    });
  };


  render() {

    return (
      <main className="main-container profile-container" role="main">
        <div className="col-md-3 offset-md-1">
          <ul className="profile-menu" id="sidebar-menu">
            {this.renderMenu()}
          </ul>
        </div>
        <div className="col-md-7">
          <h2>Personnel information</h2>
          <div className="profile-info">
            <div className="info-item">
              <div className="info-item-title">Имя</div>
              <div className="info-item-field">
                <div className="profile-info-l-i-text">
                  Пинчук Александр
                </div>
              </div>
            </div>
            <div className="info-item">
              <div className="info-item-title">Электронная почтa</div>
              <div className="info-item-field">
                <div className="profile-info-l-i-text">
                  sanya.chuck@mail.ru
                </div>
              </div>
            </div>
            <div className="info-item">
              <div className="info-item-title">Телефон</div>
              <div className="info-item-field">
                <span className="profile-info-l-i-text profile-info-l-i-text-indent">
                  +380 (50) 361-29-86
                </span>&nbsp;
                <a href="#" className="profile-info-l-i-link xhr novisited">Подтвердить номер</a>
              </div>
            </div>
            <div className="info-item">
              <div className="info-item-title">Адрес для доставок</div>
              <div className="info-item-field">

                <div className="profile-info-l-i-text">
                  Запорожье Запорожская обл. Запорожье р-н
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="profile-actions">
            <Link to="">Edit personnel information</Link>
            <Link to="">Change password</Link>
            <Link to="">Log out</Link>
          </div>
        </div>
      </main>
    );
  }
}

ProfileComponent.propTypes = {
  children: PropTypes.element,

};

export default ProfileComponent;
