import React from 'react';
import {
  NavLink, Link
} from 'react-router-dom';
import PropTypes from 'prop-types';
import 'react-select/dist/react-select.css';
import NewItemForm from './NewItemForm'

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
      <article className="content item-editor-page">
        <div className="title-block">
          <h3 className="title"> Add new item
            <span className="sparkline bar"/>
          </h3>
        </div>
        <NewItemForm onSubmit={this.submit}/>
      </article>
    );
  }
}

NewItemComponent.propTypes = {
  children: PropTypes.element,
  routing: PropTypes.object,
};

export default NewItemComponent;

