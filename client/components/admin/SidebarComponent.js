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
          <div className="sidebar-header">
            <div className="brand">
              <div className="logo">
                <span className="l l1"/>
                <span className="l l2"/>
                <span className="l l3"/>
                <span className="l l4"/>
                <span className="l l5"/>
              </div> Modular Admin </div>
          </div>
          <nav className="menu">
            <ul className="sidebar-menu metismenu" id="sidebar-menu">
              <li className="active">
                <a href="index.html" aria-expanded="false">
                  <i className="fa fa-home"/> Dashboard </a>
              </li>
              <li>
                <a href="" aria-expanded="false">
                  <i className="fa fa-th-large"/> Items Manager
                  <i className="fa arrow"/>
                </a>
                <ul className="sidebar-nav collapse" aria-expanded="false">
                  <li>
                    <a href="items-list.html"> Items List </a>
                  </li>
                  <li>
                    <a href="item-editor.html"> Item Editor </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="" aria-expanded="false">
                  <i className="fa fa-area-chart"/> Charts
                  <i className="fa arrow"/>
                </a>
                <ul className="sidebar-nav collapse" aria-expanded="false">
                  <li>
                    <a href="charts-flot.html"> Flot Charts </a>
                  </li>
                  <li>
                    <a href="charts-morris.html"> Morris Charts </a>
                  </li>
                </ul>
              </li>
              <li className="">
                <a href="" aria-expanded="false">
                  <i className="fa fa-table"/> Tables
                  <i className="fa arrow"/>
                </a>
                <ul className="sidebar-nav collapse" aria-expanded="false" style={{height: '0px'}}>
                  <li>
                    <a href="static-tables.html"> Static Tables </a>
                  </li>
                  <li>
                    <a href="responsive-tables.html"> Responsive Tables </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="" aria-expanded="false">
                  <i className="fa fa-sitemap"/> Menu Levels
                  <i className="fa arrow"/>
                </a>
                <ul className="sidebar-nav collapse" aria-expanded="false">
                  <li>
                    <a href="#"> Second Level Item
                      <i className="fa arrow"/>
                    </a>
                    <ul className="sidebar-nav collapse" aria-expanded="false">
                      <li>
                        <a href="#"> Third Level Item </a>
                      </li>
                      <li>
                        <a href="#"> Third Level Item </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#"> Second Level Item </a>
                  </li>
                  <li>
                    <a href="#"> Second Level Item
                      <i className="fa arrow"/>
                    </a>
                    <ul className="sidebar-nav collapse" aria-expanded="false">
                      <li>
                        <a href="#"> Third Level Item </a>
                      </li>
                      <li>
                        <a href="#"> Third Level Item </a>
                      </li>
                      <li>
                        <a href="#"> Third Level Item
                          <i className="fa arrow"/>
                        </a>
                        <ul className="sidebar-nav collapse" aria-expanded="false">
                          <li>
                            <a href="#"> Fourth Level Item </a>
                          </li>
                          <li>
                            <a href="#"> Fourth Level Item </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="screenful.html" aria-expanded="false">
                  <i className="fa fa-bar-chart"/> Agile Metrics
                  <span className="label label-screenful">by Screenful</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/modularcode/modular-admin-html" aria-expanded="false">
                  <i className="fa fa-github-alt"/> Theme Docs </a>
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