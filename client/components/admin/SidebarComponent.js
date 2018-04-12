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

  close = (key) => {
    let accordionContent = document.getElementsByClassName(`dropdown-content`)[key];
    this.closeSection(key, accordionContent);
  };

  closeSection = (key, accordionContent) => {
    setTimeout(() => {
      this.refs[`section${key}`].childNodes[1].style.borderBottom = 'none';
    }, 450);
    accordionContent.style.height = 0;
  };

  toggleHeader(key) {
    let accordionContent = document.getElementsByClassName(`dropdown-content`)[key];
    if (accordionContent.clientHeight) {
      this.closeSection(key, accordionContent);
    } else {
      let wrapper = document.querySelector(`.dropdown-content-wrapper${key}`);
      accordionContent.style.height = wrapper.clientHeight + "px";
      this.refs[`section${key}`].childNodes[1].style.borderBottom = '1px solid #bbcfe2';
    }
  }

  renderResults() {

    const results = [
      {name: 'First Name', type: 'input'},
      {name: 'Call Sign', type: 'input'},
    ];

    return results.map((item, i) => {

      return (
        <div className="accordion-results" key={i}>
          <div className="result-user">
            <div className="result-name">
              cmd larry pickering
            </div>
          </div>
        </div>
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
            <div className="custom-dropdown">
              <div className="dropdown-section" ref={`section0`}>
                <div className="dropdown-header" onClick={() => this.toggleHeader(0)}>
            <span aria-expanded="false">
              <i className="fa fa-th-large"/> Items Manager
              <i className="fa arrow"/>
            </span>
                </div>
                <div className="dropdown-content">
                  <div className={`dropdown-content-wrapper${0}`}>
                    <ul className="sidebar-nav collapse" aria-expanded="false">
                      <li>
                        <Link to="items-list.html"> Items List </Link>
                      </li>
                      <li>
                        <Link to="item-editor.html"> Item Editor </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="dropdown-section" ref={`section${1}`}>
                <div className="dropdown-header" onClick={() => this.toggleHeader(1)}>
                  <div>
                    results
                  </div>
                  <i className="fa arrow"/>
                </div>
                <div className="dropdown-content">
                  <div className={`dropdown-content-wrapper${1}`}>
                    <div className="">
                      {this.renderResults()}
                    </div>
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