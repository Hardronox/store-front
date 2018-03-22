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
      <div className="card sameheight-item" data-exclude="xs" id="dashboard-history" style={{height: "322px"}}>
        <div className="card-header card-header-sm bordered">
          <div className="header-block">
            <h3 className="title">History</h3>
          </div>
          <ul className="nav nav-tabs pull-right" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" href="#visits" role="tab" data-toggle="tab">Visits</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#downloads" role="tab" data-toggle="tab">Downloads</a>
            </li>
          </ul>
        </div>
        <div className="card-block">
          <div className="tab-content">
            <div role="tabpanel" className="tab-pane active fade show" id="visits">
              <p className="title-description"> Number of unique visits last 30 days </p>

            </div>
            <div role="tabpanel" className="tab-pane fade" id="downloads">
              <p className="title-description"> Number of downloads last 30 days </p>
              <div id="dashboard-downloads-chart"/>
            </div>
          </div>
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