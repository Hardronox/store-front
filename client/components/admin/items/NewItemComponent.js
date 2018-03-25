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
      <article className="content item-editor-page">
        <div className="title-block">
          <h3 className="title"> Add new item
            <span className="sparkline bar"/>
          </h3>
        </div>
        <form name="item">
          <div className="card card-block">
            <div className="form-group row">
              <label className="col-sm-2 form-control-label text-xs-right"> Name: </label>
              <div className="col-sm-10">
                <input type="text" className="form-control boxed" placeholder=""/> </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 form-control-label text-xs-right"> Content: </label>
              <div className="col-sm-10">
                wysiwyg
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 form-control-label text-xs-right"> Category: </label>
              <div className="col-sm-10">
                <select className="c-select form-control boxed">
                  <option selected="">Select Category</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 form-control-label text-xs-right"> Images: </label>
              <div className="col-sm-10">
                <div className="images-container">
                  <div className="image-container">
                    <div className="controls">
                      <a href="" className="control-btn move">
                        <i className="fa fa-arrows"/>
                      </a>

                      <a href="" className="control-btn star">
                        <i className="fa"/>
                      </a>

                      <a href="#" className="control-btn remove" data-toggle="modal" data-target="#confirm-modal">
                        <i className="fa fa-trash-o"/>
                      </a>
                    </div>
                    <div className="image" style="background-image:url('https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg')"/>
                  </div>
                  <div className="image-container">
                    <div className="controls">
                      <a href="" className="control-btn move">
                        <i className="fa fa-arrows"/>
                      </a>

                      <a href="" className="control-btn star">
                        <i className="fa"/>
                      </a>

                      <a href="#" className="control-btn remove" data-toggle="modal" data-target="#confirm-modal">
                        <i className="fa fa-trash-o"/>
                      </a>
                    </div>
                    <div className="image" style="background-image:url('https://s3.amazonaws.com/uifaces/faces/twitter/_everaldo/128.jpg')"/>
                  </div>
                  <div className="image-container">
                    <div className="controls">
                      <a href="" className="control-btn move">
                        <i className="fa fa-arrows"/>
                      </a>

                      <a href="" className="control-btn star">
                        <i className="fa"/>
                      </a>

                      <a href="#" className="control-btn remove" data-toggle="modal" data-target="#confirm-modal">
                        <i className="fa fa-trash-o"/>
                      </a>
                    </div>
                    <div className="image" style="background-image:url('https://s3.amazonaws.com/uifaces/faces/twitter/eduardo_olv/128.jpg')"/>
                  </div>
                  <a href="#" className="add-image" data-toggle="modal" data-target="#modal-media">
                    <div className="image-container new">
                      <div className="image">
                        <i className="fa fa-plus"/>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-10 col-sm-offset-2">
                <button type="submit" className="btn btn-primary"> Submit </button>
              </div>
            </div>
          </div>
        </form>
      </article>
    );
  }
}

NewItemComponent.propTypes = {
  children: PropTypes.element,
  routing: PropTypes.object,
};

export default NewItemComponent;