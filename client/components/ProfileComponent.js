import React, { Component, Fragment }  from 'react';
import PropTypes from 'prop-types';
import { Link, Switch, Route } from 'react-router-dom';
import Product from './reusable/ProductComponent';
import Slider from './reusable/SliderComponent';
import { Helmet } from 'react-helmet';
import MailingComponent from './MailingComponent';
import PersonalInfo from "./PersonalInfo";

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
      {title: "Mailing", to: `${this.props.match.url}/mailings`},
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
      const {match} = this.props;
      console.log(match);
      return (
        <Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Profile</title>
                <meta name="description" content="User profile" />
            </Helmet>
            <main className="main-container profile-container" role="main">
              <div className="col-md-3 offset-md-1">
                <ul className="profile-menu" id="sidebar-menu">
                  {this.renderMenu()}
                </ul>
              </div>

                <Switch>
                    <Route exact path={`${match.url}`} component={PersonalInfo} />
                    <Route path={`${match.url}/mailings`} component={MailingComponent} />
                </Switch>

                <div className="col-md-4">
                    <div className="profile-actions">
                        <Link to="">Edit personnel information</Link>
                        <Link to="">Change password</Link>
                        <Link to="">Log out</Link>
                    </div>
                </div>
            </main>
        </Fragment>
    );
  }
}

ProfileComponent.propTypes = {
  children: PropTypes.element,

};

export default ProfileComponent;
