import React from 'react';
import {
  NavLink, Link
} from 'react-router-dom';
import PropTypes from 'prop-types';

class TasksComponent extends React.Component {

  constructor(props) {
    super(props);
  }


  componentWillMount() {

  }

  search() {
    console.log(this.refs.search.value);
  }

  renderTasks = () => {
    const arr = [1,2,3,4,5,6,7];

    return arr.map((item, i) => {
      return (
        <li className="item" key={i}>
          <div className="item-row">
            <div className="item-col item-col-title">
              <label>
                <input className="checkbox" type="checkbox"/>
                <span>Meeting with embassador</span>
              </label>
            </div>
            <div className="item-col fixed item-col-actions-dropdown">
              <div className="item-actions-dropdown">
                <a className="item-actions-toggle-btn">
                  <span className="inactive">
                    <i className="fa fa-cog"/>
                  </span>
                  <span className="active">
                    <i className="fa fa-chevron-circle-right"/>
                  </span>
                </a>
                <div className="item-actions-block">
                  <ul className="item-actions-list">
                    <li>
                      <a className="remove" href="#" data-toggle="modal" data-target="#confirm-modal">
                        <i className="fa fa-trash-o "/>
                      </a>
                    </li>
                    <li>
                      <a className="check" href="#">
                        <i className="fa fa-check"/>
                      </a>
                    </li>
                    <li>
                      <a className="edit" href="item-editor.html">
                        <i className="fa fa-pencil"/>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>
      )
    })
  };

  render () {

    return (
      <div className="card tasks sameheight-item" data-exclude="xs,sm" style={{height: '490px'}}>
        <div className="card-header bordered">
          <div className="header-block">
            <h3 className="title"> Tasks </h3>
          </div>
          <div className="header-block pull-right">
            <a href="" className="btn btn-primary btn-sm rounded pull-right"> Add new </a>
          </div>
        </div>
        <div className="card-block">
          <div className="tasks-block">
            <ul className="item-list">
              {this.renderTasks()}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

TasksComponent.propTypes = {
  children: PropTypes.element,
  routing: PropTypes.object,
};

export default TasksComponent;