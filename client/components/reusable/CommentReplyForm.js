import React, { Fragment, Component } from 'react';
import { Field, reduxForm } from 'redux-form';

const renderField = ({ input, textarea, type, className, meta: { touched, error }})  => {
    if(textarea) {
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
}

class CommentReplyForm extends Component {

    onSubmit(values) {
        console.log(values);
    }

    render() {
        const { handleSubmit,  pristine, submitting, invalid } = this.props;
        return (
            <form className="flex-col comment-reply-form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <div className="flex-row input-container">
                    <label htmlFor="author">Author:</label>
                    <Field component={renderField} type="text" name="author" className="input-field" />
                </div>

                <div className="flex-row input-container">
                    <label htmlFor="author">Your comment:</label>
                    <Field component={renderField} textarea name="text"  className="input-field"/>
                </div>

                <div className="flex-row button-container">
                    <button type="submit" disabled={ pristine || submitting || invalid } className="btn btn-primary">
                        Reply
                    </button>
                </div>
            </form>
        );
    }
}

export default reduxForm({
    form: 'comment-reply'
})(CommentReplyForm);