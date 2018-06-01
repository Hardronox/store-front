import React, {Fragment, Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {createReply} from '../../actions/actions';

const renderField = ({input, textarea, type, className, meta: {touched, error}}) => {
  if (textarea) {
    return (
      <Fragment>
        <textarea {...input} className={className} rows={3} />
        { touched && error && <span className="error">error</span>}
      </Fragment>
    );
  }
  return (
    <Fragment>
      <input {...input} type={type} className={className} />
      { touched && error && <span className="error">error</span>}
    </Fragment>

  );
};

class CommentReplyForm extends Component {
  onSubmit (values) {
    const date = Date.now();
    this.props.createReply({...values, date}, this.props.comment.id);
    this.props.reset();
  }

  render () {
    const {handleSubmit, pristine, submitting, invalid} = this.props;
    return (
      <form className="flex-col comment-reply-form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div className="flex-row input-container">
          <label htmlFor="author">Author:</label>
          <Field component={renderField} type="text" name="author" className="input-field" />
        </div>

        <div className="flex-row input-container">
          <label htmlFor="author">Your comment:</label>
          <Field component={renderField} textarea name="text" className="input-field"/>
        </div>

        <div className="flex-row button-container">
          <button type="submit" disabled={ pristine || submitting || invalid } className="btn btn-secondary">
                        Reply
          </button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createReply: (reply, id) => {
      dispatch(createReply(reply, id));
    }
  };
};

CommentReplyForm = connect(null, mapDispatchToProps)(CommentReplyForm);

export default reduxForm({
  form: 'comment-reply'
})(CommentReplyForm);
