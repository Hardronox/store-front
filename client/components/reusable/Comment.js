import React from 'react';
import LikeButton from './LikeButton';
import DislikeButton from './DislikeButton';
import PropTypes from 'prop-types';
import ProductInfoComponent from "../ProductInfoComponent";
import ReactStars from 'react-stars';


const Comment = ({comment}) => {
    const { author, rating, date, text, pros, cons, replies } = comment;
    const ratingConfig = {
        count: 5,
        half: true,
        value: rating,
        color: '#ffd700',
        edit: false
    }

    const renderReplies = () => {
        // TODO: add logic for when replies.length is > 3

        return replies.map((reply, i) => {
            return (
                <div className="comment-container flex-col" key={i}>
                    <div className="comment-header flex-row space-between">
                        <div className="comment-author">{reply.author}</div>
                        <div className="comment-date">{reply.date}</div>
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
                        <div className="comment-date">{date}</div>
                        <div className="comment-link">
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
                        <button>
                            <i className="fa fa-reply" aria-hidden="true"></i>
                            Reply
                        </button>
                    </div>
                    <div className="comment-react-buttons flex-row">
                        <LikeButton onClick={() => console.log("liked")} />
                        <DislikeButton onClick={() => console.log("disliked")} />

                    </div>
                </div>
            </div>
            <div className="comment-thread">
                { replies && renderReplies()}
            </div>
        </div>
    );
}

// Comment.propTypes = {
//     comment: PropTypes.object.required,
//
// };

export default Comment;