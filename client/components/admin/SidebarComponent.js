import React from 'react';
import {
  NavLink, Link
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Dropdown from '../reusable/Dropdown';

class HeaderComponent extends React.Component {

  constructor(props) {
    super(props);
  }


  componentWillMount() {

  }

  search() {
    console.log(this.refs.search.value);
  }

  closeSection = (key, accordionContent) => {
    accordionContent.style.height = 0;
  };

  toggleHeader(key) {
    let accordionContent = document.getElementsByClassName(`dropdown-content`)[key];
    if (accordionContent.clientHeight) {
      this.closeSection(key, accordionContent);
    } else {
      let wrapper = document.querySelector(`.dropdown-content-wrapper${key}`);
      accordionContent.style.height = wrapper.clientHeight + "px";
    }
  }

  renderStatistics() {

    const results = [
      {name: 'Items List', url: '/admin/dashboard'},
      {name: 'New Item', url: '/admin/dashboard'},
    ];

    return results.map((item, i) => {

      return (
        <div className="dropdown-results" key={i}>
          <Link to={item.url}>
            {item.name}
          </Link>
        </div>
      )
    });
  }

  renderUsers() {

    const users = [
      {name: 'Users List', url: '/admin/users'},
      {name: 'Send emails', url: '/admin/emails'},
    ];

    return users.map((item, i) => {

      return (
        <div className="dropdown-results" key={i}>
          <Link to={item.url}>
            {item.name}
          </Link>
        </div>
      )
    });
  }

  renderItemsManager() {

    const results = [
      {name: 'Items List', url: '/admin/dashboard'},
      {name: 'New Item', url: '/admin/dashboard'},
    ];

    return results.map((item, i) => {

      return (
        <Link to={item.url}>
          <div className="dropdown-results" key={i}>
              {item.name}
          </div>
        </Link>
      )
    });
  }

  render () {

    return (
      <aside className="sidebar">
        <div className="sidebar-container">
          <nav className="menu">
            <ul className="sidebar-menu metismenu" id="sidebar-menu">
              <li className="active">
                <Link to="/admin/dashboard">
                  <span>Dashboard</span>
                </Link>
              </li>
            </ul>
            <div className="custom-dropdown">
              <div className="dropdown-section" ref={`section0`}>
                <div className="dropdown-header" onClick={() => this.toggleHeader(0)}>
                  <i className="fa fa-th-large"/>
                  <span className="dropdown-text">Items Manager</span>
                  <i className="fa arrow"/>
                </div>
                <div className="dropdown-content">
                  <div className={`dropdown-content-wrapper${0}`}>
                    {this.renderItemsManager()}
                  </div>
                </div>
              </div>
              <div className="dropdown-section" ref={`section1`}>
                <div className="dropdown-header" onClick={() => this.toggleHeader(1)}>
                  <i className="fa fa-area-chart"/>
                  <span className="dropdown-text">Statistics</span>
                  <i className="fa arrow"/>
                </div>
                <div className="dropdown-content">
                  <div className={`dropdown-content-wrapper${1}`}>
                    {this.renderStatistics()}
                  </div>
                </div>
              </div>
              <div className="dropdown-section" ref={`section2`}>
                <div className="dropdown-header" onClick={() => this.toggleHeader(2)}>
                  <i className="fa fa-area-chart"/>
                  <span className="dropdown-text">Users</span>
                  <i className="fa arrow"/>
                </div>
                <div className="dropdown-content">
                  <div className={`dropdown-content-wrapper2`}>
                    {this.renderUsers()}
                  </div>
                </div>
              </div>

            </div>
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