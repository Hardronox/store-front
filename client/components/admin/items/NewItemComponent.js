import React, { Fragment } from 'react';
import {
  NavLink, Link
} from 'react-router-dom';
import PropTypes from 'prop-types';
import 'react-select/dist/react-select.css';
import NewItemForm from './NewItemForm';
import { Helmet } from 'react-helmet';

class NewItemComponent extends React.Component {

  constructor(props) {
    super(props);
  }


  componentWillMount() {

  }

  submit = values => {
    // print the form values to the console
    console.log(values)
  }

  render () {

    return (
        <Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <title>New Item</title>
                <meta name="description" content="Create new item" />
            </Helmet>
            <article className="content item-editor-page">
              <div className="title-block">
                <h3 className="title"> Add new item
                  <span className="sparkline bar"/>
                </h3>
              </div>
              <NewItemForm onSubmit={this.submit}/>
            </article>
        </Fragment>
    );
  }
}

NewItemComponent.propTypes = {
  children: PropTypes.element,
  routing: PropTypes.object,
};

export default NewItemComponent;

