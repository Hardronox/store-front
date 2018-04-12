import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Accordion extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      uncheckedResults: []
    }
  }

  componentDidMount() {

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

  renderFields(dropdowns) {
    
      return dropdowns.map((item, i) => {

        return (
          <div key={i}>kek</div>
        )
      });
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


  render() {

    const firstSectionDropdowns = [
      {name: 'DSN', type: 'input'},
      {name: 'Email - NIPR', type: 'input'},
      {name: 'Email - SIPR', type: 'input'},

    ];

    return (
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
    );
  }
}

Accordion.propTypes = {
  children: PropTypes.element,

};

export default Accordion;
