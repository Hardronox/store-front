import {
    CREATE_COMMENT_PENDING,
    CREATE_COMMENT_FULFILLED,
    CREATE_COMMENT_REJECTED,
    CREATE_REPLY_PENDING,
    CREATE_REPLY_FULFILLED,
    CREATE_REPLY_REJECTED,
    LIKE_COMMENT_FULFILLED,
    DISLIKE_COMMENT_FULFILLED,
    LIKE_COMMENT_REJECTED,
    DISLIKE_COMMENT_REJECTED
} from '../constants/actionTypes';

const initialState = {
  comments: [
      {   author: 'author',
          id: '416ac246-e7ac-49ff-93b4-f7e94d997e6b',
          rating: 3,
          date: 1526551702895,
          text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
          pros: 'b illo inventore veritatis et quasi a',
          cons: 'b illo inventore veritatis et quasi a',
          liked: 0,
          disliked: 0,
          replies: [
              {
                  author: 'author',
                  date: 1526551702895,
                  text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'
              }
          ]
      },
      {   author: 'author',
          id: '416ac246-e7ac-49ff-93b4-f7e94d997e61',
          rating: 5,
          date: 1526551702895,
          text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
          pros: 'b illo inventore veritatis et quasi a',
          cons: 'b illo inventore veritatis et quasi a',
          liked: 0,
          disliked: 0,
          replies: []
      },
      {   author: 'dedsed',
          id: '416ac246-e7ac-49ff-93b4-f7e94d997e62',
          rating: 4.5,
          date: 1526551702895,
          text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
          pros: 'b illo inventore veritatis et quasi a',
          cons: 'b illo inventore veritatis et quasi a',
          liked: 0,
          disliked: 0,
          replies: [
              {
                  author: 'author',
                  date: 1526551702895,
                  text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'
              },
              {
                  author: 'author',
                  date: 1526551702895,
                  text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'
              },
          ]
      },
      {   author: 'author',
          id: '416ac246-e7ac-49ff-93b4-f7e94d997e63',
          rating: 1,
          date: 1526551702895,
          text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
          pros: 'b illo inventore veritatis et quasi a',
          cons: 'b illo inventore veritatis et quasi a',
          liked: 0,
          disliked: 0,
          replies: []
      },
      {   author: 'author',
          id: '416ac246-e7ac-49ff-93b4-f7e94d997e64',
          rating: 5,
          date: 1526551702895,
          text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
          pros: 'b illo inventore veritatis et quasi a',
          cons: 'b illo inventore veritatis et quasi a',
          liked: 0,
          disliked: 0,
          replies: []
      }
  ]
};

const commentsReducer = (state = initialState, action) => {
  let { type } = action;

  switch(type) {

    case CREATE_COMMENT_FULFILLED: {
      return {
        ...state,
        comments: [].concat(state.comments, action.payload)
      };
    }
    case CREATE_COMMENT_REJECTED: {
      return {
        ...state,
        error: action.payload
      };
    }
      case CREATE_REPLY_FULFILLED: {
          return {
              ...state,
              comments: state.comments.map(
                  (comment) => comment.id === action.id ? {...comment, replies: [...comment.replies, action.payload]}
                      : comment
              )
          };
      }
      case CREATE_REPLY_REJECTED: {
          return {
              ...state,
              error: action.payload
          }
      }
      case LIKE_COMMENT_FULFILLED: {
          return {
              ...state,
              comments: state.comments.map(
                  (comment) => comment.id === action.id ? {...comment, liked: comment.liked + 1} : comment
              )
          };
      }
      case LIKE_COMMENT_REJECTED: {
          return {
              ...state,
              error: action.payload
          }
      }
      case DISLIKE_COMMENT_FULFILLED: {
          return {
              ...state,
              comments: state.comments.map(
                  (comment) => comment.id === action.id ? {...comment, disliked: comment.disliked - 1} : comment
              )
          };
      }
      case DISLIKE_COMMENT_REJECTED: {
          return {
              ...state,
              error: action.payload
          }
      }

    default:
      return state;
  }
};


export default commentsReducer;
