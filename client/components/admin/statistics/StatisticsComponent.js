import React from 'react';
import {
  NavLink, Link
} from 'react-router-dom';
import PropTypes from 'prop-types';

class NewItemComponent extends React.Component {

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
      <article className="content charts-morris-page">
        <div className="title-block">
          <h3 className="title"> Charts Morris </h3>
          <p className="title-description"> List of sample charts with custom colors </p>
        </div>
        <section className="section">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-block">
                  <div className="card-title-block">
                    <h3 className="title"> Area Chart Example </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-block">
                  <div className="card-title-block">
                    <h3 className="title"> Bar Chart Example </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-block">
                  <div className="card-title-block">
                    <h3 className="title"> Line Chart Example </h3>
                  </div>

                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-block">
                  <div className="card-title-block">
                    <h3 className="title"> Donut Chart Example </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-block">
                  <div className="card-title-block">
                    <h3 className="title"> Simple one line Example </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    );
  }
}

NewItemComponent.propTypes = {
  children: PropTypes.element,
  routing: PropTypes.object,
};

export default NewItemComponent;