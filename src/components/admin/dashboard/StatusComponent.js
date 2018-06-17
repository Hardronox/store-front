import React from 'react';
import {
  NavLink, Link
} from 'react-router-dom';
import PropTypes from 'prop-types';

class StatusComponent extends React.Component {

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
      <div className="card sameheight-item stats" data-exclude="xs" style={{height: "322px"}}>
        <div className="card-block">
          <div className="title-block">
            <h4 className="title"> Stats </h4>
            <p className="title-description"> Website metrics for your awesome project
            </p>
          </div>
          <div className="row row-sm stats-container">
            <div className="col-12 col-sm-6 stat-col">
              <div className="stat-icon">
                <i className="fa fa-rocket"/>
              </div>
              <div className="stat">
                <div className="value"> 5407 </div>
                <div className="name"> Active items </div>
              </div>
              <div className="progress stat-progress">
                <div className="progress-bar" style={{width: "75%"}}/>
              </div>
            </div>
            <div className="col-12 col-sm-6 stat-col">
              <div className="stat-icon">
                <i className="fa fa-shopping-cart"/>
              </div>
              <div className="stat">
                <div className="value"> 78464 </div>
                <div className="name"> Items sold </div>
              </div>
              <div className="progress stat-progress">
                <div className="progress-bar" style={{width: "25%"}}/>
              </div>
            </div>
            <div className="col-12 col-sm-6  stat-col">
              <div className="stat-icon">
                <i className="fa fa-line-chart"/>
              </div>
              <div className="stat">
                <div className="value"> $80.560 </div>
                <div className="name"> Monthly income </div>
              </div>
              <div className="progress stat-progress">
                <div className="progress-bar" style={{width: "60%"}}/>
              </div>
            </div>
            <div className="col-12 col-sm-6  stat-col">
              <div className="stat-icon">
                <i className="fa fa-users"/>
              </div>
              <div className="stat">
                <div className="value"> 359 </div>
                <div className="name"> Total users </div>
              </div>
              <div className="progress stat-progress">
                <div className="progress-bar" style={{width: "34%"}}/>
              </div>
            </div>
            <div className="col-12 col-sm-6  stat-col">
              <div className="stat-icon">
                <i className="fa fa-list-alt"/>
              </div>
              <div className="stat">
                <div className="value"> 59 </div>
                <div className="name"> Tickets closed </div>
              </div>
              <div className="progress stat-progress">
                <div className="progress-bar" style={{width: '49%'}}/>
              </div>
            </div>
            <div className="col-12 col-sm-6 stat-col">
              <div className="stat-icon">
                <i className="fa fa-dollar"/>
              </div>
              <div className="stat">
                <div className="value"> $780.064 </div>
                <div className="name"> Total income </div>
              </div>
              <div className="progress stat-progress">
                <div className="progress-bar" style={{width: "15%"}}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

StatusComponent.propTypes = {
  children: PropTypes.element,
  routing: PropTypes.object,
};

export default StatusComponent;