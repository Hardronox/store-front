import React from 'react';

const DislikeButton = ({onClick}) => {
  return (
    <span onClick={onClick}>
      <i className="fa fa-thumbs-down fa-lg" aria-hidden="true"></i>
    </span>
  );
};

export default DislikeButton;
