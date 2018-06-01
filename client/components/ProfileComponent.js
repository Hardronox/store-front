import React, { Component, Fragment }  from 'react';
import PropTypes from 'prop-types';
import { Link, Switch, Route } from 'react-router-dom';
import Product from './reusable/ProductComponent';
import Slider from './reusable/SliderComponent';
import { Helmet } from 'react-helmet';
import MailingComponent from './MailingComponent';
import PersonalInfoComponent from "./PersonalInfoComponent";
import ViewedProductsContainer from "../containers/ViewedProductsContainer";

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
      {title: "Products that I viewed", to: "/user/12/profile/viewed"},
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
            <main className="main-container profile-container container-fluid" role="main">
                <div className="row">
                  <div className="col-md-3">
                    <ul className="profile-menu" id="sidebar-menu">
                      {this.renderMenu()}
                    </ul>
                  </div>

                    <Switch>
                        <Route exact path={`${match.url}`} component={PersonalInfoComponent} />
                        <Route path={`${match.url}/mailings`} component={MailingComponent} />
                        <Route path={`${match.url}/viewed`} component={ViewedProductsContainer} />
                    </Switch>

                    <div className="col-md-2">
                        <div className="profile-actions">
                            <Link to="">Edit personal information</Link>
                            <Link to="">Change password</Link>
                            <Link to="">Log out</Link>
                        </div>
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
