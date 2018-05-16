import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Sidebar from '../SidebarComponent';
import Status from './StatusComponent';
import History from './HistoryComponent';
import Items from './ItemsComponent';
import SalesBreakdownComponent from './SalesBreakdownComponent';
import SalesByCountriesComponent from './SalesByCountriesComponent';
import TasksComponent from './TasksComponent';
import HeaderComponent from '../../HeaderComponent';


class DashboardComponent extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  componentDidMount() {
    console.log('kek');
    this.props.getUsers();
    // this.props.saveUser();
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
    );
  }
}

DashboardComponent.propTypes = {
  children: PropTypes.element,

};

export default DashboardComponent;
