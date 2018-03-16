import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Sidebar from '../admin/SidebarComponent';
import Status from '../admin/StatusComponent';
import History from '../admin/HistoryComponent';
import Items from '../admin/ItemsComponent';
import SalesBreakdownComponent from '../admin/SalesBreakdownComponent';
import SalesByCountriesComponent from '../admin/SalesByCountriesComponent';
import TasksComponent from '../admin/TasksComponent';
import HeaderComponent from '../admin/HeaderComponent';


class DashboardComponent extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  componentDidMount() {
    // this.props.getKeks();
  }

  renderProducts = () => {

    // const products = Array.from(Array(10).keys());
    //
    // return products.map((item, i) => {
    //   return <Product key={i} product={item}/>;
    // });
  };

  render() {

    return (
      <div className="main-wrapper">
        <div className="app" id="app">
          <HeaderComponent />
          <Sidebar />
          <div className="sidebar-overlay" id="sidebar-overlay"/>
          <div className="sidebar-mobile-menu-handle" id="sidebar-mobile-menu-handle"/>
          <div className="mobile-menu-handle"/>
          <article className="content dashboard-page">
            <section className="section">
              <div className="row sameheight-container">
                <div className="col col-12 col-sm-12 col-md-6 col-xl-5 stats-col">
                  <Status />
                </div>
                <div className="col col-12 col-sm-12 col-md-6 col-xl-7 history-col">
                  <History />
                </div>
              </div>
            </section>
            <section className="section">
              <div className="row sameheight-container">
                <div className="col-xl-8">
                  <Items />
                </div>
                <div className="col-xl-4">
                  <SalesBreakdownComponent />
                </div>
              </div>
            </section>
            <section className="section map-tasks">
              <div className="row sameheight-container">
                <div className="col-md-8">
                  <SalesByCountriesComponent />
                </div>
                <div className="col-md-4">
                  <TasksComponent />
                </div>
              </div>
            </section>
          </article>
          <footer className="footer">
            <div className="footer-block buttons">
            </div>
            <div className="footer-block author">
              Your Project
            </div>
          </footer>
        </div>
      </div>
      
    );
  }
}

DashboardComponent.propTypes = {
  children: PropTypes.element,

};

export default DashboardComponent;
