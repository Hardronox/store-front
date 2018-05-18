import React, { Fragment, Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import ReactStars from 'react-stars'
import { connect } from 'react-redux';
import {createComment} from "../../actions/actions";
import { v4 } from "uuid";

const renderField = ({ input, textarea, type, className, meta: { touched, error }})  => {
    if(textarea) {
        return (
            <Fragment>
                <textarea {...input} className={className} rows={5} />
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

class CommentForm extends Component {
    state = {
        starRating: 0
    }

    changeRate(name, value) {
        this.props.change(name, value)
        this.setState({ starRating: value })
    }

    onSubmit(values) {
        const id = v4();
        const date = Date.now();
        console.log(date);
        this.props.createComment({...values, id, replies: [], date, liked: 0, disliked: 0});
        this.setState({starRating: 0})
        this.props.reset();
    }

    render() {
        console.log(this.props);
        const { handleSubmit,  pristine, submitting, invalid } = this.props;
        return (
            <form className="flex-col comment-form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <div className="flex-row comment-form-header">
                    <h4>Add a comment</h4>
                </div>
                <div className="flex-row input-container">
                    <label htmlFor="author">Author:</label>
                    <Field component={renderField} type="text" name="author" className="input-field" />
                </div>
                <div className="flex-row input-container">
                    <label htmlFor="author">Your rating:</label>
                    <Field component={renderField} type="hidden" name="rating"/>
                    <ReactStars
                        count={5}
                        size={20}
                        color2={'#ffd700'}
                        onChange={(value) => { this.changeRate("rating", value) } }
                        value={ this.state.starRating }
                        />
                </div>
                <div className="flex-row input-container">
                    <label htmlFor="author">Your comment:</label>
                    <Field component={renderField} textarea name="text"  className="input-field"/>
                </div>
                <div className="flex-row input-container">
                    <label htmlFor="author">Pros:</label>
                    <Field component={renderField} type="text" name="pros" className="input-field"/>
                </div>
                <div className="flex-row input-container">
                    <label htmlFor="author">Cons:</label>
                    <Field component={renderField} type="text" name="cons"  className="input-field"/>
                </div>
                <div className="flex-row button-container">
                    <button type="submit" disabled={ pristine || submitting || invalid } className="btn btn-success">
                        Comment
                    </button>
                </div>
            </form>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        createComment: (comment) => {
            dispatch(createComment(comment));
        },
    };
};

CommentForm = connect(null, mapDispatchToProps)(CommentForm);

export default reduxForm({
    form: 'comment'
})(CommentForm);