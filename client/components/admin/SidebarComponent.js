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
      <aside className="sidebar">
        <div className="sidebar-container">
          <nav className="menu">
            <ul className="sidebar-menu metismenu" id="sidebar-menu">
              <li className="active">
                <Link to="/admin/dashboard" aria-expanded="false">
                  <i className="fa fa-home"/> Dashboard
                </Link>
              </li>
              <li>
                <a href="" aria-expanded="false">
                  <i className="fa fa-th-large"/> Items Manager
                  <i className="fa arrow"/>
                </a>
                <ul className="sidebar-nav collapse" aria-expanded="false">
                  <li>
                    <Link to="items-list.html"> Items List </Link>
                  </li>
                  <li>
                    <Link to="item-editor.html"> Item Editor </Link>
                  </li>
                </ul>
              </li>
              <li>
                <a href="" aria-expanded="false">
                  <i className="fa fa-area-chart"/> Statistics
                  <i className="fa arrow"/>
                </a>
                <ul className="sidebar-nav collapse" aria-expanded="false">
                  <li>
                    <Link to="charts-flot.html"> Flot Charts </Link>
                  </li>
                  <li>
                    <Link to="charts-morris.html"> Morris Charts </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    );
  }
}

HeaderComponent.propTypes = {
  children: PropTypes.element,
  routing: PropTypes.object,
};

export default HeaderComponent;