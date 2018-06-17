import React from 'react';
import {
  NavLink, Link
} from 'react-router-dom';
import PropTypes from 'prop-types';
import TinyMCE from 'react-tinymce';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { Field, reduxForm } from 'redux-form'

class NewItemForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedOption: '',
    };
  }


  componentWillMount() {

  }

  search() {
    console.log(this.refs.search.value);
  }


  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
  }

  handleEditorChange(e) {
    console.log(e.target.getContent());
  };

  render () {

    const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value;
    const { handleSubmit } = this.props;


    return (
      <form name="item" onSubmit={handleSubmit}>
        <div className="card card-block">
          <div className="form-group row">
            <label className="col-sm-2 form-control-label text-xs-right"> Name: </label>
            <div className="col-sm-10">
              <Field name="inputName" component="input" type="text" />
              <input type="text" className="form-control boxed" placeholder=""/> </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 form-control-label text-xs-right"> Content: </label>
            <div className="col-sm-10">
              <TinyMCE
                content="<p>This is the initial content of the editor</p>"
                config={{
                  height: 500,
                  theme: 'modern',
                  plugins: 'print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template table charmap hr pagebreak nonbreaking anchor insertdatetime advlist lists textcolor wordcount  imagetools contextmenu colorpicker textpattern',
                  image_advtab: true,
                  fontsize_formats: '8pt 10pt 12pt 14pt 18pt 24pt 36pt',
                  font_formats: 'Arial=arial,helvetica,sans-serif;Courier New=courier new,courier,monospace;AkrutiKndPadmini=Akpdmi-n',
                  block_formats: 'Paragraph=p;Header 1=h1;Header 2=h2;Header 3=h3',
                  toolbar: 'fontsizeselect | fontselect | formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat',
                }}
                onChange={this.handleEditorChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 form-control-label text-xs-right"> Category: </label>
            <div className="col-sm-10">
              <Select
                name="form-field-name"
                value={value}
                onChange={this.handleChange}
                options={[
                  { value: 'one', label: 'One' },
                  { value: 'two', label: 'Two' },
                ]}
              />
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
                  <div className="image" style={{backgroundImage: "url(https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg)"}}/>
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
    );
  }
}

NewItemForm.propTypes = {
  children: PropTypes.element,
  routing: PropTypes.object,
};


NewItemForm = reduxForm({
  // a unique name for the form
  form: 'NewItemForm'
})(NewItemForm);

export default NewItemForm;