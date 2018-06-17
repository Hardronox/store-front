import React from 'react';

const LikeButton = ({onClick}) => {
  return (
    <span onClick={onClick}>
      <i className="fa fa-thumbs-up fa-lg" aria-hidden="true"></i>
    </span>
  );
};

export default LikeButton;
