import React, { Component } from 'react';
import LikeButton from './LikeButton';
import DislikeButton from './DislikeButton';
import PropTypes from 'prop-types';
import ProductInfoComponent from "../ProductInfoComponent";
import ReactStars from 'react-stars';
import CommentReplyForm from './CommentReplyForm';
import {connect} from 'react-redux';
import {likeComment, dislikeComment} from "../../actions/actions";


class Comment extends Component {

    constructor(props) {
        super(props);
        this.state = { replyFormOpen: false};
        this.toggleReplyForm = this.toggleReplyForm.bind(this);
    }

    toggleReplyForm() {
        this.setState({replyFormOpen: !this.state.replyFormOpen});
    }

    renderReplyButton() {
        if(!this.state.replyFormOpen) {
            return (
                <button onClick={this.toggleReplyForm}>
                    <i className="fa fa-reply" aria-hidden="true"></i>
                    Reply
                </button>
            );
        }

        return (
            <button onClick={this.toggleReplyForm}>
                Close Reply Form
            </button>
        );
    }

    renderReplies() {
        // TODO: add logic for when replies.length is > 3

        return this.props.comment.replies.map((reply, i) => {
            return (
                <div className="comment-container flex-col" key={i}>
                    <div className="comment-header flex-row space-between">
                        <div className="comment-author">{reply.author}</div>
                        <div className="comment-date">{new Date(reply.date).toLocaleString()}</div>
                    </div>
                        <div className="comment-body flex-col">
                            <div className="comment-text">
                                {reply.text}
                            </div>
                        </div>
                    <div className="comment-footer flex-row space-between">
                    </div>
                </div>
            );
        })
    }

    render() {
    const { author, rating, date, text, pros, cons, replies, liked, disliked, id } = this.props.comment;
    const ratingConfig = {
        count: 5,
        half: true,
        value: rating,
        color: '#ffd700',
        edit: false
    };

    return (

    <div className="comment-thread-container flex-col">
        <div className="comment-container flex-col">
            <div className="comment-header flex-row space-between">
                <div className="flex-row">
                    <div className="comment-author">{author}</div>
                    {rating &&
                    <div className="comment-rating">
                        <ReactStars {...ratingConfig} />
                    </div>}
                </div>
                <div className="flex-row">
                    <div className="comment-date">{new Date(date).toLocaleString()}</div>
                    <div className="comment-link" onClick={() => console.log(id)}>
                        <i className="fa fa-link" aria-hidden="true"></i>
                    </div>
                </div>

            </div>
            <div className="comment-body flex-col">
                <div className="comment-text">{text}</div>
                { pros && <div className="comment-pros"><span>Pros: </span>{pros}</div>}
                { cons && <div className="comment-cons"><span>Cons: </span>{cons}</div> }
            </div>
            <div className="comment-footer flex-row space-between">
                <div className="comment-reply-button">
                    { this.renderReplyButton()}
                </div>
                <div className="comment-react-buttons flex-row">
                    <div className="flex-col">
                        <span className="likes">{liked}</span>
                        <LikeButton onClick={() => this.props.likeComment(id)} />
                    </div>
                    <div className="flex-col">
                        <span className="dislikes">{disliked}</span>
                        <DislikeButton onClick={() => this.props.dislikeComment(id)} />
                    </div>

                </div>
            </div>
        </div>
        <div className="comment-thread">
            { replies && this.renderReplies()}
        </div>
        <div>
            {this.state.replyFormOpen && <CommentReplyForm comment={this.props.comment}/> }
        </div>
    </div>
);
}

}

// Comment.propTypes = {
//     comment: PropTypes.object.required,
//
// };


// const mapStateToProps = state => {
//     return {
//         keks: state.keksReducer,
//         comments: state.commentsReducer
//     };
// };

const mapDispatchToProps = dispatch => {
    return {
        likeComment: (id) => {
            dispatch(likeComment(id));
        },
        dislikeComment: (id) => {
            dispatch(dislikeComment(id));
        },
    };
};

export default connect(null, mapDispatchToProps)(Comment);
