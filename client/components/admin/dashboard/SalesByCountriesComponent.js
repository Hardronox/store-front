import React from 'react';
import {
  NavLink, Link
} from 'react-router-dom';
import PropTypes from 'prop-types';

class SalesByCountriesComponent extends React.Component {

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
      <div className="card sameheight-item" data-exclude="xs,sm" style={{height: '490px'}}>
        <div className="card-header">
          <div className="header-block">
            <h3 className="title"> Sales by countries </h3>
          </div>
        </div>
        <div className="card-block">

        </div>
      </div>
    );
  }
}

SalesByCountriesComponent.propTypes = {
  children: PropTypes.element,
  routing: PropTypes.object,
};

export default SalesByCountriesComponent;